import React, { Component, useState} from "react";
import { MenuData } from "./MenuData";
import "./navbar.scss";

class Navbar extends React.Component {
    state = {clicked: false};
    handleClick =() => {
        this.setState({clicked: !this.state.clicked})
    }

  render() {
    return (
      <nav className="navbar-items">
        <h1 className="title-name">
          Power in Knowledge
          <img 
          className="title-image" 
          src="images/jack.png" alt="" />
        </h1>
        <div className="menu-ham" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
            </i>
        </div>
        <ul className={this.state.clicked ? 'links active' : 'links' }>
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
