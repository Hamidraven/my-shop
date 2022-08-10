import { BrowserRouter as Router } from "react-router-dom";
import { React } from "react";
import CartContext from "./components/CartContext";
import AnimatedRoutes from "./components/AnimatedRoutes";

export default function App() {
  return (
    <CartContext>
      <Router basename=" https://parsa-parishan.github.io/My-shop/">
        <AnimatedRoutes />
      </Router>
    </CartContext>
  );
}
