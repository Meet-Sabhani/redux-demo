import React from "react";
import { FooterStyle } from "./FooterStyle";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="left-footer">
        <Link to={"/home"}>
          <h2 style={{ color: "#1677FF" }}> vennue </h2>
        </Link>
        <p>event management</p>
      </div>
      <div className="right-footer">
        <h3>contact me</h3>
        <div className="icons">
          <a href="https://github.com/Meet-Sabhani">
            <GithubOutlined />
          </a>
          <a href="https://twitter.com/sabhani_meet">
            <TwitterOutlined />
          </a>
          <a href="https://www.linkedin.com/in/meet-sabhani-548829196/">
            <LinkedinOutlined />
          </a>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
