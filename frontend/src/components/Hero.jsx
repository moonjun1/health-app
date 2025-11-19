import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      background: '/runners.png',
      subtitle: '운동이 이어주는',
      title: '두 번째 인연',
      showRings: false,
    },
    {
      background: null,
      subtitle: '데이터로 연결되는',
      title: '새로운 코칭 경험',
      description: '복잡한 검색은 이제 그만. 데이터가 당신에게 맞는 코치를 직접 연결합니다.',
      showRings: true,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero">
      {/* 배경 이미지 */}
      {slides[currentSlide].background && (
        <div
          className="hero-background"
          style={{ backgroundImage: `url(${slides[currentSlide].background})` }}
        />
      )}

      {/* 어두운 오버레이 */}
      <div className="hero-overlay" />

      {/* 텍스트 컨텐츠 */}
      <div className="hero-content">
        <img src="/logo.png" alt="2RE PLAY" className="hero-logo" />
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

      {/* 장식 고리 */}
      {slides[currentSlide].showRings && (
        <img
          src="/rings.png"
          alt="체조 고리"
          className="hero-rings-image"
        />
      )}
    </section>
  );
};

export default Hero;
