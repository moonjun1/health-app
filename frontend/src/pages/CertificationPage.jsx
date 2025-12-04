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
            <div className="patent-icon-wrapper">
              <div className="patent-icon">🤖</div>
            </div>
            <h3 className="patent-title">AI 기반 맞춤 운동 추천 시스템</h3>
            <p className="patent-status">특허 제10-XXXXXXX호</p>
            <p className="patent-desc">개인의 건강 데이터와 운동 이력을 분석하여 최적의 운동 프로그램을 추천합니다</p>
          </div>
          <div className="patent-box">
            <div className="patent-icon-wrapper">
              <div className="patent-icon">📊</div>
            </div>
            <h3 className="patent-title">운동 데이터 분석을 통한 피드백 알고리즘</h3>
            <p className="patent-status">출원 중</p>
            <p className="patent-desc">실시간 운동 데이터를 분석하여 즉각적인 피드백을 제공합니다</p>
          </div>
          <div className="patent-box">
            <div className="patent-icon-wrapper">
              <div className="patent-icon">🎯</div>
            </div>
            <h3 className="patent-title">헬스케어 코칭 매칭 플랫폼</h3>
            <p className="patent-status">등록 완료</p>
            <p className="patent-desc">사용자와 코치를 효율적으로 매칭하는 플랫폼 기술입니다</p>
          </div>
        </div>
      </section>

      {/* Section 3: Coaches */}
      <section className="cert-coaches-section">
        <h2 className="coaches-section-title">모든 코치는 검증된 전문가입니다</h2>
        <p className="coaches-subtitle">엄격한 심사를 통과한 전문 코치들이 함께합니다</p>

        <div className="trainers-grid">
          <div className="trainer-card">
            <div className="trainer-image-wrapper">
              <img src="/trainer1.png" alt="박성곤 트레이너" />
            </div>
            <div className="trainer-info">
              <p className="trainer-name">박성곤</p>
              <p className="trainer-title">헬스 전문 코치</p>
              <div className="trainer-badges">
                <span className="badge">생활스포츠지도사 2급</span>
                <span className="badge">NSCA-CPT</span>
              </div>
            </div>
          </div>
          <div className="trainer-card">
            <div className="trainer-image-wrapper">
              <img src="/trainer2.png" alt="송지연 트레이너" />
            </div>
            <div className="trainer-info">
              <p className="trainer-name">송지연</p>
              <p className="trainer-title">필라테스 전문 코치</p>
              <div className="trainer-badges">
                <span className="badge">필라테스 국제자격증</span>
                <span className="badge">러닝 코치</span>
              </div>
            </div>
          </div>
          <div className="trainer-card">
            <div className="trainer-image-wrapper">
              <img src="/trainer3.png" alt="김예나 트레이너" />
            </div>
            <div className="trainer-info">
              <p className="trainer-name">김예나</p>
              <p className="trainer-title">시니어 전문 코치</p>
              <div className="trainer-badges">
                <span className="badge">노인체육지도사</span>
                <span className="badge">생활스포츠지도사 1급</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Certification Process */}
      <section className="cert-process">
        <h2 className="process-title">인증 절차</h2>
        <p className="process-subtitle">AI와 전문가가 함께하는 이중 검증 시스템</p>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3 className="step-title">자격증 검증</h3>
              <p className="step-description">전문 자격증과 경력 사항을 철저히 검증합니다</p>
            </div>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3 className="step-title">AI 분석</h3>
              <p className="step-description">코칭 스타일과 전문성을 AI가 분석합니다</p>
            </div>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3 className="step-title">실무 심사</h3>
              <p className="step-description">전문가가 직접 코칭 능력을 평가합니다</p>
            </div>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">04</div>
            <div className="step-content">
              <h3 className="step-title">최종 승인</h3>
              <p className="step-description">모든 절차를 통과한 코치만 활동 가능합니다</p>
            </div>
          </div>
        </div>

        <div className="process-quote">
          <p className="quote-text">"기술이 만든 신뢰, 사람이 완성합니다"</p>
          <p className="quote-subtitle">전문가의 경험이 만나 당신의 건강 여정을 더욱 안전하게 이끌어갑니다</p>
        </div>
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
