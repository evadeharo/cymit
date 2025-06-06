import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { ProductDetail } from "./routes/ProductDetail";
import { ProductProvider } from "./context/ProductContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
