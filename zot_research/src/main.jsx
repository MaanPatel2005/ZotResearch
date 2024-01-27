import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Profile from './Profile.jsx'
import AddPost from './AddPost.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AddPost />
  </React.StrictMode>,
)
