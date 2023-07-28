import React, {useState} from "react";

const Edad = ({handleEdadChange, edad}) => {

  
  

  return <div><form>
    <h3> Edad(Años):{edad}</h3>
      <input
        type="range"
        min="0"
        max="99"
        step="1"
        value={edad}
        onChange={handleEdadChange}
        ></input>
  </form>
      

  </div>;
};

export default Edad;
