import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Link } from "react-router-dom";
import { mypost } from "../../baseurl";
const Login = () => {
  let Navigator = useNavigate();
  const onFinish = (values) => {
    mypost("/check", values)
      .then((res) => {
        console.log(res);
        if (res.data.data.length != 0) {
          sessionStorage.setItem("phone", res.data.data[0].phone);
          message.success("login successful");
          Navigator("/");
        } else {
          message.warning("Is the user still registered?");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form
      autoComplete="off"
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>
  );
};

export default Login;
