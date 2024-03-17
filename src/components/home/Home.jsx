import React from "react";
import { Button, Flex } from "antd";
import { Link } from "react-router-dom";
import EventCard from "../eventCads/EventCard";
// import useCheckLogin from "../../utils/CheckLogin";
import { useSelector } from "react-redux";

const Home = () => {
  // useCheckLogin();
  const { currentUserData } = useSelector((s) => s.currentUser);
  console.log("currentUserData: ", currentUserData);

  return (
    <>
      <>
        <Flex justify="center" gap={6} style={{ padding: "2%" }}>
          {currentUserData.userType === "Provider" ? (
            <>
              <Button type="primary">
                <Link to={"/addEventData"}>Add Event</Link>
              </Button>
              <Button type="primary">
                <Link to={"/bookings"}>view Bookings</Link>
              </Button>{" "}
            </>
          ) : (
            <Button type="primary">
              <Link to={"/bookings"}>Bookings</Link>
            </Button>
          )}
        </Flex>
        <EventCard />
      </>
    </>
  );
};

export default Home;
