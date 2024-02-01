import React from "react";
import { Flex, Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;

const Slider = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Flex
        justify="flex-end"
        align="center"
        style={{
          width: "100%",
          backgroundColor: "#001529",
          color: "#fff",
          padding: "3% 8%",
        }}
      >
        <h1>logo</h1>
      </Flex>
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
          defaultSelectedKeys={["home"]}
          items={[
            { label: "home", key: "/home" },
            { label: "Logout", key: "/" },
            { label: "SingUp", key: "/singUp" },
            { label: "about", key: "/*" },
          ]}
          onClick={({ key }) => {
            navigate(key);
          }}
        />
      </Sider>
    </Layout>
  );
};
export default Slider;
