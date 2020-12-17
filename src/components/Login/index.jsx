import React from "react";
import { useHistory } from "react-router-dom";
import FormLogin from "./Form/index";
import { Container, Row, Col } from "reactstrap";

const Login = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  let history = useHistory();

  const Login = (details) => {
    console.log(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      history.push("/homepage");
      console.log("login success");
    } else {
      alert("you're not an admin!");
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs="12" sm="12" md="8" lg="6" xl="6" style={{ margin: "auto" }}>
            <FormLogin Login={Login} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
