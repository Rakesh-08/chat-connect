import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Checkout from "./component/Checkout/Checkout";
import { useState } from "react";

export default function App() {
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          searchProduct={searchProduct}
          setSearchProduct={setSearchProduct}
        />
        <Routes>
          <Route path="/" element={<Home searchProduct={searchProduct} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}
