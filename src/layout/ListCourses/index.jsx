import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "reactstrap";
import Appbar from "./Appbar/index";

import { Course } from "./Data";

const useStyles = makeStyles((theme) => ({
  cards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: "5%",
  },
  card: {
    border: "1px solid black",
    borderRadius: "20px",
    width: "300px",
    height: "350px",
    marginBottom: "40px",
  },
}));

const Index = () => {
  const styles = useStyles();
  return (
    <>
      <Appbar />

      <Row className={styles.cards}>
        {Course.map((item, idx) => {
          return (
            <div key={idx}>
              <Col sm="10" md="10" lg="12" className={styles.card}>
                <img
                  style={{ width: "100%" }}
                  src={item.image_url}
                  alt="imagess"
                />
                <h5 style={{ color: "#008e7e" }}>{item.title}</h5>
                <p style={{ color: "#008e7e" }}>{item.desc}</p>
              </Col>
            </div>
          );
        })}
      </Row>
    </>
  );
};

export default Index;
