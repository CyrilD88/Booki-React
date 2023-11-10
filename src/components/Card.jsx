import React from 'react';
import Data from "../booki.json"


import '../styles/Card.css'

const Card = () => {
    return (
        <div className='LogementCard'>
            {Data.map((apart) => {
        const { id, cover, title, description } = apart;

      // affichage de la description pour l'appartement sur la page d'accueil
        return (
            <div className="Logement" key={id}>
                    <img src={cover} alt={title} />
                    <h3>{title}</h3>
                    <p>{description}</p>

             
            </div>
        )
    })}
            
        </div>
    );
};

export default Card;