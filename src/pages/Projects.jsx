import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 'guitar-scales',
    num: '1',
    name: 'Guitar\nScales',
    discipline: 'Music Tool',
    year: '2024',
    description:
      'Visualizador interactivo de escalas de guitarra y piano. Sintetizador en tiempo real con Tone.js y estética oscura premium.',
    github: 'https://github.com/javiboin/guitar-scales-react',
    demo: 'https://guitar-scales-javiboin.netlify.app/',
    stack: ['React', 'Tone.js', 'CSS'],
  },
  {
    id: 'gestor-tareas',
    num: '2',
    name: 'Gestor\nde Tareas',
    discipline: 'Productivity',
    year: '2024',
    description:
      'Dashboard de productividad. Organiza tareas por categorías, fechas de vencimiento, prioridad y exportación de estados.',
    github: 'https://github.com/javiboin/gestor-de-tareas-V2.0',
    demo: 'https://gestor-de-tareas-v2.netlify.app/',
    stack: ['React', 'LocalStorage', 'CSS'],
  },
  {
    id: 'carrito-compras',
    num: '3',
    name: 'Carrito\nde Compras',
    discipline: 'E-Commerce',
    year: '2024',
    description:
      'Boilerplate para e-commerce. Stock en tiempo real, persistencia local, cálculo de impuestos y cupones de descuento.',
    github: 'https://github.com/javiboin/carrito-compras-react',
    demo: 'https://carrito-compras-react-javiboin.netlify.app/',
    stack: ['React', 'Context API', 'CSS'],
  },
  {
    id: 'buscador-peliculas',
    num: '4',
    name: 'Buscador\nde Películas',
    discipline: 'API Client',
    year: '2024',
    description:
      'Cliente cinematográfico con APIs externas en tiempo real. Filtros interactivos y ordenamiento por popularidad.',
    github: 'https://github.com/javiboin/app-peliculas-react',
    demo: 'https://buscador-peliculas-react-javiboin.netlify.app/',
    stack: ['React', 'REST API', 'CSS'],
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
        <span className="pj-count">{projects.length}&nbsp;TRABAJOS SELECCIONADOS</span>
      </header>

      {/* ── Monolithic Vertical Columns ── */}
      <div className="pj-columns">
        {projects.map((project, i) => {
          const isActive = activeId === project.id;
          return (
            <article
              key={project.id}
              className={`pj-col${isActive ? ' pj-col--active' : ''}`}
              onMouseEnter={() => setActiveId(project.id)}
              onMouseLeave={() => setActiveId(null)}
              style={{ '--col-index': i }}
            >

              {/* — Top accent bar — */}
              <div className="pj-col-accent" aria-hidden="true" />

              {/* — Massive number — */}
              <div className="pj-num-block" aria-hidden="true">
                <span className="pj-num">{project.num}</span>
              </div>

              {/* — Category — */}
              <div className="pj-meta">
                <span className="pj-category">{project.discipline}</span>
              </div>

              {/* — Content — */}
              <div className="pj-content">
                <h3 className="pj-name">
                  {project.name.split('\n').map((line, j) => (
                    <span key={j} className="pj-name-line">{line}</span>
                  ))}
                </h3>
                <div className="pj-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="pj-tech">{tech}</span>
                  ))}
                </div>
              </div>

              {/* — Actions — */}
              <div className="pj-actions">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pj-btn pj-btn--primary"
                  aria-label={`Ver demo de ${project.name}`}
                >
                  DEMO
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                  CÓDIGO
                  <svg width="12" height="12" viewBox="0 0 24 24"
                    fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>

              {/* — Ghost index number (background decoration) — */}
              <span className="pj-num-ghost" aria-hidden="true">{project.num}</span>

            </article>
          );
        })}
      </div>

      {/* ── Bottom editorial ticker ── */}
      <footer className="pj-footer">
        <div className="pj-ticker-track">
          <span className="pj-ticker-text">
            REACT ◆ JAVASCRIPT ◆ TONE.JS ◆ REST API ◆ CONTEXT API ◆
            LOCALSTORAGE ◆ CSS MODULES ◆ NETLIFY ◆ VITE ◆ REACT ◆
            JAVASCRIPT ◆ TONE.JS ◆ REST API ◆ CONTEXT API ◆ LOCALSTORAGE ◆
            CSS MODULES ◆ NETLIFY ◆ VITE ◆&nbsp;
          </span>
          <span className="pj-ticker-text" aria-hidden="true">
            REACT ◆ JAVASCRIPT ◆ TONE.JS ◆ REST API ◆ CONTEXT API ◆
            LOCALSTORAGE ◆ CSS MODULES ◆ NETLIFY ◆ VITE ◆ REACT ◆
            JAVASCRIPT ◆ TONE.JS ◆ REST API ◆ CONTEXT API ◆ LOCALSTORAGE ◆
            CSS MODULES ◆ NETLIFY ◆ VITE ◆&nbsp;
          </span>
        </div>
      </footer>

    </section>
  );
}
