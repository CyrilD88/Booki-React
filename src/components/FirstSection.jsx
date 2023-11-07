import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'



const FirstSection = () => {
    return (
        <div>
            <h1>Trouvez un hébergement pour des vacances de rêve</h1>
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faHouse} />

            <p>En plein centre-ville ou en pleine nature</p>
            <form method="post" action="#">               
                     <i class="fa-solid fa-location-dot"></i>
                     <input type="text"  placeholder="Marseille, France"/>     
                          
                    <button><span>Rechercher</span>                                
                    </button>
                </form>
        </div>
    );
};

export default FirstSection;