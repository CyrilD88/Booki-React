import React from 'react';
// import {Link} from "react-router-dom";
import Logo from '../assets/Booki.png'

import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <nav className='navbar'>
        <div className='navbar__logo'>
            <img src={Logo} className='navbar__img' alt="logo_de_Booki"/>
        </div>
         <div className="navbar__links">
         {/* <Link to="/"> */}
         <p className='hebergement'>Hébergements</p>
         {/* </Link>
         <Link to="/About"> */}
         <p className='activités'>Activités</p>
         {/* </Link> */}
       </div>
        </nav>
    );
};

export default Navbar;