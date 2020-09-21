import React, { useState } from "react";

const FirstLastName = () => {

    const [form , setForm] = useState({
        firstName: "",
        lastName: "",
    })

    const submitHandler = (e) => {
        e.preventDefault();
    }
    
    const changeHandler = (event) => {
        let {name,value} = event.target
        setForm((prev) => ({
            ...prev,
            [name]: value
        })
            
        )
    }
    console.log(form);

    return (
        <div>
            <h1> First and Last Name Component </h1>
            <h2> {form.firstName} {form.lastName} </h2>
            <form onSubmit={submitHandler}>
                First Name: <span></span> 
                <input type="text" placeholder="First Name" name="firstName" value={form.firstName}  onChange={changeHandler} /> <br /><br />
                Last Name: <span></span> 
                <input type="text" placeholder="Last Name" name="lastName" value={form.lastName} onChange={changeHandler} /> 
                <br /><br /><br />
                <button type="submit">Click to Submit </button>
                
            </form>    
        </div>
    )
}

export default FirstLastName