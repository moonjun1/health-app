import React from 'react';
import Header from '../components/Header';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">2RE PLAY</h1>
          <p className="hero-subtitle">운동이 이어주는 두 번째 인연</p>
          <div className="hero-description">
            AI 기반 맞춤형 헬스케어 코칭 플랫폼으로<br />
            당신의 건강한 일상을 함께 만들어갑니다
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="mission-container">
          <h2 className="section-title">우리의 미션</h2>
          <p className="mission-text">
            2RE PLAY는 단순한 운동 매칭 서비스를 넘어,<br />
            개인의 건강 데이터와 AI 분석을 통해<br />
            최적의 코치와 운동 프로그램을 연결합니다.
          </p>
          <div className="mission-cards">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>맞춤형 매칭</h3>
              <p>당신의 목표와 체력 수준에<br />딱 맞는 코치를 찾아드립니다</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">📊</div>
              <h3>데이터 기반 분석</h3>
              <p>AI가 분석한 건강 데이터로<br />효과적인 운동 계획을 제공합니다</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🤝</div>
              <h3>신뢰할 수 있는 전문가</h3>
              <p>검증된 자격증과 경력을 가진<br />전문 코치들과 함께합니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="values-container">
          <h2 className="section-title">핵심 가치</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <h3 className="value-title">개인 맞춤화</h3>
              <p className="value-desc">
                모든 사람은 다릅니다. 각자의 목표와 상황에 맞는<br />
                최적의 솔루션을 제공합니다.
              </p>
            </div>
            <div className="value-item">
              <div className="value-number">02</div>
              <h3 className="value-title">과학적 접근</h3>
              <p className="value-desc">
                데이터와 AI 기술을 활용하여<br />
                효과적이고 안전한 운동을 지원합니다.
              </p>
            </div>
            <div className="value-item">
              <div className="value-number">03</div>
              <h3 className="value-title">지속 가능성</h3>
              <p className="value-desc">
                단기간의 성과가 아닌 평생 건강한<br />
                라이프스타일을 만들어갑니다.
              </p>
            </div>
            <div className="value-item">
              <div className="value-number">04</div>
              <h3 className="value-title">신뢰와 투명성</h3>
              <p className="value-desc">
                모든 코치는 철저한 검증 절차를 거치며<br />
                투명한 정보를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="story-container">
          <h2 className="section-title">2RE PLAY 스토리</h2>
          <div className="story-content">
            <div className="story-text">
              <p className="story-paragraph">
                많은 사람들이 건강한 삶을 원하지만, 어디서부터 시작해야 할지 막막해합니다.
                혼자서는 동기부여가 어렵고, 잘못된 운동 방법으로 부상을 입기도 합니다.
              </p>
              <p className="story-paragraph">
                2RE PLAY는 이러한 문제를 해결하기 위해 탄생했습니다.
                AI 기술과 전문 코치의 경험을 결합하여, 누구나 쉽고 안전하게
                자신에게 맞는 운동을 시작할 수 있도록 돕습니다.
              </p>
              <p className="story-paragraph">
                '두 번째 인연'이라는 이름처럼, 우리는 운동을 통해
                더 나은 자신과의 만남, 건강한 삶과의 새로운 시작을 응원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="team-container">
          <h2 className="section-title">함께하는 사람들</h2>
          <p className="team-subtitle">
            건강한 미래를 만들어가는 전문가 팀
          </p>
          <div className="team-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">검증된 전문 코치</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">활성 회원</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">성공적인 매칭</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">만족도</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <div className="footer-content">
          <p className="footer-text">© 2024 2RE PLAY. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
