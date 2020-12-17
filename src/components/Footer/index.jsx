import React from "react";
import { Company, CompanyAdd, Connect, Contact, SiteMap } from "./Footer";
import { Container, Row, Col } from "reactstrap";
import "./index.scss";

const index = () => {
  return (
    <Container fluid style={{ backgroundColor: "#0C162A" }}>
      <Row style={{ padding: "2% 7%" }}>
        <Col>
          <h5>Site Map</h5>
          <ul>
            {SiteMap.map((item, idx) => {
              return (
                <li key={idx} className="list-footer">
                  <a href={item.url} className={item.cName}>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </Col>
        <Col>
          <h5>Company</h5>
          <ul>
            {Company.map((item, idx) => {
              return (
                <li key={idx} className="list-footer">
                  <a href={item.url} className={item.cName}>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </Col>
        <Col>
          <h5>Connect</h5>
          <ul>
            {Connect.map((item, idx) => {
              return (
                <li key={idx} className="list-footer">
                  <a href={item.url} className={item.cName}>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </Col>
        <Col>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
          <h5>Company Address</h5>
          {CompanyAdd.map((item, idx) => {
            return <p key={idx}>{item.label}</p>;
          })}
        </Col>
        <Col style={{ marginTop: "60px" }}>
          <h5>Contact</h5>
          <ul>
            {Contact.map((item, idx) => {
              return (
                <li key={idx} className="list-footer">
                  <a href={item.url} className={item.cName}>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
      <hr style={{ backgroundColor: "#fff" }}></hr>
      <Row>
        <Container>
          <p>
            <span>&copy;</span> 2020 Refactory All Rights Reserved - Terms of
            Services / Privacy Policy
          </p>
        </Container>
      </Row>
    </Container>
  );
};

export default index;
