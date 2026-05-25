import './Projects.css';

const projects = [
  {
    id: 'guitar-scales',
    name: 'Guitar Scales',
    tag: 'Music Tool',
    description:
      'Visualizador interactivo de escalas de guitarra y piano. Sintetizador en tiempo real con Tone.js, layouts dinámicos y estética oscura premium.',
    github: 'https://github.com/javiboin/guitar-scales-react',
    demo: 'https://guitar-scales-javiboin.netlify.app/',
    stack: ['React', 'Tone.js', 'CSS'],
  },
  {
    id: 'gestor-tareas',
    name: 'Gestor de Tareas v2',
    tag: 'Productivity',
    description:
      'Dashboard de productividad y gestión de proyectos. Organiza tareas por categorías, fechas de vencimiento, prioridad y exportación de estados.',
    github: 'https://github.com/javiboin/gestor-de-tareas-V2.0',
    demo: 'https://gestor-de-tareas-v2.netlify.app/',
    stack: ['React', 'LocalStorage', 'CSS'],
  },
  {
    id: 'carrito-compras',
    name: 'Carrito de Compras v2',
    tag: 'E-Commerce',
    description:
      'Boilerplate educativo para e-commerce. Gestión de stock en tiempo real, persistencia local, cálculo dinámico de impuestos y cupones de descuento.',
    github: 'https://github.com/javiboin/carrito-compras-react',
    demo: 'https://carrito-compras-react-javiboin.netlify.app/',
    stack: ['React', 'Context API', 'CSS'],
  },
  {
    id: 'buscador-peliculas',
    name: 'Buscador de Películas',
    tag: 'API Client',
    description:
      'Cliente cinematográfico que consume APIs externas en tiempo real. Filtros interactivos, ordenamiento por popularidad e imágenes en alta definición.',
    github: 'https://github.com/javiboin/app-peliculas-react',
    demo: 'https://buscador-peliculas-react-javiboin.netlify.app/',
    stack: ['React', 'REST API', 'CSS'],
  },
];

export default function Projects() {
  return (
    <section className="projects-page" id="proyectos">
      <h2 className="section-title">02 // PROYECTOS <span>/ DESTACADOS</span></h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            className="project-card"
            key={project.id}
            style={{ '--card-index': index }}
          >
            <div className="project-card-header">
              <span className="project-tag">{project.tag}</span>
              <span className="project-index">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <h3 className="project-name">{project.name}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="project-stack">
              {project.stack.map((tech) => (
                <span className="stack-badge" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`Código fuente de ${project.name}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                CÓDIGO
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
                aria-label={`Demo de ${project.name}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                DEMO
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
