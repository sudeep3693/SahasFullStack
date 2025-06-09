import React from "react";
import "../../Css/Popup.css";
import popupImage from "../../Images/Popup/first.jpeg";
import { Container } from "react-bootstrap";

const Popup = ({ onClose }) => {
  return (
    <Container fluid className="popup-overlay">
      <div style={{ position: "relative" }}>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <img src={popupImage} alt="Popup" />
      </div>
    </Container>
  );
};

export default Popup;
