import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Root = ()=>{
    return(
        <>
            <Header/>
            <h1 className="mb-8 py-8 text-black text-center font-bold text-4xl bg-gradient-to-r from-slate-500 to-white font-robo">
                UrbanCart
            </h1>
            <Outlet/>
        </>
    )
}

export default Root;