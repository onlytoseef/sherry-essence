import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import Home from "./Home";
import Orders from "./Orders";
import Products from "./Products";
import Settings from "./Settings";

const AdminRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/admin" />} />
    </Routes>
  );
};

export default AdminRoutes;
