import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const CreateAccount = () => {
  const provinceItems = [
    "Buenos Aires",
    "CABA",
    "Córdoba",
    "Santa Fe",
    "Mendoza",
    "Rosario",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santiago del Estero",
    "Tucumán",
    "Chaco",
    "Chubut",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Misiones",
    "Neuquén",
    "Río Negro",
  ];
  // Le puse el condicional para que si las contraseñas no coinciden no haga el submit
  let createUser = async () => {
    if (user.password === user.password2) {
      fetch("/api/customer/all", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          let i = 0;
          data.map((item) => {
            if (item.email === user.email) {
              i++;
            }
          });
          console.log(i);
          if (i == 0) {
            fetch("/api/customer/create/", {
              method: "POST",
              body: JSON.stringify(user),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((data) => {
                localStorage.setItem("user", JSON.stringify(data));
                window.location.href = "/ingresoExitoso";
              });
          } else {
            alert("El email ya existe");
          }
        });
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  const [user, setUser] = useState({
    name: "",
    surname: "",
    city: "",
    document: "",
    address: "",
    number: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
    province: "",
    floor: "",
    apartment: "",
    zip_Code: "",
    firstBuy: Date.now(),
    lastBuy: Date.now(),
    totalBuy: 3,
  });

  const {
    name,
    surname,
    city,
    document,
    address,
    number,
    email,
    phone,
    password,
    password2,
    province,
    floor,
    apartment,
    zip_Code,
  } = user;

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Form className="m-auto w-50">
      <h1>Datos Personales </h1>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            onChange={handleUser}
            name="name"
            type="name"
            placeholder="Agustin"
            value={name}
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            name="surname"
            type="name"
            placeholder="Iglesias"
            onChange={handleUser}
            value={surname}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={handleUser}
            value={password}
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Repetir Contraseña</Form.Label>
          <Form.Control
            name="password2"
            type="password"
            placeholder="Repetir Contraseña"
            onChange={handleUser}
            value={password2}
          />
        </Form.Group>
      </Row>
      <h1>Datos de Contacto </h1>

      <Form.Group className="mb-3">
        <Form.Label>E-Mail</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="AgusIglesias72@gmail.com"
          onChange={handleUser}
          value={email}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Documento</Form.Label>
          <Form.Control
            name="document"
            onChange={handleUser}
            value={document}
            type="number"
            placeholder="Documento"
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Teléfono Celular</Form.Label>
          <Form.Control
            name="phone"
            onChange={handleUser}
            value={phone}
            type="tel"
            placeholder="Número Celular"
          />
        </Form.Group>
      </Row>

      <h1>Datos Domicilio </h1>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Provincia</Form.Label>
          <Form.Select
            name="province"
            onChange={handleUser}
            value={province}
            type="text"
            defaultValue="Provincia"
          >
            <option disabled>Provincia</option>
            {provinceItems.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Localidad</Form.Label>
          <Form.Control
            name="city"
            onChange={handleUser}
            value={city}
            type="text"
            placeholder="Localidad"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3 w-75">
          <Form.Label>Calle</Form.Label>
          <Form.Control
            name="address"
            onChange={handleUser}
            value={address}
            type="text"
            placeholder="Ingrese su Calle"
          />
        </Form.Group>
        <Form.Group as={Col} className="w-25">
          <Form.Label>Número</Form.Label>
          <Form.Control
            name="number"
            onChange={handleUser}
            value={number}
            type="number"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Piso</Form.Label>
          <Form.Control name="floor" onChange={handleUser} value={floor} />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Departamento</Form.Label>
          <Form.Control
            name="apartment"
            onChange={handleUser}
            value={apartment}
            type="text"
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>C.P.</Form.Label>
          <Form.Control
            name="zip_Code"
            onChange={handleUser}
            value={zip_Code}
          />
        </Form.Group>
      </Row>

      <Button onClick={createUser} variant="primary" type="">
        Crear Cuenta
      </Button>
    </Form>
  );
};

export default CreateAccount;
