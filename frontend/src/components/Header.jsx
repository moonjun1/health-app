import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">logo</div>
        </div>

        <nav className="header-nav">
          <a href="/main" className="nav-link">홈</a>
          <a href="#intro" className="nav-link">소개</a>
          <a href="/certification" className="nav-link">특허·인증</a>
          <a href="#map" className="nav-link">지도</a>
          <a href="/recruit" className="nav-link">인재 모집</a>
          <a href="/community" className="nav-link">커뮤니티</a>
          <a href="/ai-matching" className="nav-link">AI추천</a>
        </nav>

        <a href="/login" className="login-link">LOGIN</a>
      </div>
    </header>
  );
};

export default Header;
