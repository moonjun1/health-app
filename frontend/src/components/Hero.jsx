import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      subtitle: "운동이 이어주는",
      title: "두 번째 인연",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070"
    },
    {
      subtitle: "함께하는 건강한",
      title: "운동 파트너",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
    },
    {
      subtitle: "전문가와 함께하는",
      title: "맞춤형 트레이닝",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''} ${
              index < currentSlide ? 'prev' : ''
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content">
              <h1 className="hero-subtitle">{slide.subtitle}</h1>
              <h2 className="hero-title">{slide.title}</h2>

              <button className="hero-cta">
                <span>찾으러 가기</span>
                <svg
                  className="arrow-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path
                    d="M9 12L15 12M15 12L12 9M15 12L12 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
