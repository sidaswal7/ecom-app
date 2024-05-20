import React, { createContext, useState } from "react";

const AuthContext = createContext({
    jwtToken:"",
    isLoggedIn: false,
    login:()=>{},
    logout:()=>{}
})

export const AuthContextProvider = (props)=>{

    const [token, setToken] = useState(localStorage.getItem('jwtToken'));
    const isLoggedIn = !!token;

    const loginHandler = (token)=>{
        setToken(token);
        localStorage.setItem('jwtToken',token);
    }
    const logoutHandler = ()=>{
        setToken(null);
        localStorage.removeItem('jwtToken');
    }
    const ctxValue = {
        jwtToken: token,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    return (
        <AuthContext.Provider value={ctxValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;