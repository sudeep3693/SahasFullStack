import { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Details from './ProductDetail'; 
import Products from '../Data/ProductData';
import '../Css/OurProducts.css';

function OurProducts() {
  const scrollRef = useRef(null);
  const shouldAutoScroll = Products.length >= 3;

  useEffect(() => {
    if (!shouldAutoScroll) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const card = scrollContainer.querySelector('.product-card');
    const cardWidth = card ? card.offsetWidth + 16 : 240;
    let scrollIndex = 0;

    const scrollStep = () => {
      if (!scrollContainer) return;

      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
        scrollIndex = 0;
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainer.scrollBy({
          left: cardWidth,
          behavior: 'smooth',
        });
        scrollIndex += 1;
      }
    };

    const interval = setInterval(scrollStep, 3000);
    return () => clearInterval(interval);
  }, [shouldAutoScroll]);

  return (
    <div className="position-relative">
      {/* Header */}
      <div
        style={{
          backgroundColor: '#3a0ca3',
          height: '200px',
          color: 'white',
          zIndex: 1,
        }}
        className="d-flex flex-column align-items-center pt-4 text-center"
      >
        <div className="fs-2 fw-bold">Our Products</div>
        <div>Explore products we offer </div>
      </div>

      {/* Scrollable or Centered Cards */}
      <div
        style={{
          marginTop: '-100px',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Container fluid>
          <div
            ref={scrollRef}
            className={`horizontal-scroll px-3 ${shouldAutoScroll ? 'overflow-auto' : ''}`}
          >
            <div className={`d-flex gap-4 ${shouldAutoScroll ? 'flex-nowrap' : 'justify-content-center flex-wrap'}`}>
              {Products.map((product, i) => (
                <div
                  key={i}
                  className="product-card text-center"
                  style={{ minWidth: '280px', flex: shouldAutoScroll ? '0 0 auto' : '1 0 280px' }}
                >
                  <Details
                    title={product.productTitle}
                    subtitle={product.productSubTitle}
                    headerImage={product.productTitleImage}
                    description={product.productDescription}
                    id={product.productId}
                    others={product.Topics}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default OurProducts;
