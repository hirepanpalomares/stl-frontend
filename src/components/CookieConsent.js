import React, { useState, useEffect } from 'react'

import { DeviceUUID } from 'device-uuid';

import './CookieConsent.css'

const CookieConsent = () => {
  const [ buttonClicked, setButtonClicked ] = useState(false);

  useEffect(() => {
    //  if the cookies acceptance is already there
    const cookiesAccepted_cookie = localStorage.getItem('cookiesAccepted');
    // console.log(document.cookie);
    // document.cookie = "name=oeschger; SameSite=None; Secure";
    
      // if cookie is in browser check if it is true or false
    
        // if true  store cookies and send to database
        // if false do not do nothing      
    
    // else cookie is not in browser show message 


    // var uuid = new DeviceUUID().parse();
    // console.log(uuid);
  }, []);

  const handleAccept = () => {
    setButtonClicked(true)
    localStorage.setItem("cookiesAccepted", 'y');
  }

  const handleDecline = () => {
    setButtonClicked(true)
    localStorage.setItem("cookiesAccepted", 'n');

  }

  return (
    <>
      {
        localStorage.getItem('cookiesAccepted') ?
          <></>
        :
          !buttonClicked &&
          <div className='cookieConsent_container'>
            <p className='cookie_paragraph1'>
              This website uses cookies.
            </p>
            <p className='cookie_paragraph2'>
              We use cookies to analyze website traffic and optimize 
              your website experience. By accepting our use of cookies, 
              your data will be aggregated with all other user data
            </p>
            <div className='cookieButtons_container'>
              <button className='cookieButton' onClick={handleDecline}>
                DECLINE
              </button>
              <button className='cookieButton' onClick={handleAccept}>
                ACCEPT
              </button>
            </div>
          </div>
      }
    </>
  )
}

export default CookieConsent