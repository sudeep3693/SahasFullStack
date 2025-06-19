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
      className="message-box shadow-sm rounded-4 p-3 mb-4 mx-auto"
      onClick={handleReadMore}
      onMouseEnter={(e) => {
        e.currentTarget.classList.add("hovered");
      }}
      onMouseLeave={(e) => {
        e.currentTarget.classList.remove("hovered");
      }}
    >
      {/* Top: Position */}
      <div className="position-label mb-2 text-center">
        <h6>{position}</h6>
      </div>

      {/* Main Content */}
      <div className="d-flex">
        {/* Left: Image */}
        <div className="image-container me-3">
          <img src={image} alt="Profile" />
        </div>

        {/* Right: Details */}
        <div className="details flex-grow-1 d-flex flex-column justify-content-center">
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
