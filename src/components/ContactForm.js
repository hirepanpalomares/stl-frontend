import React, { useState, useEffect } from 'react'
import { sendMessage } from '../requests/contact.request';

import loadRCPT from "../scripts/load_rcpt";


import './ContactForm.css'

const ContactForm = (props) => {
  const [ email, setEmail ] = useState("");
  const [ name, setName ] = useState("");
  const [ message, setMessage ] = useState();
  const [ attachments, setAttachments ] = useState();
  const [ numberAttachments, setNumberAttachments ] = useState(0);
  const [ rcptLoaded, setRcptLoaded ] = useState(false);


  useEffect(() => {
    loadRCPT(() => {
      // TODO do something with rcptLoaded or erase it
      setRcptLoaded(true);
      
    })
  })
  

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO Implement sending files
    const data = {
      email: email,
      name: name,
      message: message,
      // files: attachments
    }
    
    window.grecaptcha.ready(function() {
      window.grecaptcha.execute('6LdZCu0hAAAAANZEwD1yqWyAACzSw7iVIkVTUONv', {action: 'submit'}).then(function(token) {
        // Add your logic to submit to your backend server here.
        
        const message_req = sendMessage({
          ...data,
          token
        });
        // TODO do something with message_req

      });
    });
    props.setFormSubmitted(true)
    props.setShowForm(false)
  }

  const onAttachFile = (e) => {
    const newFile = e.target.files[0];
    // attachments.push(newFile);
    setAttachments(newFile);
    setNumberAttachments(numberAttachments+1);
    console.log(attachments);
  }

  return (
    <form className='signup_form' onSubmit={handleSubmit}>
      
      <input 
        type="text" placeholder='Name' name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="email" placeholder="Email *" name='Email Adress' required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea type="text_area" 
        placeholder="To be able to help please enter your full address, including post code or zip code."
        className='input_box'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      >
      
      </textarea>
      {/* <div className='attachFiles_container'>
        <label htmlFor="inputTag">
          <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" data-ux="Icon" data-aid="paperclip" className="">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.6 11.6L17 13l-5.9 5.9c-1.3 1.3-2.9 1.9-4.6 1.9-1.7 0-3.2-.7-4.5-2-2.5-2.5-2.5-6.6 0-9.2l7.1-7.1.1-.1c1.9-2 5.1-2 7.1 0l.1.1c2 2 2 5.1 0 7.1l-6.9 6.6c-.7.7-1.6 1.1-2.5 1.2h-.3c-.9 0-1.7-.3-2.2-.9-.7-.7-1-1.6-.9-2.6.1-.9.5-1.8 1.2-2.5l5.5-5.8L11.7 7l-5.5 5.9c-.4.4-.6.8-.6 1.3 0 .2 0 .7.3 1 .3.3.7.3 1 .3.4 0 .9-.3 1.3-.6L15 8.2C16.2 7 16.2 5.1 15 4l-.1-.1c-1.2-1.2-3.1-1.2-4.3 0l-.7.7-6.5 6.5c-1.8 1.8-1.8 4.6 0 6.3 1.8 1.7 4.6 1.8 6.3 0l5.9-5.8z"></path>
          </svg>
            Attach Files
          <input id="inputTag" type="file" onChange={onAttachFile}/>
        </label>
        <span>Attachments ({numberAttachments})</span>
      </div> */}
      
      <p className='text_recaptcha contact'>
        This site is protected by reCAPTCHA and the 
        Google <a href='https://policies.google.com/privacy'>Privacy Policy</a> and 
        <a href='https://policies.google.com/terms'> Terms of Service</a> apply.
      </p>
      <button className="Skytl_button send_form" type='submit'>
          SEND
      </button>
      <button onClick={() => props.setShowForm(false)} className="cancel_form">
        Cancel  
      </button>
    </form>
  )
}

export default ContactForm