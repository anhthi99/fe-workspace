import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Row, Button, Form, Input, Divider } from "antd";
import { Typography } from "antd";
import { API_URL, APP_URL } from "../constants/api";
import { CSSProperties, useEffect, useState } from "react";
import ApiService from "../services/api.service";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { showNavBar } from "../redux/action";
import { Redirect } from "react-router-dom";
import history from "../components/App.history";

const { Text } = Typography;
const style: CSSProperties = {
  boxShadow: "3px 3px 15px #afafaf",
  backgroundColor: "white",
  padding: "1%",
  borderStyle: "none",
  borderRadius: 5,
};

const style2: CSSProperties = {
  textAlign: "center",
};
const style3: CSSProperties = {
  textAlign: 'center',
  marginTop:'-30px',
  fontFamily: 'Segoe UI, Helvetica san-serif',
  fontSize: '20px',
  color:'#064bb8',
  textShadow: '2px 1px 8px #1cc0e6'
}

const imgStyle: CSSProperties = {};

function Login() {
  const apiService = new ApiService();
  const [loading, setLoading] = useState<boolean>(false);
  const [cookie, setCookie, removeCookie] = useCookies([''])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showNavBar(false))
  })

  const onLogin = (val: any) => {
    const data = { user_name: val.username, password: val.password };
    apiService.post(API_URL.USER.LOGIN, data).subscribe((res) => {
      setLoading(false);
      if (res.success) {
        setCookie('session_token',res.access_token)
        dispatch(showNavBar(true))
        //history.push('/dashboard')
        document.location.href=`${APP_URL}dashboard`
      }
    });
  };
  const onFinish = (value: any) => {
    setLoading(true);
    onLogin(value);
  };
  return (
    <div>
      <Row>
        <Col
          sm={{ span: 10, offset: 7 }}
          xs={{ span: 12, offset: 6 }}
          lg={{ span: 10, offset: 7 }}
          xl={{ span: 10, offset: 7 }}
          style={style2}
        >
          <img style={imgStyle} src="./logo.png" width="150" height="150" />
        </Col>
      </Row>
      <Row>
        <Col
          sm={{ span: 10, offset: 7 }}
          xs={{ span: 12, offset: 6 }}
          lg={{ span: 10, offset: 7 }}
          xl={{ span: 10, offset: 7 }}
          style={style3}
        >
          <label><b>PHẦN MỀM QUẢN LÝ DỰ ÁN</b></label>
        </Col>
      </Row>
      <Row>
        <Col
          sm={{ span: 12, offset: 6 }}
          xs={{ span: 18, offset: 4 }}
          lg={{ span: 8, offset: 8 }}
          xl={{ span: 6, offset: 9 }}
          style={style}
        >
          <Divider
            style={{
              fontSize: 24,
              fontFamily: "Segoe UI",
              textShadow: "2px 2px 4px #afafaf",
            }}
          >
            ĐĂNG NHẬP
          </Divider>
          <Form onFinish={onFinish} encType="multipart/form-data" method="post">
            <label>Tên đăng nhập</label>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Vui lòng nhập tên đăng nhập" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder={"Tên đăng nhập"} />
            </Form.Item>
            <label>Mật khẩu</label>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
            >
              <Input
                type="password"
                prefix={<LockOutlined />}
                placeholder={"Mật khẩu"}
              />
            </Form.Item>
            <Form.Item>
              <div style={{ width: "100%", textAlign: "center" }}>
                <Button loading={loading} type="primary" htmlType="submit">
                  Đăng nhập
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
