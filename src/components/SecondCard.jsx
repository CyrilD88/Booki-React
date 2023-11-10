import React from 'react';
import Data from "../bookiPop.json"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'

const SecondCard = () => {
    return (
        <div className='LogementCard'>
        {Data.map((apart) => {
    const { id, cover, title, description } = apart;

  // affichage de la description pour l'appartement sur la page d'accueil
    return (
        <div className="Logement" key={id}>
            <img src={cover} alt={title} />
                <div className='LogementDiv'>
                    <h3>{title}</h3>
                    <p>{description}</p>
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


export default SecondCard;