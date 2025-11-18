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
          <a href="#certificate" className="nav-link">자격증/소개</a>
          <a href="#recruit" className="nav-link">인재모집</a>
          <a href="#community" className="nav-link">커뮤니티</a>
          <a href="#mypage" className="nav-link">마이페이지</a>
          <a href="#service" className="nav-link">서비스 이용</a>
          <a href="/login" className="nav-link">LOGIN</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
