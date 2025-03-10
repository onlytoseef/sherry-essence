import { useState } from "react";
import { Layout, Menu, Button, Avatar, Dropdown } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/features/authSlice";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

const menuItems = [
  { key: "home", icon: <HomeOutlined />, label: "Home", path: "/admin/home" },
  {
    key: "orders",
    icon: <ShoppingCartOutlined />,
    label: "Orders",
    path: "/admin/orders",
  },
  {
    key: "products",
    icon: <AppstoreOutlined />,
    label: "Products",
    path: "/admin/products",
  },
  {
    key: "settings",
    icon: <SettingOutlined />,
    label: "Settings",
    path: "/admin/settings",
  },
];

const pageTitles: { [key: string]: string } = {
  "/admin/home": "Home",
  "/admin/orders": "Orders",
  "/admin/products": "Products",
  "/admin/settings": "Settings",
  "/admin/profile": "Profile",
};

const AdminLayout: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser() as any);
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="/admin/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout" danger onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  const pageTitle = pageTitles[location.pathname] || "Dashboard";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        collapsedWidth={50}
        onCollapse={(value) => setCollapsed(value)}
        trigger={null} // Removes the default collapse trigger
        style={{
          position: "fixed",
          height: "100vh",
          left: 0,
          top: 0,
          bottom: 0,
          background: "#000",
        }}
      >
        <div
          className="logo"
          style={{ color: "#fff", textAlign: "center", padding: "20px" }}
        >
          {!collapsed ? (
            <h2 style={{ color: "#ff7f00" }}>Admin Panel</h2>
          ) : (
            <HomeOutlined style={{ fontSize: "24px", color: "#ff7f00" }} />
          )}
        </div>

        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          style={{
            background: "#000",
            borderRight: "none",
          }}
        >
          {menuItems.map((item) => (
            <Menu.Item
              key={item.path}
              icon={item.icon}
              style={{
                background:
                  location.pathname === item.path ? "#ff7f00" : "transparent",
                color: location.pathname === item.path ? "#000" : "#fff",
                fontWeight: location.pathname === item.path ? "bold" : "normal",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <Link
                to={item.path}
                style={{
                  color: location.pathname === item.path ? "#000" : "#fff",
                }}
              >
                {collapsed ? "" : item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      <Layout
        style={{
          marginLeft: collapsed ? 50 : 200,
          transition: "margin-left 0.3s",
        }}
      >
        <Header
          style={{
            background: "#fff",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "fixed",
            width: `calc(100% - ${collapsed ? 50 : 200}px)`,
            transition: "width 0.3s",
            zIndex: 1000,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: "18px" }}
            />
            <h3 style={{ margin: 0, fontWeight: "bold", fontSize: "18px" }}>
              {pageTitle}
            </h3>
          </div>

          <Dropdown overlay={profileMenu} trigger={["hover", "click"]}>
            <Avatar
              size="large"
              icon={<UserOutlined />}
              style={{ cursor: "pointer" }}
            />
          </Dropdown>
        </Header>

        {/* Horizontal Line Below Header */}
        <hr
          style={{
            marginTop: "64px",
            border: "0",
            height: "1px",
            background: "#ddd",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Content
            style={{
              marginTop: 10,
              padding: "20px",
              background: "#fff",
              minHeight: "calc(100vh - 128px)",
            }}
          >
            <Outlet />
          </Content>
        </motion.div>

        <Footer
          style={{
            textAlign: "center",
            background: "#000",
            color: "#fff",
            padding: window.innerWidth <= 768 ? "8px" : "12px",
            position: "fixed",
            bottom: 0,
            width: `calc(100% - ${collapsed ? 50 : 200}px)`,
            transition: "width 0.3s",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            whiteSpace: "nowrap",
            fontSize: window.innerWidth <= 768 ? "10px" : "14px",
          }}
        >
          <span>
            © {new Date().getFullYear()} Sharalix. All Rights Reserved.
          </span>

          <a
            href="https://linkedin.com/in/toseefrana"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              textDecoration: "none",
              transition: "color 0.3s",
              marginLeft: "10px",
              fontSize: window.innerWidth <= 768 ? "10px" : "14px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ff7f00")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
          >
            Developed by Toseef Rana
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
