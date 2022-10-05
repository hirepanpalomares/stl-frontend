import React, { useState } from "react";




import './RegisterInterest.css'
import SignupForm from "./SignupForm";


const RegisterInterest = () => {
  const [ showForm, setShowForm ] = useState(false);
  const [ showFormButton, setShowFormButton ] = useState(true);

  const [ formSubmitted, setFormSubmitted ] = useState(false);
  
  

  
  

  const handleShowForm = () => {
    setShowFormButton(!showFormButton);
    setShowForm(true);
  }

  // alert(process.env.RECAPTCHA_PUBLIC_KEY);

  return (
    <div className='Interest_container'>
        <h1>
          Sign up for free and stay updated
        </h1>
        
        {
          showFormButton &&
          <button className="Skytl_button showForm_button" 
          type="submit" onClick={handleShowForm} 
          >
            SIGN UP NOW
          </button>
        }
        {
          showForm && <SignupForm onSubmitForm={() => {setFormSubmitted(true); setShowForm(false)}}/>
        }
        {
          formSubmitted && 
          <div className="signup_message">
            <h2>Excellent! We're excited to send you our next update</h2>
            <p>
              To let us know it's really you and that you would like to receive emails from us, 
              please click the link in the confirmation email we just sent you. You can unsuscribe from
              these emails at any time.
            </p>
          </div>
        }

        
      
    </div>
  )
}

export default RegisterInterest