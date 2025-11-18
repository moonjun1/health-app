import React from 'react';
import Header from '../components/Header';
import './CertificationPage.css';

const CertificationPage = () => {
  return (
    <div className="certification-page">
      <Header />
      
      {/* Section 1: Hero */}
      <section className="cert-hero">
        {/* Background particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>

        <h1 className="cert-title">특허 인증</h1>
        <div className="cert-dot"></div>

        <div className="cert-hero-circle">
          <div className="patent-logo">
            <div className="patent-logo-text">특허청</div>
            <div className="patent-logo-subtitle">KOREAN INTELLECTUAL PROPERTY OFFICE</div>
          </div>
          <h2 className="cert-hero-quote">"신뢰는 기술로부터, 기술은 사람으로부터."</h2>
          <p className="cert-hero-text">
            AI와 전문가가 함께 만드는 신뢰 기반의 코칭 시스템.<br />
            특허받은 기술과 공식 인증 절차로,<br />
            모든 사용자에게 안정적인 서비스를 제공합니다
          </p>
          <img src="/athlete-top.png" alt="운동선수" className="athlete-image" />
        </div>

        <div className="cert-hero-small-circle">
          기술과 사람<br />
          두 가지 신뢰가 만나는 지점
        </div>
      </section>

      {/* Section 2: Patents */}
      <section className="cert-patents">
        <h2 className="patents-title">AI 맞춤 코칭 시스템 특허 보유</h2>
        <p className="patents-quote">
          "운동 데이터를 단순히 수집하는 것을 넘어,<br />
          개인별 피드백으로 발전시키는 기술입니다."
        </p>
        <div className="patents-grid">
          <div className="patent-box">
            AI 기반 맞춤<br />
            운동 추천 시스템<br />
            (특허 제10-XXXXXXX호)
          </div>
          <div className="patent-box">
            운동 데이터 분석을 통한<br />
            피드백 알고리즘<br />
            (출원 중)
          </div>
          <div className="patent-box">
            헬스케어 코칭<br />
            매칭 플랫폼<br />
            (등록 완료)
          </div>
        </div>
      </section>

      {/* Section 3: Verification Process */}
      <section className="cert-verification">
        <p className="verification-title">모든 코치는 검증된 전문가입니다.</p>
        
        <div className="verification-flow">
          <div className="flow-step">
            <div className="flow-dot"></div>
            <p>코치 등록 및<br />자격증 제출</p>
          </div>
          <div className="flow-line"></div>
          <div className="flow-step">
            <div className="flow-dot"></div>
            <p>AI 프로필<br />데이터 검수</p>
          </div>
          <div className="flow-line"></div>
          <div className="flow-step">
            <div className="flow-dot"></div>
            <p>관리자 검증 및<br />내부 심사</p>
          </div>
          <div className="flow-line"></div>
          <div className="flow-step">
            <div className="flow-dot"></div>
            <p>공식 인증<br />뱃지 발급</p>
          </div>
        </div>

        <div className="trainers-grid">
          <div className="trainer-card">
            <img src="/trainer1.png" alt="김성준 트레이너" />
            <div className="trainer-badge">✓</div>
            <p>김성준 트레이너</p>
          </div>
          <div className="trainer-card">
            <img src="/trainer2.png" alt="박지수 트레이너" />
            <div className="trainer-badge">✓</div>
            <p>박지수 트레이너</p>
          </div>
          <div className="trainer-card">
            <img src="/trainer3.png" alt="조우민 트레이너" />
            <div className="trainer-badge">✓</div>
            <p>조우민 트레이너</p>
          </div>
        </div>

        <p className="verification-desc">
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
            <p>서울특별시 성동구 왕십리로 00길 00, 3층<br />(주)투리플레이</p>
          </div>
          <div className="footer-social">
            <p>Instagram | 2play_health | www.2play.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CertificationPage;
