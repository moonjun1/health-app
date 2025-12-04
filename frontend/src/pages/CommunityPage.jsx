import React from 'react';
import Header from '../components/Header';
import './CommunityPage.css';

const CommunityPage = () => {
  const popularSearches = ['헬스', '러닝', '배드민턴', '다이어트', '유명한 체육관', '자전거', '볼링'];

  // Sample community posts data
  const communityPosts = [
    {
      id: 1,
      title: '아침 러닝 루틴 공유',
      author: '헬스매니아',
      image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=400',
      likes: 342,
      views: 1580,
      comments: 23,
      category: '러닝'
    },
    {
      id: 2,
      title: '초보자를 위한 헬스 가이드',
      author: '피트니스코치',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
      likes: 521,
      views: 2340,
      comments: 45,
      category: '헬스'
    },
    {
      id: 3,
      title: '다이어트 식단 추천',
      author: '건강한삶',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400',
      likes: 289,
      views: 1230,
      comments: 18,
      category: '다이어트'
    },
    {
      id: 4,
      title: '배드민턴 동호회 모집',
      author: '스포츠러버',
      image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400',
      likes: 156,
      views: 890,
      comments: 31,
      category: '배드민턴'
    },
    {
      id: 5,
      title: '홈트레이닝 추천 운동',
      author: '운동왕',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
      likes: 412,
      views: 1890,
      comments: 28,
      category: '홈트'
    },
    {
      id: 6,
      title: '자전거 코스 추천 - 한강',
      author: '라이더',
      image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=400',
      likes: 267,
      views: 1120,
      comments: 15,
      category: '자전거'
    },
    {
      id: 7,
      title: '요가 초보 후기',
      author: '요가러버',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400',
      likes: 334,
      views: 1450,
      comments: 22,
      category: '요가'
    },
    {
      id: 8,
      title: '크로스핏 체험기',
      author: '강철체력',
      image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400',
      likes: 198,
      views: 920,
      comments: 19,
      category: '크로스핏'
    },
    {
      id: 9,
      title: '수영장 추천 리스트',
      author: '수영선수',
      image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=400',
      likes: 445,
      views: 2100,
      comments: 36,
      category: '수영'
    },
    {
      id: 10,
      title: '등산 코스 베스트 5',
      author: '산악인',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400',
      likes: 567,
      views: 2890,
      comments: 52,
      category: '등산'
    },
    {
      id: 11,
      title: '필라테스 후기',
      author: '체형교정',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400',
      likes: 312,
      views: 1340,
      comments: 24,
      category: '필라테스'
    },
    {
      id: 12,
      title: '볼링 점수 올리는 법',
      author: '볼링마스터',
      image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=400',
      likes: 234,
      views: 1050,
      comments: 17,
      category: '볼링'
    },
    {
      id: 13,
      title: '골프 입문 가이드',
      author: '골퍼',
      image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=400',
      likes: 389,
      views: 1670,
      comments: 29,
      category: '골프'
    },
    {
      id: 14,
      title: '테니스 레슨 후기',
      author: '테니스광',
      image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400',
      likes: 276,
      views: 1180,
      comments: 21,
      category: '테니스'
    },
    {
      id: 15,
      title: '클라이밍 초보 팁',
      author: '암벽등반',
      image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=400',
      likes: 423,
      views: 1920,
      comments: 33,
      category: '클라이밍'
    },
    {
      id: 16,
      title: '격투기 체험 후기',
      author: '파이터',
      image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400',
      likes: 301,
      views: 1410,
      comments: 26,
      category: '격투기'
    }
  ];

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
        {communityPosts.map((post) => (
          <div key={post.id} className="content-box">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-content">
              <span className="post-category">{post.category}</span>
              <h3 className="post-title">{post.title}</h3>
              <div className="post-author">{post.author}</div>
              <div className="post-stats">
                <span className="stat">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="#ff6b6b"/>
                  </svg>
                  {post.likes}
                </span>
                <span className="stat">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#666" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="3" stroke="#666" strokeWidth="2"/>
                  </svg>
                  {post.views}
                </span>
                <span className="stat">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#666" strokeWidth="2"/>
                  </svg>
                  {post.comments}
                </span>
              </div>
            </div>
          </div>
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
