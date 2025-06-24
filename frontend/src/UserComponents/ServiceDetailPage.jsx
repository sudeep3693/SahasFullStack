import { Col, Container, Row, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Services from '../Data/ServiceData';
import '../Css/Service.css';
import bgLogo from '../Images/logoOnly.png';

function ServiceDetailsPage() {
    const { id } = useParams();
    const service = Services.find((s) => s.id === id);

    if (!service) {
        return <h2 className="text-center text-danger my-5">Service not found</h2>;
    }

    return (
        <>
            <Container className="py-4">
                {/* Title */}
                <h2 className="text-center fw-bold mb-4">{service.title}</h2>

                <Row className="g-4 align-items-start">
                    {/* Image Section */}
                    <Col xs={12} md={5}>
                        <Card className="shadow border-0">
                            <div className="overflow-hidden rounded">
                                <img
                                    src={service.image}
                                    alt="Service"
                                    className="img-fluid w-100"
                                    style={{
                                        objectFit: 'cover',
                                        transition: 'transform 0.4s ease',
                                    }}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                            </div>
                        </Card>
                    </Col>

                    {/* Description Section */}
                    <Col xs={12} md={7}>
                        <Card className="bg-light shadow border-0 h-100">
                            <Card.Body>
                                <div className="watermark-overlay">
                                    <img
                                        src={bgLogo}
                                        alt="Watermark"
                                        className="watermark-img"
                                    />
                                </div>
                                <Card.Text className="fs-5 text-muted">{service.description}</Card.Text>
                            </Card.Body>

                            {service.link1 && (
                                <div className="p-3">
                                    <a
                                        href={service.link1}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-success"
                                    >
                                        Download from Play Store
                                    </a>
                                </div>
                            )}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ServiceDetailsPage;
