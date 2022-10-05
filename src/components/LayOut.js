import React, { useState } from 'react'
import Footer from './Footer'
import { ReactComponent as ChatIcon } from '../img/chat_icon.svg';
import { ReactComponent as CrossIcon } from '../img/cross_icon.svg';


import './LayOut.css'

import Navbar from './Navbar'
import FloatingContactForm from './FloatingContactForm';
import FloatingContact from './FloatingContact';

const LayOut = ({ children }) => {
  const [ showContactForm, setShowContactForm ] = useState(false);


  const onShowContactForm = () => {
    setShowContactForm(!showContactForm)
  }
  return (
    <div className='LayOut_container' >
      <header>
        <div className='header_container'>
          <Navbar />
        </div>
      </header>
      <main>
        <div className='pageContent_container'>
          { children }
          {
            showContactForm ?
            <>
              <FloatingContact />
              <div className='floating-chat-button_container cross'>
                <button onClick={onShowContactForm}>
                  <CrossIcon />
                </button>
              </div>
            </>
            :
            <div className='floating-chat-button_container'>
              <button onClick={onShowContactForm}>
                <ChatIcon />
              </button>
            </div>
          }
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default LayOut
