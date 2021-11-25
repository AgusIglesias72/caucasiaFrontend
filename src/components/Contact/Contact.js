import { FloatingLabel, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";

import "./Contact.css";

const Contact = () => {
  const [contact, setcontact] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    contact_time: Date.now(),
  });

  const { name, email, message, phone, contact_time } = contact;

  const handleContact = (e) => {
    setcontact({ ...contact, [e.target.name]: e.target.value });
  };
  const contactSubmit = async (e) => {
    e.preventDefault();
    fetch("/api/contact/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
  };

  return (
    <Form>
      <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicName">
        <FloatingLabel
          controlId="floatingInput"
          label="Nombre Apellido"
          className="mb-4 mt-4 "
        >
          <Form.Control
            className="form-group"
            type="name"
            placeholder="Nombre Apellido"
            onChange={handleContact}
            name="name"
            value={name}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Email" className="mb-4">
          <Form.Control
            className=""
            type="email"
            placeholder="name@example.com"
            onChange={handleContact}
            name="email"
            value={email}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Teléfono"
          className="mb-4"
        >
          <Form.Control
            className=""
            pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
            type="tel"
            placeholder="name@example.com"
            onChange={handleContact}
            name="phone"
            value={phone}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingTextarea2" label="Deja tu Consulta">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            onChange={handleContact}
            name="message"
            value={message}
          />
        </FloatingLabel>
        <Button
          onClick={contactSubmit}
          className="mt-4 w-100"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Contact;
