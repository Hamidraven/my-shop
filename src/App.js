import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./components/about";
import Item from "./components/Item";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="products/:itemId" element={<Item />} />
        </Route>
      </Routes>
    </Router>
  );
}
