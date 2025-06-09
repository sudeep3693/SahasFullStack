import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function SocialIcons() {
  return (
   <div style={{justifyContent:'center', alignContent:'center', marginRight:'60px'}}>
 <div style={{ display: 'flex', gap: '20px', fontSize: '24px', marginBottom: '4px', float:'right'}}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF color="black" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram color="black" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter color="black" />
      </a>
    </div>
   </div>

   
  );
}

export default SocialIcons;
