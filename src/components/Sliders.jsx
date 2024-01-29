import React from "react";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { Header } from "antd/es/layout/layout";
const { Sider } = Layout;

const Sliders = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header style={{ color: "#fff", width: "100%" }}>logo</Header>
      <Sider
        style={{
          position: "absolute",
          zIndex: 2,
        }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={[
            { label: "home", key: "/home" },
            // { label: "about", key: "/about" },
            { label: "SingUp", key: "/singUp" },
          ]}
          onClick={({ key }) => {
            navigate(key);
          }}
        />
      </Sider>
    </Layout>
  );
};
export default Sliders;
