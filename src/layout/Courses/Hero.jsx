import React from "react";
import { Container, Jumbotron, Row, Col, Button } from "reactstrap";
import "./index.scss";

const index = () => {
  return (
    <>
      <div className="container-hero">
        <Jumbotron className="hero"></Jumbotron>
      </div>
      <Container className="texts">
        <Row style={{ justifyContent: "center" }}>
          <Col md={{ size: 7 }}>
            <h1 className="text-hero">
              Tingkatkan{" "}
              <span style={{ color: "#E99F57", fontWeight: "bold" }}>
                skill pemrograman
              </span>{" "}
              Kapanpun Dimanapun
            </h1>
            <p className="text-hero-p">
              We’re a brand of passionate software engineers and educators with
              an engaging curriculum backed by real-world software projects
              ready to boost your career.
            </p>
            <a href="/listcourse">
              <Button
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#E89735",
                  margin: "20px",
                }}
              >
                Masuk dan Mulai Belajar
              </Button>
            </a>
            <Button
              style={{
                borderRadius: "20px",
                backgroundColor: "#E89735",
                margin: "20px",
              }}
            >
              Daftar Sekarang
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
