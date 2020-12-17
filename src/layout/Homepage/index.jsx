import React, { useEffect, useState } from "react";
import Appbar from "../../components/Appbar";
import Footer from "../../components/Footer/";
import Hero from "./Hero";
import { Partner, AsSeenOn } from "./Data";
import { Container, Row, Col } from "reactstrap";
import "./index.scss";
import { makeStyles } from "@material-ui/core/styles";
import approval from "../../assets/images/material_approval.png";
import bolt from "../../assets/images/material_bolt.png";

const useStyles = makeStyles((theme) => ({
  partnerContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#004caf",
    padding: "20px",
    alignItems: "center",
    marginTop: "-95px",
  },
  section: {
    marginTop: "50px",
    marginBottom: "50px",
  },
  card: {
    textAlign: "center",
    padding: "20px",
    margin: "5px",
  },
  logo: {
    marginBottom: "15px",
  },
  insight: {
    height: "220px",
    justifyContent: "center",
    alignItems: "center",
  },
  mediaContainer: {
    backgroundColor: "#E2E3E4",
    padding: " 0 50px",
  },
  media: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

const Index = () => {
  const styles = useStyles();
  return (
    <>
      <Appbar />

      <Hero />
      <Container className={styles.partnerContainer}>
        <Row style={{ alignItems: "center" }}>
          {Partner.map((item, idx) => {
            return (
              <Col key={idx}>
                <a href={"/"} className={item.cName}>
                  <img src={item.photo_url} alt="partner" />
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>

      <Container className={styles.section}>
        <h1 className="font" style={{ marginBottom: "50px" }}>
          Apa yang Refactory Dapat Bantu?
        </h1>

        <Row>
          <Col className={styles.card}>
            <img src={approval} alt="logo" className={styles.logo} />
            <h3 className="font" style={{ marginBottom: "20px" }}>
              Memperkuat Tim Engineer Anda
            </h3>
            <p className="p">
              Bisnis di jaman modern membutuhkan keterampilan pengembangan
              terbaik untuk meningkatkan skala produk. Kami dapat mempersiapkan
              course dan juga dapat menyediakan tim yang menangani kebutuhan
              digital Anda.
            </p>
          </Col>
          <Col className={styles.card}>
            <img src={bolt} alt="logo" className={styles.logo} />
            <h3 className="font" style={{ marginBottom: "20px" }}>
              Wujudkan Software Impian Anda
            </h3>
            <p className="p">
              Kami adalah perusahaan One-Stop IT Solution untuk proyek Anda,
              membantu di setiap tahap mulai dari menyusun ide, melalui desain
              dan pengembangan aplikasi seluler, situs web dan aplikasi desktop,
              hingga peluncuran produk.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="insight">
        <Row className={styles.insight}>
          <Col>
            <p className="font">INSIGHT TERBARU</p>
            <h3 style={{ fontWeight: "bold", textAlign: "center" }}>
              Knowledge Sharing
            </h3>
          </Col>
        </Row>
      </Container>
      <div>
        <a href="/">
          <h5
            style={{
              textAlign: "center",
              margin: "20px 0",
              color: "blue",
              textDecoration: "none",
            }}
          >
            Lihat Semua{" "}
          </h5>
        </a>
      </div>
      <Container
        fluid
        className={styles.section}
        style={{
          backgroundColor: "#E2E3E4",
          padding: "60px 0",
          marginBottom: "-30px",
        }}
      >
        <h1 className="font" style={{ paddingBottom: "50px" }}>
          {" "}
          AS SEEN ON
        </h1>
        <Row className={styles.mediaContainer}>
          {AsSeenOn.map((item, idx) => {
            return (
              <Col key={idx} className={styles.media}>
                <a href={item.link_url}>
                  <img
                    style={{
                      width: "150px",
                      margin: "20px",
                    }}
                    src={item.photo_url}
                    alt="media"
                  />
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Index;
