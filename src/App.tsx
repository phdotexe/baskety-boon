import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout.tsx";
import CallBackPage from "./pages/CallBackPage.tsx";
import Home from "./pages/Home.tsx";
function App() {
  const [page, setPage] = useState<"home" | "checkout" | "payment-callback">(
    "home",
  );

  return (
    <>
      <Router>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-callback" element={<CallBackPage />} />
        </Routes>
      </Router>
      {page === "checkout" && <Checkout />}
      {page === "home" && <Home />}
      <button
        onClick={() => {
          setPage("checkout");
        }}
      >
        Checkout
      </button>
      <button
        onClick={() => {
          setPage("home");
        }}
      >
        Home
      </button>
    </>
  );
}

export default App;
