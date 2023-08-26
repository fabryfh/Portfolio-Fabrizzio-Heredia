import './styles/NavBarDown.css'
import { Link } from 'react-router-dom'

const NavBarDown = () => {
  return (
    <article>
      <section>
        <ul className="navBar__down__list__container close-nav-down">
          <Link to="/certification">
            <li className="navBar__down__list">
            <span class="material-symbols-outlined">
            workspace_premium
            </span>
            </li>
          </Link>
          <Link to="/projects">
            <li className="navBar__down__list">
              <span className="material-symbols-outlined">developer_mode</span>
            </li>
          </Link>
          <Link to="/">
            <li className="navBar__down__list">
              <span className="material-symbols-outlined">home</span>
            </li>
          </Link>
          <Link to="/translate">
            <li className="navBar__down__list">
              <span className="material-symbols-outlined">emoji_objects</span>
            </li>
          </Link>
          <Link to="/contact">
            <li className="navBar__down__list">
            <span class="material-symbols-outlined">
            contacts
            </span>
            </li>
          </Link>
        </ul>
      </section>
    </article>
  )
}

export default NavBarDown