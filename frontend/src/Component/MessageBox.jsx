import { useNavigate } from "react-router-dom";
import "../Css/MessageBox.css";

function MessageBox({ position, descriptionList, image, id }) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    if (id) {
      navigate(`/messageDetails/${id}`);
    }
  };

  return (
    <div
      className="message-box shadow-sm rounded-4 mb-4 mx-auto"
      onClick={handleReadMore}
      onMouseEnter={(e) => e.currentTarget.classList.add("hovered")}
      onMouseLeave={(e) => e.currentTarget.classList.remove("hovered")}
    >
      {/* Full-width Heading */}
      <div className="position-label">
        <h6>{position.replace('_', ' ')}</h6>
      </div>

      {/* Main Content */}
      <div className="d-flex p-2">
        {/* Left: Image */}
        <div className="image-container me-2">
          <img src={image} alt="Profile" />
        </div>

        {/* Right: Details */}
        <div className="details d-flex flex-column justify-content-center">
          <ul className="description-list list-unstyled mb-0 small">
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
