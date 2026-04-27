import React, { useState } from 'react';

function Calculator() {
    const [display, setDisplay] = useState('0');
    const [lastResult, setLastResult] = useState(null);

    const handleNumber = (n) => {
        setDisplay(prev => prev === '0' ? String(n) : prev + n);
    };

    const handleOperator = (op) => {
        const lastChar = display[display.length - 1];
        if (['+', '-', '*', '/'].includes(lastChar)) {
            setDisplay(prev => prev.slice(0, -1) + op);
        } else {
            setDisplay(prev => prev + op);
        }
    };

    const handleEqual = () => {
        try {
            const result = eval(display);
            setLastResult(result);
            setDisplay(String(result));
        } catch {
            setDisplay('Error');
        }
    };

    const handleClear = () => setDisplay('0');

    const handleLastResult = () => {
        if (lastResult !== null) setDisplay(lastResult);
    };

    const calcButtons = [
        ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(n => ({ label: String(n), action: () => handleNumber(n) })),
        { label: '+', action: () => handleOperator('+') },
        { label: '-', action: () => handleOperator('-') },
        { label: '*', action: () => handleOperator('*') },
        { label: '=', action: handleEqual },
        { label: 'C', action: handleClear },
        { label: 'LRes', action: handleLastResult },
    ];

    return (
        <div className="p-6 max-w-xs mx-auto">
            <h2 className="text-2xl font-bold mb-4 ">Calculator</h2>
            <div className="bg-gray-100 rounded p-3 text-right text-xl mb-4 font-mono">
                {display}
            </div>
            <div className="grid grid-cols-4 gap-2">
                {calcButtons.map(({ label, action }) => (
                    <button
                        key={label}
                        onClick={action}
                        className="bg-white border border-gray-300 rounded p-3 hover:bg-gray-100 active:bg-gray-200 font-medium"
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Calculator;
