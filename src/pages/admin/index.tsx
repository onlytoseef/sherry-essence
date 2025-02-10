import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiOutlineSetting,
} from "react-icons/ai";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, Dropdown, Avatar, theme } from "antd";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Orders from "./Orders";
import Products from "./Products";
import logo from "../../assets/images/SL-White.svg";

const { Header, Sider, Content } = Layout;

const Index: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: "1",
      icon: <AiOutlineHome size={18} />,
      label: <Link to="/admin/">Home</Link>,
    },
    {
      key: "2",
      icon: <AiOutlineShoppingCart size={18} />,
      label: <Link to="/admin/orders">Orders</Link>,
    },
    {
      key: "3",
      icon: <AiOutlineShopping size={18} />,
      label: <Link to="/admin/products">Products</Link>,
    },
    {
      key: "4",
      icon: <AiOutlineSetting size={18} />,
      label: <Link to="/settings">Settings</Link>,
    },
  ];

  // Updated profileMenu object
  const profileMenu = {
    items: [
      { key: "profile", label: "Profile" },
      { key: "logout", label: "Logout" },
    ],
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        className="min-h-[100vh] !bg-black"
        collapsible
        collapsed={collapsed}
      >
        <img src={logo} width={100} className="mx-auto" alt="Logo" />
        <Menu
          theme="dark"
          mode="inline"
          className="custom-menu"
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "0 16px",
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Dropdown menu={profileMenu} trigger={["hover"]}>
            <Avatar
              src="https://via.placeholder.com/40" // Replace with actual profile image
              className="cursor-pointer"
            />
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
