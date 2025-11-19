import React from 'react';
import Header from '../components/Header';
import './CommunityPage.css';

const CommunityPage = () => {
  const popularSearches = ['헬스', '러닝', '배드민턴', '다이어트', '유명한 체육관', '자전거', '볼링'];

  // Generate 16 placeholder boxes (4x4 grid)
  const placeholderBoxes = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <div className="community-page">
      <Header />

      {/* Search Bar */}
      <div className="community-search-container">
        <input
          type="text"
          placeholder="새로운 활동검색"
          className="community-search-input"
        />
        <button className="community-search-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2"/>
            <path d="M16 16L21 21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Popular Searches */}
      <div className="popular-searches">
        <h3 className="popular-title">인기검색어</h3>
        <div className="search-divider"></div>
        <div className="popular-tags">
          {popularSearches.map((tag, index) => (
            <span key={index} className="popular-tag">{tag}</span>
          ))}
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>홈</span>
        <div className="breadcrumb-divider"></div>
        <span>커뮤니티</span>
      </div>

      {/* Content Grid */}
      <div className="content-grid">
        {placeholderBoxes.map((box) => (
          <div key={box} className="content-box"></div>
        ))}
      </div>

      {/* More Button */}
      <button className="more-button">더보기</button>

      {/* Footer */}
      <footer className="community-footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#coach">코치소개</a>
            <a href="#find">코치찾기</a>
            <a href="#register">코치등록하기</a>
          </div>
          <div className="footer-contact">
            <p className="footer-phone">1588-0000</p>
            <p className="footer-hours">고객센터 평일 10:00~18:00 (주말/공휴일 휴무)</p>
          </div>
          <div className="footer-address">
            <p>서울특별시 성동구 왕십리로 00길 00, 3층</p>
            <p>(주)투리플레이</p>
          </div>
          <div className="footer-social-icons">
            <div className="social-icon"></div>
            <div className="social-icon"></div>
            <div className="social-icon"></div>
          </div>
          <div className="footer-social">
            <span>Instagram</span>
            <div className="social-divider"></div>
            <span>2play_health</span>
            <div className="social-divider"></div>
            <span>www.2play.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CommunityPage;
