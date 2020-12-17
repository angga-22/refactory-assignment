import React, { useEffect, useState } from "react";
import Appbar from "../../components/Appbar";
import Footer from "../../components/Footer/index";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";
import { Partner } from "../../layout/Homepage/Data";
import { makeStyles } from "@material-ui/core/styles";
import langkah from "../../assets/images/langkah.png";
import imagefluid from "../../assets/images/imagefluid.jpg";
import imagedetail from "../../assets/images/Frame.png";
import Hero from "./Hero";

const useStyles = makeStyles((theme) => ({
  partnerContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "80px",
    padding: "40px",
    alignItems: "center",
    marginTop: "-95px",
  },
  cards: {
    borderRadius: "20px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#004caf",
    padding: "20px",
    alignItems: "center",
  },
  card: {},
  _card: {
    boxShadow: "0px 12px 20px 0px rgba(223, 223, 223, 0.8)",
    padding: "50px",
    margin: "30px",
  },
  image: {
    width: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  p: {
    lineHeight: "2",
    color: "black",
    opacity: "0.7",
  },
  button: {
    backgroundColor: "#FE9A38",
    borderRadius: "20px",
    width: "200px",
  },
}));

const Index = () => {
  const styles = useStyles();
  const [datas, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        "https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/alumni-report.json"
      );
      console.log(request);
      setData(request.data.data);
      console.log(request.data.data);
      return request;
    };
    fetchData();
  }, []);

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
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col md="5">
            <h2>
              Bagaimana Refactory Course membantu meningkatkan skill anda.
            </h2>
            <hr></hr>
            <Button className={styles.button}> Pelajari Lebih</Button>
          </Col>
          <Col md="7">
            <img style={{ width: "90%" }} src={imagedetail} alt="imagedetail" />
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        style={{ backgroundColor: "#F4F5F6", paddingTop: "50px" }}
      >
        <Row>
          <Col md={{ size: 4, offset: 1 }} sm="12">
            <h3>Kursus pemrograman untuk semua orang tanpa terkecuali</h3>
            <p className={styles.p}>
              Refactory Course dirancang untuk memudahkan setiap orang mampu
              meningkatkan keahlian dalam software engineering tanpa dibatasi
              oleh kesulitan akses, kesulitan waktu, batasan keahlian, ataupun
              usia.
            </p>
            <p className={styles.p}>
              Dengan pembelajaran berdasarkan pengalaman nyata pengerjaan
              project, bagi pelajar/mahasiswa, Refactory Course akan melengkapi
              keahlian yang sudah diperoleh dalam studi sehingga dapat membuka
              kesempatan tak terbatas pada karir software engineering.
            </p>
            <p className={styles.p}>
              Bagi karyawan atau tenaga profesional, Refactory Course dapat
              meningkatkan keahlian software engineer dalam menunjang
              menyelesaikan tugas pekerjaannya tanpa khawatir dengan
              keterbatasan waktu.
            </p>
            <p className={styles.p}>
              Masyarakat secara luas juga dapat memanfaatkan pembelajaran untuk
              meningkatkan keahlian sehingga mampu berkarya dan mendapat
              keuntungan karir tanpa khawatir mahalnya belajar.
            </p>
          </Col>
          <Col>
            <img style={{ width: "80%" }} src={imagefluid} alt="imagefluid" />
          </Col>
        </Row>
        <Container style={{ margin: "50px 0px" }}>
          <Button className={styles.button}>Daftar Sekarang</Button>
        </Container>
        <Row>
          <Container style={{ textAlign: "center", paddingBottom: "50px" }}>
            <h5 style={{ color: "black" }}>MEET OUR GRADUATES</h5>
            <h2>Review</h2>
            <h3>
              Read what our alumni said on <span>Course Report</span>
            </h3>
          </Container>
        </Row>
      </Container>
      <Container>
        <Row className={styles.card} style={{ justifyContent: "center" }}>
          {datas.map((item) => {
            return (
              <Col sm={{ size: 5, offset: 4 }} className={styles._card}>
                <img
                  className={styles.image}
                  src={item.user.photo_url}
                  alt="imagesss"
                />
                <h3 style={{ marginTop: "50px" }}>{item.user.name}</h3>
                <h5 style={{ color: "black", opacity: "0.7" }}>
                  {item.user.from}
                </h5>
                <p>{item.star}</p>
                <h5 style={{ fontWeight: "bold", color: "black" }}>
                  {item.title}
                </h5>
                <p style={{ color: "black", lineHeight: "2" }}>
                  {item.description}
                </p>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container fluid>
        <Row
          style={{
            backgroundColor: "#0482C7",
            textAlign: "center",
            paddingBottom: "40px",
          }}
        >
          <Container>
            <h3 style={{ textAlign: "center", padding: "50px" }}>
              Ready to start Learning ?
            </h3>
            <Button className={styles.button}>Daftar Sekarang</Button>
          </Container>
        </Row>
      </Container>
      <Container>
        <Row>
          <Container style={{ textAlign: "center", paddingBottom: "40px" }}>
            <h5
              style={{ textAlign: "center", marginTop: "50px", color: "black" }}
            >
              Langkah Mudah
            </h5>
            <h3 style={{ textAlign: "center" }}>
              Memulai Belajar di Refactory Course
            </h3>
            <img
              className={styles.image}
              style={{ width: "85%" }}
              src={langkah}
              alt="langkah"
            />
            <Button className={styles.button}>Pelajari Lebih </Button>
          </Container>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Index;
