import { useState } from 'react';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import PlusPage from './pages/PlusPage';
import RickAndMortyPage from './pages/RickAndMortyPage';

function App() {
    const [option, setOption] = useState('home');

    const renderPage = () => {
        switch (option) {
            case 'plus':       return <PlusPage />;
            case 'calculator': return <CalculatorPage />;
            case 'searchpage': return <RickAndMortyPage />;
            default:           return <HomePage onNavigate={setOption} />;
        }
    };

    return (
        <div className="min-h-screen p-6">
            {option !== 'home' && (
                <button onClick={() => setOption('home')} className="mb-4 text-blue-600 hover:underline">
                    ← Home
                </button>
            )}
            {renderPage()}
        </div>
    );
}

export default App;
