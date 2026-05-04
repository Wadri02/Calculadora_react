import { useState, useEffect } from 'react';
import { fetchAllCharacters } from '../services/rickAndMortyApi';

const PAGE_SIZE = 20;

export function useRickAndMorty() {
    const [allCharacters, setAllCharacters] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        loadCharacters();
    }, []);

    const loadCharacters = async () => {
        setLoading(true);
        setError('');
        try {
            const all = await fetchAllCharacters();
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

    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    const currentChars = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    const selectedChar = allCharacters.find(c => c.id === selectedId);

    return {
        query, setQuery,
        page, setPage,
        loading, error,
        filtered, stats,
        totalPages, currentChars,
        selectedId, setSelectedId, selectedChar,
    };
}
