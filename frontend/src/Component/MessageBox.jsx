import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MessageBox({ position, descriptionList, image, id }) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    if (id) {
      navigate(`/messageDetails/${id}`);
    }
  };

  return (
    <div
      className="message-box shadow-sm rounded-4 p-3 mb-4 mx-auto"
      onClick={handleReadMore}
      style={{
        cursor: "pointer",
        maxWidth: "400px",
        minWidth: "200px",
        width: "100%",
        backgroundColor: "#ffffff", // white background
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.05)";
      }}
    >
      {/* Top: Position */}
      <div className="mb-2 text-center">
        <h6
          className="text-uppercase fw-bold mb-0"
          style={{
            backgroundColor: "#E1F0F9", // soft blue background
            color: "#2C3E50", // dark blue text
            display: "inline-block",
            padding: "4px 10px",
            borderRadius: "8px",
            fontSize: "0.9rem",
          }}
        >
          {position}
        </h6>
      </div>

      {/* Main Content */}
      <div className="d-flex">
        {/* Left: Image */}
        <div
          className="me-3"
          style={{
            flex: "0 0 100px",
            height: "100px",
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: "#f0f0f0",
          }}
        >
          <img
            src={image}
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Right: Details */}
        <div className="flex-grow-1 d-flex flex-column justify-content-center">
          <ul
            className="list-unstyled mb-0 small"
            style={{ wordBreak: "break-word", color: "#555" }}
          >
            {descriptionList.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MessageBox;
