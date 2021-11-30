import React, { useState } from "react";
import Input from "./input";

function Login (props){
  const [fullName,setFullName ] = useState({
     fName: "",
     lName: "",
     eMail: ""
  })
  
     function change(event){
       const {name,value} = event.target;
      setFullName((prevvalue)=>{
        return {
             ...prevvalue, 
             [name] : value
        }
      })
      
}

   
    return(
    <div>
        <form className = "form">
               <h1 className ="Heading">HELLO {fullName.fName} {fullName.lName} {fullName.eMail}</h1>
               <form className= "form">
               <Input
                 onChange = {change}
                 name = "fName"
                 type = "text"
                 placeholder = "FirstName"
                 value = {fullName.fName}
               />
               <Input
                 onChange = {change}
                 name = "lName"
                 type = "text"
                 placeholder = "LastName" 
                 value = {fullName.lName}
               />
               <Input
                 onChange = {change}
                 name = "eMail"
                 type = "email"
                 placeholder = "Email" 
                 value = {fullName.eMail}
               />
                             <button  className="button" type = "submit">Login</button>
               </form>
               

        </form>
    </div>
    )

} 
export default Login;