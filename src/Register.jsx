import React from "react";
import Input from "./input";



function Register(){
     return (
         <div>
             <form className = "form">
               <Input
                 type = "text"
                 placeholder = "Username"
               />
               <Input
                 type = "password"
                 placeholder = "password" 
               />
               <Input
                  type = "password"
                  placeholder = "Confirm Password"
               />
        </form>
         </div>
     )


}
