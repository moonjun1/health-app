import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoadingPage.css';

const LoadingPage = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-page">
      <header className="loading-header">
        <div className="loading-logo">logo</div>
        <nav className="loading-nav">
          <a href="#home">홈</a>
          <a href="#certificate">자격증/소개</a>
          <a href="#recruit">인재모집</a>
          <a href="#community">커뮤니티</a>
          <a href="#mypage">마이페이지</a>
          <a href="#service">서비스 이용</a>
          <a href="/login">LOGIN</a>
        </nav>
      </header>

      <div className="loading-content">
        <h1>지금이 지금입니다</h1>
        <h2>지금 코치로 등록하세요</h2>
        <button className="mypage-button" onClick={() => navigate('/mypage')}>
          마이페이지
        </button>
      </div>
    </div>
  );
};

export default LoadingPage;
