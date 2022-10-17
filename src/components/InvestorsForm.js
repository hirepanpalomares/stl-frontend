import React, { useState, useEffect } from 'react'
import { sendInvestorsReq } from '../requests/contact.request';

import loadRCPT from "../scripts/load_rcpt";


import './InvestorsForm.css'

const InvestorsForm = (props) => {
  const [ email, setEmail ] = useState("");
  const [ name, setName ] = useState("");
  const [ company, setCompany ] = useState();
  const [ position, setPosition ] = useState();
  const [ investmentSize, setInvestmentSize] = useState("Investment size");
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
      company: company,
      companyPosition: position,
      investmentSize: investmentSize
    }
    
    window.grecaptcha.ready(function() {
      window.grecaptcha.execute(process.env.REACT_APP_RECAPTCHA_PUBLIC_KEY_V3, {action: 'submit'}).then(function(token) {
        // Add your logic to submit to your backend server here.
        
        const investors_req = sendInvestorsReq({
          ...data,
          token
        });
        // TODO do something with investors_req

      });
    });
    props.setFormSubmitted(true)
    props.setShowForm(false)
  }

  

  return (
    <form className='Investors_form' onSubmit={handleSubmit}>
      
      <input 
        type="text" placeholder='Name *' name='name' required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="email" placeholder="Email *" name='Email Adress' required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input type="text" placeholder="Company *" name='Company' required 
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input type="text" placeholder="Position in the company *" name='Company Position' required 
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      {/* <input type="text" placeholder="Investment size *" required 
        onChange={(e) => setInvestmentSize(e.target.value)}
        list="investmentSize"
      /> */}
      <select name="investmentSize" id="investmentSize" 
        className='form-control'
        value={investmentSize}
        onChange={(e) => setInvestmentSize(e.target.value)}
        required
      >
        <option value="Investment size" disabled>Investment Size</option>
        <option value="Any">Any</option>
        <option value="Angel">Angel</option>
        <option value="Pre-Seed">Pre-Seed</option>
        <option value="Seed">Seed</option>
        <option value="Series A">Series A</option>
        <option value="Series B++">Series B++</option>
      </select>
      
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

export default InvestorsForm