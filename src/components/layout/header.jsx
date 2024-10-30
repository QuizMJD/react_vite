import"./header.css"
import {Link, NavLink} from "react-router-dom";
const Header = () => {
    return (

        <ul>
            <li><NavLink  class="active" to="/">Home</NavLink></li>
            <li><NavLink to="/users">User</NavLink></li>
            <li><NavLink to="/products">Product</NavLink></li>

        </ul>

    )
}
export default Header