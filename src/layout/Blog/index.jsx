import React from "react";
import Appbar from "./Appbar";
import Footer from "../../components/Footer";
import { Container, Row, Col } from "reactstrap";
import blogimg from "../../assets/images/blogimg.jpg";
import { Card } from "@material-ui/core";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.jpg";
import blog4 from "../../assets/images/blog4.jpg";
import "./index.css";

const Index = () => {
  return (
    <div>
      <Appbar />
      <Container>
        <Row style={{ marginTop: "100px" }}>
          <Col>
            <img
              style={{ borderRadius: "10px" }}
              src={blogimg}
              alt="imageblog"
            />
          </Col>
          <Col>
            <h5 style={{ color: "#FE9A38" }}>HUBUNGKAN DENGAN KAMI</h5>
            <h3 style={{ marginBottom: "50px" }}>Ikuti refactory</h3>
            <i className="fab fa-linkedin link">LinkedIn</i>
            <i className="fab fa-facebook link">Facebook</i>
            <i className="fab fa-youtube link">Youtube</i>
            <i className="fab fa-instagram link">Instagram</i>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col lg="8">
            <h5 style={{ color: "#FE9A38" }}>GROWTH & CULTURE</h5>
            <h3 style={{ marginBottom: "50px" }}>
              How Did You Become A Programmer
            </h3>
            <p style={{ color: "black" }}>
              Post Categories Blog Engineering Profile Tutorial Tips & Trick
              Growth & Culture Newsroom Promo X Case Studies Training PT
              Gigaming Intermedia Solusindo BY Isna | July 16, 2020
            </p>
            <Row>
              <Col>
                <img
                  style={{ width: "80%", margin: "auto" }}
                  src={blog3}
                  alt="blog3"
                />
                <h6 style={{ color: "#FE9A38", marginTop: "20px" }}>
                  ENGINEERING
                </h6>
                <h6>Tempat Asyik untuk belajar secara remote</h6>
                <h6>BACA ARTIKEL</h6>
              </Col>
              <Col>
                <img
                  style={{ width: "80%", margin: "auto" }}
                  src={blog4}
                  alt="blog4"
                />
                <h6 style={{ color: "#FE9A38", marginTop: "20px" }}>
                  ENGINEERING
                </h6>
                <h6>Bank Mandiri gandeng Refactory tingkatkan SDM IT</h6>
                <h6>BACA ARTIKEL</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <img
                  style={{ width: "80%", margin: "auto" }}
                  src={blog3}
                  alt="blog3"
                />
                <h6 style={{ color: "#FE9A38", marginTop: "20px" }}>
                  ENGINEERING
                </h6>
                <h6>Tempat Asyik untuk belajar secara remote</h6>
                <h6>BACA ARTIKEL</h6>
              </Col>
              <Col>
                <img
                  style={{ width: "80%", margin: "auto" }}
                  src={blog4}
                  alt="blog4"
                />
                <h6 style={{ color: "#FE9A38", marginTop: "20px" }}>
                  ENGINEERING
                </h6>
                <h6>Bank Mandiri gandeng Refactory tingkatkan SDM IT</h6>
                <h6>BACA ARTIKEL</h6>
              </Col>
            </Row>
          </Col>
          <Col lg="4">
            <Card style={{ justifyContent: "center", padding: "30px" }}>
              <h5 style={{ textAlign: "center", color: "#FE9A38" }}>
                ARTIKEL POPULER
              </h5>
              <img
                style={{ width: "80%", margin: "auto" }}
                src={blog1}
                alt="blog1"
              />
              <h6 style={{ color: "#FE9A38", marginTop: "20px" }}>
                ENGINEERING
              </h6>
              <h6>Bekerja Dengan Tiket: BAGIAN 1</h6>
              <h6>BACA ARTIKEL</h6>
              <img
                style={{ width: "80%", margin: "auto", marginTop: "30px" }}
                src={blog2}
                alt="blog2"
              />
              <h6 style={{ color: "#FE9A38", marginTop: "20px" }}>
                Tips & Trick
              </h6>
              <h6> 10 Hal penting dalam memilih Bootcamp</h6>
              <h6>BACA ARTIKEL</h6>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Index;
