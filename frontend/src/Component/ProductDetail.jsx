import React from "react";
import { useNavigate } from "react-router-dom"; // For routing


function Details({ title, subtitle, headerImage, description, id, others }) {
  const navigate = useNavigate();

  const wordLimit = 15;
  const words = description.trim().split(/\s+/);
  const isOverLimit = words.length > wordLimit;
  const truncatedText = words.slice(0, wordLimit).join(" ") + (isOverLimit ? "..." : "");

  const handleReadMore = () => {
      navigate(`/details/${id}`); // Assumes a route like /details/123
  };

  return (
    <div
      className="bg-white rounded shadow-sm d-flex flex-column align-items-center"
      style={{
        width: '100%',
        maxWidth: '280px',
        margin: 'auto',
        padding: '16px',
        transition: 'transform 0.2s ease-in-out',
        cursor: 'pointer',
        
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img
        src={headerImage}
        alt="Product"
        className="rounded"
        style={{ width: '100%', maxHeight: '150px', height: 'auto', objectFit: 'cover' }}
      />
      <div className="mt-3 w-100 text-start">
        <h5 className="fw-bold mb-2">{title}</h5>
        <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
          {truncatedText}
        </p>
        <button
          onClick={handleReadMore}
          className="btn px-4 py-2 fw-semibold"
          style={{
            background: 'linear-gradient(to right, #4a90e2, #007bff)',
            color: 'white',
            borderRadius: '0.5rem',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)',
            transition: 'all 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 123, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 123, 255, 0.3)';
          }}
        >
          Read more
        </button>
      </div>
    </div>
  );
}

export default Details;
