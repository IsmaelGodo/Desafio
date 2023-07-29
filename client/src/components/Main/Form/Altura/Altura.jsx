import React, { useState } from "react";

const Altura = () => {
  
  const [displayedNumberHeight, setDisplayedNumberHeight] = useState('');

  const handleButtonClickHeight = (number) => {
    setDisplayedNumberHeight((prevNumber) => prevNumber + number);
  };

  const handleClearHeight = () => {
    setDisplayedNumberHeight('');
  };

  return (
    <div>
      <input type="text" value={displayedNumberHeight} />
      <div>
        <button onClick={() => handleButtonClickHeight('1')}>1</button>
        <button onClick={() => handleButtonClickHeight('2')}>2</button>
        <button onClick={() => handleButtonClickHeight('3')}>3</button>
        <button onClick={() => handleButtonClickHeight('4')}>4</button>
        <button onClick={() => handleButtonClickHeight('5')}>5</button>
        <button onClick={() => handleButtonClickHeight('6')}>6</button>
        <button onClick={() => handleButtonClickHeight('7')}>7</button>
        <button onClick={() => handleButtonClickHeight('8')}>8</button>
        <button onClick={() => handleButtonClickHeight('9')}>9</button>
        <button onClick={() => handleButtonClickHeight('0')}>0</button>
        <button onClick={handleClearHeight}>Clear</button>
      </div>
    </div>
  );
};

export default Altura;
