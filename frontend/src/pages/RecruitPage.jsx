import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './RecruitPage.css';

const RecruitPage = () => {
  const navigate = useNavigate();

  return (
    <div className="recruit-page">
      <Header />
      <div className="recruit-container">
        <div className="recruit-content">
          <h2 className="recruit-subtitle">지금이 적임입니다</h2>
          <h1 className="recruit-title">지금 코치로 등록하세요</h1>
          <p className="recruit-description">
            은퇴 선수 경력을 인증하고 전문 코치로 활동하세요<br/>
            <strong>대한체육회 선수등록정보</strong>로 자동 경력 검증
          </p>
          <div className="recruit-buttons">
            <button className="recruit-button primary" onClick={() => navigate('/coach-register')}>
              코치 등록하기
            </button>
            <button className="recruit-button secondary" onClick={() => navigate('/application')}>
              일반 지원하기
            </button>
          </div>
        </div>

        <div className="recruit-image-container">
          <img 
            src="/envelope.png" 
            alt="지원하기" 
            className="recruit-envelope"
          />
        </div>
      </div>
    </div>
  );
};

export default RecruitPage;
