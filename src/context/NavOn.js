// import { createContext } from "react";
import React, { createContext, useState } from "react";

export const DisplayNav = createContext();

export const NavProvider = ({ children }) => {
  const [DisplayNav, setDisplayNav] = useState(false);

  const toggleNav = () => {
    setDisplayNav(!DisplayNav);
  };

  return (
    <DisplayNav.Context value={{ children, toggleNav }}>
      {children}
    </DisplayNav.Context>
  );
};
