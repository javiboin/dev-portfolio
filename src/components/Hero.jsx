import React from 'react';

const Hero = () => {
    return (
        <section className="hero" id="inicio">
            <div className="hero-content">
                <span className="hero-subtitle">SYSTEMS ANALYST // FULLSTACK DEVELOPER</span>
                <h1 className="hero-title">
                    Hola, soy
                    <span>Javier Alejandro Oyarzo</span>
                </h1>
                <p className="hero-desc">
                    Analista de Sistemas enfocado en el diseño, arquitectura y optimización de soluciones informáticas.
                </p>
                <div className="hero-cta">
                    <a href="#proyectos" className="btn-primary">VER PROYECTOS</a>
                    <a href="#contacto" className="btn-secondary">SISTEMA_DE_CONTACTO</a>
                </div>
            </div>

            <div className="hero-graphic">
                <svg className="cyber-core" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background Subtle Ring */}
                    <circle cx="100" cy="100" r="80" stroke="#17364F" strokeWidth="1" strokeDasharray="4 8" />

                    {/* Animated Outer Ring */}
                    <circle className="rotate-slow" cx="100" cy="100" r="65" stroke="#09D8C7" strokeWidth="1.5" strokeDasharray="40 100" />

                    {/* Animated Inner Ring */}
                    <circle className="rotate-reverse" cx="100" cy="100" r="50" stroke="#BD0927" strokeWidth="1" strokeDasharray="30 60" />

                    {/* Grid Intersection Lines */}
                    <line x1="100" y1="20" x2="100" y2="180" stroke="#17364F" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="20" y1="100" x2="180" y2="100" stroke="#17364F" strokeWidth="0.5" strokeDasharray="2 2" />

                    {/* Cyber Target Corners */}
                    <path d="M 85 45 L 80 45 L 80 50" stroke="#09D8C7" strokeWidth="1" />
                    <path d="M 115 45 L 120 45 L 120 50" stroke="#09D8C7" strokeWidth="1" />
                    <path d="M 85 155 L 80 155 L 80 150" stroke="#09D8C7" strokeWidth="1" />
                    <path d="M 115 155 L 120 155 L 120 150" stroke="#09D8C7" strokeWidth="1" />

                    {/* Glowing Core nodes */}
                    <circle className="pulse-glow" cx="100" cy="100" r="14" fill="url(#coreGradient)" />
                    <circle cx="100" cy="100" r="6" fill="#09D8C7" />

                    {/* Orbital Nodes */}
                    <circle cx="100" cy="35" r="3" fill="#09D8C7" />
                    <circle cx="100" cy="165" r="3" fill="#BD0927" />
                    <circle cx="35" cy="100" r="3" fill="#09D8C7" />
                    <circle cx="165" cy="100" r="3" fill="#09D8C7" />

                    {/* Gradient Definition */}
                    <defs>
                        <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#09D8C7" stopOpacity="0.8" />
                            <stop offset="60%" stopColor="#09D8C7" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#0D1A2F" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default Hero;