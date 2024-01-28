// Dashboard.jsx

import React, { useState, useEffect } from 'react';
import { collection, getDocs, setDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { auth, db } from "../firebase";
import './Dashboard.css';


const ListComponent = () => {

  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'opportunities'));
        const documentsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDocuments(documentsData);
      } catch (error) {
        console.error('Error fetching documents: ', error);
      }
    };

    fetchDocuments();
  }, []); // Fetch documents only once when the component mounts

  // Handle click event for list item
  const handleItemClick = (documentId) => {
    console.log('Clicked document id:', documentId);
    const selectedDoc = documents.find(doc => doc.id === documentId);
    setSelectedDocument(selectedDoc);
  };

  const handleClick =  (document) => {
    console.log(document)
    try {
        const docRef = doc(db, "opportunities", document.id);
        updateDoc(docRef, {
          Applicants: arrayUnion(auth.currentUser.uid)
      });
      console.log('Value added to the list successfully!');
  } catch (error) {
      console.error('Error adding value to the list: ', error);
  }
  }

  // Filter documents based on search term
  const filteredDocuments = documents.filter(document =>
    document.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <div className="left-column">
        <h2>Search Opportunities</h2>
        <ul>
          {filteredDocuments.map(document => (
            <li key={document.id} onClick={() => handleItemClick(document.id)} style={{ cursor: 'pointer' }}>
              {/* Render document fields here */}
              <p>Title: {document.title}</p>
              <p>Department: {document.department}</p>
              <button onClick={handleClick(selectedDocument)}>Apply Now</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="right-column">
        <div className="search-bar">
          <input
            type="text"
            placeholder=""
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="content-info">
          {selectedDocument && (
            <>
              <h2 className='Titletitle'>Posting: {selectedDocument.title}</h2>
              <h3 className='dates'>Date Posted: {selectedDocument.PostedDate}     -      Deadline: {selectedDocument.Deadline}</h3>
              <h4> Part Time Position     -      {selectedDocument.department}</h4>
              <h5 className='stuffies'>About This Role:</h5>
              <p className="info-contact">Contact Email: {selectedDocument.contactEmail}</p>
              <p className="info-name">Name: {selectedDocument.name}</p>
              <p className="info-description">Description: {selectedDocument.description}</p>
              
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListComponent;
