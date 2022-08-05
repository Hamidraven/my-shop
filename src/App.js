import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { React } from "react";
import Home from "./Home";
import About from "./components/about";
import Item from "./components/Item";
import Landing from "./Landing";
import Products from "./components/Products";
import CartContext from "./components/CartContext";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import ResetPassword from "./components/ResetPassword";

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
            <Route path="login" element={<Login />} />
            <Route path="create-account" element={<CreateAccount />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
        </Routes>
      </Router>
    </CartContext>
  );
}
