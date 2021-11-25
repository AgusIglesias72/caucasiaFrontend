import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { CloseButton } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { displayNav } from "../../context/NavOn";
import "./NavBar.css";

const ListNavBar = ({ navclass, classtype, closeMenu }) => {
  let navItems = [
    { name: "Inicio", ref: "/" },
    { name: "Nosotros", ref: "Nosotros" },
    { name: "Productos", ref: "Productos" },
    { name: "Contacto", ref: "Contacto" },
  ];

  const loged = JSON.parse(localStorage.getItem("user"));
  console.log(loged);

  return (
    <nav className={navclass}>
      <div>
        <CloseButton onClick={closeMenu} className="close-button" />
      </div>
      <ul className={classtype}>
        {navItems.map((items) => (
          <NavLink to={items.ref} key={items.name} className="header-item">
            {items.name}
          </NavLink>
        ))}
      </ul>
      {localStorage.getItem("user") ? (
        <NavLink to="/">
          <div className="nav-bottom">
            <FontAwesomeIcon
              icon={faUser}
              className="user-icon"
              color="black"
            />
            <p className="user-name">{loged.full_name}</p>
          </div>
        </NavLink>
      ) : (
        <NavLink to="/ingresar">
          <div className="nav-bottom">
            <FontAwesomeIcon icon={faUser} color="black" className="bars" />
            <p className="user-name">Ingresar</p>
          </div>
        </NavLink>
      )}
    </nav>
  );
};

export default ListNavBar;
