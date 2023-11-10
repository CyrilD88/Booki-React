import React from 'react';
import Data from "../booki.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../styles/Card.css'

const arrayStars = [1, 2, 3, 4, 5]




const Card = () => {
        // On recherche l'id dans le fichier logements.json
        const record = Data.find(element => element.id)
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
                    <div className='stars'>
                        {
                            arrayStars.map(element => {
                                const nbreEtoiles = parseInt(record.rating);
                                return(<span key={"star-"} className={element <= nbreEtoiles ? 'span1' : 'span2'}><FontAwesomeIcon icon={faStar} /></span>)
                            })
                        }
                    </div>
                    
                   
                
                    
             
            </div>
        )
    })}
         
        </div>
    );
};

export default Card;