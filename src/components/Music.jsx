import React from 'react';

const Music = () => {
    const genres = [
        { id: '01', name: 'Radiohead', label: 'ALTERNATIVE ROCK // EXPERIMENTAL' },
        { id: '02', name: 'Deftones', label: 'ALTERNATIVE ROCK' },
        { id: '03', name: 'Linkin Park', label: 'NU METAL // ALTERNATIVE ROCK' },
        { id: '04', name: 'Rezz', label: 'INDUSTRIAL // BASS' }
    ];

    return (
        <div className="interest-box">
            <h3>Música // Frecuencias</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
                Mis elecciones sonoras para programar, diseñar arquitecturas o desconectar del mundo digital.
            </p>
            <div className="playlist">
                {genres.map((g) => (
                    <div key={g.id} className="track-item">
                        <div className="track-left">
                            <span className="track-num">{g.id}</span>
                            <span className="track-name">{g.name}</span>
                        </div>
                        <span className="track-genre">{g.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Music;