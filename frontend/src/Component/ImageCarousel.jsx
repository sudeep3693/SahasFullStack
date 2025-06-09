import React from 'react';
import first from '../Images/CarouselImages/first.jpg';
import second from '../Images/CarouselImages/second.jpg';
import third from '../Images/CarouselImages/third.jpg';
import { Carousel } from 'react-bootstrap';
import '../Css/CarouselCss.css';


function ImageCarousel() {

  const image_detail = [

    { image: first, title: "first image", alternative: "first image not found" },
    { image: second, title: "second image", alternative: "first image not found" },
    { image: third, title: "second image", alternative: "first image not found" },
    { image: second, title: "second image", alternative: "first image not found" },
    { image: third, title: "second image", alternative: "first image not found" },

  ]

  return (


    <Carousel>
      {image_detail.map((img, k) => (
        <Carousel.Item key={k}>
          <img
            className="d-block w-100"
            src={img.image}
            alt={img.alternative}
            style={{
              aspectRatio: '4 / 3'
            }}
          />

          {/* Caption Container */}
          <div className="carousel-caption-custom px-3 py-2">
            <h3 className="caption-title">{img.title}</h3>

          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
