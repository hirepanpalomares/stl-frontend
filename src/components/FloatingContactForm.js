import React, { useState, useEffect } from 'react'
import { sendMessage } from '../requests/contact.request';
import loadRCPT from "../scripts/load_rcpt";


import './FloatingContactForm.css'

const FloatingContactForm = (props) => {
  const [ email, setEmail ] = useState("");
  const [ name, setName ] = useState("");
  const [ message, setMessage ] = useState("");
  const [ rcptLoaded, setRcptLoaded ] = useState(false);


  useEffect(() => {
    loadRCPT(() => {
      setRcptLoaded(true);
    })
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      name: name,
      message: message
    }
    
    window.grecaptcha.ready(function() {
      window.grecaptcha.execute('6LdZCu0hAAAAANZEwD1yqWyAACzSw7iVIkVTUONv', {action: 'submit'}).then(function(token) {
        // Add your logic to submit to your backend server here.
        // console.log(token);
        const message_req = sendMessage({
          ...data,
          token
        });
        // TODO do something with message_req
        // console.log(message_req);
      });
    });

    props.onSubmitForm();

  }

  // palomita after send
  // <svg viewBox="0 0 24 24" fill="currentColor" width="72" height="72" data-ux="Icon" class="x-el x-el-svg c2-1 c2-2 c2-17 c2-r c2-s c2-67 c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"><path fill-rule="evenodd" d="M12 4a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8c0-4.419 3.58-8 8-8zm3.26 6.794a.723.723 0 0 0 .057-1.045.772.772 0 0 0-1.067-.055l-3.598 3.053-.846-.932a.775.775 0 0 0-1.067-.054.726.726 0 0 0-.056 1.046l1.298 1.418a.84.84 0 0 0 .621.268.847.847 0 0 0 .558-.208l4.1-3.491z"></path></svg>

  return (
    <form className='signup_form floating' onSubmit={handleSubmit}>
      <input type="text" placeholder='Name*' name='name' value={name} required 
        onChange={(e) => setName(e.target.value)}
      />
      <input type="email" placeholder="Email*" name='Email Adress' value={email} required 
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea type="text_area" 
        placeholder="How can we help?*"
        className='input_box'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      >
      
      </textarea>
      <button className="Skytl_button send-floating-contact" type='submit'>
          SEND
      </button>
      <p className='text_recaptcha'>
        This site is protected by reCAPTCHA and the 
        Google <a href='https://policies.google.com/privacy'>Privacy Policy</a> and 
        <a href='https://policies.google.com/terms'> Terms of Service</a> apply.
      </p>
    </form>
  )
}

export default FloatingContactForm