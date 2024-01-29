import React from "react";
import { Button, Card, Col, Flex, Row, Typography } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";
const cardStyle = {
  height: 250,
  overflow: "hidden",
  zIndex: 1,
};
const imgStyle = {
  display: "block",
  width: "50%",
  height: 250,
  objectFit: "cover",
};
const EventCard = () => {
  const { eventsData } = useSelector((s) => s.events);

  console.log("eventsData: ", eventsData);
  return (
    <Row gutter={[16, 16]} style={{ padding: "2% 4%", marginRight: "unset" }}>
      {eventsData.map((e) => {
        return (
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card
              hoverable
              style={cardStyle}
              bodyStyle={{
                padding: 0,
              }}
            >
              <Flex justify="space-between">
                <img alt="avatar" src={e.image} style={imgStyle} />
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
                  <h3>dutration: {e.duration}</h3>
                  <h4>{moment(e.date).format("L")}</h4>
                  <h4>
                    {moment(e.timeRange[0]).format("LTS")} -{" "}
                    {moment(e.timeRange[1]).format("LTS")}
                  </h4>
                  <h2>price:{e.price}</h2>
                  <Button type="primary">buy</Button>
                </Flex>
              </Flex>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};
export default EventCard;
