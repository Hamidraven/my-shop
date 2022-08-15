import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/about";
import Item from "../pages/Item";
import Landing from "../pages/Landing";
import Products from "../pages/Products";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import ResetPassword from "../pages/ResetPassword";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/my-shop" element={<Home />}>
          <Route index element={<Landing />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:itemId" element={<Item />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="login/create-account" element={<CreateAccount />} />
          <Route path="login/reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
