import React from 'react';


import "../styles/Footer.css"

const Footer = () => {
    return (
        <div className='FooterDiv'>
           <div className='FooterFirstDiv'>
            <h3>A propos</h3>
            <p>Fonctionnement du site</p>
            <p>Conditions générales</p>
            <p>Données et confidentialités</p>
           </div>
           <div className='FooterSecondDiv'>
            <h3>Nos hébergements</h3>
            <p>Charte qualité</p>
            <p>Proposer votre hôtel</p>
           </div>
           <div className='FooterThirdDiv'>
            <h3>Assistance</h3>
            <p>Centre d'aide</p>
            <p>Nous contacter</p>
           </div>
        </div>
    );
};

export default Footer;