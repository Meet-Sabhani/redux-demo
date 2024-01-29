import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sliders from "../Sliders";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  console.log("width: ", width);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {width <= 700 ? (
        <Sliders />
      ) : (
        <Header
          style={{
            // position: "absolute",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="demo-logo" />

          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["/home"]}
            style={{
              flex: 1,
              minWidth: 0,
            }}
            items={[
              { label: "home", key: "/home" },
              { label: "about", key: "/about" },
              { label: "Logout", key: "/" },
              { label: "SingUp", key: "/singUp" },
            ]}
            onClick={({ key }) => {
              navigate(key);
            }}
          ></Menu>
        </Header>
      )}
    </>
  );
};

export default Navbar;
