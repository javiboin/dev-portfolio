import React from 'react';

const Technologies = () => {
    const techStack = [
        {
            category: 'Frontend // UI',
            skills: [
                { name: 'React (Hooks, Context)', level: '90%' },
                { name: 'JavaScript ES6+', level: '85%' },
                { name: 'HTML5 & Vanilla CSS3', level: '95%' },
                { name: 'Vite & Build Tools', level: '80%' }
            ]
        },
        {
            category: 'Backend // Services',
            skills: [
                { name: 'Node.js Runtime', level: '80%' },
                { name: 'Express.js Framework', level: '85%' },
                { name: 'PostgreSQL & SQL', level: '70%' },
                { name: 'RESTful API Design', level: '85%' }
            ]
        },
        {
            category: 'DevOps // Workflow',
            skills: [
                { name: 'Git & GitHub Control', level: '85%' },
                { name: 'ESLint & Code Linting', level: '75%' },
                { name: 'npm / Package Managers', level: '90%' },
                { name: 'Netlify & Vercel Deploy', level: '80%' }
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
                                    <div className="tech-item-info">
                                        <span className="tech-name">{skill.name}</span>
                                        <span className="tech-level-val">{skill.level}</span>
                                    </div>
                                    <div className="tech-bar-container">
                                        <div 
                                            className="tech-bar-fill" 
                                            style={{ width: skill.level }}
                                        ></div>
                                    </div>
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