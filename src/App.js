import React from "react";
import Homepage from "./Component/Homepage";
import OrderForm from "./Component/OrderForm";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pizza" element={<OrderForm />} />
    </Routes>
   
  );
};

export default App;