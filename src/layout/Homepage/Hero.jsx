import React from "react";
import { Container, Jumbotron, Row, Col, Button } from "reactstrap";
import "./index.scss";

const index = () => {
  return (
    <>
      <div className="container-hero">
        <Jumbotron className="hero"></Jumbotron>
      </div>
      <Container className="text">
        <Row>
          <Col xs="12" sm="12" md="8" lg={{ size: 6, offset: 1 }}>
            <h1 className="text-hero">
              Empowering <span style={{ color: "#FE9A38" }}>People</span>{" "}
              Through Programming
            </h1>
            <p className="text-hero-p">
              Refactory adalah perusahaan edukasi dan teknologi yang menyediakan
              layanan lengkap berupa <span>course</span> maupun{" "}
              <span>custom training</span> yang materinya dapat disesuaikan
              dengan kebutuhan teknologi dan bisnis perusahaan Anda.
            </p>
            <Button
              style={{ borderRadius: "20px", backgroundColor: "#E89735" }}
            >
              Temukan Solusi Anda
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
