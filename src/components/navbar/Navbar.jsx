import { Button, Flex, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sliders from "../Sliders";
import actions from "../../reducers/action";
import { useDispatch, useSelector } from "react-redux";

const { setCurrentUserData } = actions;

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  console.log("width: ", width);

  const { currentUserData } = useSelector((s) => s.currentUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      navigate("/");
      dispatch(setCurrentUserData(""));
    }
  };

  return (
    <>
      {width <= 700 ? (
        <Sliders />
      ) : (
        <Header>
          <Flex justify="space-between" align="center">
            <h1 style={{ color: "#fff" }}>Logo</h1>

            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["/home"]}
              selectedKeys={[window.location.pathname]}
              onClick={({ key }) => {
                navigate(key);
              }}
            >
              <Menu.Item key="/home">Home</Menu.Item>
              <Menu.Item key="/singUp">SignUp</Menu.Item>
              <Menu.Item key="/about">About</Menu.Item>
            </Menu>
            <Flex align="center" gap={6}>
              <h1 style={{ color: "#fff" }}>
                Welcome, {currentUserData.username}
              </h1>
              <Button type="primary" onClick={handleLogout}>
                Logout
              </Button>
            </Flex>
          </Flex>
        </Header>
      )}
    </>
  );
};

export default Navbar;
