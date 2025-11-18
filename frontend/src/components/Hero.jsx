import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      background: '/runners.png',
      subtitle: '운동이 이어주는',
      title: '두 번째 인연',
    },
    {
      background: '/rings.png',
      subtitle: '데이터로 연결되는',
      title: '새로운 코칭 경험',
      description: '복잡한 검색은 이제 그만. 데이터가 당신에게 맞는 코치를 직접 연결합니다.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // 10초

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${slides[currentSlide].background})` }}
      ></div>
      <div className="hero-corner-circle"></div>
      <div className="hero-diagonal-stripe"></div>
      <div className="hero-overlay"></div>

      <div className={`hero-content ${currentSlide === 1 ? 'slide-down' : ''}`}>
        <div className="hero-logo">logo</div>
        <h2 className="hero-subtitle">{slides[currentSlide].subtitle}</h2>
        <h1 className="hero-title">{slides[currentSlide].title}</h1>
        {slides[currentSlide].description && (
          <p className="hero-description">{slides[currentSlide].description}</p>
        )}

        <button className="hero-button">
          <span>찾으러 가기</span>
          <svg
            className="arrow-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12 8l4 4-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
