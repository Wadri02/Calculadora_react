import { useRickAndMorty } from '../hooks/useRickAndMorty';
import CharacterCard from '../components/character/CharacterCard';
import CharacterModal from '../components/character/CharacterModal';
import '../styles/rickAndMorty.css';

function RickAndMortyPage() {
    const {
        query, setQuery,
        page, setPage,
        loading, error,
        filtered, stats,
        totalPages, currentChars,
        selectedId, setSelectedId, selectedChar,
    } = useRickAndMorty();

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
                    <CharacterCard key={char.id} char={char} onSelect={setSelectedId} />
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-6">
                    <button
                        onClick={() => setPage(p => p - 1)}
                        disabled={page <= 1}
                        className="rm-pagination-btn"
                    >
                        ← Anterior
                    </button>
                    <span className="text-sm text-gray-600">{page} / {totalPages}</span>
                    <button
                        onClick={() => setPage(p => p + 1)}
                        disabled={page >= totalPages}
                        className="rm-pagination-btn"
                    >
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
