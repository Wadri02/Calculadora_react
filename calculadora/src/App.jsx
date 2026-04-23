import React, { useState } from 'react';

function App() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [option, setoption] = useState('home');
    const [display, setDisplay] = useState('0');
    const [lastResult, setLastResult] = useState(null);
    
    const manejarSuma = () => {
        const resultado = Number(num1) + Number(num2);

        if (isNaN(resultado)){
            alert("Ingresar numeros validos para realizar la suma")
        }else{
            alert(`La suma es: ${resultado}`);
        }

    };

    const ClickPlus = () =>  {
        setoption('plus');
    } ;

    const Clickcalculator = () =>  {
        setoption('calculator');
    } ;

    const Homebutton = () =>  {
        setoption('home');
    } ;

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

    const handleClear = () => {
        setDisplay('0');
    };

    const handleLastResult = () => {
        if (lastResult !== null) {
            setDisplay(lastResult);
        }
    };

    const calcButtons = [
        ...[1,2,3,4,5,6,7,8,9,0].map(n => ({ label: String(n), action: () => handleNumber(n) })),
        { label: '+', action: () => handleOperator('+') },
        { label: '-', action: () => handleOperator('-') },
        { label: '*', action: () => handleOperator('*') },
        { label: '=',                  action: handleEqual },
        { label: 'C',                  action: handleClear },
        { label: 'LastResult', action: handleLastResult },
    ];

    const renderButtons = (buttons) => {
        return buttons.map(({ label, action }) => (
        <button key={label} onClick={action}>{label}</button>
        ));
    };


    return(
        <>
        {option === 'home' ? (
            <>
                <button onClick={ClickPlus}>Plus numbers</button>
                <button onClick={Clickcalculator}>Calculator</button>
            </>
        ) : option === 'plus' ? (
            <>
                <button onClick={Homebutton}>Home</button>
                <h2>Sumador</h2>
                <input type='number' value={num1} onChange={e => setNum1(e.target.value)} />
                <br />
                <input type='number' value={num2} onChange={e => setNum2(e.target.value)} />
                <br />
                <button onClick={manejarSuma}>Sumar</button>
            </>
        ) : (
            <>
                <button onClick={Homebutton}>Home</button>
                <h2>Calculator</h2>

                <div>{display}</div>

                {renderButtons(calcButtons)}
                </>
        )}
        </>
    );

}
export default App;