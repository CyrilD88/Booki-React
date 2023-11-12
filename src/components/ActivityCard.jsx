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
                <img src={cover} alt={title} />
                    <div className='ActivityLogementDiv'>
                    <h3>{title}</h3>
                  
                    {/* <div className='stars'>
                        {
                            arrayStars.map(element => {
                                const nbreEtoiles = parseInt(record.rating);
                                return(<span key={element} className={element <= nbreEtoiles ? 'span1' : 'span2'}><FontAwesomeIcon icon={faStar} /></span>)
                            })
                        }
                    </div> */}
                    </div>
            </div>
        )
    })}
        </div>
    );
};

export default ActivityCard;









