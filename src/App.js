import { BrowserRouter as Router } from "react-router-dom";
import { React } from "react";
import CartContext from "./contexts/CartContext";
import AnimatedRoutes from "./router/AnimatedRoutes";

export default function App() {
  return (
    <CartContext>
      <Router>
        <AnimatedRoutes />
      </Router>
    </CartContext>
  );
}
