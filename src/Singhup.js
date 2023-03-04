import React from "react";
import "./Singhup.css";

function Singhup(){
    return(
        <>
        <div className="singup">
        <h2 className="hname">Please Enter Your Detail</h2>
        
        
            <label for='fname'>First Name:</label>
            <input type='text' placeholder="Enter Your First Name" id='fname'/>
           
            <br/>
            <label for='lname'>Last Name:</label>
            <input type='text' placeholder="Enter Your Last Name" id='lname'/>
            <br/>
            
            <label for='email'>Email Add:</label>
            <input type='text' placeholder="Enter Your Email" id='email'/>
            <br/>

            <label for='numbar'>Mobile No:</label>
            <input type='numbar' placeholder="Enter Your Mobile No" id='numbar'/>
            <br/>
            <button className="btn">Submit</button>
            </div>
        </>
    )
}

export default Singhup;