import React from 'react'
import { Link } from 'react-router-dom'


import './Footer.css'


const Footer = () => {
  return (
    <div className='Footer_container'>
        <p>COPYRIGHT © 2022 SKYTRADELINKS - ALL RIGHTS RESERVED.</p>
        <Link to={""}>Privacy Policy</Link>
    </div>
  )
}

export default Footer