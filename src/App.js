import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { React } from "react";
import Home from "./Home";
import About from "./components/about";
import Item from "./components/Item";
import Landing from "./Landing";
import Products from "./components/Products";
import CartContext from "./components/CartContext";

export default function App() {
  return (
    <CartContext>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Landing />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:itemId" element={<Item />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </CartContext>
  );
}
