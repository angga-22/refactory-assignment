import React from "react";
import { Container, Jumbotron, Row, Col, Button } from "reactstrap";
import "./index.scss";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="container-heroxx">
        <Jumbotron className="heroxx"></Jumbotron>
      </div>
      <Container className="textxx">
        <Row style={{ justifyContent: "center" }}>
          <Col md={{ size: 7 }}>
            <h1 className="text-hero">HTML & CSS Introduction</h1>
            <p className="text-hero-p">
              HTML dan CSS adalah materi dasar untuk pengembangan web. Setiap
              web developer harus memiliki pengetahuan dasar setidaknya HTML dan
              CSS.
            </p>
            <Link to="/">
              <Button
                style={{
                  width: "200px",
                  borderRadius: "20px",
                  backgroundColor: "#E89735",
                  margin: "20px",
                }}
              >
                Mulai Belajar
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
