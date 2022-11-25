import React, { createContext, useState} from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
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
      </div>
    {/* </Router> */}
</ThemeContext.Provider>
  );
};

export default App;
