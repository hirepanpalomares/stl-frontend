import React from 'react'

import { useState } from 'react'

import './Faq.css'

const Faq = (props) => {
  const [ isHidden, setIsHidden ] = useState(true);

  const onShowAnswer = () => {
    setIsHidden(!isHidden)
    if (isHidden) {
      document.getElementById(props.id).classList.add("active")
    }
    else {
      document.getElementById(props.id).classList.remove("active")
    }
}

  return (
    <div 
      className='Faq_container' 
      onClick={onShowAnswer}
    >
        <div className='question_container' >
            <h3 className='question' id={props.id}>
              {props.question}
              
            </h3>
            {
              isHidden ?
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 320 512"
                width="15px"
                height="15px"
              >
                <path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"/>
              </svg>
              :
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 320 512"
                width="15px"
                height="15px"
              >
                <path d="M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z"/>
              </svg>
            }
        </div>
        {
          !isHidden &&
          <div className='text_answer'>
            <p>
              {props.answer_paragraph1}
            </p>
            {
              props.answer_paragraph2 &&
              <>
                <span></span>
                <p>
                  {props.answer_paragraph2}
                </p>
              </>
            }
          </div>
        }
    </div>
  )
}

export default Faq