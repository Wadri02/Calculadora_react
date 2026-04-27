import React, { useState, useEffect } from 'react';
import './RickAndMortyPage.css';

const PAGE_SIZE = 20;

function statusColor(status) {
    return { Alive: 'text-green-500', Dead: 'text-red-500', unknown: 'text-gray-400' }[status] || 'text-gray-400';
}

function CharacterModal({ char, onClose }) {
    return (
        <div className="rm-modal-overlay" onClick={onClose}>
            <div className="rm-modal-box" onClick={e => e.stopPropagation()}>
                <div className="flex">
                    <img
                        src={char.image}
                        alt={char.name}
                        className="w-1/2 aspect-square object-cover rounded"
                    />
                    <div className="w-1/2 p-4 flex flex-col justify-center">
                        <h3 className="text-lg font-bold leading-tight mb-1">{char.name}</h3>
                        <p className={`text-sm font-medium ${statusColor(char.status)}`}>● {char.status}</p>
                        <p className="text-sm text-gray-600">{char.species}</p>
                        <p className="text-sm text-gray-600">{char.gender}</p>
                        {char.type && <p className="text-sm text-gray-500 italic">{char.type}</p>}
                    </div>
                </div>

                <div className="px-5 py-4 border-t border-gray-100 text-sm text-gray-700 space-y-1">
                    <p><span className="text-gray-400">Origen:</span> {char.origin.name}</p>
                    <p><span className="text-gray-400">Ubicación actual:</span> {char.location.name}</p>
                    <p><span className="text-gray-400">Episodios:</span> {char.episode.length}</p>
                </div>

                <div className="px-5 pb-5">
                    <button onClick={onClose} className="rm-modal-close-btn">Back</button>
                </div>
            </div>
        </div>
    );
}

function RickAndMortyPage() {
    const [allCharacters, setAllCharacters] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        fetchAll();
    }, []);

    const fetchAll = async () => {
        setLoading(true);
        setError('');
        try {
            const firstRes = await fetch('https://rickandmortyapi.com/api/character/');
            const firstData = await firstRes.json();

            const pageNumbers = Array.from({ length: firstData.info.pages - 1 }, (_, i) => i + 2);
            const restData = await Promise.all(
                pageNumbers.map(p =>
                    fetch(`https://rickandmortyapi.com/api/character/?page=${p}`).then(r => r.json())
                )
            );

            const all = [firstData, ...restData].reduce((acc, d) => [...acc, ...d.results], []);
            setAllCharacters(all);
        } catch {
            setError('Error al conectar con la API.');
        } finally {
            setLoading(false);
        }
    };

    const filtered = allCharacters.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase())
    );

    const stats = filtered.reduce((acc, c) => {
        acc[c.status] = (acc[c.status] || 0) + 1;
        return acc;
    }, {});

    const selectedChar = allCharacters.find(c => c.id === selectedId);

    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    const currentChars = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Rick and Morty</h2>

            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={query}
                    onChange={e => { setQuery(e.target.value); setPage(1); }}
                    onKeyDown={e => e.key === 'Enter' && setPage(1)}
                    placeholder="Buscar personaje..."
                    className="rm-search-input"
                />
            </div>

            {!loading && filtered.length > 0 && (
                <div className="flex gap-4 mb-4 text-sm">
                    <span className="text-green-500">● Vivos: {stats['Alive'] || 0}</span>
                    <span className="text-red-500">● Muertos: {stats['Dead'] || 0}</span>
                    <span className="text-gray-400">● Desconocido: {stats['unknown'] || 0}</span>
                    <span className="text-gray-500 ml-auto">Total: {filtered.length}</span>
                </div>
            )}

            {loading && <p className="text-gray-500">Cargando personajes...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && filtered.length === 0 && query && (
                <p className="text-gray-500">No se encontraron personajes.</p>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentChars.map(char => (
                    <div key={char.id} className="rm-card">
                        <div className="bg-gray-200 aspect-square">
                            <img src={char.image} alt={char.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="rm-card-body">
                            <p className="rm-card-name">{char.name}</p>
                            <p className="rm-card-species">{char.species}</p>
                            <p className={`text-xs ${statusColor(char.status)} mb-3`}>● {char.status}</p>
                            <button onClick={() => setSelectedId(char.id)} className="rm-card-btn">
                                Detalle
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-6">
                    <button onClick={() => setPage(p => p - 1)} disabled={page <= 1} className="rm-pagination-btn">
                        ← Anterior
                    </button>
                    <span className="text-sm text-gray-600">{page} / {totalPages}</span>
                    <button onClick={() => setPage(p => p + 1)} disabled={page >= totalPages} className="rm-pagination-btn">
                        Siguiente →
                    </button>
                </div>
            )}

            {selectedChar && (
                <CharacterModal char={selectedChar} onClose={() => setSelectedId(null)} />
            )}
        </div>
    );
}

export default RickAndMortyPage;
