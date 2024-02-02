import React from "react";
import { Button, Flex, Layout } from "antd";
import { Link } from "react-router-dom";
import EventCard from "../eventCads/EventCard";
import useCheckLogin from "../../utils/CheckLogin";

const Home = () => {
  useCheckLogin();
  return (
    <>
      <Layout>
        <Flex justify="center" gap={6} style={{ padding: "2%" }}>
          <Button type="primary">
            <Link to={"/bookings"}>Bookings</Link>
          </Button>
        </Flex>
        <EventCard />
      </Layout>
    </>
  );
};

export default Home;
