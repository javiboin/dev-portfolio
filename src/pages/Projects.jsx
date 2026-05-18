import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Guitar Scales',
    description: 'Visualizador interactivo de escalas de guitarra y piano. Diseñado para músicos y estudiantes con sintetizador en tiempo real (Tone.js) y layouts dinámicos en una estética oscura premium.',
    github: 'https://github.com/javiboin/guitar-scales-react',
    demo: 'https://guitar-scales-javiboin.netlify.app/',
  },
  {
    name: 'Gestor de Tareas v2',
    description: 'Dashboard de productividad y gestión de proyectos. Permite organizar tareas por categorías, asignar fechas de vencimiento, prioridad, y exportar estados mediante una interfaz minimalista e interactiva.',
    github: 'https://github.com/javiboin/gestor-de-tareas-V2.0',
    demo: 'https://gestor-de-tareas-v2.netlify.app/',
  },
  {
    name: 'Carrito de Compras v2',
    description: 'Boilerplate educativo para e-commerce. Integra un flujo completo de gestión de stock en tiempo real, persistencia local de items, cálculo dinámico de impuestos, y cupones de descuento.',
    github: 'https://github.com/javiboin/carrito-compras-react',
    demo: 'https://carrito-compras-react-javiboin.netlify.app/',
  },
  {
    name: 'Buscador de Películas',
    description: 'Cliente de búsqueda cinematográfica que consume APIs externas de cine en tiempo real. Cuenta con filtros interactivos, ordenamiento por popularidad, imágenes en alta definición y detalles de producción.',
    github: 'https://github.com/javiboin/app-peliculas-react',
    demo: 'https://buscador-peliculas-react-javiboin.netlify.app/',
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(projects[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="projects-page" id="proyectos">
      <h2 className="section-title">02 // PROYECTOS <span>/ DESTACADOS</span></h2>
      
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
            CÓDIGO_FUENTE
          </a>
          <a href={selected.demo} target="_blank" rel="noopener noreferrer">
            SITIO_DEMO
          </a>
        </div>
      </div>
    </section>
  );
}
