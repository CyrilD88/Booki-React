import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMoneyBill, faPerson, faHeart, faFire,faInfo} from '@fortawesome/free-solid-svg-icons'

import '../styles/FirstSection.css'




const FirstSection = () => {
    return (
        <div className='divHeader'>
            <h1>Trouvez un hébergement pour des vacances de rêve</h1>
            <p>En plein centre-ville ou en pleine nature</p>
            <div className='divRecherche'>
                <form method="post" action="#">               
                    <FontAwesomeIcon className='location' icon={faLocationDot} />
                     <input type="text"  placeholder="Marseille, France"/>     
                    <button><span>Rechercher</span>                                
                    </button>
                </form>
            </div>
            <div className='divFiltre'>
                    <h2>Filtres</h2>
                   <div className='filtre'>
                    <div className='firstDiv'>
                    <FontAwesomeIcon className='billet' icon={faMoneyBill}/>
                    <p>Economique</p>
                    </div>
                    <div className='secondDiv'>
                    <FontAwesomeIcon className='personne' icon={faPerson} />
                    <p>Familial</p>
                    </div>
                    <div className='thirdDiv'>
                    <FontAwesomeIcon className="coeur" icon={faHeart} />
                    <p>Romantique</p>
                    </div>
                    <div className='forthDiv'>
                    <FontAwesomeIcon className='feu' icon={faFire} />
                    <p>Nos pépites</p>
                    </div>
                   </div>
                       
                 
             </div>
            <div className='headerBottom'>
                <FontAwesomeIcon className='headerBottomIcon' icon={faInfo} />
                <p className='description'>Plus de 500 logements sont disponibles dans cette ville</p>
            </div>
        </div>
    );
};

export default FirstSection;