import {Link} from 'react-router-dom'

import Navbar from '../Navbar'

const NotFound = () => (
  <div className="bg-container">
    <Navbar />
    <div className="Notfound-container">
      <h1 className="heading">Page Not Found</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
        className="not-found"
      />
      <p>We are sorry, the page you requested could not be found</p>
      <Link to="/" className="link">
        <button type="button" className="button">
          Home
        </button>
      </Link>
    </div>
  </div>
)
export default NotFound
