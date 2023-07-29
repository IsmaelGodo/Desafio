import React, { useState } from "react";

const Altura = ({displayedNumberHeight, handleButtonClickHeight, handleClearHeight}) => {
  
  

  return (
    <div>
      <input type="text" value={displayedNumberHeight} placeholder="cm"/>
      <article className="teclado">
        <section>
        <button onClick={() => handleButtonClickHeight('1')}>1</button>
        <button onClick={() => handleButtonClickHeight('2')}>2</button>
        <button onClick={() => handleButtonClickHeight('3')}>3</button>
        </section>
        <section>
        <button onClick={() => handleButtonClickHeight('4')}>4</button>
        <button onClick={() => handleButtonClickHeight('5')}>5</button>
        <button onClick={() => handleButtonClickHeight('6')}>6</button>
        </section>
        <section>
        <button onClick={() => handleButtonClickHeight('7')}>7</button>
        <button onClick={() => handleButtonClickHeight('8')}>8</button>
        <button onClick={() => handleButtonClickHeight('9')}>9</button>
        </section>
        <section>
        <button onClick={() => handleButtonClickHeight('0')}>0</button>
        </section>
        <button onClick={handleClearHeight}>Clear</button>
      </article>
    </div>
  );
};

export default Altura;
