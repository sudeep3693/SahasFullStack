import React from "react";
import { DiVim } from "react-icons/di";

function BodyComponent({ title, description, onClick }) {

  return (
    <div className="d-flex justify-content-center p-4">
      <div
        className="text-center p-4 border rounded-4 shadow-sm bg-white mx-2 my-2 w-100"
        style={{
          maxWidth: "320px",
          cursor: "pointer",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onClick={onClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
        }}
      >
        <DiVim size={64} color="#6f42c1" />
        <div className="fs-3 fw-bold text-primary">{title}</div>
        <div className="fs-5 text-muted">{description}</div>
      </div>
    </div>
  );
}

export default BodyComponent;
