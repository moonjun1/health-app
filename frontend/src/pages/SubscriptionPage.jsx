import React from 'react';
import Header from '../components/Header';
import './SubscriptionPage.css';

const SubscriptionPage = () => {
  return (
    <div className="subscription-page">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <img src="/images/rectangle-274.png" alt="Hero Background" className="hero-bg" />
        <div className="hero-overlay"></div>

        {/* 6개의 네모 상자들 (왼쪽에서 오른쪽으로 점점 작아짐) */}
        <div className="hero-boxes">
          <div className="hero-box box-1"></div>
          <div className="hero-box box-2"></div>
          <div className="hero-box box-3"></div>
          <div className="hero-box box-4"></div>
          <div className="hero-box box-5"></div>
          <div className="hero-box box-6"></div>
        </div>

        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">
              <div className="hero-title-line hero-title-line--large">The routine of a</div>
              <div className="hero-title-line hero-title-line--medium">professional</div>
            </h1>
            <button className="cat-button">CAT</button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <h2 className="intro-title">은퇴선수의 진짜 경험이 만든</h2>
        <h1 className="intro-main">건강 가이드</h1>
        <p className="intro-subtitle">건강, 이제 경험으로 구독하세요.</p>
        <div className="intro-description">
          <p className="intro-desc-small">멘탈 피트니스</p>
          <p className="intro-desc-main">흔들리지 않는 마음의 루틴</p>
        </div>
      </section>

      {/* Popular Coaches Section */}
      <section className="coaches-section">
        <div className="section-title">
          <div className="title-dot"></div>
          <h2>인기 코치</h2>
        </div>

        <div className="coaches-grid">
          <div className="coach-card">
            <div className="coach-image-wrapper">
              <img src="/images/image-32.png" alt="구자철" />
              <div className="coach-image-overlay"></div>
            </div>
            <div className="coach-info">
              <p className="coach-subtitle">축구 국가대표<br />전 출신</p>
              <h3 className="coach-name">구자철</h3>
            </div>
          </div>

          <div className="coach-card">
            <div className="coach-image-wrapper">
              <img src="/images/image-31.png" alt="이형택" />
              <div className="coach-image-overlay"></div>
            </div>
            <div className="coach-info">
              <p className="coach-subtitle">테니스 전 선수</p>
              <h3 className="coach-name">이형택</h3>
            </div>
          </div>
        </div>

        <div className="preview-btn-wrapper">
          <button className="preview-btn">미리보기</button>
        </div>

        <div className="daily-balance">
          <p className="balance-label">일반인에게 맞춘</p>
          <p className="balance-title">"데일리 밸런스 운동"</p>
        </div>
      </section>

      {/* Premium Benefits */}
      <section className="premium-section">
        <div className="premium-header">
          <p className="premium-exclusive">"프리미엄 구독자만 열람 가능"</p>
          <h2 className="premium-title">더 많은 코치들과 함께 할 수 있습니다.</h2>
        </div>

        <div className="coaches-gallery">
          <div className="gallery-scroll">
            <img src="/images/rectangle-310.png" alt="Coach 1" />
            <img src="/images/rectangle-294.png" alt="Coach 2" />
            <img src="/images/rectangle-295.png" alt="Coach 3" />
            <img src="/images/rectangle-310.png" alt="Coach 4" />
            <img src="/images/rectangle-294.png" alt="Coach 5" />
          </div>
        </div>

        <button className="coaches-preview-btn">이 코치들의 미리 보기</button>
      </section>

      {/* Benefits Sections */}
      <section className="benefits-section">
        {/* 첫 번째 혜택 - 왼쪽 정렬 */}
        <div className="benefit-item benefit-left">
          <div className="benefit-content-box">
            <div className="benefit-items-list">
              <h3>프리미엄 콘텐츠 전체 열람</h3>
              <h3>조기 공개 콘텐츠 선공개</h3>
              <h3>오디오 콘텐츠 제공</h3>
            </div>
          </div>
        </div>

        {/* 두 번째 혜택 - 오른쪽 정렬 */}
        <div className="benefit-item benefit-right">
          <h2 className="benefit-section-title">코치와 직접 연결되는 경험</h2>
          <div className="benefit-content-box">
            <div className="benefit-items-list">
              <h3>구독자 전용 커뮤니티 게시판</h3>
              <h3>멘탈케어 메시지 및 루틴 알림</h3>
              <h3>'프리미엄 구독자' 배지 부여</h3>
            </div>
          </div>
        </div>

        {/* 세 번째 혜택 - 왼쪽 정렬 */}
        <div className="benefit-item benefit-left">
          <h2 className="benefit-section-title">실시간 참여</h2>
          <div className="benefit-content-box">
            <div className="benefit-items-list">
              <h3>월간 코치 토크 세션</h3>
              <h3>챌린지 프로그램 참여권</h3>
              <h3>완주자 인증 배지</h3>
            </div>
          </div>
        </div>
      </section>

      {/* More Benefits */}
      <section className="more-benefits">
        <div className="more-dots">
          <div className="dot small"></div>
          <div className="dot large"></div>
        </div>
        <h2 className="more-title">더 많은 혜택들</h2>
        <p className="more-subtitle">"프리미엄 구독하고 모든 루틴을 확인하세요"</p>
      </section>

      {/* Footer */}
      <footer className="subscription-footer">
        <div className="footer-logo">
          <div className="footer-cat-badge">CAT</div>
        </div>
        <div className="footer-content">
          <div className="footer-contact">
            <h3>1588-0000</h3>
            <p>고객센터 평일 10:00~18:00 (주말/공휴일 휴무)</p>
            <p>서울특별시 성동구 왕실리로 00길 00, 3층<br />(주)투리플레이</p>
          </div>

          <div className="footer-links">
            <a href="/coach-intro">코치소개</a>
            <a href="/coach-search">코치찾기</a>
            <a href="/coach-register">코치등록하기</a>
          </div>

          <div className="footer-social">
            <p>Instagram: 2play_health</p>
            <p>www.2play.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SubscriptionPage;
