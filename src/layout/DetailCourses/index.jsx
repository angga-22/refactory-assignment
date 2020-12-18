import React from "react";
import Appbar from "./Appbar/index";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Badge,
} from "reactstrap";
import Hero from "./Hero";
import imagehtml from "../../assets/images/htmlcss.png";

const index = () => {
  return (
    <>
      <Appbar />
      <Hero />
      <Container>
        <Row style={{ justifyContent: "center", marginTop: "200px" }}>
          <Col xs="10" sm="10" md="7" style={{ textAlign: "center" }}>
            <h4>Tentang Course</h4>
            <p style={{ color: "black" }}>
              Hai Refactorian, pada course ini kita akan belajar mengenal apa
              itu HTML dan CSS, mengenal dasar-dasarnya, mengetahui bagaimana
              cara menggunakannya dan lain-lain. simak videonya dan jangan lupa
              untuk praktikan.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row
          style={{
            justifyContent: "center",
            marginTop: "200px",
          }}
        >
          <Col xs="10" sm="10" md="7" style={{ textAlign: "center" }}>
            <h4>Materi Course</h4>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Col xs="10" sm="10" md="8" lg="6">
            <ListGroup>
              <ListGroupItem className="justify-content-between">
                <h6 style={{ fontWeight: "bold" }}>HTML Dasar</h6>
              </ListGroupItem>
              <ListGroupItem className="justify-content-between">
                <Badge>
                  {" "}
                  <i className="fa fa-youtube"></i>{" "}
                </Badge>{" "}
                Pengenalan HTML
              </ListGroupItem>
              <ListGroupItem className="justify-content-between">
                <Badge>
                  {" "}
                  <i className="fa fa-youtube"></i>{" "}
                </Badge>{" "}
                Atribut dan Tag HTML
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ marginTop: "50px", alignItems: "center" }}>
          <Col>
            <img style={{ width: "90%" }} src={imagehtml} alt="imagehtml" />
          </Col>
          <Col>
            <h5 style={{ fontWeight: "bold", color: "black" }}>
              {" "}
              Alasan Mempelajari HTML dan CSS
            </h5>
            <p style={{ color: "black" }}>
              Setiap web developer harus memiliki pengetahuan dasar setidaknya
              HTML dan CSS, dari mempelajari HTML dan CSS dalam course ini
              harapannya peserta akan lebih paham bagaimana konsep dasar
              pengembangan website.
            </p>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        style={{
          backgroundColor: "#35B4AE",
          height: "100px",
          backgroundImage:
            "linear-gradient(90deg, #2852a2 21.72%, #35B4AE 75.43%)",
        }}
      >
        <Row>
          <Container style={{ paddingTop: "20px" }}>
            <Col>
              <p> &copy; Refactory 2020 Terms of Services Privacy Policy</p>
            </Col>
          </Container>
        </Row>
      </Container>
    </>
  );
};

export default index;
