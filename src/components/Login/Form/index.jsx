import React, { useState } from "react";
import { Form, Input, Button, Container, CardImg } from "reactstrap";
import login from "../../../assets/images/login.jpg";

const Index = ({ Login }) => {
  const [details, setDetails] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(details);
    localStorage.setItem("token", details);
  };

  return (
    <Container style={{ border: "1px solid #f2f2f2" }}>
      <Form onSubmit={handleSubmit}>
        <h1 style={{ color: "#3d3d3d", textAlign: "center" }}>
          Log into your Account
        </h1>

        <CardImg
          top
          width="10%"
          style={{ borderRadius: "15%" }}
          src={login}
          alt="Card image cap"
        />

        <div>
          <Input
            id="email"
            type="email"
            name="email"
            style={{ marginBottom: "20px" }}
            placeholder="Username or Email"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
          {/* {errors.email && <p>{errors.email}</p>} */}
        </div>
        <div>
          <Input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Password"
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
          />
          {/* {errors.password && <p>{errors.password}</p>} */}
        </div>
        <div>
          <hr></hr>
          <Button type="submit" color="primary">
            Continue
          </Button>
          <hr></hr>
          <span style={{ cursor: "pointer", opacity: ".6" }}>
            Forgotten your password?
          </span>
        </div>
      </Form>
    </Container>
  );
};

export default Index;
