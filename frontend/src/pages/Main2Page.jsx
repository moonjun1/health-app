import React from 'react';
import './Main2Page.css';

const Main2Page = () => {
  return (
    <div className="main2-page">
      {/* Header */}
      <header className="main2-header">
        <div className="main2-logo">logo</div>
        <nav className="main2-nav">
          <a href="/main">홈</a>
          <a href="#certificate">자격증/소개</a>
          <a href="#recruit">인재모집</a>
          <a href="#community">커뮤니티</a>
          <a href="#mypage">마이페이지</a>
          <a href="#service">서비스 이용</a>
          <a href="/login">LOGIN</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main2-content">
        {/* Hero Section */}
        <section className="main2-hero">
          <div className="hero-text">
            <h1 className="hero-title">운동이 이어주는</h1>
            <h1 className="hero-title">두 번째 인연</h1>
            <p className="hero-subtitle">당신의 건강한 일상을 위한 맞춤형 코칭</p>
          </div>
        </section>

        {/* About Section */}
        <section className="main2-about">
          <h2 className="section-title">2RE PLAY란?</h2>
          <p className="section-description">
            AI 기반 맞춤형 운동 코칭 플랫폼으로,
            <br />
            당신의 건강 데이터를 분석하여 최적의 코치를 추천합니다.
          </p>
        </section>

        {/* Features Section */}
        <section className="main2-features">
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
        <section className="main2-coaches">
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
      </main>

      {/* Footer */}
      <footer className="main2-footer">
        <div className="footer-content">
          <p className="footer-text">© 2024 2RE PLAY. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Main2Page;
