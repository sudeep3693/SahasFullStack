import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoMdClose, IoIosArrowDown } from "react-icons/io";
import SocialIcons from "../Component/SocialMedia";
import ContactIcons from "./HeaderContact";
import "../Css/Header.css"; 

function Header() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {/* Header Section with Animation */}
      <div
        className={`header-wrapper d-none d-md-block ${
          visible ? "show" : "hide"
        }`}
      >
        <Container
          fluid
          className="bg-danger text-white py-2 position-relative"
        >
          <Row className="justify-content-between align-items-center">
            <Col md={6}>
              <ContactIcons
                phone="061-419128"
                email="sahas.coop@gmail.com"
              />
            </Col>
            <Col md={6} className="text-end">
              <SocialIcons />
            </Col>
          </Row>

          {/* Fixed Close Button */}
          <IoMdClose
            size={24}
            className="position-absolute top-0 end-0 m-3 z-3 text-white cursor-pointer"
            onClick={() => setVisible(false)}
          />
        </Container>
      </div>

      {/* Show Arrow Button */}
     {!visible && (
  <IoIosArrowDown
    size={36} // Increased size
    className="position-absolute top-0 end-0 m-2 z-3 bg-light p-2 rounded shadow cursor-pointer d-none d-md-block"
    onClick={() => setVisible(true)}
    title="Show Header"
  />
)}

    </>
  );
}

export default Header;
