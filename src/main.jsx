import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'

import { Router } from './Router'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer autoClose={1500} />
    <Router />
  </React.StrictMode>
)
