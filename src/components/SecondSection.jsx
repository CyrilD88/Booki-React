import React from 'react';
import CardLogement from "./Card.jsx"
import SecondCardLogement from "./SecondCard.jsx"
import '../styles/SecondSection.css'

const SecondSection = () => {
    return (
        <div className='hebergements'>
            <div className='premiereSection'>
                 <h2>Hébergements à Marseille</h2>
                 <CardLogement />
                 <h2>Afficher plus</h2>
            </div>
            <div className='secondSection'>
                <h2>Les plus populaires</h2>
                <SecondCardLogement />
            </div>
        </div>
    );
};

export default SecondSection;