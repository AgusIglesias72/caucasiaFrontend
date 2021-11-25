import React, { useContext, useState } from "react";
import ImgCart from "./ImgCart";
import ImgHeader from "./ImgHeader";
import ImgMenu from "./ImgMenu";
import ListNavBar from "./ListNavBar";
import "./Header.css";
import { DisplayNav, NavProvider } from "../../context/NavOn";

const NavBar = () => {
  const [clickMenu, setClickMenu] = useState(false);

  const showMenu = () => {
    if (clickMenu) {
      setClickMenu(false);
    } else {
      setClickMenu(true);
    }
  };

  return (
    <>
      <div className="header">
        <ImgMenu fn={showMenu} />
        <ImgHeader />
        <ImgCart />
      </div>
      <ListNavBar
        navclass={clickMenu ? "show" : "notShow"}
        classtype={clickMenu ? "list-header" : "notShow"}
        closeMenu={showMenu}
      />
    </>
  );
};

export default NavBar;
