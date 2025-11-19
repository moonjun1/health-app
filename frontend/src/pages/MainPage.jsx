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
            <div className="coach-avatar"></div>
            <h3 className="coach-name">박성곤 코치</h3>
            <p className="coach-specialty">헬스 전문</p>
          </div>
          <div className="coach-card">
            <div className="coach-avatar"></div>
            <h3 className="coach-name">송지연 코치</h3>
            <p className="coach-specialty">필라테스 전문</p>
          </div>
          <div className="coach-card">
            <div className="coach-avatar"></div>
            <h3 className="coach-name">김예나 코치</h3>
            <p className="coach-specialty">요가 전문</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <p className="footer-text">© 2024 2RE PLAY. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
