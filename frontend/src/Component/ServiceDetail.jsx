
import "../Css/App.css"
import { useNavigate } from "react-router-dom"; // For routing
function ServiceDetail({ title, headerImage, otherImage, description, id }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/serviceDetails/${id}`); // Assumes a route like /details/123
    };

    return (
        <div className="container my-2" style={{ maxWidth: '400px' }} onClick={handleClick}>

            <div
                className="card shadow-lg border-0 rounded p-3 text-center bg-dark service-card transition"
                style={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
            >
                {/* Image centered and sized */}
                <div className="d-flex justify-content-center mb-3">
                    <img
                        src={headerImage}
                        alt="Service"
                        className="rounded w-100"
                        style={{
                            objectFit: 'cover',
                            aspectRatio: '1 / 1',
                            transition: 'transform 0.3s ease',
                        }}
                    />
                </div>

                {/* Title below image */}
                <h2 className="fw-bold text-white fs-6 m-0">{title}</h2>
            </div>

        </div>
    );
}

export default ServiceDetail;
