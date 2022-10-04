import React from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useRemove, useList } from "../contexts/CartContext";

export default function ShoppingCart({ handleClose }) {
  let shoppingList = useList();
  const removeItem = useRemove();

  return (
    <div className="shopping-container">
      <div className="cart" style={{}}>
        <div className="added">
          <h4>ADDED TO BAG</h4>
          <span className="icon">
            <FaRegTimesCircle onClick={handleClose} />
          </span>
        </div>
        {shoppingList?.map((item) => {
          return (
            <div
              className="shopping-list"
              key={item.id + item.name + item.size}
            >
              <div className="item-image">
                <img src={item.image} alt="" />
              </div>
              <div className="item-detail">
                <p className="item-name">{item.name}</p>
                <p className="size">{item.size.toUpperCase()}</p>
                <p className="price">${item.price}</p>
                <input
                  type="number"
                  defaultValue={item.qty}
                  min="1"
                  style={{ width: "40px" }}
                />
                <input
                  type="button"
                  value="remove"
                  onClick={() => removeItem(item)}
                />
              </div>
            </div>
          );
        })}
        {shoppingList.length == 0 && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            Your cart is currently empty.
          </div>
        )}
        <div className="underline"></div>
        <div className="checkout">
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}
