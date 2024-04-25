// Code Keypad Component Here
import React from "react";

function Keypad (){
    return (
        <div>
         
           <input type="password" onChange={(e)=>{
            e.preventDefault();
            console.log('Entering password...')
         }}> 
         </input>
           
        </div>
    )
}

export default Keypad;