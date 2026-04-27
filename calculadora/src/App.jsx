import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Plus from './components/Plus';
import RickAndMortyPage from './components/RickAndMortyPage';

function App() {
    const [option, setoption] = useState('home');

    const ClickPlus = () => {
      setoption('plus');
    };

    const Clickcalculator = () => {
      setoption('calculator');
    };

    const Homebutton = () =>{
      setoption('home');
    };

    const ClickPage = () =>{
      setoption('searchpage');
    };


    return (
        <div className="min-h-screen p-6">
            {option === 'home' ? (
                <div className="flex flex-col items-center gap-4 mt-20">
                    <h1 className="text-3xl font-bold mb-6">Menu</h1>
                    <button onClick={ClickPlus} className="w-48 bg-blue-600 text-white rounded p-3 hover:bg-blue-700">Plus numbers</button>
                    <button onClick={Clickcalculator} className="w-48 bg-blue-600 text-white rounded p-3 hover:bg-blue-700">Calculator</button>
                    <button onClick={ClickPage} className="w-48 bg-blue-600 text-white rounded p-3 hover:bg-blue-700">Search Page</button>
                </div>
            ) : option === 'plus' ? (
                <>
                    <button onClick={Homebutton} className="mb-4 text-blue-600 hover:underline">← Home</button>
                    <Plus />
                </>
            ) : option === 'calculator' ? (
                <>
                    <button onClick={Homebutton} className="mb-4 text-blue-600 hover:underline">← Home</button>
                    <Calculator />
                </>
            ) : (
                <>
                    <button onClick={Homebutton} className="mb-4 text-blue-600 hover:underline">← Home</button>
                    <RickAndMortyPage />
                </>
            )}
        </div>
    );
}

export default App;
