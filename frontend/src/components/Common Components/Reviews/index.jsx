import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import SwiperCore, { Autoplay } from 'swiper';
import './Reviews.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Autoplay]);

export default function Reviews() {
  const [reviews, setReviews] = useState([
    {
      img: '/image/pic-1.png',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis maxime inventore illo nemo cupiditate quam eligendi nihil sunt ullam, laudantium, earum in nam provident quaerat exercitationem?',
      name: 'john deo',
      stars: 4.5,
    },
    {
      img: '/image/pic-2.png',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis maxime inventore illo nemo cupiditate quam eligendi nihil sunt ullam, laudantium, earum in nam provident quaerat exercitationem?',
      name: 'john deo',
      stars: 4.5,
    },
    {
      img: '/image/pic-3.png',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis maxime inventore illo nemo cupiditate quam eligendi nihil sunt ullam, laudantium, earum in nam provident quaerat exercitationem?',
      name: 'john deo',
      stars: 4.5,
    },
    {
      img: '/image/pic-4.png',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis maxime inventore illo nemo cupiditate quam eligendi nihil sunt ullam, laudantium, earum in nam provident quaerat exercitationem?',
      name: 'john deo',
      stars: 4.5,
    },
  ]);

  const [newReview, setNewReview] = useState({
    img: '',
    text: '',
    name: '',
    stars: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleStarChange = (e) => {
    setNewReview({ ...newReview, stars: parseFloat(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newReview.img &&
      newReview.text &&
      newReview.name &&
      newReview.stars > 0
    ) {
      setReviews([...reviews, newReview]);
      setNewReview({ img: '', text: '', name: '', stars: 0 });
    }
  };

  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        customer&apos;s <span>review</span>
      </h1>
      <div className="reviews-slider">
        <Swiper
          loop
          autoplay={{ delay: 7500, disableOnInteraction: false }}
          slidesPerView={3}
          centeredSlides
          spaceBetween={20}
          pagination={{ clickable: true }}
          style={{ padding: '1rem' }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="box">
                <img src={review.img} alt={review.name} />
                <p>{review.text}</p>
                <h3>{review.name}</h3>
                <div className="stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={
                        i < Math.floor(review.stars) ? faStar : faStarHalfAlt
                      }
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <form onSubmit={handleSubmit} className="review-form">
        <h2>Add Your Review</h2>
        <input
          type="text"
          name="img"
          value={newReview.img}
          onChange={handleInputChange}
          placeholder="Image URL"
          required
        />
        <textarea
          name="text"
          value={newReview.text}
          onChange={handleInputChange}
          placeholder="Your review"
          required
        />
        <input
          type="text"
          name="name"
          value={newReview.name}
          onChange={handleInputChange}
          placeholder="Your name"
          required
        />
        <div className="stars-rating">
          <label htmlFor="stars">Rating:</label>
          <input
            type="number"
            id="stars"
            name="stars"
            value={newReview.stars}
            onChange={handleStarChange}
            min="0"
            max="5"
            step="0.5"
            required
          />
        </div>
        <button type="submit" className="btn">
          Submit Review
        </button>
      </form>
    </section>
  );
}
