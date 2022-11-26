import React, { createContext, useState} from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./styles.css";


export const ThemeContext = createContext(null);

const App = () => {

const [theme,seTheme] = useState('light');

const toggleTheme = () => {
    seTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    };

  return (

<ThemeContext.Provider value={{ theme, toggleTheme}}>
    
    {/* <Router> */}
      <div className="container" id="{theme}">
        <Navbar />
        <Home />
        <Register />
        <Login />
      </div>
    {/* </Router> */}
</ThemeContext.Provider>
  );
};

export default App;
