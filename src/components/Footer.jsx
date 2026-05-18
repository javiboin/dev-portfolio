import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-console">
                    <span className="footer-pulse-dot"></span>
                    <span>SYSTEM STATE: ONLINE // SECURE_PORT // ADDR: PATAGONIA_ARG</span>
                </div>
                
                <ul className="footer-socials">
                    <li>
                        <a href="https://github.com/javiboin" target="_blank" rel="noopener noreferrer">
                            GITHUB // javiboin
                        </a>
                    </li>
                    <li>
                        <span style={{ opacity: 0.3 }}>|</span>
                    </li>
                    <li>
                        <span style={{ color: 'var(--text-muted)' }}>
                            © 2026 // JAVIER_ALEJANDRO_OYARZO
                        </span>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
