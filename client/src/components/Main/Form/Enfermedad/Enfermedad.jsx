import React, { useState } from "react";
import HeartImg from "../../../../assets/images/Emojy-Corazon.svg";
import IntestineImg from "../../../../assets/images/Emojy-Intestino.svg";
import BrainImg from "../../../../assets/images/Emojy-Cerebro.svg";
import LungImg from "../../../../assets/images/Emojy-Pulmon.svg";

const Enfermedad = ({
  handleNeuroClick,
  handleLungClick,
  handleDigestClick,
  handleCardioClick,
}) => {
  const [styleCardio, setStyleCardio] = useState("regular");
  const [styleDigest, setStyleDigest] = useState("regular");
  const [styleNeuro, setStyleNeuro] = useState("regular");
  const [styleLung, setStyleLung] = useState("regular");

  return (
    <article className="disease">
      <div>
        <div className={`img-container-${styleCardio}`}>
          <img
            className="disease-img"
            src={HeartImg}
            onClick={() => {
              handleCardioClick();
              if (styleCardio === "regular") {
                setStyleCardio("selected");
              } else {
                setStyleCardio("regular");
              }
            }}
            style={{ cursor: "pointer" }}
          />
          <span>Cárdio</span>
        </div>
        <div className={`img-container-${styleDigest}`}>
          <img
            className="disease-img"
            src={IntestineImg}
            onClick={() => {
              handleDigestClick();
              if (styleDigest === "regular") {
                setStyleDigest("selected");
              } else {
                setStyleDigest("regular");
              }
            }}
            style={{ cursor: "pointer" }}
          />
          <span>Digestiva</span>
        </div>
      </div>
      <div>
        <div className={`img-container-${styleNeuro}`}>
          <img
            className="disease-img"
            src={BrainImg}
            onClick={() => {
              handleNeuroClick();
              if (styleNeuro === "regular") {
                setStyleNeuro("selected");
              } else {
                setStyleNeuro("regular");
              }
            }}
            style={{ cursor: "pointer" }}
          />
          <span>Neuronal</span>
        </div>
        <div className={`img-container-${styleLung}`}>
          <img
            className="disease-img"
            src={LungImg}
            onClick={() => {
              handleLungClick();
              if (styleLung === "regular") {
                setStyleLung("selected");
              } else {
                setStyleLung("regular");
              }
            }}
            style={{ cursor: "pointer" }}
          />
          <span>Pulmonar</span>
        </div>
      </div>
    </article>
  );
};

export default Enfermedad;
