import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { currentUser } = useSelector((s) => s.currentUser);
  console.log("currentUser: ", currentUser);
  return <div>home</div>;
};

export default Home;
