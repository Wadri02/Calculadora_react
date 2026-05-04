import { useState } from 'react';

export function useCalculator() {
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
        if (lastResult !== null) setDisplay(String(lastResult));
    };

    return { display, handleNumber, handleOperator, handleEqual, handleClear, handleLastResult };
}
