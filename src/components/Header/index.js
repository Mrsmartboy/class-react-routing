import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-list-container">
      <div className="nav-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="nav-logo"
        />
        <h1 className="nav-head">Wave</h1>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-menu">
            Home
          </Link>
        </li>
        <li className="nav-menu">
          <Link to="/about" className="nav-menu">
            About
          </Link>
        </li>
        <li className="nav-menu">
          <Link to="/contact" className="nav-menu">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
