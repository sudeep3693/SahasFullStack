import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import News from './News';

const totalNews = 5; 

function NewsNotice() {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate('/all-news'); // Navigate to All News page
  };

  return (
    <div className="position-relative">
      {/* Header Section */}
      <div
        style={{
          backgroundColor: 'transparent',
          height: '200px',
          color: 'black',
          zIndex: 1,
        }}
        className="d-flex flex-column align-items-center pt-4 text-center"
      >
        <div className="fs-2 fw-bold">News/Notice</div>
        <div>Get Latest Updates and Achievements of our Organization</div>
      </div>

      {/* Overlapping Cards Section */}
      <div
        style={{
          marginTop: '-100px',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Container>
          <Row className="g-4 justify-content-center mb-4">
            {[...Array(Math.min(totalNews, 4))].map((_, i) => (
              <Col key={i} xs={12} sm={6} md={4} lg={3} className="text-center">
                <News />
              </Col>
            ))}
          </Row>

          {/* Show More Button */}
          {totalNews > 4 && (
            <div className="text-center mb-4">
              <Button variant="primary" onClick={handleShowMore}>
                Show More News
              </Button>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}

export default NewsNotice;
