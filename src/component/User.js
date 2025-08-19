import { useState,useEffect } from "react";

const User=(props)=>{
    const [count,setCount] = useState(0);
    const [count2] = useState(1);
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("user component render.")},1000)

            return()=>{
                clearInterval(timer)//this is used for unmounting .otherwise it will run in backgrond and render every time we visit.
            }
    },[])
    return(
        <div className="user-card">
            <h1>Count : {count}</h1>
            <button onClick={()=>setCount(count=>count+1)}>Increse Count</button>
            <h1>Count2 : {count2}</h1>
            <h2>hello {props.name} here !</h2>
            <p>I am from Kolkata</p>
        </div>
    );
};
export default User;