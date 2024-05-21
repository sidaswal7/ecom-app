import React from "react";

const ErrorPage = ()=>{
    return(
        <div className="h-screen flex justify-center items-center">
            <div>
                <h1 className="text-center text-3xl font-medium text-red-600 mb-8">An Error Occured!</h1>
                <h4 className="text-center text-2xl font-normal ">Could not find this page</h4>
            </div>
        </div>
    )
}

export default ErrorPage;