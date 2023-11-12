import React from 'react';
import Data from "../activity.json"
import '../styles/ActivityCard.css'

const ActivityCard = () => {
    return (
        <div className='activityCard'>
             {Data.map((apart) => {
        const { id, cover, title,  } = apart;

      // affichage de la description pour l'appartement sur la page d'accueil
        return (
            <div className="ActivityLogement" key={id}>
                    <div className='ActivityLogementDiv'>
                        <img src={cover} alt={title} />
                        <h3>{title}</h3>
                    </div>
            </div>
        )
    })}
        </div>
    );
};

export default ActivityCard;









