import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./components/about";
import Item from "./components/Item";
import Landing from "./Landing";
import Products from "./components/Products";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="products/:itemId" element={<Item />} />
        </Route>
      </Routes>
    </Router>
  );
}
