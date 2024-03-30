// index.jsx or App.js
import ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Screen } from "./screens/Screen";
// Corrected import statement for default export
import ProductDetail from "./screens/Screen/ProductDetail";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

root.render(
  <Router>
  <Routes>
    <Route path="/" element={<Screen />} />
    <Route path="/product/:id" element={<ProductDetail />} />
  </Routes>
</Router>
);
