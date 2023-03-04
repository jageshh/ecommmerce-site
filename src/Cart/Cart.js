import React from "react";

import './Cart.css';


function Cart({cartItem, setCart} ){


    function deleteItem(e){
        const id = Number(e.target.id);
        const filterData = Cart.filter((item, index)=>{
            return item.id !== id;

        })
        setCart(filterData);
    }

    return(
        
        <div className="cart-item">
           
            <div className="cart-itme-header">
                Cart Item
            </div>
            {cartItem.length === 0 && (
            <div className="cart-item-empty"> No Item Added There </div>)}
           
           <div>
            {cartItem.map((item)=>(
                <div key={item.id} 
                   className="cart-item-list">
                    <img className="cart-itme-image" 
                    src={item.img} 
                    alt={item.name}
                    height={300}
                    width={300}
                    />
                    <h1 className="heading"> Product Name:{item.name}</h1>
                    <h1 className="heading">Price:{item.price}</h1>
                    <p>Label: </p>
                    <button onClick={deleteItem}>Remove</button>
                
                </div>
            ))}
           </div>

        </div>
   
    )
}

export default Cart;