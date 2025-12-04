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
          <button className="recruit-button" onClick={() => navigate('/application')}>지원하기</button>
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
