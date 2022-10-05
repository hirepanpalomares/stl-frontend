import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { validateNewInterestedUser } from '../requests/new_interested_user.request';


import './Confirm.css'

const Confirm = () => {

  const [ validationSuccess, setValidationSuccess ] = useState();
  
  const url_params = useParams();
  const { token } = url_params;

  useEffect( () => {
    const askValidation = async () => {
      await axios.patch(`http://localhost:3002/api/user/confirm`, {confirmationCode: token})
        .then((res) => {
          setValidationSuccess(true)
        })
        .catch(error => {
          console.log(error);
        })
      // const userValidated = await validateNewInterestedUser({confirmationCode: token});
      // console.log(userValidated);
    }

    const validation = askValidation() 
      .catch(error => {
        console.log(error)
      })
  
  }, []);

  return (
    <div className='Confirmation_email_container'>
      {
        validationSuccess && <h1>Thank you for confirming!</h1>
      }

    </div>
  )
}

export default Confirm