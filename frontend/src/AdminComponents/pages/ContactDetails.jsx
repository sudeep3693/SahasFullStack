import React from "react";
import { Container, Col, Row, Form, Card } from "react-bootstrap";

function ContactDetails() {
  const provinces = [
    "Province 1", "Province 2", "Bagmati", "Gandaki", "Lumbini", "Karnali", "Sudurpashchim"
  ];

  const districts = [
    "Kathmandu", "Lalitpur", "Bhaktapur", "Pokhara", "Biratnagar", "Butwal"
  ];

  return (
    <div className="py-5 bg-light min-vh-100">
      <Container>
        <Card className="shadow-lg border-0 p-4 rounded-4">
          <h3 className="mb-4 text-primary fw-bold text-center">Contact Details</h3>

          <Form>
            <Row className="g-4">
              <Col xs={12} md={6} lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Name of Cooperative</Form.Label>
                  <Form.Control size="lg" type="text" placeholder="Name of Cooperative" />
                </Form.Group>
              </Col>

              <Col xs={12} md={6} lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Email of Cooperative</Form.Label>
                  <Form.Control size="lg" type="email" placeholder="Email" />
                </Form.Group>
              </Col>

              <Col xs={12} md={6} lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Telephone Number</Form.Label>
                  <Form.Control
                    size="lg"
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Telephone Number"
                    style={{ textDecoration: "none" }}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={6} lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Mobile Number</Form.Label>
                  <Form.Control
                    size="lg"
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Mobile Number"
                    style={{ textDecoration: "none" }}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={6} lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Location</Form.Label>
                  <Form.Control size="lg" type="text" placeholder="Tole, Street, ..." />
                </Form.Group>
              </Col>

              <Col xs={12} md={6} lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">District</Form.Label>
                  <Form.Select size="lg" defaultValue="">
                    <option disabled value="">Select District</option>
                    {districts.map((d, idx) => (
                      <option key={idx} value={d}>{d}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col xs={12} md={6} lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Province</Form.Label>
                  <Form.Select size="lg" defaultValue="">
                    <option disabled value="">Select Province</option>
                    {provinces.map((p, idx) => (
                      <option key={idx} value={p}>{p}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col xs={12} md={6} lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Fax Number</Form.Label>
                  <Form.Control
                    size="lg"
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Fax Number"
                    style={{ textDecoration: "none" }}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default ContactDetails;
