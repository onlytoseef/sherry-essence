import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const ProtectedRoute = () => {
  const { user, loading } = useSelector((state: RootState) => state.auth);

  // Prevent route rendering while checking auth state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Redirect if user is not logged in
  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  // Redirect if user is not an admin
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
