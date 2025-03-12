import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { updateUserPassword } from "../../store/features/authSlice";
import { Avatar } from "antd";
import { toast } from "react-hot-toast";

export default function AdminProfile() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdatePassword = async () => {
    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in both password fields!");
      return;
    }
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);
    toast.loading("Updating password...", { id: "loading" });

    try {
      await dispatch(updateUserPassword({ newPassword })).unwrap();
      toast.dismiss("loading");
      toast.success("Password updated successfully!");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.dismiss("loading");
      toast.error("Failed to update password. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-3xl p-6 md:p-8 transition-all duration-300">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Admin Profile
        </h2>

        {/* Profile Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
          <Avatar size={120} src="https://ui-avatars.com/api/?name=Admin" />
          <div className="text-center md:text-left md:mt-5 md:ml-5">
            <p className="text-xl font-semibold">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-gray-600 text-sm">{user?.email}</p>
            <p className="text-gray-500 text-sm">{user?.role}</p>
          </div>
        </div>

        {/* Update Password Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2 text-center md:text-left">
            Change Password
          </h3>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={`w-full p-3 border rounded-lg mb-3 focus:outline-none transition-all ${
              newPassword.length < 6 && newPassword !== ""
                ? "border-red-500 focus:ring-2 focus:ring-red-500"
                : "border-gray-300 focus:ring-2 focus:ring-blue-500"
            }`}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full p-3 border rounded-lg mb-3 focus:outline-none transition-all ${
              confirmPassword !== newPassword && confirmPassword !== ""
                ? "border-red-500 focus:ring-2 focus:ring-red-500"
                : "border-gray-300 focus:ring-2 focus:ring-blue-500"
            }`}
          />

          {/* Update Password Button with Spinner & Gradient */}
          <button
            onClick={handleUpdatePassword}
            className={`w-full py-3 text-white rounded-lg font-semibold flex justify-center items-center transition-all ${
              loading
                ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
                : "bg-gradient-to-r from-orange-600 to-black cursor-not-allowed"
            }`}
            disabled={loading}
          >
            {loading ? (
              <span className="animate-spin border-4 border-white border-t-transparent rounded-full w-5 h-5"></span>
            ) : (
              "Update Password"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
