import React from "react";
import { useState } from "react";
import'./Counter.css'
const Counter=()=>{
    const[count,setCount]=useState(true)
    function change(){
        setCount(!count)
        console.log(count)
    }
        return(
            <div className="counter">
             <h1>Hi {count ? "true": "false"}</h1>
             <div>className={count ? "box-white" : "box-dark"}</div>
             <button onClick={change} className="btn_counter">Dark/white</button>
             </div>
            
        )

        }
    
export default Counter