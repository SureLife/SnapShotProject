
import { Link } from 'react-router-dom'


function NavBar() {
    return (
    <nav className="NavContainer">
      <ul>
        <li><Link to="/mountain">Mountain</Link></li>
        <li><Link to="/beaches">Beaches</Link></li>
        <li><Link to="/birds">Birds</Link></li>
        <li><Link to="/food">Food</Link></li>
      </ul>
    </nav>
    )
}

export default NavBar;