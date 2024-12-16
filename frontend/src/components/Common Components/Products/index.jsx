import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStarHalfAlt,
  faIceCream,
} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import './Products.css';

const productCategories = {
  Cones: [
    {
      id: 1,
      name: 'Chocolate Cone Ice-Cream',
      image: '/image/product-1.png',
      price: '$4.99 - $10.99',
    },
    {
      id: 6,
      name: 'Buttercotch Cone Ice-Crem',
      image: '/image/product-6.png',
      price: '$4.99 - $10.99',
    },
    {
      id: 8,
      name: 'Dark Chocolate Cone Ice-Cream',
      image: '/image/product-8.png',
      price: '$4.99 - $10.99',
    },
  ],
  Cups: [
    {
      id: 2,
      name: 'ButterScotch Cup Ice-Cream',
      image: '/image/product-2.png',
      price: '$4.99 - $10.99',
    },
    {
      id: 4,
      name: 'Alphonso Mango Cup Ice-Cream',
      image: '/image/product-4.png',
      price: '$4.99 - $10.99',
    },
    {
      id: 5,
      name: 'Chocolate Cup Ice-Cream',
      image: '/image/product-5.png',
      price: '$4.99 - $10.99',
    },
    {
      id: 7,
      name: 'Cookies-n-Cream Cup Ice-Cream',
      image: '/image/product-7.png',
      price: '$4.99 - $10.99',
    },
  ],
  CandySticks: [
    {
      id: 3,
      name: 'Mango Stick Ice-Cream',
      image: '/image/product-3.png',
      price: '$4.99 - $10.99',
    },
    {
      id: 9,
      name: 'Choco-Bar Stick Ice-Cream',
      image: '/image/product-9.png',
      price: '$4.99 - $10.99',
    },
  ],
  Sundaes: [
    {
      id: 10,
      name: 'Chocolate Sundae Ice-Cream',
      image: '/image/product-10.png',
      price: '$4.99 - $10.99',
    },
    {
      id: 11,
      name: 'Mango Sundae Ice-Cream',
      image: '/image/product-11.png',
      price: '$4.99 - $10.99',
    },
  ],
};

const categoryIcons = {
  Cones: faIceCream,
  Cups: faIceCream,
  Sundaes: faIceCream,
  CandySticks: faIceCream,
};

const ProductCard = ({ product }) => (
  <div className="box">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <div className="price">{product.price}</div>
    <div className="stars">
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStarHalfAlt} />
    </div>
    <button type="button" className="btn">
      add to cart
    </button>
  </div>
);

const ProductCategory = ({ category, products }) => (
  <div className="category-section">
    <Swiper
      loop
      spaceBetween={20}
      autoplay={{ delay: 7500, disableOnInteraction: false }}
      slidesPerView={1}
      pagination={{ clickable: true }}
      centeredSlides
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      style={{ padding: '1rem' }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default function ImprovedCategorizedProducts() {
  SwiperCore.use([Autoplay]);
  const [selectedCategory, setSelectedCategory] = useState(
    Object.keys(productCategories)[0]
  );

  return (
    <div className="product" id="product">
      <h1 className="heading">
        our <span>products</span>
      </h1>
      <div className="category-container">
        <div className="category-list">
          {Object.keys(productCategories).map((category) => (
            <button
              key={category}
              className={`category-button ${
                selectedCategory === category ? 'active' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <FontAwesomeIcon
                icon={categoryIcons[category]}
                className="category-icon"
              />
              <span className="category-name">{category}</span>
            </button>
          ))}
        </div>
      </div>
      <ProductCategory
        category={selectedCategory}
        products={productCategories[selectedCategory]}
      />
    </div>
  );
}
