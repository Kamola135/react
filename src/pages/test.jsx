import React, { useEffect, useState } from "react";

export const Test = () => {
    const [count, setCount]= useState(0);
    useEffect(()=>{
        console.log('я раб')
    })
    return (
        <div>
            <h1>{}</h1>
            <button onClick={()=>setCount(count +1)}>посчитать</button>
        </div>
    );
};