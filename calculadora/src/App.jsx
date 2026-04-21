import React, { useState } from 'react';

function App() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [showPlus, setshowPlus] = useState(false);
    const [showCalculator, setshowCalculator] = useState(false);
    
    const manejarSuma = () => {
        const resultado = Number(num1) + Number(num2);

        if (isNaN(resultado)){
            alert("Ingresar numeros validos para realizar la suma")
        }else{
            alert(`La suma es: ${resultado}`);
        }

    };

    const ClickbuttonPnumber = () =>  {
        setshowPlus(true);
    } ;

    const Clickcalculator = () =>  {
        setshowCalculator(true);
    } ;

    const Homebutton = () =>  {
        setshowPlus(false);
        setshowCalculator(false);
    } ;
    return(

        <>
         {!showPlus && !showCalculator && (
            <>
            <button type="button" onClick={ClickbuttonPnumber}>
            Plus numbers
            </button>
            <button type="button" onClick={Clickcalculator}>
            Calculator
            </button> 
            </>
            )
         }
         
         {showPlus && (
            <>
            <button type="button" onClick={Homebutton}>
            Home
            </button>
            <h2>Sumador</h2>
            <input type='number' value={num1} onChange={(e => setNum1(e.target.value))}></input>   
            <br></br>
            <input type='number' value={num2} onChange={(e => setNum2(e.target.value))}></input>   
            <br></br>
            <button onClick={manejarSuma}>Sumar</button>
            </>
            )
         }
         {showCalculator && (
            <>
            <button type="button" onClick={Homebutton}>
            Home
            </button>
            <h2>Calculator</h2>
             to do later......
            <input type='number' value={num1} onChange={(e => setNum1(e.target.value))}></input>   
            <br></br>
            <input type='number' value={num2} onChange={(e => setNum2(e.target.value))}></input>   
            <br></br>
            <button onClick={manejarSuma}>Sumar</button>
            </>
            )
         }
         
         
        </>
    );

}
export default App;