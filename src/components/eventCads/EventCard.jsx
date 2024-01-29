import React from "react";
import { Button, Card, Col, Flex, Row, Typography } from "antd";
import { useSelector } from "react-redux";
const cardStyle = {
  height: 200,
};
const imgStyle = {
  display: "block",
  width: "50%",
  height: 200,
};
const EventCard = () => {
  const { eventsData } = useSelector((s) => s.events);

  console.log("eventsData: ", eventsData);
  return (
    <Row gutter={[16, 16]} style={{ padding: "2% 5%" }}>
      {eventsData.map((e) => {
        return (
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card
              hoverable
              style={cardStyle}
              bodyStyle={{
                padding: 0,
                overflow: "hidden",
              }}
            >
              <Flex justify="space-between">
                <img alt="avatar" src={e.Image} style={imgStyle} />
                <Flex
                  vertical
                  align="flex-end"
                  justify="space-between"
                  style={{
                    padding: 32,
                  }}
                >
                  <Typography.Title level={3}>{e.Name}</Typography.Title>
                  <p>{e.TextArea}</p>
                  <h3>dutration: {e.Select}</h3>
                  <h2>price:{e.InputNumber}</h2>
                  <Button
                    type="primary"
                    href="https://ant.design"
                    target="_blank"
                  >
                    Get Started
                  </Button>
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
