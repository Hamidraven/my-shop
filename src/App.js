import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { React, useState } from "react";
import Home from "./Home";
import About from "./components/about";
import Item from "./components/Item";
import Landing from "./Landing";
import Products from "./components/Products";
import products from "./components/data";

export default function App() {
  const [items, setItems] = useState(products);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Landing />} />
          <Route
            path="products"
            element={<Products/>}
          />
          <Route path="products/:itemId" element={<Item />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}
