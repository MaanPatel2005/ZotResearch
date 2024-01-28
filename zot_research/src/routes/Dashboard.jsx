// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import './Dashboard.css';


const Dashboard = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);

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
    // Perform any other actions you want here
    const selectedDoc = documents.find(doc => doc.id === documentId);
    setSelectedDocument(selectedDoc);
  };

  return (
    <div className="dashboard-container">
      <div className="left-column">
        <h2>List of Documents</h2>
        <ul>
          {documents.map(document => (
            <li key={document.id} onClick={() => handleItemClick(document.id)}>
              {/* Render document fields here */}
              <p>Title: {document.title}</p>
              <p>Department: {document.department}</p>
              {/* ... (other fields) */}
            </li>
          ))}
        </ul>
      </div>
      <div className="right-column">
        {selectedDocument && (
          <>
            <h2>Document Details</h2>
            {/* Render details of the selected document here */}
            <p>Title: {selectedDocument.title}</p>
            <p>Department: {selectedDocument.department}</p>
            {/* ... (other fields) */}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
