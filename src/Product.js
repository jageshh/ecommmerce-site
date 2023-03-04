import React from "react";

import "./product.css";
function Product({ productItems, tempdata, setCart, cartItem }) {

function handleCart(e){
  console.log(e.target.id);
  const id = Number(e.target.id);

  const filterData = productItems.filter((item, index)=>{
    return item.id == id;
   
});
console.log(filterData);
setCart([...cartItem,...filterData]);
}

  return (
    <>
      <div className="product">
        {tempdata.map((productItem, index) => (
          
            <div className="card" key={index}>
              <div>
                <img className="product-image" src={productItem.img} alt="product-deteail" />
              </div>
            

            <div>
                <h3 className="product-name">{productItem.name}</h3>
            </div>

            <div>
                <h3 className="product-price">${productItem.price}</h3>
            </div>

            <div>
                <button 
                id={productItem.id}
                className="product-add-button" 
                 onClick={handleCart}   
                    
                      >
                     Add to Cart
                  </button>
                  
            </div>
            
            </div>
          
        ))}
      </div>
    </>
  );
}

export default Product;
