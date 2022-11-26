import React, { createContext, useState } from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

import Web from "./pages/webfund/Web";
import Webp2 from "./pages/webfund/Webp2";


import Withoutnav from "./components/withoutnav/Withoutnav";


export const ThemeContext = createContext(null);


const App = () => {
  const [theme, seTheme] = useState("light");

  const toggleTheme = () => {
    seTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>

        <div className="container" id="{theme}">
          <Router>
          <Navbar />

            <Routes>

                <Route path={'/'} element={<Navigate to='/Home' />} />
                <Route path={'/Home'} element={<Home />} />
                
                <Route path={'/Register'} element={<Register />} />
                <Route path={'/Dashboard'} element={<Dashboard />} />

                <Route element={ <Withoutnav /> }>
                    <Route path='/Login' element={<Login />} />
                </Route>

                <Route path={'/WF'} element={<Web />} />
                <Route path={'/WF2'} element={<Webp2 />} />
                

            </Routes>
          </Router>
          <Home />
        </div>
      
    </ThemeContext.Provider>
  );
};

export default App;
