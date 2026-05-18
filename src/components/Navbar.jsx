import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav">
            <ul>
                <li><a href="#inicio" className="active">00 // INICIO</a></li>
                <li><a href="#sobremi">01 // SOBRE MÍ</a></li>
                <li><a href="#proyectos">02 // PROYECTOS</a></li>
                <li><a href="#tecnologias">03 // TECH STACK</a></li>
                <li><a href="#intereses">04 // INTERESES</a></li>
                <li><a href="#contacto">05 // CONTACTO</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;