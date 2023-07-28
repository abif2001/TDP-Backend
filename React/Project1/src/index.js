import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes,Route,Link} from "react-router-dom";
import HomePage from './HomePage';
import Team from './Team';
import Services from './Services';
import Aboutus from './Aboutus';
import Footer from './Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1><center>  Welcome to NationWide </center></h1>      
  <BrowserRouter>
  <nav>
      <ul>
        <li><Link to="/aboutus"> About US </Link></li>
        <li> <Link to="/services"> Services </Link></li> 
        <li> <Link to="/myteam"> Team </Link></li>
      </ul>
  </nav>

  <Routes>
    <Route path="/" element={<HomePage/>} />                                      
    <Route path="/myteam"  element={<Team/>} />
    <Route path="/aboutus"  element={<Aboutus/>} />
    <Route path="/services" element={<Services/>} />
  </Routes>   
  
<Footer/>
</BrowserRouter>
</React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById('root'));
