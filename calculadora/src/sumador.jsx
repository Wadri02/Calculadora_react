import React, { useState } from 'react';

function Sumador() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    
    const manejarSuma = () => {
        const resultado = Number(num1) + Number(num2);

        if (isNaN(resultado)){
            alert("Ingresar numeros validos para realizar la suma")
        }else{
            alert(`La suma es: ${resultado}`);
        }

    };
    return(
        <di> 
         <h2>Sumador</h2>
         <input type='number' value={num1} onChange={(e => setNum1(e.target.value))}></input>   
         <br></br>
         <input type='number' value={num2} onChange={(e => setNum2(e.target.value))}></input>   
         <br></br>
         <button onClick={manejarSuma}>Sumar</button>
        </di>
    );

}
export default Sumador;