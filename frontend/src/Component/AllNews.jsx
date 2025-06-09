import { Container, Row, Col } from 'react-bootstrap';
import News from './News';

function AllNews() {
  const totalNews = 10; // Example total news

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">All News & Notices</h2>
      <Row className="g-4">
        {[...Array(totalNews)].map((_, i) => (
          <Col key={i} xs={12} sm={6} md={4} lg={3}>
            <News />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllNews;
