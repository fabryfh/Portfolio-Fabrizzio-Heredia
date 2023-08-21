import "./styles/NavBar.css";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <article className="navBar__father__container">
      <section className="navBar__container">
        <div className="navBar__title">
          <Link to='/'>
          <h1>Desarrollador FullStack</h1>
          </Link>
          <div className="navBar__btn__container">
            <button className="navBar__btn">
              <span className="material-symbols-outlined">translate</span>
            </button>
            <button className="navBar__btn">
              <span className="material-symbols-outlined">
                radio_button_partial
              </span>
            </button>
          </div>
        </div>
        <ul className="navBar__list__container">
          <Link to='/profile'>
          <li className="navBar__list">About me</li>
          </Link>
          <Link to='/projects'>
          <li className="navBar__list">Projects</li>
          </Link>
          <Link to='/translate'>
          <li className="navBar__list">Languages</li>
          </Link>
          <Link to='/contact'>
          <li className="navBar__list">Contact</li>
          </Link>
        </ul>
      </section>
    </article>
  );
};

export default NavBar;
