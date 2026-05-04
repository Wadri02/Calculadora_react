import { useCalculator } from '../hooks/useCalculator';

function CalculatorPage() {
    const { display, handleNumber, handleOperator, handleEqual, handleClear, handleLastResult } = useCalculator();

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
            <h2 className="text-2xl font-bold mb-4">Calculator</h2>
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

export default CalculatorPage;
