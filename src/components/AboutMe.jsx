const AboutMe = () => {
    return (
        <section className="about-me" id="sobremi">
            <h2 className="section-title">01 // SOBRE MÍ <span>/ DOSSIER</span></h2>

            <div className="about-me-container">
                {/* Left Side: Cyber-brutalist info stamp */}
                <div className="about-me-dossier">
                    <div className="dossier-header">
                        <span className="dossier-number">INFO-01 //</span>
                        <span className="dossier-tag">ORIGEN</span>
                    </div>
                    <div className="dossier-location">
                        <span className="location-city">RIO GRANDE</span>
                        <span className="location-region">TIERRA DEL FUEGO</span>
                        <span className="location-country">ARGENTINA</span>
                    </div>
                </div>

                {/* Right Side: Narrative */}
                <div className="about-me-bio">
                    <h3>Desarrollador Fullstack centrado en el ecosistema JavaScript <br />(React y Node.js)</h3>
                    <p>
                        Construyo software combinando la precisión del backend con interfaces de alto impacto visual. No creo en las soluciones a medias ni en el código por compromiso.
                    </p>
                    <p>
                        Fuera de la pantalla, me mueven la música, el ciclismo y la creación como una forma de resistencia.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;