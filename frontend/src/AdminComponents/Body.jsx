import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BodyComponent from './BodyComponent';

function Body() {
        const handleCardClick = (linkId) => {
    window.location.href = `/admin/${linkId}`; // or use React Router navigation
  };
  
    return (
        <div>
            <Container fluid>
                <Row>

                    <Col sm={12} md={6} lg={4}>
                        <BodyComponent
                            title="Hello"
                            description="Contact Details"
                            onClick={()=>handleCardClick("contactDetails")}
                        />
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <BodyComponent
                            title="Hi"
                            description="Members Details"
                            onClick={()=>handleCardClick("memberDetails")}
                        />
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default Body;
