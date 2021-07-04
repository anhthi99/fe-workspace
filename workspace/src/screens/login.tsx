import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Col, Row, Button, Form, Input, Divider } from "antd"
import Layout, { Content, Header } from "antd/lib/layout/layout"
import { Typography } from "antd"
import { API_URL } from "../constants/api"
import { useHistory } from "react-router"
import { CSSProperties, useState } from "react"
import ApiService from "../services/api.service"
import { Cookies } from "react-cookie"
import { useCookies } from "react-cookie"

const { Text } = Typography
const style: CSSProperties = {
  boxShadow: "3px 3px 15px #afafaf",
  backgroundColor: "white",
  padding: "1%",
  borderStyle: "none",
  borderRadius: 5,
};

function Login() {
  const apiService = new ApiService()
  const [loading, setLoading] = useState<boolean>(false)
  //const [cookie, setCookie, removeCookie] = useCookies([''])
  const history = useHistory()
  const onLogin = (val: any) => {
    const data = { user_name: val.username, password: val.password }
    apiService.post(API_URL.USER.LOGIN, data).subscribe((res) => {
      setLoading(false)
      if(res.success){
        history.push('/project')
      }
    });
  };
  const onFinish = (value: any) => {
    setLoading(true)
    onLogin(value)
  }
  return (
    <div>
      <Layout>
        <Header style={{ color: "red", backgroundColor: "white" }}></Header>
        <Content style={{ backgroundColor: "white" }}>
          <Row>
            <Col
              xs={{ span: 8, offset: 7 }}
              lg={{ span: 6, offset: 9 }}
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
              <Form onFinish={onFinish} encType='multipart/form-data' method='post'>
                <label>Tên đăng nhập</label>
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Vui lòng nhập tên đăng nhập" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder={"Tên đăng nhập"}
                  />
                </Form.Item>
                <label>Mật khẩu</label>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Vui lòng nhập mật khẩu" },
                  ]}
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
        </Content>
      </Layout>
    </div>
  );
}

export default Login;
