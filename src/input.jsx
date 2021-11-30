import React from "react";


function Input (props){
    return (
        <div>
            <input className="input" name = {props.name} onChange = {props.onChange} type = {props.type} placeholder = {props.placeholder}/>
        
        </div>


    )
}
export default Input;