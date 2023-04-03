import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <a className="name" href="/">
        Ayo Olabode
      </a>
      <ul className="Navbar__list">
        <li className="Navbar__list-item">
          <a href="/projects">Projects</a>
        </li>
        <li className="Navbar__list-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
