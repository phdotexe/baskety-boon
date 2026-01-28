import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Checkout from "./pages/Checkout.tsx";
import "./index.css";
//import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Checkout />
  </StrictMode>
);
