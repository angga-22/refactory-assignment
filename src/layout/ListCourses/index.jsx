import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Row,
  Col,
  Container,
  Input,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import Appbar from "./Appbar/index";
import { Link } from "react-router-dom";
import "./index.scss";

import { Course } from "./Data";

const useStyles = makeStyles((theme) => ({
  cards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: "5%",
  },
  card: {
    "&:hover": {
      border: "2px solid #DF7E2F",
      transition: "all 0.1s ease-in",
    },
    cursor: "pointer",
    borderRadius: "15px",
    width: "300px",
    height: "400px",
    marginBottom: "40px",
    backgroundColor: "#eaeaea",
    boxShadow: "0px 12px 10px 0px rgba(223, 223, 223, 0.8)",
  },
}));

const Index = () => {
  const styles = useStyles();

  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <>
      <Appbar />
      <Container style={{ marginTop: "50px" }}>
        <Row style={{ display: "flex" }}>
          <Col
            xs="12"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>
                Category: <span style={{ color: "#C76F28" }}>All</span>{" "}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Html</DropdownItem>
                <DropdownItem>JavaScript</DropdownItem>
                <DropdownItem>React JS </DropdownItem>
                <DropdownItem>Flutter</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>

            <InputGroup style={{ width: "300px" }}>
              <Input
                type="text"
                value=""
                placeholder="Find a course"
                prefix="fas fa-search"
              />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="fas fa-search"></i>{" "}
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </Container>

      <Row className={styles.cards}>
        {Course.map((item, idx) => {
          return (
            <div key={idx}>
              <Link to={item.detail_url}>
                <Col sm="10" md="10" lg="12" className={styles.card}>
                  <img
                    style={{
                      width: "100%",
                      borderRadius: "5px",
                    }}
                    src={item.image_url}
                    alt="imagess"
                  />
                  <h5
                    style={{
                      color: "#008e7e",
                      marginTop: "40px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </h5>
                  <p style={{ color: "#008e7e" }}>{item.desc}</p>
                </Col>
              </Link>
            </div>
          );
        })}
      </Row>
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

export default Index;
