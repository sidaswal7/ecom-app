import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = ()=> {
    return(
        <ul className="flex flex-row justify-center items-center">
            <li className="mr-10 text-xl">
                <NavLink to="/" className={({isActive})=> isActive ? "text-white":''} end>HOME</NavLink>
            </li>
            <li className="mr-10 text-xl">
                <NavLink to="/store" className={({isActive})=> isActive ? "text-white":''}>STORE</NavLink>
            </li>
            <li className="text-xl">
                <NavLink to="/about" className={({isActive})=> isActive ? "text-white":''}>ABOUT</NavLink>
            </li>
        </ul>
    )
}

export default Navigation;