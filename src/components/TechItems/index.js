import {Link} from 'react-router-dom'

import './index.css'

const TechItems = props => {
  const {itemDetails} = props
  const {name, logoUrl, id} = itemDetails

  return (
    <Link to={`/courses/${id}`} className="link">
      <li className="list-container">
        <img src={logoUrl} alt={`${name}`} className="tech-image" />

        <p className="name">{name}</p>
      </li>
    </Link>
  )
}
export default TechItems
