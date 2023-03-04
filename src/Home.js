import React from "react";
import './Home.css';

import './App.css'
import productItems from './back/Data.js'
import Product from "./Product.js";
import Annoucne from "./Components/Anounce.js";
import Slider from "./Components/Slider";
//import Category from "./Components/Category";



function Home({tempdata, setCart, cartItem}){
 
    return(
        <>
        
      
       <Annoucne/>
       <Slider/>
      
       <Product productItems={productItems} tempdata={tempdata} setCart={setCart} cartItem={cartItem} />
       
        </>
    )

}

export default Home;