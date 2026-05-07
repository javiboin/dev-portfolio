import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Guitar Scales',
    description: 'Escalas de guitarra',
    github: 'https://github.com/javiboin/guitar-scales-react',
    demo: 'https://guitar-scales-javiboin.netlify.app/',
  },
  {
    name: 'Gestor de tareas v2',
    description: 'Gestor de tareas',
    github: 'https://github.com/javiboin/gestor-de-tareas-V2.0',
    demo: 'https://gestor-de-tareas-v2.netlify.app/',
  },
  {
    name: 'Carrito de compras v2',
    description: 'Carrito de compras',
    github: 'https://github.com/javiboin/carrito-compras-react',
    demo: 'https://carrito-compras-react-javiboin.netlify.app/',
  },
  {
    name: 'Buscador de películas',
    description: 'Buscador de películas',
    github: 'https://github.com/javiboin/app-peliculas-react',
    demo: 'https://buscador-peliculas-react-javiboin.netlify.app/',
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(projects[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="projects-page">
      <h1>Proyectos de desarrollo web</h1>
      <div className="dropdown-wrapper">
        <div className={`custom-dropdown ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="selected-item">
            {selected.name}
            <span className={`arrow ${isOpen ? 'up' : 'down'}`}>▾</span>
          </div>
          {isOpen && (
            <div className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
              {projects.map((p) => (
                <div
                  key={p.name}
                  className={`dropdown-item ${selected.name === p.name ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(p);
                    setIsOpen(false);
                  }}
                >
                  {p.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="project-card">
        <h2>{selected.name}</h2>
        <p>{selected.description}</p>
        <div className="project-links">
          <a href={selected.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={selected.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </div>
      </div>
    </section>
  );
}
