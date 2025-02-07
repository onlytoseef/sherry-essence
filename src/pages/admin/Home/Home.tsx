import React, { useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaTachometerAlt,
  FaBox,
  FaChartBar,
  FaSignOutAlt,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

type SidebarItemProps = {
  to: string;
  label: string;
  Icon: React.ComponentType;
  isExpanded: boolean;
};

const Home: React.FC = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.div
        animate={{ width: isSidebarExpanded ? 250 : 80 }}
        className="bg-purple-700 text-white flex flex-col overflow-hidden shadow-lg"
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-purple-500">
          <h1
            className={`${
              isSidebarExpanded ? "block" : "hidden"
            } text-lg font-bold`}
          >
            Admin
          </h1>
          <button
            onClick={() => setSidebarExpanded(!isSidebarExpanded)}
            className="text-xl"
          >
            {isSidebarExpanded ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </div>

        <nav className="mt-4 flex-grow">
          <SidebarItem
            to="/admin"
            label="Dashboard"
            Icon={FaTachometerAlt}
            isExpanded={isSidebarExpanded}
          />
          <SidebarItem
            to="/admin/products"
            label="Products"
            Icon={FaBox}
            isExpanded={isSidebarExpanded}
          />
          <SidebarItem
            to="/admin/statistics"
            label="Statistics"
            Icon={FaChartBar}
            isExpanded={isSidebarExpanded}
          />
        </nav>

        <SidebarItem
          to="/logout"
          label="Logout"
          Icon={FaSignOutAlt}
          isExpanded={isSidebarExpanded}
        />
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow px-4 py-3">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <div className="relative">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-full w-10 h-10 cursor-pointer"
              onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
            />
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg py-2">
                <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Profile
                </div>
                <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Logout
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  to,
  label,
  Icon,
  isExpanded,
}) => (
  <Link
    to={to}
    className="flex items-center gap-4 px-4 py-3 hover:bg-purple-600"
  >
    <Icon />
    {isExpanded && <span>{label}</span>}
  </Link>
);

// Child Components
const Dashboard: React.FC = () => <h2>Dashboard Content</h2>;
const Products: React.FC = () => <h2>Products Content</h2>;
const Statistics: React.FC = () => <h2>Statistics Content</h2>;

// Routes Setup
const AdminRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="statistics" element={<Statistics />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
