import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "../../pages/Home.jsx";
import Dashboard from "../../pages/Dashboard.jsx";
import Product from "../../pages/Product.jsx";

function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default index;
