import React from "react";
import { NavLink } from "react-router-dom";

const Footer = ()=>{
    return(
        <footer>
            <div className="flex justify-between px-16 text-blue-400 bg-black py-4 items-center text-xl mt-7">
                <h2 className="basis-1/2">UrbanCart&#169;</h2>
                <ul className="flex justify-between basis-1/2">
                    <li>
                        <NavLink to="/youtube.com">Youtube</NavLink>
                    </li>
                    <li>
                        <NavLink to="/linkedin.com">LinkedIn</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact.com">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;