import React, { useState } from "react";

const Enfermedad = ({handleNeuroClick,handleLungClick, handleDigestClick, handleCardioClick}) => {
  


  

  return (
    <div className="disease">
      <p>
      <div className="img-container">
     <img
        className="disease-img"
        src="../../../../../public/corazon.png"
        onClick={handleCardioClick}
        style={{ cursor: 'pointer' }}
      /></div>
      <div className="img-container">
     <img
        className="disease-img"
        src="../../../../../public/cerebro.png"
        onClick={handleNeuroClick}
        style={{ cursor: 'pointer' }}
      /></div></p>
      <p>
      <div className="img-container">
     <img
        className="disease-img"
        src="../../../../../public/intestino.png"
        onClick={handleDigestClick}
        style={{ cursor: 'pointer' }}
      /></div>
      <div className="img-container">
     <img
        className="disease-img"
        src="../../../../../public/pulmon.png"
        onClick={handleLungClick}
        style={{ cursor: 'pointer' }}
      /></div></p>
    </div>
  );
};

export default Enfermedad;
