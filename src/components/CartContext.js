import React, { useContext, useState, useEffect } from "react";

const ListContext = React.createContext();
const ListUpdateContext = React.createContext();

export function useList() {
  return useContext(ListContext);
}

export function useListUpdate() {
  return useContext(ListUpdateContext);
}

export default function CartContext({ children }) {
  // const [quantity, setQuantity] = useState(1);

  const sample = {
    id: 0,
    name: "BCC Hell-Fire Club",
    size: "Xsmall",
    image:
      "https://cdn.shopify.com/s/files/1/0660/0091/products/HELLFIRECLUB_MOCK.png?v=1657562857",
    price: "28,99",
    qty: 1,
  };

  const [shoppingList, setShoppingList] = useState([sample]);

  const addToCart = (item) => {
    // item.qty = quantity;
    shoppingList.forEach((product) => {
      if (product.size == item.size && product.id == item.id) {
        let index = shoppingList.findIndex((e) => e.id == product.id);
        shoppingList[index].qty += 1;
        setShoppingList(() => shoppingList);
        return;
      }
    });
  };

  return (
    <ListContext.Provider value={shoppingList}>
      <ListUpdateContext.Provider value={addToCart}>
        {children}
      </ListUpdateContext.Provider>
    </ListContext.Provider>
  );
}
