import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <article className="navBar__father__container">
      <section className="navBar__container">
        <div className="navBar__title">
          <h1>
            Desarrollador FullStack
          </h1>
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
          <li className="navBar__list">About me</li>
          <li className="navBar__list">Projects</li>
          <li className="navBar__list">Languages</li>
          <li className="navBar__list">Contact</li>
        </ul>
      </section>
    </article>
  );
};

export default NavBar;
