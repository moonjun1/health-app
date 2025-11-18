import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-bubble">
          <div className="about-profile">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070"
              alt="프로필"
              className="about-profile-image"
            />
            <span className="about-name">김은지</span>
          </div>
          <div className="about-text">
            <p>저는 '헬스', '필라테스'에는</p>
            <p>관심이 있지만</p>
            <p>어떻게 시작해야 할지 고민이 되는</p>
            <p>직장인입니다</p>
          </div>
          <button className="about-partner-btn">
            운동파트너
            찾아보기
          </button>
        </div>

        <div className="about-description">
          <p className="about-title">이런분들을 위한 서비스를 준비하고있습니다</p>
          <p className="about-subtitle">
            운동을 어떻게 해야할지 모르는 분들 안전하게 운동할 수 있는 환경이 필요한 분들
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
