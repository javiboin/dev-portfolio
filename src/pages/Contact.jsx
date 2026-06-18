import React, { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState(''); // '' | 'submitting' | 'success' | 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus('submitting');

        const formData = new FormData(e.target);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                e.target.reset();
            } else {
                console.log("Error", data);
                setStatus('error');
            }
        } catch (error) {
            console.error("Error", error);
            setStatus('error');
        }
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
                                <a href="mailto:javiboindev@gmail.com" className="contact-method-link">
                                    javiboindev@gmail.com
                                </a>
                            </div>
                        </li>
                        <li className="contact-method-item">
                            <span className="contact-method-icon">⚲</span>
                            <div className="contact-method-details">
                                <span className="contact-method-label">UBICACIÓN // NODO</span>
                                <span className="contact-method-link">Tierra del Fuego, Argentina</span>
                            </div>
                        </li>
                        <li className="contact-method-item">
                            <span className="contact-method-icon">⚡</span>
                            <div className="contact-method-details">
                                <span className="contact-method-label">LATENCIA // ESTADO</span>
                                <span className="contact-method-link" style={{ color: 'var(--accent-red)' }}>
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
                            name="name"
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
                            name="email"
                            placeholder="Introduce tu dirección de correo..."
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="message">03_MENSAJE // TRANSMISIÓN</label>
                        <textarea
                            className="form-textarea"
                            id="message"
                            name="message"
                            placeholder="Escribe tu mensaje aquí..."
                            required
                        ></textarea>
                    </div>

                    <button className="btn-submit" type="submit" disabled={status === 'submitting'}>
                        {status === 'submitting' ? 'ENVIANDO_SEÑAL...' : 'ENVIAR_SEÑAL'}
                    </button>
                    {status === 'success' && <p className="success-message" style={{ color: '#4ade80', marginTop: '1rem', textAlign: 'center' }}>Transmisión enviada con éxito.</p>}
                    {status === 'error' && <p className="error-message" style={{ color: '#f87171', marginTop: '1rem', textAlign: 'center' }}>Error en la transmisión. Intente nuevamente.</p>}
                </form>
            </div>
        </section>
    );
};

export default Contact;