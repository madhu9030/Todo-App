import React, { useState } from "react";
import data from "../../json/productsData";
import Products from "./products";
import "./products.scss";
import Summary from "./summary";
import NavBarSearch from "./navBarSearch";

const Main = () => {
  const [products, setProducts] = useState(data.products);
  const [cartItems, setCartItems] = useState([]);
  const [input, setInput] = useState("");
  const [filterList, setFilterList] = useState(data.products);
  const addToCart = (e) => {
    const isExist = cartItems.find((data) => data.id === e.target.id);

    !isExist &&
      products.map((data) => {
        if (e.target.id === data.id) {
          return setCartItems([...cartItems, data]);
        }
      });

    isExist &&
      setCartItems(
        cartItems.map((item) => {
          if (e.target.id === item.id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        })
      );

    isExist &&
      e.target.dataset.remove &&
      setCartItems(
        cartItems.map((item) => {
          if (e.target.id === item.id && item.qty !== 1) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        })
      );

    if (e.target.dataset.remove && isExist.qty === 1) {
      setCartItems(cartItems.filter((item) => e.target.id !== item.id));
    }
  };

  const getFilterList = (e) => {
    setInput(e.target.value);
    const filtered = filterList.filter((product) => {
      if (product.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true;
      }
    });
    setProducts(filtered);
  };

  return (
    <div>
      <NavBarSearch
        setProducts={setProducts}
        products={products}
        input={input}
        getFilterList={getFilterList}
      />
      <div className="products-info">
        <Products
          products={products}
          setCartItems={setCartItems}
          addToCart={addToCart}
        />
        <Summary cartItems={cartItems} addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Main;
