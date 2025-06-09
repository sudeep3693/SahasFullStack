
import '../Css/App.css';

function Partner({ partner }) {
  return (
    <div
      className="partner-card"
      style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
        padding: '10px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
    >
      <img
        src={partner}
        alt="Payment Partner"
        style={{
          width: '100%',
          height: '100px',
          objectFit: 'contain',
          transition: 'transform 0.3s ease',
        }}
        className="zoom-on-hover"
      />
    </div>
  );
}

export default Partner;
