import React from "react";

const Products = ({ products, addToCart }) => {
  return (
    <div className="products-wrapper">
      {products &&
        products.map((product, i) => {
          return (
            <div className="products" key={i}>
              <img src={product.img} alt="" />
              <div>
                <div className="prop">{product.name}</div>
                <div className="prop">{product.color}</div>
                <div className="prop">${product.price}</div>
                <button
                  onClick={(e) => addToCart(e)}
                  className="animation button"
                  id={product.id}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
