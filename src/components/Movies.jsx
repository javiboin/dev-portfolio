import React from 'react';

const Movies = () => {
    const moviesList = [
        { title: 'The Matrix', category: 'CYBERPUNK // SCI-FI' },
        { title: 'Interstellar', category: 'COSMIC // ARCHITECTURE' },
        { title: 'Lord of the Rings', category: 'EPIC // FANTASY' },
        { title: 'Shrek', category: 'CULT // POP CULTURE' }
    ];

    return (
        <div className="interest-box">
            <h3>Cine // Narrativas</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
                Obras cinematográficas que valoro por su dirección de arte, guion y profundidad temática.
            </p>
            <div className="movie-grid">
                {moviesList.map((m) => (
                    <div key={m.title} className="movie-card">
                        <span className="movie-tag">{m.category}</span>
                        <span className="movie-title">{m.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Movies;