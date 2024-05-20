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
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" placeholder="Enter the Email" ref={emailRef}/>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" placeholder="Enter the Password" ref={passwordRef}/>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default AuthForm;