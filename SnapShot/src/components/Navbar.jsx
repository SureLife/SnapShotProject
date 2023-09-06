import {NavLink} from "react-router-dom"


export default function Navbar() {

    return (
        <nav>
            <ul>
                <li><NavLink to="/mountains">Mountains</NavLink></li>
                <li><NavLink to="/Beaches">Beaches</NavLink></li>
                <li><NavLink to="/Birds">Birds</NavLink></li>
                <li><NavLink to="/Food">Food</NavLink></li>
            </ul>
        </nav>
    )
}