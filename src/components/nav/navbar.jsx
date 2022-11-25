import React, { Component } from "react";
import { MenuData } from "./MenuData";
import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar-items">
        <h1 className="title-name">
          Power in Knowledge
          <img 
          className="title-image" 
          src="images/jack.png" />
        </h1>
        <ul>
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  <i className={item.icon}>{item.title}</i>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
