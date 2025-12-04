import React from 'react';
import Header from '../components/Header';
import './CertificationPage.css';

const CertificationPage = () => {
  return (
    <div className="certification-page">
      <Header />

      {/* Hero Section */}
      <section className="cert-hero">
        <div className="cert-hero-content">
          <h1 className="cert-hero-title">특허·인증</h1>
          <p className="cert-hero-subtitle">
            기술력과 전문성으로 검증된<br />
            신뢰할 수 있는 헬스케어 플랫폼
          </p>
        </div>
      </section>

      {/* Section 1: Quote */}
      <section className="cert-quote-section">
        <p className="cert-quote-text">
          "운동 데이터를 단순히 수집하는 것을 넘어,<br />
          개인별 피드백으로 발전시키는 기술입니다."
        </p>
      </section>

      {/* Section 2: Patents */}
      <section className="cert-patents-section">
        <h2 className="patents-section-title">보유 특허 및 기술</h2>
        <div className="patents-boxes">
          <div className="patent-box">
            <div className="patent-icon">🤖</div>
            <h3 className="patent-title">AI 기반 맞춤<br />운동 추천 시스템</h3>
            <p className="patent-status">특허 제10-XXXXXXX호</p>
          </div>
          <div className="patent-box">
            <div className="patent-icon">📊</div>
            <h3 className="patent-title">운동 데이터 분석을 통한<br />피드백 알고리즘</h3>
            <p className="patent-status">출원 중</p>
          </div>
          <div className="patent-box">
            <div className="patent-icon">🎯</div>
            <h3 className="patent-title">헬스케어 코칭<br />매칭 플랫폼</h3>
            <p className="patent-status">등록 완료</p>
          </div>
        </div>

        {/* V-shaped connecting lines */}
        <svg className="connecting-lines" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg">
          <line x1="200" y1="0" x2="600" y2="200" stroke="#5b9bd5" strokeWidth="3"/>
          <line x1="600" y1="0" x2="600" y2="200" stroke="#5b9bd5" strokeWidth="3"/>
          <line x1="1000" y1="0" x2="600" y2="200" stroke="#5b9bd5" strokeWidth="3"/>

          <line x1="600" y1="200" x2="300" y2="400" stroke="#5b9bd5" strokeWidth="3"/>
          <line x1="600" y1="200" x2="600" y2="400" stroke="#5b9bd5" strokeWidth="3"/>
          <line x1="600" y1="200" x2="900" y2="400" stroke="#5b9bd5" strokeWidth="3"/>
        </svg>

        <h2 className="trainers-title">모든 코치는 검증된 전문가입니다.</h2>

        <div className="trainers-grid">
          <div className="trainer-card">
            <img src="/trainer1.png" alt="김성준 트레이너" />
            <p className="trainer-name">김성준 트레이너</p>
          </div>
          <div className="trainer-card">
            <img src="/trainer2.png" alt="박지수 트레이너" />
            <p className="trainer-name">박지수 트레이너</p>
          </div>
          <div className="trainer-card">
            <img src="/trainer3.png" alt="조우민 트레이너" />
            <p className="trainer-name">조우민 트레이너</p>
          </div>
        </div>
      </section>

      {/* Section 3: Description */}
      <section className="cert-bottom-description">
        <p className="bottom-desc-text">
          등록된 코치는 자격증, 경력, 활동 이력 등을<br />
          플랫폼 내부 심사 절차를 통해 공식 인증받습니다.<br />
          AI와 사람이 함께 검증하는 이중 구조로,<br />
          사용자에게 더욱 믿을 수 있는 코칭 환경을 제공합니다.
        </p>
      </section>

      {/* Section 4: Certification Process */}
      <section className="cert-process">
        <div className="process-header">
          <div className="process-line"></div>
          <div className="process-line"></div>
          <div className="process-line"></div>
          <div className="process-line"></div>
          <div className="process-line"></div>
        </div>
        <div className="process-title-bar">
          <h2>인증 절차</h2>
        </div>
        <h3 className="process-main-title">"기술이 만든 신뢰, 사람이 완성합니다."</h3>
        <p className="process-subtitle">
          전문가의 경험이 만나<br />
          당신의 건강 여정을 더욱 안전하게 이끌어갑니다.
        </p>
      </section>

      {/* Footer */}
      <footer className="cert-footer">
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

export default CertificationPage;
