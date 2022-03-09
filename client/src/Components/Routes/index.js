import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../../pages/Home.jsx";
import Dashboard from "../../pages/Dashboard.jsx";

function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default index;
