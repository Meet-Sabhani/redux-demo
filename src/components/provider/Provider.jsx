import React from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  TimePicker,
  Flex,
  // TimePicker,
} from "antd";
import actions from "../../reducers/action";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const { setEventsData, setEventIdCounterData } = actions;

const Provider = () => {
  const dispatch = useDispatch();

  const { eventsData } = useSelector((s) => s.events);
  const { currentUserData } = useSelector((s) => s.currentUser);

  const { idCounterData } = useSelector((s) => s.idCounterIncrement);
  console.log("eventsData: ", eventsData);

  const { eventIdCounterData } = useSelector((s) => s.eventIdCounter);
  console.log("eventIdCounterData: ", eventIdCounterData);
  const nevigate = useNavigate();

  const onFinish = (value) => {
    console.log(
      "value: ",
      value,
      moment(value.RangePicker).format("MMM Do YY")
    );

    dispatch(setEventIdCounterData());

    const addId = { ...value, providerId: currentUserData.id };
    console.log("addId: ", addId);
    dispatch(setEventsData([...eventsData, addId]));
    toast.success("event add successfully");
    nevigate("/home");
  };

  return (
    <Flex justify="center" style={{ padding: "3%" }}>
      <Form
        {...formItemLayout}
        variant="filled"
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
      >
        <h1>Add Event</h1>
        <Form.Item
          label="Name of event"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Image Url"
          name="image"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <InputNumber
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item
          label="TextArea"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="duration"
          name="duration"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Select
            style={{
              width: 120,
            }}
            defaultValue="30"
            options={[
              {
                value: "30",
                label: "30 minis",
              },
              {
                value: "60",
                label: "1 hours",
              },
              {
                value: "90",
                label: "1.30 hours",
              },
              {
                value: "120",
                label: "2 hours",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="select Date"
          name="date"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Time"
          name="timeRange"
          rules={[
            {
              required: true,
              message: "Please select TimePicker",
            },
          ]}
        >
          <TimePicker.RangePicker />
        </Form.Item>

        {/* <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        > */}
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        {/* </Form.Item> */}
      </Form>
    </Flex>
  );
};
export default Provider;
