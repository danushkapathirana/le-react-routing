import React from "react";
import { NavLink } from "react-router-dom";

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? classes.active : undefined} end>Home</NavLink></li>
                    <li><NavLink to="/products" className={({ isActive }) => isActive ? classes.active : undefined}>Products</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation

// NavLink -> 
// has a special behavior which is className prop takes a function and returns the css class name that should be added to anchor tag

// end props => active only when url exactly end with "/"
