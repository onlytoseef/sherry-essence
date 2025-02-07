import { Route, Routes } from "react-router-dom";
import Frontend from "./frontend";
import Admin from "./admin";
export default function Index() {
  return (
    <Routes>
      <Route path="/*" element={<Frontend />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route />
    </Routes>
  );
}
