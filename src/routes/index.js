import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import Authed from "../views/Authed";

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/plants" element={<Authed/>} />
      </Routes>
    </BrowserRouter>
  );
};
