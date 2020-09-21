import React from "react";

const FetchApi = () => {
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res)=>{
        console.log(res);
    }  )

    return (
        <div>



        </div>
    )
}

export default FetchApi