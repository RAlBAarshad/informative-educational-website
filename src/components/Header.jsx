import React from 'react';
import './Header.css';
import NavBar from "./NavBar"

function Header() {
  return (
    <div className="Header">

      {/* <img src={logo} alt="" className="logo"/>  */}

      <header>
        <h3> FUTURE ORIENTED </h3>
        <p> Explore Your Potentials </p>
      </header>
      <NavBar />

    </div>
  );
}

export default Header;
