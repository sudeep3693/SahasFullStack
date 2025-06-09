import { Col, Container, Row } from "react-bootstrap";
import cooperative from "../Data/AboutSahas";
import "../Css/AboutDetail.css"; // Create and link the CSS file

function AboutDetail() {
  return (
    <div className="about-detail-bg py-3">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={12} lg={12}>
            <div className="about-content-box p-4 rounded-4 shadow-sm bg-white">
              <h2 className="text-center mb-4 about-title">{cooperative.topic}</h2>
              <p className="about-text" style={{ whiteSpace: "pre-line" }}>
                {cooperative.detail}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutDetail;
