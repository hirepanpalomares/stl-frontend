import React from 'react'
import { ReactComponent as DroneIcon } from '../img/drone_icon.svg';
import  MediaQuery  from 'react-responsive'

import SideMenu from './SideMenu';

import './NavbarLanding.css'
import { Link } from 'react-router-dom';

const NavbarLanding = () => {


    const onOpenMenu =  () => {
        document.querySelector(".sidebar").classList.add("open")
    }

    const onCloseMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
    }

    return (
        <div className='NavBar_container_land'>
            <MediaQuery maxWidth={767}>
                <div className='droneIcon_Container_land'>
                    <button onClick={onOpenMenu}>
                        <DroneIcon />
                    </button>
                </div>
                <div className="SkyTL_button_container_land">
                    <Link to={"/"} className="">
                        <button>
                            SkyTradeLinks
                        </button>
                    </Link>
                </div>
                <SideMenu onCloseMenu={onCloseMenu}/>
            </MediaQuery>
            <MediaQuery minWidth={768}>
                
                <div className="SkyTL_button_container_land">
                    <Link to={"/"} className="">
                        <button>
                            SkyTradeLinks
                        </button>
                    </Link>
                </div>
                <div className='navigationButtons_container_land'>
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

export default NavbarLanding