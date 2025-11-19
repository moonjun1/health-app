import React from 'react';
import Header from '../components/Header';
import './AIRecommendationResultPage.css';

const AIRecommendationResultPage = () => {
  return (
    <div className="ai-result-page">
      <Header />

      <div className="ai-result-container">
        <img
          src="/ai-coach-result.png"
          alt="AI 코치 추천 결과"
          className="ai-result-image"
        />
      </div>
    </div>
  );
};

export default AIRecommendationResultPage;
