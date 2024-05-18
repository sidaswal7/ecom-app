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
        <form onSubmit={formHandler} className="flex justify-center flex-col items-center border py-4">
            <div className="mb-3 flex">
                <label htmlFor="name" className="mr-4 text-2xl font-medium">Name: </label>
                <input type="text" id="name" ref={nameRef} className="border-black border"/>
            </div>
            <div className="mb-3 flex">
                <label htmlFor="email" className="mr-4 text-2xl font-medium">Email Id: </label>
                <input type="email" id="email" ref={emailRef} className="border-black border"/>
            </div>
            <div className="mb-3 flex">
                <label htmlFor="number" className="mr-4 text-2xl font-medium">Number: </label>
                <input type="number" id="number" ref={numberRef} className="border-black border"/>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 p-2 rounded text-white ">Submit</button>

        </form>
    )
}

export default ContactForm;