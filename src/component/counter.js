import React,{useState} from "react";

const Counter = () => {
    
    const [count,setCount] = useState(0)

    const increment = () => {
        setCount(1 + count)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    
    return (
        <div>
            <h1> Counter </h1>
            {count} <br/> <br/>
            <button onClick={increment}> INCREMENT </button>
            <button onClick={decrement}> DECREMENT </button>
        </div>
    )
}

export default Counter