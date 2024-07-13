import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import NavbarComp from '../Components/Navbar.jsx'
import FooterComp from '../Components/Footer.jsx'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <NavbarComp />
  <React.StrictMode>
    <App />
  </React.StrictMode>
  <FooterComp />
  </BrowserRouter>
)
