import React from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import actions from "../../reducers/action";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const { setCurrentUserData } = actions;

const Login = () => {
  const { registerData } = useSelector((s) => s.register);
  console.log("registerData: ", registerData);
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("values: ", values);
    const userMatch = registerData.find(
      (user) => user.email === values.email && user.password === values.password
    );
    console.log("userMatch: ", userMatch);

    if (userMatch) {
      toast.success("Login successfully");
      dispatch(setCurrentUserData(userMatch));
      if (userMatch.userType === "user") {
        navigate("/home");
      } else {
        navigate("/provider");
      }
    } else {
      toast.error("email and password");
    }
    console.log("userMatch: ", userMatch);
  };

  return (
    <div className="container">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        <div>
          if you dont ahave accounyt <Link to="/singUp">SingUp</Link> here
        </div>
      </Form>
    </div>
  );
};

export default Login;
