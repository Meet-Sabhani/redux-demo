import React from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import actions from "../../action/actions";
import { SingUpStyle } from "../../styledCommponets/SingUpStyle";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    style: {
      textAlign: "left",
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
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

  const [form] = Form.useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const userMatch = registerData.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (userMatch) {
      // setLoading(true);
      toast.success("Login successfully");
      dispatch(setCurrentUserData(userMatch));

      // setTimeout(() => {
      //   setLoading(false);
      //   if (userMatch.userType === "user") {
      //     navigate("/home");
      //     setLoading(false);
      //   } else {
      //     navigate("/provider");
      //     setLoading(false);
      //   }
      // }, 500);
      navigate("/home");
    } else {
      toast.error("email and password");
    }
  };

  return (
    <SingUpStyle>
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
        className="singUpFrom"
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
    </SingUpStyle>
  );
};

export default Login;
