import React from 'react';
import Music from "../components/Music";
import Movies from "../components/Movies";

const Interests = () => {
    return (
        <section className="interests-section" id="intereses">
            <h2 className="section-title" style={{ color: 'var(--accent-red)' }}>
                04 // INTERESES <span>/ CREATIVIDAD</span>
            </h2>
            
            <p className="interests-intro">
                Más allá del código y la ingeniería, disfruto explorando universos creativos, 
                atmósferas sonoras y narrativas cinematográficas que inspiran mi pensamiento diario.
            </p>
            
            <div className="interests-grid">
                <Music />
                <Movies />
            </div>
        </section>
    );
};

export default Interests;