import { BrowserRouter as Router } from "react-router-dom";
import { React } from "react";
import CartContext from "./components/CartContext";
import AnimatedRoutes from "./components/AnimatedRoutes";

export default function App() {
  return (
    <CartContext>
      <Router>
        <AnimatedRoutes />
      </Router>
    </CartContext>
  );
}
