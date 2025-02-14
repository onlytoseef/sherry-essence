import { Route, Routes } from "react-router-dom";
import Frontend from "./frontend";
import Admin from "./admin";
import Auth from "./auth";
export default function Index() {
  return (
    <Routes>
      <Route path="/*" element={<Frontend />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route />
    </Routes>
  );
}
