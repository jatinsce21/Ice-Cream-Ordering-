// Banner
import React from 'react';
import './Banner.css';
import { useNavigate } from 'react-router-dom';

export default function Banner() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/user/product');
  };

  return (
    <section
      className="banner"
      id="banner"
      style={{
        background: 'url("../../../../public/image/Banner_2.webp") no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="content">
        <button type="button" className="btn" onClick={handleClick}>
          shop now
        </button>
      </div>
    </section>
  );
}
