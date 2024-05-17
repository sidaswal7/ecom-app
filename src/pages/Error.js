import React from "react";
import Header from "../components/Header/Header";

const ErrorPage = ()=>{
    return(
        <>
            <Header/>
            <h1 className="mb-8 py-8 text-black text-center font-bold text-4xl bg-gradient-to-r from-slate-500 to-white font-robo">
                UrbanCart
            </h1>
            <h1 className="text-center text-3xl font-medium text-red-600 mb-8">An Error Occured!</h1>
            <h4 className="text-center text-2xl font-normal ">Could not find this page</h4>
        </>
    )
}

export default ErrorPage;