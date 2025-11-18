import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: '전문가와의\n매칭',
      description: '당신에게 맞는\n전문 트레이너를 찾아보세요'
    },
    {
      title: '안전한\n운동 환경',
      description: '체계적인 관리로\n부상 없는 운동을'
    },
    {
      title: '맞춤형\n프로그램',
      description: '개인 목표에 맞춘\n운동 계획 제공'
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
