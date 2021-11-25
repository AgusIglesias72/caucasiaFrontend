import React, { useContext } from "react";
import { useParams } from "react-router";
import { DisplayNav, NavProvider } from "../../context/NavOn";
import imgMenu from "./../../assets/menu-icon.png";

const ImgMenu = ({ fn }) => {
  // const { toggleNav } = useContext(DisplayNav);

  return (
    <div onClick={fn} className="menu-container">
      <img src={imgMenu} className="img-menu" alt="menu"></img>
    </div>
  );
};

export default ImgMenu;
