import React from "react";
import EventCard from "../eventCads/EventCard";
import { Button, Flex } from "antd";
import { Link } from "react-router-dom";
import useCheckLogin from "../../utils/CheckLogin";

const Provider = () => {
  useCheckLogin();
  return (
    <>
      <Flex justify="center" align="center" gap={5} style={{ padding: "3%" }}>
        <Button type="primary">
          <Link to={"/addEventData"}>Add Event</Link>
        </Button>
        <Button type="primary">
          <Link to={"/bookings"}>view Bookings</Link>
        </Button>
      </Flex>
      <EventCard />
    </>
  );
};

export default Provider;
