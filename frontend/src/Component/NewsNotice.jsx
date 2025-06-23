import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import News from './News';
import { useState, useEffect } from 'react';

const totalNews = 5; // Replace with dynamic count as needed

function NewsNotice() {
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detect screen size to conditionally render number of news items
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // 'md' in Bootstrap is 768px
    };

    handleResize(); // Initialize on mount
    window.addEventListener('resize', handleResize); // Update on resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleNews = isSmallScreen
    ? Math.min(totalNews, 2)
    : Math.min(totalNews, 4);

  const handleShowMore = () => {
    navigate('/all-news');
  };

  return (
    <div className="position-relative" style={{ backgroundColor: '#E6F4EA' }}>
      {/* Header */}
      <div
        className="d-flex flex-column align-items-center pt-4 text-center"
        style={{
          backgroundColor: 'transparent',
          height: '200px',
          color: '#001F3F',
          zIndex: 1,
        }}
      >
        <div className="fs-2 fw-bold" style={{ color: '#002B5B' }}>
          News/Notice
        </div>
        <div style={{ color: '#001F3F' }} className='mb-2'>
          Get Latest Updates and Achievements of our Organization
        </div>
      </div>

      {/* Cards Section */}
      <div
        style={{
          marginTop: '-100px',
          zIndex: 2,
          position: 'relative',
          backgroundColor: '#F5F5F5',
          paddingTop: '20px',
          borderTop: '1px solid #F5F5F5',
        }}
      >
        <Container>
          <Row className="g-4 justify-content-center mb-4">
            {[...Array(visibleNews)].map((_, i) => (
              <Col key={i} xs={12} sm={6} md={4} lg={3} className="text-center">
                <News />
              </Col>
            ))}
          </Row>

          {/* Show More Button if more news exist */}
          {totalNews > visibleNews && (
            <div className="text-center mb-4">
              <Button
                variant="success"
                style={{
                  backgroundColor: '#006400',
                  borderColor: '#28A745',
                  marginBottom: '10px'
                }}
                onClick={handleShowMore}
              >
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
