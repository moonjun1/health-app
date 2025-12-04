import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <Hero />

      {/* About Section */}
      <section className="main-about">
        <h2 className="section-title">2RE PLAY란?</h2>
        <p className="section-description">
          AI 기반 맞춤형 운동 코칭 플랫폼으로,
          <br />
          당신의 건강 데이터를 분석하여 최적의 코치를 추천합니다.
        </p>
      </section>

      {/* Features Section */}
      <section className="main-features">
        <h2 className="section-title">주요 기능</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3 className="feature-title">AI 매칭</h3>
            <p className="feature-description">
              건강 데이터 기반 최적의 코치 추천
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">실시간 분석</h3>
            <p className="feature-description">
              운동 데이터 실시간 모니터링
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3 className="feature-title">전문 코치</h3>
            <p className="feature-description">
              검증된 전문가와의 1:1 코칭
            </p>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="main-coaches">
        <h2 className="section-title">추천 코치</h2>
        <div className="coaches-grid">
          <div className="coach-card">
            <div className="coach-avatar" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400)' }}></div>
            <h3 className="coach-name">박성곤 코치</h3>
            <p className="coach-specialty">헬스 전문</p>
          </div>
          <div className="coach-card">
            <div className="coach-avatar" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400)' }}></div>
            <h3 className="coach-name">송지연 코치</h3>
            <p className="coach-specialty">필라테스 전문</p>
          </div>
          <div className="coach-card">
            <div className="coach-avatar" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400)' }}></div>
            <h3 className="coach-name">김예나 코치</h3>
            <p className="coach-specialty">요가 전문</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-section">
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
          <div className="footer-section footer-right">
            <div className="footer-address">
              <p>서울특별시 성동구 왕십리로 00길 00, 3층</p>
              <p>(주)투리플레이</p>
            </div>
            <div className="footer-social">
              <span>Instagram</span>
              <div className="social-divider"></div>
              <span>2play_health</span>
              <div className="social-divider"></div>
              <span>www.2play.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
