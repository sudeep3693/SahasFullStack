import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaFilePdf } from 'react-icons/fa';
import  "../Css/Downloads.css";


const pdfFiles = [
  { title: 'Annual Report 2024', url: '/pdfs/annual-report-2024.pdf' },
  { title: 'Financial Statement Q1', url: '/pdfs/financial-q1.pdf' },
  { title: 'Company Brochure', url: '/pdfs/brochure.pdf' },
  { title: 'Compliance Guidelines', url: '/pdfs/compliance.pdf' },
  { title: 'Employee Handbook', url: '/pdfs/handbook.pdf' },
];

function Downloads() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 fw-bold">Downloadable Resources</h2>
      <p className="text-center text-muted mb-5">
        Access important documents and resources in PDF format.
      </p>
      <Row className="g-4 justify-content-center">
        {pdfFiles.map((file, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 text-center shadow-sm border-0">
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <FaFilePdf size={48} color="#e63946" className="mb-3" />
                  <Card.Title className="fs-5">{file.title}</Card.Title>
                </div>
                <Button
                  variant="outline-primary"
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3"
                >
                  Download PDF
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Downloads;
