import React, { useEffect, useState } from "react";
import { Button, Card, Col, Flex, Image, Row, Typography } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const cardStyle = {
  height: 250,
  overflow: "hidden",
  zIndex: 1,
};

const imgStyle = {
  // display: "block",
  width: "100%",
  height: 250,
  objectFit: "cover",
};

const EventCard = () => {
  const { eventsData } = useSelector((s) => s.events);
  console.log("eventsData: ", eventsData);
  const { currentUserData } = useSelector((s) => s.currentUser);
  console.log("currentUserData userType: ", currentUserData.userType);

  useEffect(() => {
    if (currentUserData.userType === "Provider") {
      console.log("eventsData: ", eventsData);

      const filteredEvents = eventsData.filter(
        (event) => event.providerId === currentUserData.id
      );
      console.log("filteredEvents: ", filteredEvents);
      setEventDataList(filteredEvents);
    } else {
      setEventDataList(eventsData);
    }
  }, [eventsData, currentUserData]);

  const [eventDataList, setEventDataList] = useState([]);
  console.log("eventDataList: ", eventDataList);

  return (
    <Row gutter={[16, 16]} style={{ padding: "2% 4%", marginRight: "unset" }}>
      {eventDataList.map((e) => (
        <Col xs={24} sm={24} md={12} lg={12} key={e.id}>
          <Card
            hoverable
            style={cardStyle}
            bodyStyle={{
              padding: 0,
            }}
          >
            <Flex justify="space-between">
              <div style={{width:'50%'}}>
                <Image
                  alt="avatar"
                  fallback="https://t3.ftcdn.net/jpg/03/45/05/92/360_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"
                  src={e.image}
                  style={imgStyle}
                />
              </div>
              <Flex
                vertical
                align="center"
                justify="center"
                style={{
                  padding: "20 0",
                  width: "50%",
                }}
              >
                <Typography.Title level={3}>{e.name}</Typography.Title>
                <p>{e.description}</p>
                <h3>duration: {e.duration}</h3>
                <h4>{moment(e.date).format("L")}</h4>
                <h4>
                  {moment(e.timeRange[0]).format("LTS")} -{" "}
                  {moment(e.timeRange[1]).format("LTS")}
                </h4>
                <h2>price:{e.price}</h2>
                <Button type="primary">
                  <Link style={{ color: "#fff" }} to={`/detail/${e.id}`}>
                    buy
                  </Link>
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default EventCard;
