import React, { useContext, useState } from "react";

const ListContext = React.createContext();
const ListUpdateContext = React.createContext();
const RemoveContext = React.createContext();

export function useList() {
  return useContext(ListContext);
}

export function useListUpdate() {
  return useContext(ListUpdateContext);
}

export function useRemove() {
  return useContext(RemoveContext);
}

export default function CartContext({ children }) {
  // const [quantity, setQuantity] = useState(1);

  const [shoppingList, setShoppingList] = useState([]);

  const addToCart = (item) => {
    // item.qty = quantity;

    //CHECK IF ITEM ALREADY EXIST IN ORDER TO ADD NEW ITEM OR TO CHANGE QUANTITY
    let index = shoppingList?.findIndex(
      (e) => e.id == item.id && e.size == item.size
    );
    if (index > -1) {
      shoppingList[index].qty += 1;
      setShoppingList(() => shoppingList);
    } else {
      setShoppingList(() => [item, ...shoppingList]);
    }
  };

  //REMOVE ITEM FROM SHOPPING CART
  const removeItem = (item) => {
    setShoppingList((shoppingList) => {
      return shoppingList.filter((product) => product != item);
    });
  };

  return (
    <ListContext.Provider value={shoppingList}>
      <ListUpdateContext.Provider value={addToCart}>
        <RemoveContext.Provider value={removeItem}>
          {children}
        </RemoveContext.Provider>
      </ListUpdateContext.Provider>
    </ListContext.Provider>
  );
}
