import "./styles/NavBar.css";
import { Link } from "react-router-dom";
import DarkMode from "../components/DarkMode";


const NavBar = () => {
  return (
    <article className="navBar__father__container">
      <section className="navBar__container">

        {/* <ul className="navBar__first__list__container close-nav-up">
          
        </ul> */}

        <div className="navBar__title">
          <Link to="/">
            <div className="navBar__name__container">
              <h1>Fabrizzio</h1>
              <h3>Heredia</h3>
            </div>
          </Link>
          <div className="navBar__btn__container">
            <button className="navBar__btn">
              <span className="material-symbols-outlined">translate</span>
            </button>
            <button className="navBar__btn" onClick={ () => DarkMode()}>
              <span className="material-symbols-outlined">
                radio_button_partial
              </span>
            </button>
          </div>
        </div>

        <ul className="navBar__list__container close-nav-up">
        <Link to="/profile">
            <li className="navBar__list">Sobre mi</li>
            <li></li>
          </Link>
          <Link to="/projects">
            <li className="navBar__list">Proyectos</li>
          </Link>
          <Link to="/translate">
            <li className="navBar__list">Habilidades</li>
          </Link>
          <Link to="/contact">
            <li className="navBar__list">Contacto</li>
          </Link>
        </ul>
      </section>
    </article>
  );
};

export default NavBar;
