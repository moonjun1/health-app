import React from 'react';
import Header from '../components/Header';
import './AIRecommendationResultPage.css';

const AIRecommendationResultPage = () => {
  return (
    <div className="ai-result-page">
      <Header />

      {/* Coach Indicator */}
      <div className="coach-indicator">
        <div className="blue-line"></div>
        <div className="indicator-content">
          <svg className="arrow-icon" width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M1 1L7 7L13 1" stroke="#289dfd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="indicator-text">나의 코치</div>
        </div>
      </div>

      {/* Trainers Container */}
      <div className="trainers-container">
        {/* Trainer 1 - 박성곤 */}
        <div className="trainer-card">
          <img src="/trainer1.png" alt="박성곤 선생님" className="trainer-image" />
          <h3 className="trainer-name">박성곤 선생님</h3>
          <div className="category-badge health">헬스</div>
          <p className="trainer-quote">"효율적으로 근력을 키우는 맞춤 트레이닝"</p>
        </div>

        {/* Trainer 2 - 송지연 */}
        <div className="trainer-card">
          <img src="/trainer2.png" alt="송지연 선생님" className="trainer-image" />
          <h3 className="trainer-name">송지연 선생님</h3>
          <div className="category-badge pilates">필라테스</div>
          <p className="trainer-quote">"부상 없이 달리는 러닝 코치"</p>
        </div>

        {/* Trainer 3 - 김예나 */}
        <div className="trainer-card">
          <img src="/trainer3.png" alt="김예나 선생님" className="trainer-image" />
          <h3 className="trainer-name">김예나 선생님</h3>
          <div className="category-badge health">헬스</div>
          <p className="trainer-quote">"시니어 전용 안전한 홈 트레이닝"</p>
        </div>
      </div>

      {/* More Coaches Button */}
      <button className="more-coaches-btn">
        다른 코치
        <br />
        더보기
      </button>
    </div>
  );
};

export default AIRecommendationResultPage;
