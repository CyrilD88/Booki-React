import React from 'react';
// import {Link} from "react-router-dom";
import Logo from '../assets/Booki.png'

const Navbar = () => {
    return (
        <nav>
        <div>
            <img src={Logo} alt="logo_de_Booki"/>
        </div>
         <div className="navbar__links">
         {/* <Link to="/"> */}
         <p>Accueil</p>
         {/* </Link>
         <Link to="/About"> */}
         <p>A propos</p>
         {/* </Link> */}
       </div>
        </nav>
    );
};

export default Navbar;