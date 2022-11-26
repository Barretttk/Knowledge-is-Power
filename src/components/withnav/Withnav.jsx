import React from "react";
import Navbar from "./nav/Navbar";
import { Outlet } from "react-router";

export default () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
