import { Route, Routes } from "react-router-dom";
import Frontend from "./frontend";
import Admin from "./admin";
import Auth from "./auth";
import ProtectedRoute from "../utils/ProtectedRoute";

export default function Index() {
  return (
    <Routes>
      <Route path="/*" element={<Frontend />} />

      <Route path="/admin/*" element={<ProtectedRoute />}>
        <Route path="" element={<Admin />} />
      </Route>

      <Route path="/auth/*" element={<Auth />} />
    </Routes>
  );
}
