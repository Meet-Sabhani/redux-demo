import React, { useEffect } from "react";
import { Button, Flex } from "antd";
import { Link } from "react-router-dom";
import EventCard from "../eventCads/EventCard";
import useCheckLogin from "../../utils/CheckLogin";
import { useSelector } from "react-redux";
import { driver } from "driver.js";
import { HomeStyle } from "./HomeStyle";

const Home = () => {
  useCheckLogin();
  const { currentUserData } = useSelector((s) => s.currentUser);
  console.log("currentUserData: ", currentUserData);

  useEffect(() => {
    driverObj.drive();
  });

  const driverObj = driver({
    showProgress: true,
    steps: [
      {
        element: "#addEvent",
        popover: {
          title: "Add Event",
          description: "click and Add event ",
        },
      },
    ],
  });

  return (
    <>
      <HomeStyle>
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
      </HomeStyle>
    </>
  );
};

export default Home;
