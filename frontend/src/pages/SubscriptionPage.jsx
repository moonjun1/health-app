import React, { useState } from 'react';
import './SubscriptionPage.css';

const SubscriptionPage = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      id: 'basic',
      name: '베이직',
      monthlyPrice: '9,900',
      yearlyPrice: '99,000',
      features: [
        '월 5회 코치 매칭',
        '기본 운동 추천',
        '운동 기록 관리',
        '커뮤니티 이용',
      ],
      popular: false,
    },
    {
      id: 'pro',
      name: '프로',
      monthlyPrice: '19,900',
      yearlyPrice: '199,000',
      features: [
        '무제한 코치 매칭',
        'AI 맞춤 운동 추천',
        '상세 운동 분석',
        '영양 관리 기능',
        '우선 고객 지원',
        '커뮤니티 프리미엄',
      ],
      popular: true,
    },
    {
      id: 'premium',
      name: '프리미엄',
      monthlyPrice: '39,900',
      yearlyPrice: '399,000',
      features: [
        '프로 플랜 모든 기능',
        '1:1 전담 코치 배정',
        '주간 피드백 리포트',
        '맞춤 식단 관리',
        '오프라인 이벤트 참여',
        '전문가 상담 무제한',
      ],
      popular: false,
    },
  ];

  const getPrice = (plan) => {
    return billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  return (
    <div className="subscription-page">
      <header className="sub-header">
        <div className="sub-logo">logo</div>
        <nav className="sub-nav">
          <a href="/main">홈</a>
          <a href="#certificate">자격증/소개</a>
          <a href="#recruit">인재모집</a>
          <a href="#community">커뮤니티</a>
          <a href="#mypage">마이페이지</a>
          <a href="#service">서비스 이용</a>
          <a href="/login">LOGIN</a>
        </nav>
      </header>

      <div className="sub-container">
        <section className="sub-hero">
          <h1>당신에게 맞는 플랜을 선택하세요</h1>
          <p>목표 달성을 위한 최적의 코칭 서비스</p>
        </section>

        <section className="billing-toggle">
          <div className="toggle-container">
            <button
              className={`toggle-btn ${billingPeriod === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingPeriod('monthly')}
            >
              월간 결제
            </button>
            <button
              className={`toggle-btn ${billingPeriod === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingPeriod('yearly')}
            >
              연간 결제 <span className="discount">20% 할인</span>
            </button>
          </div>
        </section>

        <section className="plans-section">
          <div className="plans-grid">
            {plans.map((plan) => (
              <div key={plan.id} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">인기</div>}
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price-amount">{getPrice(plan)}</span>
                  <span className="price-unit">원 / {billingPeriod === 'monthly' ? '월' : '년'}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="plan-btn">시작하기</button>
              </div>
            ))}
          </div>
        </section>

        <section className="features-detail">
          <h2>모든 플랜에 포함된 기능</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h3>모바일 앱</h3>
              <p>언제 어디서나 편리하게 이용하세요</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h3>데이터 분석</h3>
              <p>운동 기록을 한눈에 확인하세요</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h3>보안</h3>
              <p>개인정보는 안전하게 보호됩니다</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💬</div>
              <h3>채팅 지원</h3>
              <p>실시간 문의와 답변 서비스</p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <h2>자주 묻는 질문</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>플랜은 언제든지 변경할 수 있나요?</h3>
              <p>네, 마이페이지에서 언제든지 플랜을 업그레이드하거나 다운그레이드할 수 있습니다.</p>
            </div>
            <div className="faq-item">
              <h3>환불 정책은 어떻게 되나요?</h3>
              <p>서비스 이용 후 7일 이내에는 100% 환불이 가능합니다.</p>
            </div>
            <div className="faq-item">
              <h3>코치 매칭은 어떻게 이루어지나요?</h3>
              <p>AI 알고리즘이 회원님의 목표와 선호도를 분석하여 최적의 코치를 추천해드립니다.</p>
            </div>
            <div className="faq-item">
              <h3>무료 체험 기간이 있나요?</h3>
              <p>모든 신규 회원에게 14일 무료 체험 기간을 제공합니다.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>지금 시작하세요</h2>
          <p>첫 14일은 무료입니다. 언제든지 취소할 수 있습니다.</p>
          <button className="cta-btn">무료로 시작하기</button>
        </section>
      </div>

      <footer className="sub-footer">
        <div className="footer-content">
          <p>© 2024 2RE PLAY. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SubscriptionPage;
