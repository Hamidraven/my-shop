import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./components/about";
import Item from "./components/Item";

import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="*" element={<main>nothings here</main>} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="products/:itemId" element={<Item />} />
    </Routes>
  </Router>
);
