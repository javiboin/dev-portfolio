import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <ul className="footer-socials">
                    <li>
                        <span style={{ color: 'var(--text-muted)' }}>
                            Todos los derechos reservados. © 2026 - Hecho por Javier Oyarzo.
                        </span>
                    </li>
                    <li>
                        <span style={{ opacity: 0.3 }}>|</span>
                    </li>
                    <li>
                        <a href="https://github.com/javiboin" target="_blank" rel="noopener noreferrer">
                            GITHUB // javiboin
                        </a>
                    </li>
                    <li>
                        <span style={{ opacity: 0.3 }}>|</span>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/javier-alejandro-oyarzo-7110aa138" target="_blank" rel="noopener noreferrer">
                            LINKEDIN // Javier Oyarzo
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
