import React from 'react';
import Header from '../components/Header';
import './CertificationPage.css';

const CertificationPage = () => {
  return (
    <div className="certification-page">
      <Header />
      
      {/* Section 1: Hero */}
      <section className="cert-hero">
        <h1 className="cert-title">특허 인증</h1>
        <img src="/patent-logo.png" alt="특허청" className="patent-logo-img" />
      </section>

      {/* Section 2: Description */}
      <section className="cert-description">
        <p className="desc-text">
          AI와 전문가가 함께 만드는 신뢰 기반의 코칭 시스템. 특허받은 기술과 공식 인증 절차로, 모든 사용자에게 안정적인 서비스를 제공합니다
        </p>
      </section>

      {/* Section 3: Trainers */}
      <section className="cert-trainers">
        <h2 className="trainers-title">모든 코치는 검증된 전문가입니다.</h2>

        <div className="trainers-grid">
          <div className="trainer-card">
            <img src="/trainer1.png" alt="트레이너 1" />
          </div>
          <div className="trainer-card">
            <img src="/trainer2.png" alt="트레이너 2" />
          </div>
          <div className="trainer-card">
            <img src="/trainer3.png" alt="트레이너 3" />
          </div>
        </div>
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
