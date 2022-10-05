import React, { useState } from 'react'
import { sendMessage } from '../requests/contact.request';


import './FloatingContact.css'
import FloatingContactForm from './FloatingContactForm';


const FloatingContact = () => {
  const [showForm, setShowForm ] = useState(true);

  const onSubmitForm = () => {
    setShowForm(false);
  }
  // palomita after send
  // 

  return (
    <div className='floating-contact-form_container'>
      <div className='redHeader_container'>
        <h1>SkyTradeLinks</h1>
      </div>
        {
          showForm &&
          <p className='pink_hello_container'>
            Hi! Let us know how we can help and we’ll respond shortly.
          <svg 
            viewBox="0 0 24 24" 
            fill="rgb(240, 199, 205)" 
            width="24" height="24" data-ux="Icon" 
            className="dialog-cloud">
              <path d="M0.342304 14.5C7.35025 6.3293 3.35025 0.829295 0 0.0.0 0.0 5.4 2.1 32.3502 0.329295C32.3503 3.8293 -3.13481 20.7261 0.342304 14.5Z"></path></svg>
          </p>
        }
      <div className='floating-form_container'>
        {
          showForm ?
          <FloatingContactForm onSubmitForm={onSubmitForm}/>
          :
          <>
            <svg viewBox="0 0 24 24" fill="currentColor" width="72" height="72" data-ux="Icon" className="">
              <path fill-rule="evenodd" d="M12 4a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8c0-4.419 3.58-8 8-8zm3.26 6.794a.723.723 0 0 0 .057-1.045.772.772 0 0 0-1.067-.055l-3.598 3.053-.846-.932a.775.775 0 0 0-1.067-.054.726.726 0 0 0-.056 1.046l1.298 1.418a.84.84 0 0 0 .621.268.847.847 0 0 0 .558-.208l4.1-3.491z">
              </path>
            </svg>
            <p className="thanks-inquiry">
              Thanks for the message. We'll get back to you as soon as we can.
            </p>
          </>

        }
      </div>
    </div>
  )
}

export default FloatingContact