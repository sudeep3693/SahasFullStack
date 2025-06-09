import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../Images/logo.jpeg';
import SocialIcons from '../Component/SocialMedia';
import ContactIcons from '../Component/HeaderContact';
import '../Css/App.css';
import React from 'react';

function NavBar({ onProductsClick, onContactClick }) {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const handleProductsClick = (e) => {
    e.preventDefault();
    handleClose();

    if (location.pathname === '/') {
      setTimeout(() => {
        onProductsClick();
      }, 400);
    } else {
      navigate('/', { state: { scrollToProducts: true } });
    }
  };

  const handleContactClick= (e) => {
    e.preventDefault();
    handleClose();

    if (location.pathname === '/') {
      setTimeout(() => {
        onContactClick();
      }, 400);
    } else {
      navigate('/', { state: { scrollToContact: true } });
    }
  };

  const handleDownloadsClick = (e) =>{

    e.preventDefault();
    handleClose();
     navigate(`/downloads`); 

  }
   const handleGalleryClick = (e) =>{

    e.preventDefault();
    handleClose();
      navigate(`/gallary`);

  }
  const messageFromGM = ()=>{

    navigate(`messageDetails/2`);
  }

  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container fluid className="d-flex justify-content-between align-items-center px-3">

        <Container fluid className="d-flex justify-content-between align-items-center px-3">
          <Navbar.Brand onClick={(e) => e.preventDefault()} className="d-flex align-items-center ms-lg-5 ms-md-auto">
            <img
              src={logo}
              alt="Sahas Cooperative Logo"
              className="img-fluid"
              style={{ maxHeight: '110px' }}
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="small-toggle"
            onClick={handleShow}
          />
        </Container>

        <Container fluid className="d-flex justify-content-between align-items-center px-3">
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={showOffcanvas}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <SocialIcons />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="me-lg-5 ms-auto custom-nav">
                <NavDropdown title="About Us" id="about-dropdown" className="custom-nav-link">
                  <NavDropdown.Item href="#introduction" className="custom-dropdown-item">Introduction</NavDropdown.Item>
                  <NavDropdown.Item onClick={messageFromGM} className="custom-dropdown-item">Message from GM</NavDropdown.Item>
                  <NavDropdown.Item href="#our-team" className="custom-dropdown-item">Our Team</NavDropdown.Item>
                  <NavDropdown.Item href="#branches" className="custom-dropdown-item">Branches</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  as="button"
                  onClick={handleProductsClick}
                  className="custom-nav-link fs-6 custom-button-link"
                >
                  Products
                </Nav.Link>

                <Nav.Link
                  as="button"
                  onClick={handleContactClick}
                  className="custom-nav-link fs-6 custom-button-link"
                >
                  Contact Us
                </Nav.Link>

                <Nav.Link
                  as="button"
                  onClick={handleGalleryClick}
                  className="custom-nav-link fs-6 custom-button-link"
                >
                 Our Gallery
                </Nav.Link>


                <Nav.Link
                  as="button"
                  onClick={handleDownloadsClick}
                  className="custom-nav-link fs-6 custom-button-link"
                >
                 Downloads
                </Nav.Link>
              </Nav>

              <div className="mt-4 border-top pt-3 d-md-none text-black">
                <ContactIcons phone="061-419128" email="sahas.coop@gmail.com" />
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Container>
    </Navbar>
  );
}

export default NavBar;
