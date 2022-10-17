import React from 'react'
import { Link } from 'react-router-dom'


import './SideMenu.css'

const SideMenu = (props) => {
  return (
    <aside className="sidebar">
        <div className='closeButton_container'>
            <button onClick={props.onCloseMenu}>
                <svg width="30" height="30" viewBox="0 0 12 12">
                    <path 
                        d="M7.17495 5.99999L10.7583 2.42499C10.9152 
                        2.26807 11.0034 2.05524 11.0034 1.83333C11.0034 
                        1.61141 10.9152 1.39858 10.7583 1.24166C10.6014 
                        1.08474 10.3885 0.996582 10.1666 0.996582C9.9447 
                        0.996582 9.73187 1.08474 9.57495 1.24166L5.99995 
                        4.82499L2.42495 1.24166C2.26803 1.08474 2.0552 
                        0.996582 1.83328 0.996582C1.61136 0.996582 1.39854 
                        1.08474 1.24162 1.24166C1.0847 1.39858 0.996539 
                        1.61141 0.996539 1.83333C0.996539 2.05524 1.0847 
                        2.26807 1.24162 2.42499L4.82495 5.99999L1.24162 
                        9.57499C1.16351 9.65246 1.10151 9.74463 1.05921 
                        9.84618C1.0169 9.94773 0.995117 10.0566 0.995117 
                        10.1667C0.995117 10.2767 1.0169 10.3856 1.05921 
                        10.4871C1.10151 10.5887 1.16351 10.6809 1.24162 
                        10.7583C1.31908 10.8364 1.41125 10.8984 1.5128 
                        10.9407C1.61435 10.983 1.72327 11.0048 1.83328 
                        11.0048C1.94329 11.0048 2.05221 10.983 2.15376 10.9407C2.25531 10.8984 2.34748 10.8364 2.42495 10.7583L5.99995 7.17499L9.57495 10.7583C9.65242 10.8364 9.74459 10.8984 9.84614 10.9407C9.94768 10.983 10.0566 11.0048 10.1666 11.0048C10.2766 11.0048 10.3855 10.983 10.4871 10.9407C10.5886 10.8984 10.6808 10.8364 10.7583 10.7583C10.8364 10.6809 10.8984 10.5887 10.9407 10.4871C10.983 10.3856 11.0048 10.2767 11.0048 10.1667C11.0048 10.0566 10.983 9.94773 10.9407 9.84618C10.8984 9.74463 10.8364 9.65246 10.7583 9.57499L7.17495 5.99999Z" />
                </svg>
            </button>
        </div>
        <div className='listMenu_container'>
            <ul>
                <li onClick={props.onCloseMenu}>
                    <Link to={"/"} className="link-to-page active" >
                        HOME
                    </Link>
                </li>
                <li onClick={props.onCloseMenu}>
                    <Link to={"/aboutUs"} className="link-to-page">
                        ABOUT US
                    </Link>   
                </li>
                <li onClick={props.onCloseMenu}> 
                    <Link to={"/contactUs"} className="link-to-page">
                        CONTACT US
                    </Link>    
                </li>
                <li onClick={props.onCloseMenu}> 
                    <Link to={"/investors"} className="link-to-page">
                        INVESTORS
                    </Link>    
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default SideMenu