import React, { useState, useEffect, useRef } from "react";
import CountrySelect from "./CountrySelect";
import Map from "./Map";


// import ReCAPTCHA from "react-google-recaptcha"; // TODO Erase npm package

// import {
//   GoogleReCaptchaProvider,
//   useGoogleReCaptcha,
//   GoogleReCaptcha
// } from "react-google-recaptcha-v3"; // TODO Erase npm package


import { createNewInterestedUser } from './../requests/new_interested_user.request'

import './SignupForm.css'
import loadRCPT from "../scripts/load_rcpt";


const SignupForm = (props) => {
  
  // const [ isPropertyOwner, setPropertyOwnerTo ] = useState(true);
  
  const [ email, setEmail ] = useState("");
  const [ fullName, setFullName ] = useState("");
  const [ address, setAddress ] = useState("");
  const [ country, setCountry ] = useState("");
  
  const [ rcptLoaded, setRcptLoaded ] = useState(false);

  
  
  // const { executeRecaptcha } = useGoogleReCaptcha();
  // const recaptchaRef = useRef();

  

  useEffect(() => {
    loadRCPT(() => {
      setRcptLoaded(true);
    })
  })
  

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data =  {
      email: email,
      fullName: fullName,
      address: address,
      country: country
    }
    
    // const token_re = await recaptchaRef.current.executeAsync();
    // recaptchaRef.current.reset();
    // console.log(token_re);

    window.grecaptcha.ready(function() {
      window.grecaptcha.execute('6LdZCu0hAAAAANZEwD1yqWyAACzSw7iVIkVTUONv', {action: 'submit'}).then(function(token) {
          // Add your logic to submit to your backend server here.
          // console.log(token);
          const request = createNewInterestedUser({
            ...data,
            token
          })
        // TODO do something with request

        });
      });
    props.onSubmitForm()
  }


  return (
    <div className="SignupForm_container">
      {/* <GoogleReCaptchaProvider
        language="en-US"
        reCaptchaKey="6LdZCu0hAAAAANZEwD1yqWyAACzSw7iVIkVTUONv"
      > */}
      <h1>Signup for free now to secure your air rights and stay updated</h1>
      <form className='Interest_form' onSubmit={handleSubmit}>
              {/* <ReCAPTCHA
                sitekey={"6LdZCu0hAAAAANZEwD1yqWyAACzSw7iVIkVTUONv"} 
                
                ref={recaptchaRef}
              /> */}
              {/* <GoogleReCaptcha onVerify={t => console.log({ t })} /> */}
              {/* <GoogleReCaptcha /> */}

              <input 
                type="email" placeholder="Email *" 
                name='Email' 
                required value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />
              <input 
                type="text" placeholder="Full name *" 
                name='Full_name' 
                required value={fullName} 
                onChange={(e) => setFullName(e.target.value)}
                />
              <input 
                type="text" placeholder="Address of your property (including zip/postal code)*" 
                name='Adress' 
                required value={address} 
                onChange={(e) => setAddress(e.target.value)}
              />
              <CountrySelect onChange={(e) => setCountry(e.target.value)} />
              {/* <h2>Dropdown a pin in your country in the map: </h2> */}
              {/* <Map /> */}
              <button 
                className="Skytl_button " 
                type="submit"
              >
                SEND
              </button>
          </form>
      {/* </GoogleReCaptchaProvider> */}
    </div>
  )
}

export default SignupForm

{/* 
const handleChangeUserType = (e) => {
    const select_value = e.target.value;
    setUserType(e.target.value)
    if (select_value === "property_owner") {
      setPropertyOwnerTo(true);
    } else {
      // value is uav_operator
      setPropertyOwnerTo(false);
    }
  }
<CountrySelect onChange={(e) => {setCountry(e.target.value)} }/>
<select name="User_type" id="user_type_select" onChange={handleChangeUserType} >
  <option value="property_owner">Property owner</option>
  <option value="uav_operator">Drone operator</option>
</select>
{
  isPropertyOwner ? 
    <input 
      id="zip" 
      name="zip" 
      type="text" 
      pattern="[0-9]*" 
      placeholder="Zip code *" 
      required value={zipCode} 
      onChange={(e) => setZipCode(e.target.value)}
      
    />
  :
    <input id="drone_weight" name="drone_weight" type="text" placeholder="Drone weight" required value={droneWeight} onChange={(e) => setDroneWeight(e.target.value)}/>
} */}