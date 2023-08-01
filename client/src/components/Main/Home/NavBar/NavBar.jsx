import React, {useState} from "react";
//import NavbarImage from "../../../../assets/icons/navbar.svg";
import NavbarIcon from "../../../../assets/icons/Icono-Home-Menú.svg"
import NavbarIconAlt from "../../../../assets/icons/Icono-Home-Menú-Activado.svg"
import NavbarIcon2 from "../../../../assets/icons/Icono-Diagnostico-Menú.svg"
import NavbarIcon2Alt from "../../../../assets/icons/Icono-Diagnostico-Menú-Activado.svg"
import NavbarIcon3 from "../../../../assets/icons/Icono-Usuario-Menú.svg"
import NavbarIcon3Alt from "../../../../assets/icons/Icono-Usuario-Menú-Activado.svg"



const NavBar = () => {
  const [Hovered, setHovered] = useState(false);//Boton1
  const [Hovered2, setHovered2] = useState(false);//Boton2
  const [Hovered3, setHovered3] = useState(false);//Boton3
  //Boton 1
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  //Boton 2
  const handleMouseEnter2 = () => {
    setHovered2(true);
  };
  const handleMouseLeave2 = () => {
    setHovered2(false);
  };
  //Boton 3
  const handleMouseEnter3 = () => {
    setHovered3(true);
  };
  const handleMouseLeave3 = () => {
    setHovered3(false);
  };






  return (
    <article className="navbar-article">
      <nav className="navbar">
        <img src={Hovered ? NavbarIconAlt : NavbarIcon}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}/>
        <img src={Hovered2 ? NavbarIcon2Alt : NavbarIcon2}
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}/>
        <img src={Hovered3 ? NavbarIcon3Alt : NavbarIcon3}
        onMouseEnter={handleMouseEnter3}
        onMouseLeave={handleMouseLeave3}/>
        
      </nav>
    </article>
  );
};

export default NavBar;
