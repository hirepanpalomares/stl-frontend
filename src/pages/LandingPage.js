import React, { useState } from 'react'

import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions'
import RegisterInterest from '../components/RegisterInterest'
import PhotoGallery from '../components/PhotoGallery'
import Footer from '../components/Footer'

import { useMediaQuery, MediaQuery } from 'react-responsive'





import './LandingPage.css'
import NavbarLanding from '../components/NavbarLanding'
import SignupForm from '../components/SignupForm'


function LandingPage() {
  const [ showForm, setShowForm ] = useState(false);
  const [ formSubmitted, setFormSubmitted ] = useState(false);


  const handleShowForm = () => {
    setShowForm(!showForm);
    
    // window.scrollBy(-1,500)
    window.scrollTo({ top: 600, behavior: 'smooth' })
  }
  const isTabletOrBigger = useMediaQuery({ query: '(min-width: 768px)' })

  return (
    <div className='LandingPage_container'>
      <header>
        <div className="Presentation_container">
          <NavbarLanding/>
          <div className='LandingText_container'>
            <h1 className='make_money'>
            Would you or your company benefit from the passive income 
            that we can generate from the unused air space above your property?
            </h1>
            <button onClick={handleShowForm} className="Skytl_button showForm_button">
              YES - REGISTER NOW
            </button>
          </div>
        </div>
      </header>
      <main>
        {
          showForm 
          &&
          <SignupForm onSubmitForm={() => {setFormSubmitted(true); setShowForm(false)}}/>
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
            <p>
              You'll receive another email within 48 hours while we confirm your property ownership.
            </p>
          </div>
        }

        <FrequentlyAskedQuestions/>
        <PhotoGallery/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default LandingPage