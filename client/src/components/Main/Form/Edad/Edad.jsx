import React, {useState} from "react";

const Edad = () => {
  const [edad, setEdad] = useState('0');
  const handleEdadChange = (event) => {
    setEdad(event.target.value);
  };
  
  

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
