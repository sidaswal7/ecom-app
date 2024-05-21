import React, { useRef } from "react";

const ContactForm = ()=> {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const numberRef = useRef('');

    const formHandler = (event)=>{
        event.preventDefault();

        const userData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            number: numberRef.current.value
        }
        async function submitData() {
            const response = await fetch(
              'https://ecom-app-ddeb9-default-rtdb.firebaseio.com/userData.json',
              {
                method: 'POST',
                body: JSON.stringify(userData),
              }
            );
            const data = await response.json();
            console.log(data);
          }
      
          submitData();

    }
    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={formHandler} className=" border-2 p-4 w-1/3 h-96 shadow-lg rounded-md">
                <h1 className="text-2xl font-medium text-center my-3">Contact Form</h1>
                <div className="mb-3">
                    <label htmlFor="name" className="mr-4 text-xl block font-medium  mb-1">Name: </label>
                    <input type="text" id="name" ref={nameRef} className="border-black border w-full py-1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="mr-4 text-xl block font-medium mb-1">Email Id: </label>
                    <input type="email" id="email" ref={emailRef} className="border-black border w-full py-1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="mr-4 text-xl block font-medium mb-1">Number: </label>
                    <input type="number" id="number" ref={numberRef} className="border-black border w-full py-1"/>
                </div>
                <div className="flex justify-center items-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 p-2 rounded text-white my-3 px-8">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default ContactForm;