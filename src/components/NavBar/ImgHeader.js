import logo from "./../../assets/Logo.jpeg";
import React from "react";
import { NavLink } from "react-router-dom";

const ImgHeader = () => {
  return (
    <NavLink to="/">
      <img src={logo} className="img-logo" alt="Logo" />
    </NavLink>
  );
};

export default ImgHeader;
