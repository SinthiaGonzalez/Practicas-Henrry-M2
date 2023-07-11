import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import Discounts from "./components/Discounts/Discounts.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
// quitamos el navbar fuera del Routes para que se vea en todas las paginas
export default function App() {
  return <div>
     <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/cruises/:id" element={<CardDetail />} />
      </Routes>

  </div>;
}
