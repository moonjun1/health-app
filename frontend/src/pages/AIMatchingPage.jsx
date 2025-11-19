import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './AIMatchingPage.css';

const AIMatchingPage = () => {
  const navigate = useNavigate();

  const handleRecommendation = () => {
    navigate('/ai-recommendation-result');
  };

  return (
    <div className="ai-matching-page">
      <Header />

      {/* Logo */}
      <div className="ai-logo">logo</div>

      {/* Main Content */}
      <section className="ai-main-section">
        <h1 className="ai-main-title">
          "AI가 당신의 건강 데이터를 분석해
          <br />
          맞춤 코치를 추천합니다."
        </h1>
        <p className="ai-main-subtitle">
          AI analyzes your
          <br />
          health data and recommends a custom coach.
        </p>

        {/* Search Bar */}
        <div className="ai-search-bar">
          <input
            type="text"
            placeholder="새로운 활동하기"
            className="ai-search-input"
          />
          <button className="ai-search-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="6" stroke="white" strokeWidth="2"/>
              <path d="M14 14L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Honeycomb Center */}
        <div className="ai-honeycomb-container">
          <img src="/honeycomb.png" alt="AI 분석" className="honeycomb-image" />
        </div>

        {/* CTA Button */}
        <button className="ai-cta-button" onClick={handleRecommendation}>
          AI 코치 추천 받기
        </button>
      </section>

      {/* Footer */}
      <footer className="ai-footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-left">
              <div className="footer-links">
                <a href="#coach">코치소개</a>
                <a href="#find">코치찾기</a>
                <a href="#register">코치등록하기</a>
              </div>
              <div className="footer-contact">
                <p className="footer-phone">1588-0000</p>
                <p className="footer-hours">고객센터 평일 10:00~18:00 (주말/공휴일 휴무)</p>
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-address">
                <p>서울특별시 성동구 왕십리로 00길 00, 3층</p>
                <p>(주)투리플레이</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-social-icons">
              <div className="social-icon"></div>
              <div className="social-icon"></div>
              <div className="social-icon"></div>
            </div>
            <div className="footer-social">
              <p>Instagram | 2play_health | www.2play.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIMatchingPage;
