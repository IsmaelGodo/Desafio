import React from "react";
import NavbarImage from "../../../../assets/icons/navbar.svg";

const NavBar = () => {
  return (
    <article className="navbar-article">
      <nav
        className="navbar"
        style={{
          backgroundImage: `url(${NavbarImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="link-div">
        </div>
        <div className="link-div"></div>
        <div className="link-div"></div>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </nav>
    </article>
  );
};

export default NavBar;
