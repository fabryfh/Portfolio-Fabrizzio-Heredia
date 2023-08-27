import "./styles/MainInfo.css";

const MainInfo = () => {
  return (
    <article>
      <section>
        <div className="contact__container">Portfolio borrador</div>
      </section>
      <footer>
        <div className="contact__container__footer">
          <h1 className="contact__container__title">
            Contactos
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
                  href="https://wa.me/573183769205"
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
                  href="https://github.com/JavierOspina07"
                  target="_blank"
                  className="contact__link"
                >
                  <i className='bx bxl-github bx-lg'></i>
                </a>
              </li>

              <li className="contact__item">
                <a
                  href="/documents/CV_AH_JavierOspina.pdf"
                  target="_blank"
                  className="contact__link"
                  download={""}
                >
                 <i className='bx bxs-file-doc bx-lg'></i>
                </a>
              </li>
            </ul>
          </div>
      </footer>
    </article>
  );
};

export default MainInfo;
