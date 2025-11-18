import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './MainPageNew.css';

const MainPageNew = () => {
  return (
    <div className="main-page-new">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            운동이 이어주는
            <br />
            <span className="hero-highlight">두 번째 인연</span>
          </h1>
          <p className="hero-subtitle">
            전문 트레이너와 함께하는 맞춤형 운동 솔루션
          </p>
          <button className="hero-cta">
            <span>시작하기</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-card">
            <div className="profile-badge">
              <div className="profile-image">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" alt="김은지" />
              </div>
              <span className="profile-name">김은지</span>
            </div>
            <div className="about-message">
              <p>저는 '헬스', '필라테스'에는</p>
              <p>관심이 있지만</p>
              <p>어떻게 시작해야 할지 고민이 되는</p>
              <p>직장인입니다</p>
            </div>
            <button className="partner-btn">운동파트너 찾아보기</button>
          </div>
          <div className="about-description">
            <h2 className="section-title">이런 분들을 위한 서비스를 준비하고 있습니다</h2>
            <p className="section-subtitle">
              운동을 어떻게 해야할지 모르는 분들<br />
              안전하게 운동할 수 있는 환경이 필요한 분들
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <h3 className="feature-title">
              전문가와의<br />매칭
            </h3>
            <p className="feature-description">
              당신에게 맞는<br />전문 트레이너를 찾아보세요
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">
              안전한<br />운동 환경
            </h3>
            <p className="feature-description">
              체계적인 관리로<br />부상 없는 운동을
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">
              맞춤형<br />프로그램
            </h3>
            <p className="feature-description">
              개인 목표에 맞춘<br />운동 계획 제공
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">지금 바로 시작하세요</h2>
          <p className="cta-subtitle">전문 트레이너와 함께하는 건강한 변화</p>
          <button className="cta-button">무료로 시작하기</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MainPageNew;
