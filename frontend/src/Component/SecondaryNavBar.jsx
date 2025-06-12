import React, { useState, useEffect } from 'react';

const SecondaryNavBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isMediumOrLarger = window.innerWidth >= 768;
      const isScrolledPast100vh = window.scrollY > window.innerHeight;

      if (isMediumOrLarger && isScrolledPast100vh) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); 

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      {show && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '40px',
          backgroundColor: 'rgba(0,0,0,0.8)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          I'm visible after you scroll 100vh down (desktop only)!
        </div>
      )}
    </>
  );
};

export default SecondaryNavBar;
