import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//import NavbarImage from "../../../../assets/icons/navbar.svg";
import NavbarIcon from "../../../../assets/icons/Icono-Home-Menú.svg";
import NavbarIconAlt from "../../../../assets/icons/Icono-Home-Menú-Activado.svg";
import NavbarIcon2 from "../../../../assets/icons/Icono-Diagnostico-Menú.svg";
import NavbarIcon2Alt from "../../../../assets/icons/Icono-Diagnostico-Menú-Activado.svg";
import NavbarIcon3 from "../../../../assets/icons/Icono-Usuario-Menú.svg";
import NavbarIcon3Alt from "../../../../assets/icons/Icono-Usuario-Menú-Activado.svg";

const NavBar = () => {
  const navigate = useNavigate();

  let location = useLocation();
  console.log(location.pathname);

  const [Hovered, setHovered] = useState(false); //Boton1
  const [Hovered2, setHovered2] = useState(false); //Boton2
  const [Hovered3, setHovered3] = useState(false); //Boton3

  //Boton 1
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleClick1 = () => {
    navigate("/home");
  };
  //Boton 2
  const handleMouseEnter2 = () => {
    setHovered2(true);
  };
  const handleMouseLeave2 = () => {
    setHovered2(false);
  };
  const handleClick2 = () => {
    navigate("/diagnostic");
  };
  //Boton 3
  const handleMouseEnter3 = () => {
    setHovered3(true);
  };
  const handleMouseLeave3 = () => {
    setHovered3(false);
  };
  const handleClick3 = () => {
    navigate("/perfil");
  };

  return (
    <article className="navbar-article">
      <nav className="navbar">
        <img
          src={Hovered ? NavbarIconAlt : NavbarIcon}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick1}
        />
        <img
          src={Hovered2 ? NavbarIcon2Alt : NavbarIcon2}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          onClick={handleClick2}
        />
        <img
          src={Hovered3 ? NavbarIcon3Alt : NavbarIcon3}
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
          onClick={handleClick3}
        />
      </nav>
    </article>
  );
};

export default NavBar;
