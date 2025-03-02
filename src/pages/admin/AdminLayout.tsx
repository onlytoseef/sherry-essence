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

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        collapsedWidth={50}
        onCollapse={(value) => setCollapsed(value)}
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
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "18px" }}
          />

          <Dropdown overlay={profileMenu} trigger={["hover", "click"]}>
            <Avatar
              size="large"
              icon={<UserOutlined />}
              style={{ cursor: "pointer" }}
            />
          </Dropdown>
        </Header>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Content
            style={{
              marginTop: 64,
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
            padding: "16px",
            position: "fixed",
            bottom: 0,
            width: `calc(100% - ${collapsed ? 50 : 200}px)`,
            transition: "width 0.3s",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
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
                fontSize: "12px",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ff7f00")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            >
              Developed by Toseef Rana
            </a>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
