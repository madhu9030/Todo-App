import React from "react";

const Summary = ({ cartItems, addToCart }) => {
  const cartPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalCartItems = cartItems.reduce((a, c) => a + c.qty, 0);
  const taxPrice = cartPrice * 0.1;
  const shippingPrice = cartPrice < 2000 ? 100.0 : 0.0;
  const totalPrice = cartPrice + taxPrice + shippingPrice;
  return (
    <div className="summary-wrapper">
      <div className="cart-items">
        Cart Items
        <i className="fas fa-shopping-cart">
          <span className="summary-total-items">{totalCartItems}</span>
        </i>
      </div>
      <div className="border"></div>
      {!cartItems.length ? (
        <div style={{ paddingTop: "10px" }}>Cart Is Empty</div>
      ) : (
        ""
      )}
      {cartItems &&
        cartItems.map((data, i) => {
          return [
            <div className="cart-items-info fade-in" key={i}>
              <img src={data.img} />
              <div>{data.name}</div>
              <div className="cart-item-buttons">
                <button
                  className="button animation"
                  id={data.id}
                  onClick={(e) => addToCart(e)}
                >
                  +
                </button>
                <button
                  className="button animation"
                  id={data.id}
                  onClick={(e) => addToCart(e)}
                  data-remove="remove"
                >
                  -
                </button>
              </div>
              <div>{`${data.qty} x ${data.price}.00`}</div>
            </div>,
            <div className="border"></div>,
          ];
        })}
      {cartItems.length ? (
        <div className="summary fade-in">
          <div className="summary-title">Summary</div>
          <div className="border" />

          <div className="item-summary">
            <div>Item Price</div>
            <div>${cartPrice}.00</div>
          </div>
          <div className="item-summary">
            <div>Shipping Price</div>
            <div>${shippingPrice}.00</div>
          </div>
          <div className="item-summary">
            <div>Tax Price</div>
            <div>${taxPrice.toFixed(2)}</div>
          </div>
          <div className="item-summary">
            <div>Total Price</div>
            <div>${totalPrice}.00</div>
          </div>
          <div className="border"></div>
        </div>
      ) : (
        ""
      )}
      {cartItems.length ? (
        <div>
          <button className="fade-in button animation checkout-button">
            Checkout
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Summary;
