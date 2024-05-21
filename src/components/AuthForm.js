import React, { useContext, useRef } from "react";
import AuthContext from "../store/auth-context";
import { useHistory } from "react-router-dom";

const AuthForm = ()=>{

    const emailRef = useRef("");
    const passwordRef = useRef("");
    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const submitHandler = (event)=>{
        event.preventDefault();
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        (async function userLogin(){
            try{
                const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDKpQmIEPT8eyeXq8I2CL6uG3yVvSXoMNA',{
                    method: 'POST',
                    body: JSON.stringify({
                        email: enteredEmail,
                        password: enteredPassword,
                        returnSecureToken: true
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const data = await response.json()
                if(response.ok){
                    authCtx.login(data.idToken);
                    history.replace('/store');
                } else{
                    throw new Error(data.error.message)
                }

            }catch (error){
                alert(error.message)
            }
        })();
    }
    return(
        <div className="h-screen flex justify-center items-start mt-5">
            <form onSubmit={submitHandler} className=" border-2 p-4 w-1/3 h-72 shadow-lg rounded-md">
            <h1 className="text-2xl font-medium text-center my-2">Login</h1>
                <div>
                    <label htmlFor="email" className="block text-lg font-medium">Email: </label>
                    <input type="email" id="email" ref={emailRef} className="border-black border w-full py-1 mb-2"/>
                </div>
                <div>
                    <label htmlFor="password" className="block text-lg font-medium">Password: </label>
                    <input type="password" id="password" ref={passwordRef} className="border-black border w-full py-1 mb-1"/>
                </div>
                <div className="flex justify-center items-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 p-2 rounded text-white mt-5 px-8">Login</button>
                </div>
            </form>
        </div>
    )
}

export default AuthForm;