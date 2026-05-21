const AboutMe = () => {
    return (
        <section className="about-me" id="sobremi">
            <h2 className="section-title">01 // SOBRE MÍ <span>/ DOSSIER</span></h2>
            
            <div className="about-me-container">
                {/* Left Side: Cyber terminal card dossier */}
                <div className="terminal-card">
                    <div className="terminal-header">
                        <div className="terminal-dots">
                            <span className="terminal-dot red"></span>
                            <span className="terminal-dot yellow"></span>
                            <span className="terminal-dot green"></span>
                        </div>
                        <span className="terminal-title">dossier_v1.0.sh</span>
                    </div>
                    <div className="terminal-body">
                        <div className="terminal-prompt">whoami</div>
                        <div className="terminal-output">
                            Javier Alejandro Oyarzo // Fullstack Software Engineer & Digital Architect.
                        </div>
                        
                        <div className="terminal-prompt">cat specs.cfg</div>
                        <ul className="profile-details">
                            <li>
                                <span className="label">ORIGEN:</span>
                                <span className="value">Patagonia, Argentina</span>
                            </li>
                            <li>
                                <span className="label">ESPEC:</span>
                                <span className="value">Sistemas React & Node.js</span>
                            </li>
                            <li>
                                <span className="label">MÉTRICA:</span>
                                <span className="value">Semántica + Performance</span>
                            </li>
                            <li>
                                <span className="label">STATUS:</span>
                                <span className="value" style={{color: '#09D8C7'}}>ACTIVE_FOR_HIRE</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Side: Narrative */}
                <div className="about-me-bio">
                    <h3>Comprometido con la ingeniería estética y la robustez técnica.</h3>
                    <p>
                        Diseño soluciones digitales enfocadas en la experiencia fluida del usuario 
                        y la simplicidad del código. Creo que cada línea de software debe tener una 
                        intención semántica clara y una estructura optimizada para perdurar.
                    </p>
                    <p>
                        Especializado en el desarrollo de SPA rápidas con React, APIs modulares con Node.js 
                        y maquetados dinámicos con CSS puro. Me apasiona integrar interactividad inteligente, 
                        interfaces inmersivas y animaciones sutiles para crear productos de alta fidelidad.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;