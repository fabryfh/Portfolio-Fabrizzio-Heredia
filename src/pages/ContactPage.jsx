import React from "react";
import "./styles/ContactPage.css";

const ContactPage = () => {
  return (
    <div className="form__container animated pulse">
      <form className="form">
        <h1 className="heading">Contacto</h1>
        <div>
          <input
            className="input"
            placeholder="Nombre"
            type="text"
            id="name"
          />
        </div>
        <div>
          <input
            className="input"
            placeholder="Apellido"
            type="text"
            id="lastname"
          />
        </div>
        <div>
          <input
            className="input"
            placeholder="Número telefónico"
            type="text"
            id="phone"
          />
        </div>
        <div>
          <input
            className="input"
            placeholder="Correo"
            type="email"
            id="email"
          />
        </div>
        <button className="btn">Enviar</button>
      </form>
    </div>
  );
};

export default ContactPage;
