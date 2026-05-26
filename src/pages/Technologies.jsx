import React from 'react';

const Technologies = () => {
    const techStack = [
        {
            category: 'Frontend // UI',
            skills: [
                { name: 'React (Hooks, Context)', concept: 'Hooks, Context API, Lifecycle, Performance' },
                { name: 'JavaScript ES6+', concept: 'Async/Await, Promises, DOM API, Functional Programming' },
                { name: 'HTML5 & Vanilla CSS3', concept: 'Semantic HTML, Flexbox/Grid, Custom Properties, Responsive' },
                { name: 'Vite & Build Tools', concept: 'Module Bundling, HMR, Dev Server, Optimization' }
            ]
        },
        {
            category: 'Backend // Services',
            skills: [
                { name: 'Node.js Runtime', concept: 'V8 Engine, Event Loop, Non-blocking I/O, FS Modules' },
                { name: 'Express.js Framework', concept: 'Routing, Middleware, HTTP Pipeline, REST API' },
                { name: 'PostgreSQL & SQL', concept: 'Relational Queries, Schema Design, Indexing, Joins' },
                { name: 'RESTful API Design', concept: 'HTTP Status Codes, Endpoints, Serialization, JWT Auth' }
            ]
        },
        {
            category: 'DevOps // Workflow',
            skills: [
                { name: 'Git & GitHub Control', concept: 'Branching, Pull Requests, Merge Conflict Resolution' },
                { name: 'ESLint & Code Linting', concept: 'Static Code Analysis, Standard Formatting, Quality Rules' },
                { name: 'npm / Package Managers', concept: 'Dependency Management, SemVer, Custom CLI Scripts' },
                { name: 'Netlify & Vercel Deploy', concept: 'CI/CD Deployment, Serverless Functions, DNS & Domain Setup' }
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
                            <span style={{opacity: 0.5}}>//</span>
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