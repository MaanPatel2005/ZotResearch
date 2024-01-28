import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
import { auth, db } from "../firebase";
import { Link } from 'react-router-dom';


const ListComponent = () => {
  const [documents, setDocuments] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);

  useEffect(() => {
    const fetchDocumentsByField = async () => {
      try {
        const q = query(collection(db, 'opportunities'), where('uid', '==', auth.currentUser.uid));
        const querySnapshot = await getDocs(q);
        const documentsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDocuments(documentsData);
      } catch (error) {
        console.error('Error fetching documents: ', error);
      }
    };

    fetchDocumentsByField();
  }, []);

  const handleDocumentClick = async (documentId) => {
    try {
      console.log('clicked document')
      const oppRef = collection(db, 'opportunities');
      const docRef = doc(oppRef, documentId);
      const documentSnapshot = await getDoc(docRef);
      console.log(documentSnapshot)
      const data = documentSnapshot.data();
      console.log(data.Applicants)

      if (data && data.Applicants) {
        console.log(data)
        const applicantDetails = await Promise.all(data.Applicants.map(async (applicantId) => {
          const studentsRef = collection(db, 'students');
          const applicantRef = doc(studentsRef, applicantId);
          const applicantSnapshot = await getDoc(applicantRef);
          if (applicantSnapshot.exists()) {
            console.log(applicantSnapshot.data())
            return applicantSnapshot.data();
          } else {
            return null;
          }
        }));
        setApplicants(applicantDetails.filter(applicant => applicant !== null));
        setSelectedDocument(documentId);
      } else {
        setApplicants([]);
        setSelectedDocument(null);
      }
    } catch (error) {
      console.error('Error fetching applicants: ', error);
    }
  };

  const handleApplicantClick = (applicantId) => {
    history.push(`/applicant_profile/${applicantId}`);
    // Handle click event for applicants
    // You can navigate to the applicant's profile page here
  };


  return (
    <div className="lists-container">
      <div className="documents-list">
        <h2>List of Documents</h2>
        <ul>
          {documents.map(document => (
            <li key={document.documentId} onClick={() => handleDocumentClick(document.id)}>
              <p>Name: {document.title}</p>
              <p>Description: {document.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="applicants-list">
        {selectedDocument && (
          <>
            <h3>Applicants for Position: {selectedDocument.title}</h3>
            <ul>
              {applicants.map((applicant, index) => (
                <li key={index}>
                  <p>Name: {applicant.name}</p>
                  <p>Email: {applicant.email}</p>
                  {/* Add more applicant details as needed */}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <ul>
        {applicants.map((applicant, index) => (
          <li key={index} onClick={() => handleApplicantClick(applicant.uid)}>
            <Link to={`/applicant_profile/${applicant.uid}`}>{applicant.name}</Link>
            {/* You can display other applicant details here */}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ListComponent;
