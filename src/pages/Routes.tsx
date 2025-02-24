import { Route, Routes } from "react-router-dom";
import Frontend from "./frontend";
import AdminRoutes from "./admin/AdminRoutes";
import Auth from "./auth";
import ProtectedRoute from "../utils/ProtectedRoute";

export default function Index() {
  return (
    <Routes>
      <Route path="/*" element={<Frontend />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Route>
      <Route path="/auth/*" element={<Auth />} />
    </Routes>
  );
}
