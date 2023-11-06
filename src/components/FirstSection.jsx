import React from 'react';

const FirstSection = () => {
    return (
        <div>
            <h1>Trouvez un hébergement pour des vacances de rêve</h1>
            <p>En plein centre-ville ou en pleine nature</p>
            <form method="post" action="#">               
                     <i class="fa-solid fa-location-dot"></i>
                     <input type="text"  placeholder="Marseille, France"/>                
                    <button><span>Rechercher</span>                                
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
        </div>
    );
};

export default FirstSection;