import React, {useState} from "react";

const Edad = ({handleEdadChange,handleClearAge, edad}) => {

  
  

  return <div>
    <input className="input_form" type="text" value={edad} placeholder="años"/>
  <article className="teclado">
    <section>
    <button onClick={() => handleEdadChange('1')}>1</button>
    <button onClick={() => handleEdadChange('2')}>2</button>
    <button onClick={() => handleEdadChange('3')}>3</button>
    </section>
    <section>
    <button onClick={() => handleEdadChange('4')}>4</button>
    <button onClick={() => handleEdadChange('5')}>5</button>
    <button onClick={() => handleEdadChange('6')}>6</button>
    </section>
    <section>
    <button onClick={() => handleEdadChange('7')}>7</button>
    <button onClick={() => handleEdadChange('8')}>8</button>
    <button onClick={() => handleEdadChange('9')}>9</button>
    </section>
    <section>
    <button onClick={() => handleEdadChange('0')}>0</button>
    </section>
    <button onClick={handleClearAge}>Clear</button>
  </article>
      

  </div>;
};

export default Edad;
