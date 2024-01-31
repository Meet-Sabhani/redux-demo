import { Button, Card, Flex, Image, Typography } from "antd";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const cardStyle = {
  height: 250,
  overflow: "hidden",
  width: "80%",
  margin: "0 aut",
  zIndex: 1,
};

const imgStyle = {
  width: "100%",
  height: 250,
  objectFit: "cover",
};

const EventPage = () => {
  const { productId } = useParams();
  console.log("productId: ", productId);
  const { eventsData } = useSelector((s) => s.events);
  console.log("eventsData: ", eventsData);
  const matchingEvent = eventsData.find(
    (item) => item.id === parseInt(productId)
  );
  console.log("matchingEvent: ", matchingEvent);

  return (
    <Flex justify="center" style={{ paddinge: "10%" }}>
      <Card
        hoverable
        style={cardStyle}
        bodyStyle={{
          padding: 0,
        }}
      >
        <Flex justify="space-between">
          <div style={{ width: "50%" }}>
            <Image
              alt="avatar"
              fallback="https://t3.ftcdn.net/jpg/03/45/05/92/360_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"
              src={matchingEvent.image}
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
            <Typography.Title level={3}>{matchingEvent.name}</Typography.Title>
            <p>{matchingEvent.description}</p>
            <h3>duration: {matchingEvent.duration}</h3>
            <h4>{moment(matchingEvent.date).format("L")}</h4>
            <h4>
              {moment(matchingEvent.timeRange[0]).format("LTS")} -{" "}
              {moment(matchingEvent.timeRange[1]).format("LTS")}
            </h4>
            {matchingEvent.slots.map((e) => {
            return  <div>{e.time}</div>;
            })}
            <h2>price:{matchingEvent.price}</h2>

            <Button type="primary">buy</Button>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export default EventPage;
