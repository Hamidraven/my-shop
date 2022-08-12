import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home";
import About from "./about";
import Item from "./Item";
import Landing from "../Landing";
import Products from "./Products";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import ResetPassword from "./ResetPassword";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
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
    </AnimatePresence>
  );
}
