// Dashboard.jsx

import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
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
              <h2 className='Titletitle'>Title: {selectedDocument.title}</h2>
              <p className='stuffies'>About This Role:</p>
              <p className="info-department">Department: {selectedDocument.department}</p>
              <p className="info-contact">Contact Email: {selectedDocument.contactEmail}</p>
              <p className="info-name">Name: {selectedDocument.name}</p>
              <p className="info-description">Description: {selectedDocument.description}</p>
              <p className="info-posted-date">Date Posted: {selectedDocument.PostedDate}</p>
              <p className="info-deadline">Deadline: {selectedDocument.Deadline}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListComponent;
