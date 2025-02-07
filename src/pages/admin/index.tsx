import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products/Products";
import Orders from "./Orders/Orders";

export default function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}
