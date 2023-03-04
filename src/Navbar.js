import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <>
        <div className="navbar">
           <header>
            <nav>
                <ul>
                    <li> <Link to="/"> Home</Link> </li>
                    <li><Link to="/sell">Sell</Link></li>
                    <li><Link to="/today">Today-Sell</Link></li>
                    <li><Link to="/mobile">Mobile</Link></li>
                    <li><Link to="/electronics">Electronics</Link></li>
                    <li><Link to="/fashion">Fashion</Link></li>
                    <li><Link to="">Celebrate 74 Happy Republic Day</Link></li>
                    
                    
                </ul>
               
            </nav>
           </header>
            

            
        </div>
        </>
    )
}

export default Navbar;