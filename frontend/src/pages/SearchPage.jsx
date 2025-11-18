import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchPage.css';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'health', name: '헬스' },
    { id: 'pilates', name: '필라테스' },
    { id: 'yoga', name: '요가' },
    { id: 'running', name: '러닝' },
    { id: 'swimming', name: '수영' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page with query
      navigate(`/search-results?q=${encodeURIComponent(searchQuery)}&category=${selectedCategory}`);
    }
  };

  return (
    <div className="search-page">
      {/* Header */}
      <header className="search-header">
        <div className="search-logo">logo</div>
        <nav className="search-nav">
          <a href="/main">홈</a>
          <a href="#certificate">자격증/소개</a>
          <a href="#recruit">인재모집</a>
          <a href="#community">커뮤니티</a>
          <a href="#mypage">마이페이지</a>
          <a href="#service">서비스 이용</a>
          <a href="/login">LOGIN</a>
        </nav>
      </header>

      {/* Search Container */}
      <div className="search-container">
        <div className="search-content">
          <h1 className="search-title">코치 검색</h1>
          <p className="search-subtitle">원하는 운동 종목과 코치를 찾아보세요</p>

          {/* Search Form */}
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-input-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="운동 종목, 코치 이름을 검색하세요"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-button">
                <span className="search-icon">🔍</span>
                검색
              </button>
            </div>
          </form>

          {/* Categories */}
          <div className="categories-section">
            <h2 className="categories-title">운동 종목</h2>
            <div className="categories-grid">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-card ${
                    selectedCategory === category.id ? 'active' : ''
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className="category-name">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Popular Searches */}
          <div className="popular-section">
            <h2 className="popular-title">인기 검색어</h2>
            <div className="popular-tags">
              <button className="popular-tag" onClick={() => setSearchQuery('헬스 트레이닝')}>
                헬스 트레이닝
              </button>
              <button className="popular-tag" onClick={() => setSearchQuery('다이어트')}>
                다이어트
              </button>
              <button className="popular-tag" onClick={() => setSearchQuery('체형 교정')}>
                체형 교정
              </button>
              <button className="popular-tag" onClick={() => setSearchQuery('재활 운동')}>
                재활 운동
              </button>
              <button className="popular-tag" onClick={() => setSearchQuery('근력 강화')}>
                근력 강화
              </button>
              <button className="popular-tag" onClick={() => setSearchQuery('유연성')}>
                유연성
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <a href="#ai" className="quick-link-card">
              <span className="quick-link-icon">🤖</span>
              <div className="quick-link-text">
                <h3>AI 코치 추천</h3>
                <p>AI가 분석한 맞춤 코치</p>
              </div>
            </a>
            <a href="#map" className="quick-link-card">
              <span className="quick-link-icon">📍</span>
              <div className="quick-link-text">
                <h3>주변 체육관</h3>
                <p>내 위치 기반 시설 찾기</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
