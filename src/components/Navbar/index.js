import {Link} from 'react-router-dom'

import './index.css'

const Navbar = () => (
  <div className="navbar-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
        className="logo"
      />
    </Link>
  </div>
)

export default Navbar
