import React from "react";
import { Button, Flex } from "antd";
import { Link } from "react-router-dom";
import EventCard from "../eventCads/EventCard";
import useCheckLogin from "../../utils/CheckLogin";
import { useSelector } from "react-redux";
import { driver } from "driver.js";

const Home = () => {
  useCheckLogin();
  const { currentUserData } = useSelector((s) => s.currentUser);
  console.log("currentUserData: ", currentUserData);

  const driverObj = driver({
    showProgress: true,
    steps: [
      {
        element: "#addEvent",
        popover: {
          title: "Abracadabra!",
          description: "Watch as I reveal the secrets of this element.",
        },
      },
    ],
  });

  return (
    <>
      <>
        <Flex justify="center" gap={6} style={{ padding: "2%" }}>
          {currentUserData.userType === "Provider" ? (
            <>
              <Link to={"/addEventData"}>
                <Button type="primary" id="addEvent">
                  Add Event
                </Button>
              </Link>
              <Link to={"/bookings"}>
                <Button type="primary">view Bookings</Button>{" "}
              </Link>
            </>
          ) : (
            <Link to={"/bookings"}>
              <Button type="primary">Bookings</Button>
            </Link>
          )}
        </Flex>
        <EventCard />
      </>
    </>
  );
};

export default Home;
