import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './SearchResultsPage.css';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || 'all';

  // Mock coach data
  const coaches = [
    {
      id: 1,
      name: '박성곤',
      specialty: '헬스',
      description: '효율적으로 근력을 키우는 맞춤 트레이닝',
      experience: '10년',
      rating: 4.9,
      reviews: 128,
      image: null,
    },
    {
      id: 2,
      name: '송지연',
      specialty: '필라테스',
      description: '체형 교정과 코어 강화 전문',
      experience: '8년',
      rating: 4.8,
      reviews: 95,
      image: null,
    },
    {
      id: 3,
      name: '김예나',
      specialty: '요가',
      description: '유연성과 마음의 평화를 위한 요가',
      experience: '7년',
      rating: 4.9,
      reviews: 112,
      image: null,
    },
    {
      id: 4,
      name: '이준호',
      specialty: '러닝',
      description: '부상 없이 달리는 러닝 코치',
      experience: '6년',
      rating: 4.7,
      reviews: 76,
      image: null,
    },
    {
      id: 5,
      name: '정미란',
      specialty: '헬스',
      description: '시니어 전용 안전한 홈 트레이닝',
      experience: '12년',
      rating: 5.0,
      reviews: 143,
      image: null,
    },
    {
      id: 6,
      name: '최동훈',
      specialty: '수영',
      description: '올바른 자세로 배우는 수영',
      experience: '9년',
      rating: 4.8,
      reviews: 89,
      image: null,
    },
  ];

  const [filteredCoaches, setFilteredCoaches] = useState(coaches);

  useEffect(() => {
    let filtered = coaches;

    // Filter by category
    if (category && category !== 'all') {
      filtered = filtered.filter((coach) =>
        coach.specialty.toLowerCase().includes(category.toLowerCase())
      );
    }

    // Filter by search query
    if (query) {
      filtered = filtered.filter(
        (coach) =>
          coach.name.toLowerCase().includes(query.toLowerCase()) ||
          coach.specialty.toLowerCase().includes(query.toLowerCase()) ||
          coach.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredCoaches(filtered);
  }, [query, category]);

  const handleCoachClick = (coachId) => {
    navigate(`/coach/${coachId}`);
  };

  return (
    <div className="search-results-page">
      {/* Header */}
      <header className="results-header">
        <div className="results-logo">logo</div>
        <nav className="results-nav">
          <a href="/main">홈</a>
          <a href="#certificate">자격증/소개</a>
          <a href="#recruit">인재모집</a>
          <a href="#community">커뮤니티</a>
          <a href="#mypage">마이페이지</a>
          <a href="#service">서비스 이용</a>
          <a href="/login">LOGIN</a>
        </nav>
      </header>

      {/* Results Container */}
      <div className="results-container">
        <div className="results-content">
          {/* Search Info */}
          <div className="search-info">
            <h1 className="search-query">
              {query ? `"${query}"` : '전체'} 검색 결과
            </h1>
            <p className="search-count">{filteredCoaches.length}명의 코치를 찾았습니다</p>
          </div>

          {/* Filters */}
          <div className="filters-section">
            <button className="filter-button active">평점순</button>
            <button className="filter-button">경력순</button>
            <button className="filter-button">리뷰순</button>
            <button className="filter-button">가격순</button>
          </div>

          {/* Results Grid */}
          {filteredCoaches.length > 0 ? (
            <div className="results-grid">
              {filteredCoaches.map((coach) => (
                <div
                  key={coach.id}
                  className="coach-result-card"
                  onClick={() => handleCoachClick(coach.id)}
                >
                  <div className="coach-image">
                    <div className="coach-avatar-placeholder"></div>
                  </div>
                  <div className="coach-info">
                    <div className="coach-header">
                      <h3 className="coach-name">{coach.name}</h3>
                      <span className="coach-specialty-tag">{coach.specialty}</span>
                    </div>
                    <p className="coach-description">{coach.description}</p>
                    <div className="coach-meta">
                      <span className="coach-experience">경력 {coach.experience}</span>
                      <span className="coach-rating">
                        ⭐ {coach.rating} ({coach.reviews})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h2>검색 결과가 없습니다</h2>
              <p>다른 키워드로 검색해보세요</p>
              <button className="back-button" onClick={() => navigate('/search')}>
                검색 페이지로 돌아가기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
