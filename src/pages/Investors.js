import React, { useState } from 'react'

import InvestorsForm from '../components/InvestorsForm';

import './Investors.css'

const Investors = () => {
  const [ showForm, setShowForm ] = useState(true);
  const [ formSubmitted, setFormSubmitted ] = useState(false);

  

  const onShowForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div className='Investors_container'>
      <h1>Please contact us directly using the form below</h1>
      {
        showForm ?
          <InvestorsForm
            setFormSubmitted={setFormSubmitted}
            setShowForm={setShowForm}
          />
        :
        <div className='message_sent'>
          <svg viewBox="0 0 24 24" fill="currentColor" width="72" height="72" data-ux="Icon" className="">
            <path fillRule="evenodd" d="M12 4a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8c0-4.419 3.58-8 8-8zm3.26 6.794a.723.723 0 0 0 .057-1.045.772.772 0 0 0-1.067-.055l-3.598 3.053-.846-.932a.775.775 0 0 0-1.067-.054.726.726 0 0 0-.056 1.046l1.298 1.418a.84.84 0 0 0 .621.268.847.847 0 0 0 .558-.208l4.1-3.491z">
            </path>
          </svg>
          <p className="thanks-inquiry">
            Thank you for your inquiry!. We'll get back to you within 48 hours.
          </p>
        </div>
      }

    </div>
  )
}

export default Investors