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
  console.log("currentUserData: ", currentUserData);

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
              items={[
                { label: "home", key: "/home" },
                { label: "Logout", key: "/" },
                { label: "SingUp", key: "/singUp" },
                { label: "about", key: "/*" },
              ]}
              onClick={({ key }) => {
                navigate(key);
              }}
            ></Menu>
            <Button type="primary" onClick={handleLogout}>
              Logout
            </Button>
          </Flex>
        </Header>
      )}
    </>
  );
};

export default Navbar;
