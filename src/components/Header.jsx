import React from 'react';
import './Header.css';
import logo from "./acids/logo.jpg";
import NavBar from "./NavBar"

function Header() {
  return (
    <div className="Header">

      <img src={logo} alt="" className="logo"/> 
      <NavBar />

    </div>
  );
}

export default Header;
