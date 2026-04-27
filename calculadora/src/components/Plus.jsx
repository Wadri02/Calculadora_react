import React, { useState } from 'react';

function Plus() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');

    const manejarSuma = () => {
        const resultado = Number(num1) + Number(num2);
        if (isNaN(resultado)) {
            alert('Ingresar numeros validos para realizar la suma');
        } else {
            alert(`La suma es: ${resultado}`);
        }
    };

    return (
        <div className="p-6 max-w-xs mx-auto">
            <h2 className="text-2xl font-bold mb-4">Sumador</h2>
            <div className="flex flex-col gap-3">
                <input
                    type="number"
                    value={num1}
                    onChange={e => setNum1(e.target.value)}
                    className="border border-gray-300 rounded p-2 text-center"
                    placeholder="Número 1"
                />
                <input
                    type="number"
                    value={num2}
                    onChange={e => setNum2(e.target.value)}
                    className="border border-gray-300 rounded p-2 text-center"
                    placeholder="Número 2"
                />
                <button
                    onClick={manejarSuma}
                    className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 active:bg-blue-800 font-medium"
                >
                    Sumar
                </button>
            </div>
        </div>
    );
}

export default Plus;
