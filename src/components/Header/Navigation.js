import React from "react";
import { Link } from "react-router-dom";
const Navigation = ()=> {
    return(
        <ul className="flex flex-row justify-center items-center">
            <li className="mr-10 text-xl">
                <Link to="/">HOME</Link>
            </li>
            <li className="mr-10 text-xl">
                <Link to="/store">STORE</Link>
            </li>
            <li className="text-xl">
                <Link to="/about">ABOUT</Link>
            </li>
        </ul>
    )
}

export default Navigation;