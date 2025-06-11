import React, { useState, useEffect } from 'react';

const SecondaryNavbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {show && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '50px',
          backgroundColor: 'rgba(0,0,0,0.8)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          I'm visible after you scroll 100vh down!
        </div>
      )}
    </>
  );
};

export default SecondaryNavbar;
