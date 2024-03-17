import { Button, Drawer, Flex, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../action/actions";
import { NavbarStyle } from "./NavbarStyle";
import { MenuOutlined } from "@ant-design/icons";

const { setCurrentUserData } = actions;

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false); // State to manage drawer visibility
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false); // State to manage logout confirmation modal visibility

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
    setIsLogoutModalVisible(true);
  };

  const handleMenuClick = () => {
    setIsDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  const handleConfirmLogout = () => {
    setIsLogoutModalVisible(false);
    navigate("/");
    dispatch(setCurrentUserData(""));
  };

  const handleCancelLogout = () => {
    setIsLogoutModalVisible(false);
  };

  return (
    <NavbarStyle>
      <h1>
        <Link to={"/home"}>Venus</Link>
      </h1>
      <h2 className="menu" onClick={handleMenuClick}>
        <MenuOutlined />
      </h2>
      <Drawer
        placement="top"
        visible={isDrawerVisible}
        onClose={handleCloseDrawer}
        height={200}
      >
        <Flex align="center" vertical gap={"small"} rootClassName="nav-right">
          <h3>
            <Link to={"/home"}>Home</Link>
          </h3>
          {currentUserData === null || "" ? (
            <Link to={"/"}>
              <Button type="primary">Login</Button>
            </Link>
          ) : (
            <Button type="primary" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Flex>
      </Drawer>
      <Flex align="center" gap={"small"} rootClassName="nav-right">
        <h3>
          <Link to={"/home"}>Home</Link>
        </h3>
        <h3>Hello, {currentUserData?.username || "Guest"}</h3>
        {currentUserData === null || "" ? (
          <Link to={"/"}>
            <Button type="primary">Login</Button>
          </Link>
        ) : (
          <Button type="primary" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Flex>
      <Modal
        title="Logout Confirmation"
        visible={isLogoutModalVisible}
        onOk={handleConfirmLogout}
        onCancel={handleCancelLogout}
      >
        <p>Are you sure you want to logout?</p>
      </Modal>
    </NavbarStyle>
  );
};

export default Navbar;
