import { Col, Flex, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const Bookings = () => {
  const { bookingData } = useSelector((s) => s.booking);
  console.log("bookingData: ", bookingData);

  const { currentUserData } = useSelector((s) => s.currentUser);
  console.log("currentUserData: ", currentUserData);

  const filterData = bookingData.filter(
    (bookings) => bookings.user.id === currentUserData.id
  );

  console.log("filterData: ", filterData);

  return (
    <Flex vertical style={{ padding: "3% 10%" }}>
      <h1>Bookings</h1>
      {currentUserData.userType === "Provider" ? (
        <Row gutter={[16, 16]}>
          {filterData.map((event, i) => {
            return (
              <Col key={i} span={8}>
                <h4> Name : {event.eventInfo.name}</h4>
                <img src={event.eventInfo.image} width={"100%"} alt="" />
                <h3>slots</h3>
                <Flex wrap="wrap" gap={6}>
                  {event.slots.map((s) => {
                    return <div className="selected-slot">{s}</div>;
                  })}
                </Flex>
                <h3>user Name : {event.user.username}</h3>
                <h3>user email : {event.user.email}</h3>
              </Col>
            );
          })}
        </Row>
      ) : (
        <Row gutter={[16, 16]}>
          {filterData.map((event, i) => {
            return (
              <Col key={i} span={8}>
                <h4> Name : {event.eventInfo.name}</h4>
                <img src={event.eventInfo.image} width={"100%"} alt="" />
                <h3>slots</h3>
                <Flex wrap="wrap" gap={6}>
                  {event.slots.map((s) => {
                    return <div className="selected-slot">{s}</div>;
                  })}
                </Flex>
              </Col>
            );
          })}
        </Row>
      )}
    </Flex>
  );
};

export default Bookings;
