import {Link, NavLink} from "react-router-dom"
import classes from "./menu.module.css";

function Menu () {

    return (
        <ul>
            <li>
                {/*<Link to="/">Main page</Link>*/}
                <NavLink to="/" className={classes.link}>Main page</NavLink>
            </li>
            <li>
                {/*<Link to="/users">Users page</Link>*/}
                <NavLink to="/users" className={classes.link}>Users page</NavLink>
            </li>
            <li>
                <NavLink to='/forms' className={classes.link}>Contacts</NavLink>
            </li>
        </ul>
    )
}

export default Menu;