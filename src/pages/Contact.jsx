import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Custom interactive visual prompt
        alert('Transmisión iniciada. (Mockup de envío de mensaje)');
    };

    return (
        <section className="contact-section" id="contacto">
            <h2 className="section-title">05 // CONTACTO <span>/ TRANSMISIÓN</span></h2>
            
            <div className="contact-container">
                {/* Left Side: System Details and Channels */}
                <div className="contact-info">
                    <h2>Establecer Conexión</h2>
                    <p>
                        ¿Tienes un proyecto en mente, buscas un colaborador técnico para tu equipo, 
                        o simplemente quieres conversar sobre código y diseño de sistemas? Mi canal está abierto.
                    </p>
                    
                    <ul className="contact-methods">
                        <li className="contact-method-item">
                            <span className="contact-method-icon">✉</span>
                            <div className="contact-method-details">
                                <span className="contact-method-label">EMAIL // CANAL</span>
                                <a href="mailto:oyarzo.javier.a@gmail.com" className="contact-method-link">
                                    oyarzo.javier.a@gmail.com
                                </a>
                            </div>
                        </li>
                        <li className="contact-method-item">
                            <span className="contact-method-icon">⚲</span>
                            <div className="contact-method-details">
                                <span className="contact-method-label">UBICACIÓN // NODO</span>
                                <span className="contact-method-link">Patagonia, Argentina</span>
                            </div>
                        </li>
                        <li className="contact-method-item">
                            <span className="contact-method-icon">⚡</span>
                            <div className="contact-method-details">
                                <span className="contact-method-label">LATENCIA // ESTADO</span>
                                <span className="contact-method-link" style={{ color: 'var(--neon-cyan)' }}>
                                    ONLINE // STABLE
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Right Side: Cyber Secure Form */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">01_NOMBRE // IDENTIDAD</label>
                        <input 
                            className="form-input" 
                            type="text" 
                            id="name" 
                            placeholder="Introduce tu nombre..." 
                            required 
                        />
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">02_EMAIL // DIRECCIÓN</label>
                        <input 
                            className="form-input" 
                            type="email" 
                            id="email" 
                            placeholder="Introduce tu dirección de correo..." 
                            required 
                        />
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label" htmlFor="message">03_MENSAJE // TRANSMISIÓN</label>
                        <textarea 
                            className="form-textarea" 
                            id="message" 
                            placeholder="Escribe tu mensaje aquí..." 
                            required
                        ></textarea>
                    </div>
                    
                    <button className="btn-submit" type="submit">
                        ENVIAR_SEÑAL
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;