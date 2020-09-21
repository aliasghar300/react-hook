import React, { useEffect, useState } from "react";


const UseEffect = () => {
    
    const [count,setCount] = useState(0);
    
    const [name,setName] = useState()

    
    useEffect(()=> {
        console.log("state")
        document.title = count
        fetchApi()
    },[count])

    const fetchApi = () => fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res)=>{
        return(res.json());
    })
    .then((res2)=>{
        console.log(res2 , "res2");
    })    
    return (
        <div>
             <h1> UseEffect Component </h1>
            
            
            <h2> {count} </h2>
            <br /> <br /> 
            <button onClick={() => {
                setCount( count + 1)
            }}> Increase </button>
            <button onClick={() => {
                setCount( count - 1 )
            }}> Decrease </button>
            <br /> <br />

            <input value={name} onChange={(e)=> setName(e.target.value)} />
            <h2> {name} </h2>
        </div>
    )
}

export default UseEffect