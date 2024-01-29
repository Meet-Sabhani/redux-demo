import React from "react";
import { Button, Flex, Layout } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EventCard from "../eventCads/EventCard";

const Home = () => {
  const { currentUserData } = useSelector((s) => s.currentUser);
  console.log("currentUserData: ", currentUserData);

  return (
    <>
      <Layout>
        <Flex justify="center">
          <Button type="primary" style={{ margin: "2%" }}>
            <Link to={"/provider"}>AddEvent</Link>
          </Button>
        </Flex>
        <EventCard />
      </Layout>
    </>
  );
};

export default Home;
