import React from 'react';
import Header from '../components/Header';
import './AIMatchingPage.css';

const AIMatchingPage = () => {
  return (
    <div className="ai-matching-page">
      <Header />

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

        {/* Honeycomb Center */}
        <div className="ai-honeycomb-container">
          <img src="/honeycomb.png" alt="AI 분석" className="honeycomb-image" />
          
          {/* Four boxes around honeycomb */}
          <div className="ai-box ai-box-topleft">
            <span>나만의 코치 추천</span>
          </div>
          <div className="ai-box ai-box-topright">
            <span>자세 분석</span>
          </div>
          <div className="ai-box ai-box-bottomleft">
            <span>오늘의 운동 추천</span>
          </div>
          <div className="ai-box ai-box-bottomright">
            <span>AI 운동 추천</span>
          </div>

          {/* Connecting lines */}
          <svg className="ai-connections" viewBox="0 0 800 800">
            <line x1="200" y1="200" x2="350" y2="350" stroke="#5b9bd5" strokeWidth="2"/>
            <line x1="600" y1="200" x2="450" y2="350" stroke="#5b9bd5" strokeWidth="2"/>
            <line x1="200" y1="600" x2="350" y2="450" stroke="#5b9bd5" strokeWidth="2"/>
            <line x1="600" y1="600" x2="450" y2="450" stroke="#5b9bd5" strokeWidth="2"/>
          </svg>

          {/* Circles */}
          <div className="ai-circle circle-1"></div>
          <div className="ai-circle circle-2"></div>
          <div className="ai-circle circle-3"></div>
          <div className="ai-circle circle-4"></div>
          <div className="ai-circle circle-5"></div>
          <div className="ai-circle circle-6"></div>
          <div className="ai-circle circle-7"></div>
          <div className="ai-circle circle-8"></div>
        </div>

        {/* CTA Button */}
        <button className="ai-cta-button">AI 코치 추천 받기</button>
      </section>

      {/* Footer */}
      <footer className="ai-footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#coach">코치소개</a>
            <a href="#find">코치찾기</a>
            <a href="#register">코치등록하기</a>
          </div>
          <div className="footer-contact">
            <p className="footer-phone">1588-0000</p>
            <p className="footer-hours">고객센터 평일 10:00~18:00 (주말/공휴일 휴무)</p>
          </div>
          <div className="footer-address">
            <p>
              서울특별시 성동구 왕십리로 00길 00, 3층
              <br />
              (주)투리플레이
            </p>
          </div>
          <div className="footer-social">
            <p>Instagram | 2play_health | www.2play.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIMatchingPage;
