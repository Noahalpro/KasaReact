import { BrowserRouter } from 'react-router-dom'
import React from 'react'

import { createRoot } from 'react-dom/client'
import './resset.scss'
import App from './App.jsx'
import './main.scss'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
