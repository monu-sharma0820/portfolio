import React, { useEffect, useRef } from 'react';
import '../styleguides/style.css';

function Calculator() {
  const expressionRef = useRef(null);
  const resultRef = useRef(null);
  let expression = '';

  function append(value) {
    expression += value;
    expressionRef.current.innerText = expression;
  }

  function calculate() {
    try {
      const result = eval(expression.replace(/x/g, '*'));
      resultRef.current.innerText = result;
    } catch (err) {
      resultRef.current.innerText = 'Error';
    }
  }

  function clearDisplay() {
    expression = '';
    expressionRef.current.innerText = '';
    resultRef.current.innerText = '0';
  }

  useEffect((e) => {
    const handleKeyDown = (e) => {
      const key = e.key;
      console.log(key);
      if (/[\d]/.test(key)) {
        append(key);
      } else if (key === '+') {
        append('+');
      } else if (key === '-') {
        append('-');
      } else if (key === '*' || key === 'x') {
        append('x');
      } else if (key === '/') {
        append('/');
      } else if (key === 'Enter') {
        calculate();
      } else if (key === 'Escape') {
        clearDisplay();
      } else if (key === '.') {
        append('.');
      } else if (key === 'Backspace') {
        expression = expression.slice(0, -1);
        expressionRef.current.innerText = expression;
      }
    };
      window.addEventListener('keydown', handleKeyDown);
  },[]);

  return (
    <div className="calculator">
      <div className="output" ref={resultRef}>
        0
      </div>
      <div className="sub-output" ref={expressionRef}></div>
      <div className="buttons">
        <button onClick={() => append('7')}>7</button>
        <button onClick={() => append('8')}>8</button>
        <button onClick={() => append('9')}>9</button>
        <button onClick={() => append('+')}>+</button>

        <button onClick={() => append('4')}>4</button>
        <button onClick={() => append('5')}>5</button>
        <button onClick={() => append('6')}>6</button>
        <button onClick={() => append('-')}>−</button>

        <button onClick={() => append('1')}>1</button>
        <button onClick={() => append('2')}>2</button>
        <button onClick={() => append('3')}>3</button>
        <button onClick={() => append('x')}>×</button>

        <button onClick={clearDisplay}>C</button>
        <button onClick={() => append('0')}>0</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => append('/')}>÷</button>
      </div>
    </div>
  );
}

export default Calculator;
