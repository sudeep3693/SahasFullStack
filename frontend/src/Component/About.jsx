import cooperative from "../Data/AboutSahas";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/aboutDetail`);
  };

  const maxLength = 800;
  const shortDetail = 
    cooperative.detail.length > maxLength
      ? cooperative.detail.slice(0, maxLength) + "..."
      : cooperative.detail;

  return (
    <div className="w-100 px-4 px-sm-3 px-md-5 py-5 bg-light my-4">
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <h3 className="fw-bold mb-3" style={{ color: '#001F3F' }}>
          {cooperative.topic}
        </h3>
        <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.7', color: '#28A745' }}>
          {shortDetail}
        </p>
        <button
          className="mt-3 btn btn-outline-success px-4 py-2"
          style={{ fontSize: '1rem', borderRadius: '0.5rem' }}
          onClick={handleClick}
        >
          Read more
        </button>
      </div>
    </div>
  );
}

export default About;
