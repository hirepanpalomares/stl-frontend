import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LayOut from './components/LayOut';



import './App.css';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Confirm from './pages/Confirm';
import CookieConsent from './components/CookieConsent';


function App() {

  let routes = (
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/aboutUs' element={<LayOut><AboutUs /></LayOut>} />
      <Route path='/contactUs' element={<LayOut><ContactUs /></LayOut>} />
      <Route path='/confirm/:token' element={<LayOut><Confirm/></LayOut>} />
    </Routes>
  );

  return (
    <>
      
      <BrowserRouter>
          { routes }
      </BrowserRouter>
      <CookieConsent />
    </>
  );
}


export default App;
