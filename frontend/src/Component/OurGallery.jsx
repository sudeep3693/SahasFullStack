import React, { useState, useEffect, useRef } from 'react';
import { importAllImages } from '../Data/ImportImages.jsx';
import '../Css/OurGallery.css';

const images = importAllImages(
  require.context('../Images/GalleryImages', false, /\.(png|jpe?g|svg)$/)
);

const OurGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const startX = useRef(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const showNext = () =>
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  // Keyboard arrow key support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex !== null) {
        if (e.key === 'ArrowLeft') showPrev();
        else if (e.key === 'ArrowRight') showNext();
        else if (e.key === 'Escape') closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const delta = startX.current - endX;

    if (delta > 50) showNext(); // swipe left
    if (delta < -50) showPrev(); // swipe right
  };

  return (
    <>
      <div className="gallery">
        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`img-${index}`}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img src={images[selectedIndex]} alt={`modal-img-${selectedIndex}`} />
            <div className="modal-buttons">
              <button onClick={showPrev}>&#10094;</button>
              <button onClick={showNext}>&#10095;</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurGallery;
