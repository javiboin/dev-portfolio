import React from 'react';

const Technologies = () => {
    const techStack = [
        {
            category: 'Frontend // UI',
            skills: [
                { name: 'React (Hooks, Context)', concept: 'Hooks, Context API, Ciclo de vida, Rendimiento' },
                { name: 'JavaScript ES6+', concept: 'Async/Await, Promises, DOM API, Programación Funcional' },
                { name: 'HTML5 & Vanilla CSS3', concept: 'HTML Semántico, Flexbox/Grid, Propiedades Personalizadas, Responsive' },
                { name: 'Vite & Build Tools', concept: 'Module Bundling, HMR, Dev Server, Optimización' }
            ]
        },
        {
            category: 'Backend // Services',
            skills: [
                { name: 'Node.js Runtime', concept: 'V8 Engine, Event Loop, I/O No Bloqueante, Módulos FS' },
                { name: 'Express.js Framework', concept: 'Routing, Middleware, HTTP Pipeline, REST API' },
                { name: 'PostgreSQL & SQL', concept: 'Consultas Relacionales, Diseño de Esquemas, Indexación, Joins' },
                { name: 'RESTful API Design', concept: 'Códigos de Estado HTTP, Endpoints, Serialización, Autenticación JWT' }
            ]
        },
        {
            category: 'DevOps // Workflow',
            skills: [
                { name: 'Git & GitHub Control', concept: 'Ramificación, Pull Requests, Resolución de Conflictos' },
                { name: 'ESLint & Code Linting', concept: 'Análisis Estático de Código, Formato Estándar, Reglas de Calidad' },
                { name: 'npm / Package Managers', concept: 'Gestión de Dependencias, SemVer, Scripts CLI Personalizados' },
                { name: 'Netlify & Vercel Deploy', concept: 'Despliegue CI/CD, Funciones Serverless, DNS y Configuración de Dominio' }
            ]
        }
    ];

    return (
        <section className="technologies" id="tecnologias">
            <h2 className="section-title">03 // TECH STACK <span>/ HABILIDADES</span></h2>

            <div className="tech-grid">
                {techStack.map((group) => (
                    <div key={group.category} className="tech-panel">
                        <div className="tech-panel-header">
                            <span>{group.category}</span>
                            <span style={{ opacity: 0.5 }}>//</span>
                        </div>
                        <div className="tech-list">
                            {group.skills.map((skill) => (
                                <div key={skill.name} className="tech-item">
                                    <span className="tech-name">{skill.name}</span>
                                    <span className="tech-concept">{skill.concept}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Technologies;