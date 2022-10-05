import React from 'react'

import './AboutUs.css'

const AboutUs = () => {
  return (
    <div>
      <h2 className='what-we-do'>WHAT WE DO</h2>
      <div className='AboutUs_text_container'>
        
        
        <div className='AboutUs_text_container_header'>
          <div className='AboutUs_text_box'>
            <h3>SkyTradeLinks</h3>
            <span>
              SkyTradeLinks allows property owners to solve the 
              problem of being unable to release value from the 
              airspace above their property by enabling you to 
              have the airspace traded.
            </span>
          </div>
        </div>


        <div className='AboutUs_text_container_footer'>
          <div className='AboutUs_text_box'>
            <h3>Property Owner</h3>
            <span>
            We help you release the value of the air above your property 
            by connecting traders and air users though our platform
            </span>
          </div>

          <div className='AboutUs_text_box'>
            <h3>Air Space Users</h3>
            <span>
              Air propulsion vehicles need to get to their destination 
              quickly and need this space managed
            </span>
          </div>
        </div>



      </div>

    </div>
  )
}

export default AboutUs