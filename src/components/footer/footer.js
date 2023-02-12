import socialData from 'db/socialInfo';
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='copyright'>
      <div className='social_content'>
        {socialData.map((item) => (
          <a href={item.url}>{item.name}</a>
        ))}
      </div>
      <div className='container copyright_content'>
        <p>© 2021 copyright all right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
