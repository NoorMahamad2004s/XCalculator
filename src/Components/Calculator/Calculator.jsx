
import './Calculator.css';
import { useState } from 'react';


const Calculator = ()=>{

    const[display, setDisplay] = useState('');
    const [result, setResult] = useState('');


   const addToDisplay = (value)=>{
        setDisplay(prevDisplay=>prevDisplay+value)
   }

   const clearDisplay = ()=> {
        setDisplay('');
        setResult('');
   }
   

   const calculate = () => {
    try {
      let calculatedResult = eval(display);
      if (isNaN(calculatedResult)) {
        setResult("NaN"); // Handling 0/0 case
      } else if (!isFinite(calculatedResult)) {
        setResult("Infinity"); // Handling division by zero case
      } else {
        setResult(calculatedResult.toString());
      }
    } catch (error) {
      setResult('Error'); // Handling other errors
    }
  };

    return(

        <div className="calculator">
            <h1>React Calculator</h1>

            <div className="inp">
                <input type="text" value={display} disabled/>
            </div>
            <div className="result">{result}</div>

            <div className="calsBtns">

            <div className="firstRow">
                <button onClick={() => addToDisplay('7')}>7</button>
                <button onClick={() => addToDisplay('8')}>8</button>
                <button onClick={() => addToDisplay('9')}>9</button>
                <button onClick={() => addToDisplay('+')}>+</button>
            </div>

            <div className="secondRow">
                <button onClick={()=> addToDisplay('4')}>4</button>
                <button onClick={()=> addToDisplay('5')}>5</button>
                <button onClick={()=> addToDisplay('6')}>6</button>
                <button onClick={()=> addToDisplay('-')}>-</button>
            </div>

            <div className="thirdRow">
                <button onClick={()=> addToDisplay('1')}>1</button>
                <button onClick={()=> addToDisplay('2')}>2</button>
                <button onClick={()=> addToDisplay('3')}>3</button>
                <button onClick={()=> addToDisplay('4')}>*</button>
            </div>

            <div className="fourthRow">
                <button onClick={clearDisplay}>C</button>
                <button onClick={()=> addToDisplay('0')}>0</button>
                <button onClick={calculate}>=</button>
                <button onClick={()=> addToDisplay('/')}>/</button>
            </div>

            </div>
        </div>

        
    )
}

export default Calculator;