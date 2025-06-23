import { useParams } from 'react-router-dom';
import Products from '../Data/ProductData';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Css/ProductDetailPage.css';
import bgLogo from '../Images/logoOnly.png';

function DetailsPage() {
  const { id } = useParams();
  const product = Products.find((s) => s.productId === id);

  if (!product) {
    return <div className="text-center mt-5">Product not found</div>;
  }

  return (
    <Container fluid className="py-4 px-3 details-bg text-light">
      <Row className="g-4">
        {/* Left Column - Topics */}
        <Col xs={12} md={4}>
          <div className="p-3 rounded shadow-sm bg-dark-subtle">
            <h4 className="text-info mb-3">Topics</h4>
            {product.Topics.map((item, i) => (
              <div key={i} className="hover-title mb-3 border-bottom pb-2">
                <h6 className="m-0">{item.innerTitle}</h6>
              </div>
            ))}
          </div>
        </Col>

        {/* Right Column - Details with Watermark */}
        <Col xs={12} md={8}>
          <div className="position-relative">
            {/* Foreground Card */}
            <Card className="bg-light text-dark p-4 shadow position-relative" style={{ zIndex: 1 }}>
              <Card.Body>
                <h2 className="text-primary mb-3">{product.productSubTitle}</h2>
                <p className="mb-4" style={{ textAlign: 'justify' }}>
                  {product.productDescription}
                </p>

                {product.Topics.map((item, i) => (
                  <div key={i} className="mb-4">
                    {/* Mobile */}
                    <div className="d-flex d-md-none flex-column align-items-center mb-3" style={{ textAlign: 'justify' }}>
                      <img
                        src={item.productInnerImage}
                        alt="Product"
                        className="rounded"
                        style={{
                          width: '60px',
                          height: '60px',
                          objectFit: 'cover',
                        }}
                      />
                      <h5 className="text-dark mt-2">{item.innerTitle}</h5>
                      <p>{item.innerDescription}</p>
                    </div>

                    {/* Desktop */}
                    <div className="d-none d-md-flex align-items-start gap-3">
                      <img
                        src={item.productInnerImage}
                        alt="Product"
                        className="rounded"
                        style={{
                          width: '60px',
                          height: '60px',
                          objectFit: 'cover',
                        }}
                      />
                      <div>
                        <h5 className="text-dark">{item.innerTitle}</h5>
                        <p>{item.innerDescription}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>

            {/* Background Watermark */}
            <div
              className="position-absolute"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            >
              <img
                src={bgLogo}
                alt="Watermark"
                style={{
                  width: '200px',
                  height: '200px',
                  opacity: 0.08,
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DetailsPage;
