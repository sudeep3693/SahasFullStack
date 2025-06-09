import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Css/Footer.css';
import cooperative from '../Data/AboutSahas';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handlDownload = ()=>{
     navigate(`/downloads`);
  }

  const handleHome = ()=>{
    navigate(`/`);
  }

  const handleGallary = ()=>{

    navigate(`/gallary`);
  }
  return (
    <footer className="footer-section text-dark py-5">
      <Container>
        <Row className="gy-5">
          <Col xs={12} md={6} lg={4}>
            <h5 className="footer-title">About Us</h5>
            <p className="footer-text">
              {cooperative.shortDetail}
            </p>
          </Col>

          <Col xs={12} sm={6} md={6} lg={4}>
            <h5 className="footer-title">Navigate</h5>
            <ul className="footer-list">
              <li onClick={handleHome}>Home</li>
              <li onClick={handlDownload}>Downloads</li>
              <li>Our Departments</li>
              <li onClick={handleGallary}>Our Gallery</li>
              <li>
                <a href="/login" className="text-decoration-none text-dark">Admin</a>
              </li>

            </ul>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <h5 className="footer-title">Contact Us</h5>
            <address className="footer-text small">
              Parsyang,<br />
              Pokhara, Nepal<br />
              P.O. Box: 11683<br />
              Phone: +977-01-4954046, 4964458<br />
              Fax: +977-01-4987597<br />
              Email: sahas.coop@gmail.com
            </address>
          </Col>
        </Row>

        <hr className="footer-divider my-4" />

        <div className="text-center small mt-3 footer-copy">
          © {new Date().getFullYear()} Sahas Saving and Credit Cooperative Limited. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
