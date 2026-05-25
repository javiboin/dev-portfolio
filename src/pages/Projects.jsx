import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 'guitar-scales',
    num: '1',
    name: 'Guitar Scales',
    discipline: 'Music Tool',
    year: '2024',
    description:
      'Visualizador interactivo de escalas de guitarra y piano. Sintetizador en tiempo real con Tone.js, layouts dinámicos y estética oscura premium diseñada para músicos.',
    github: 'https://github.com/javiboin/guitar-scales-react',
    demo: 'https://guitar-scales-javiboin.netlify.app/',
    stack: ['React', 'Tone.js', 'CSS'],
    status: 'DEPLOYED',
  },
  {
    id: 'gestor-tareas',
    num: '2',
    name: 'Gestor de Tareas',
    discipline: 'Productivity',
    year: '2024',
    description:
      'Dashboard de productividad y gestión de proyectos. Organiza tareas por categorías, fechas de vencimiento, prioridad y exportación de estados con interfaz minimalista.',
    github: 'https://github.com/javiboin/gestor-de-tareas-V2.0',
    demo: 'https://gestor-de-tareas-v2.netlify.app/',
    stack: ['React', 'LocalStorage', 'CSS'],
    status: 'DEPLOYED',
  },
  {
    id: 'carrito-compras',
    num: '3',
    name: 'Carrito de Compras',
    discipline: 'E-Commerce',
    year: '2024',
    description:
      'Boilerplate educativo para e-commerce. Gestión de stock en tiempo real, persistencia local, cálculo dinámico de impuestos y sistema de cupones de descuento.',
    github: 'https://github.com/javiboin/carrito-compras-react',
    demo: 'https://carrito-compras-react-javiboin.netlify.app/',
    stack: ['React', 'Context API', 'CSS'],
    status: 'DEPLOYED',
  },
  {
    id: 'buscador-peliculas',
    num: '4',
    name: 'Buscador de Películas',
    discipline: 'API Client',
    year: '2024',
    description:
      'Cliente cinematográfico que consume APIs externas en tiempo real. Filtros interactivos, ordenamiento por popularidad e imágenes en alta definición.',
    github: 'https://github.com/javiboin/app-peliculas-react',
    demo: 'https://buscador-peliculas-react-javiboin.netlify.app/',
    stack: ['React', 'REST API', 'CSS'],
    status: 'DEPLOYED',
  },
];

export default function Projects() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="projects-page" id="proyectos">

      {/* ── Swiss Editorial Header ── */}
      <header className="pj-header">
        <div className="pj-header-left">
          <span className="pj-overline">02 // PROYECTOS</span>
          <div className="pj-header-rule" />
        </div>
        <div className="pj-header-right">
          <span className="pj-count">{projects.length} TRABAJOS SELECCIONADOS</span>
        </div>
      </header>

      {/* ── Monolithic Column Structure ── */}
      <div className="pj-monolith-list">
        {projects.map((project) => {
          const isActive = activeId === project.id;
          return (
            <article
              key={project.id}
              className={`pj-row${isActive ? ' pj-row--active' : ''}`}
              onMouseEnter={() => setActiveId(project.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* — Massive number column — */}
              <div className="pj-num-col" aria-hidden="true">
                <span className="pj-num">{project.num}</span>
              </div>

              {/* — Divider line — */}
              <div className="pj-divider-v" />

              {/* — Discipline / metadata column — */}
              <div className="pj-meta-col">
                <span className="pj-discipline">{project.discipline}</span>
                <span className="pj-year">{project.year}</span>
                <span className="pj-status">{project.status}</span>
              </div>

              {/* — Main content column — */}
              <div className="pj-content-col">
                <h3 className="pj-name">{project.name}</h3>
                <p className="pj-desc">{project.description}</p>

                <div className="pj-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="pj-tech">{tech}</span>
                  ))}
                </div>
              </div>

              {/* — Actions column — */}
              <div className="pj-actions-col">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pj-btn pj-btn--primary"
                  aria-label={`Ver demo de ${project.name}`}
                >
                  <span>DEMO</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                    strokeLinejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pj-btn pj-btn--ghost"
                  aria-label={`Código fuente de ${project.name}`}
                >
                  <span>CÓDIGO</span>
                  <svg width="14" height="14" viewBox="0 0 24 24"
                    fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>

              {/* — Accent bar revealed on hover — */}
              <div className="pj-accent-bar" aria-hidden="true" />
            </article>
          );
        })}
      </div>

      {/* ── Bottom editorial ticker ── */}
      <footer className="pj-footer">
        <div className="pj-ticker-track">
          <span className="pj-ticker-text">
            REACT ◆ JAVASCRIPT ◆ TONE.JS ◆ REST API ◆ CONTEXT API ◆ LOCALSTORAGE ◆
            CSS MODULES ◆ NETLIFY ◆ VITE ◆ REACT ◆ JAVASCRIPT ◆ TONE.JS ◆ REST API ◆
            CONTEXT API ◆ LOCALSTORAGE ◆ CSS MODULES ◆ NETLIFY ◆ VITE ◆
          </span>
        </div>
      </footer>

    </section>
  );
}
