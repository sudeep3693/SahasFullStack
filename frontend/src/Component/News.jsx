import logo from '../Images/Header_logo.jpg';
import config from '../Constants/config';

function News() {
    return (
        <div
            className="rounded shadow-sm d-flex flex-column align-items-center"
            style={{
                backgroundColor: '#F5F5F5', // Light Gray Background
                width: '100%',
                maxWidth: '350px',
                margin: 'auto',
                padding: '16px',
                transition: 'transform 0.2s ease-in-out',
                cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
            <img
                src={logo}
                alt="Product"
                className="rounded"
                style={{ width: '100%', height: '160px', objectFit: 'cover' }}
            />
            <div className="mt-3 w-100 text-center">
                <h5 className="mb-2" style={{ fontSize: '0.8rem', color: '#001F3F' }}> {/* Deep Navy */}
                    News Publish Date
                </h5>
                <p className="mb-3" style={{ fontSize: '0.9rem', color: '#001F3F' }}>
                    Short description of the product. Make your life easier with this.
                </p>
                <div className="text-center mt-4">
                    <button
                        className="btn px-4 py-2"
                        style={{
                            fontSize: '1rem',
                            borderRadius: '0.5rem',
                            backgroundColor: '#28A745',
                            color: '#fff',
                            border: 'none'
                        }}
                    >
                        Read more
                    </button>
                </div>
            </div>
        </div>
    );
}

export default News;
