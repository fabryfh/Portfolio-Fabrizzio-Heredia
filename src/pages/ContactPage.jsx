import React from "react";
import "./styles/ContactPage.css";

const ContactPage = () => {
  return (
    <article>
      <section>
        <section>
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
        </section>

        <section>
          
        </section>

        <section>
        <div className="contact__container__footer animated slideInUp">
          <h1 className="contact__container__title">
            {/* Contactos */}
          </h1>
            <ul className="contact__list__container">
              <li className="contact__item">
                <a
                  href="https://www.linkedin.com/in/fabrizzio-heredia-2411b8225/"
                  target="_blank"
                  className="contact__link social__link-linkedin"
                >
                  <i className='bx bxl-linkedin-square bx-lg'></i>
                </a>
              </li>

              <li className="contact__item">
                <a
                  href="https://wa.me/593961475180"
                  target="_blank"
                  className="contact__link"
                >
                  <i className='bx bxl-whatsapp bx-lg'></i>
                </a>
              </li>

              <li className="contact__item">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=fabryheredia10%40gmail.com"
                  target="_blank"
                  className="contact__link"
                >
                  <i className='bx bx-envelope bx-lg'></i>
                </a>
              </li>

              <li className="contact__item">
                <a
                  href="https://github.com/fabryfh"
                  target="_blank"
                  className="contact__link"
                >
                  <i className='bx bxl-github bx-lg'></i>
                </a>
              </li>

              <li className="contact__item">
                <a
                  href="./Cvs/Dev-FH-ES.pdf"
                  // href="./Cvs/Dev-FH-EN.pdf"
                  target="_blank"
                  className="contact__link"
                  download={""}
                >
                 <i className='bx bxs-file-doc bx-lg'></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </article>

  );
};

export default ContactPage;
