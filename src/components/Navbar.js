import React from 'react'
import { ReactComponent as DroneIcon } from '../img/drone_icon.svg';
import MediaQuery from 'react-responsive'

import SideMenu from './SideMenu';

import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {


    const onOpenMenu =  () => {
        document.querySelector(".sidebar").classList.add("open")
    }

    const onCloseMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
    }

    return (
        <div className='NavBar_container'>
            <MediaQuery maxWidth={767}>
                <div className='droneIcon_Container'>
                    <button onClick={onOpenMenu}>
                        <DroneIcon />
                    </button>
                </div>
                <div className="SkyTL_button_container">
                    <Link to={"/"} className="">
                        <button>
                            SkyTradeLinks
                        </button>
                    </Link>
                </div>
                <SideMenu onCloseMenu={onCloseMenu}/>
            </MediaQuery>
            <MediaQuery minWidth={768}>
                
                <div className="SkyTL_button_container">
                    <Link to={"/"} className="">
                        <button>
                            SkyTradeLinks
                        </button>
                    </Link>
                </div>
                <div className='navigationButtons_container'>
                    <ul>
                        <li>
                            <Link to={"/"} className="link-to-page">
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link to={"/aboutUs"} className="link-to-page">
                                ABOUT US
                            </Link>   
                        </li>
                        <li>
                            <Link to={"/contactUs"} className="link-to-page">
                                CONTACT US
                            </Link>    
                        </li>
                    </ul>
                </div>
            </MediaQuery>
            
        </div>
    )
}

export default Navbar