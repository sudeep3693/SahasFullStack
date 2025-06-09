import { Container, Col, Row } from "react-bootstrap";
import company from '../Data/CompanyRelated'
import ImageCarousel from "./ImageCarousel";
import Services from "./Services";
import "../Css/App.css";

function CarouselAndService() {
  return (
    <Container fluid className="py-4">
      <Row className="g-3 align-items-start">

        <Col xs={12} md={8}>
          <div className="shadow rounded bg-white">
            <ImageCarousel />
          </div>
        </Col>


        <Col xs={12} md={4} className="d-flex flex-column" style={{ minHeight: '100%' }}>
          {/* Services Section */}
          <div className="shadow rounded bg-light p-2 mb-3">
            <Services />
          </div>

          {/* Slogan - only visible on large screens and fills remaining space */}
          <div className=" hide-on-medium d-flex flex-grow-1 mt-2">
            <div className="bg-dark text-white p-4 rounded shadow text-center w-100 d-flex flex-column justify-content-center">
              <h4 className="fw-bold mb-2">{company.visionTitle}</h4>
              <p className="mb-0 fst-italic">{company.vision}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CarouselAndService;
