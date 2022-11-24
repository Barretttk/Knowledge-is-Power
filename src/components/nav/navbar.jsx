import React from "react";
import { Component } from "react";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar-items">
                <h1> 
                    Power in Knowledge
                    <img 
                    src="images/jack.png"/>
                </h1>
            
            </nav>
        )
    }
}

export default Navbar;