import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = login;

  const handleLogin = (e) => {
    e.preventDefault();
    setlogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    fetch("/api/customer/all", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          data.map((item) => {
            if (item.email === email && item.password === password) {
              localStorage.setItem("user", JSON.stringify(item));
              window.location.href = "/";
            }
          });
        }
      });
  };

  return (
    <div className="form">
      <Form className="w-100">
        <Form.Group className="mb-3">
          <Form.Label className="labels">E-Mail</Form.Label>
          <Form.Control
            onChange={handleLogin}
            className="p-3"
            type="email"
            name="email"
            value={email}
            placeholder="Ingresa tu mail"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="labels">Contraseña</Form.Label>
          <Form.Control
            onChange={handleLogin}
            className="p-3"
            type="password"
            name="password"
            value={password}
            placeholder="Contraseña"
          />
        </Form.Group>
      </Form>
      <NavLink to="/ingresar/crearCuenta">
        <p className="createAccount">Crear cuenta</p>
      </NavLink>
      <Button
        onClick={handleSubmit}
        className="button"
        variant="primary"
        type="submit"
      >
        Iniciar Sesión
      </Button>
    </div>
  );
};

export default Login;
