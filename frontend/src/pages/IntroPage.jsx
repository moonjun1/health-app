import React from 'react';
import Header from '../components/Header';
import './IntroPage.css';

const IntroPage = () => {
  return (
    <div className="intro-page">
      <Header />

      {/* Search Section */}
      <section className="intro-search-section">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="새로운 활동검색"
          />
          <button className="search-button">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Gym Gallery */}
      <section className="gym-gallery-section">
        <div className="gym-gallery">
          <div className="gym-item">
            <img src="/images/Rectangle 115.png" alt="대현산체육관" />
            <h3>대현산체육관</h3>
          </div>
          <div className="gym-item">
            <img src="/images/Rectangle 116.png" alt="대정문화체육센터 체육관" />
            <h3>대정문화체육센터 체육관</h3>
          </div>
          <div className="gym-item">
            <img src="/images/Rectangle 117.png" alt="어울림 국민 체육센터" />
            <h3>어울림 국민 체육센터</h3>
          </div>
        </div>
      </section>

      {/* Today's Recommendations */}
      <section className="recommendations-section">
        <div className="section-header">
          <h2>오늘의 추천</h2>
          <div className="header-underline"></div>
        </div>

        <div className="recommendation-cards">
          {[1, 2, 3].map((index) => (
            <div key={index} className="recommendation-card">
              <div className="card-avatar"></div>
              <button className="add-friend-btn">친구추가</button>
              <img
                src={`/images/post-${index}.png`}
                alt={`추천 ${index}`}
                className="card-image"
              />
              <div className="card-info">
                <div className="info-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <div className="card-stats">
                <div className="stat-item">
                  <svg className="stat-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span>1</span>
                </div>
                <div className="stat-item">
                  <svg className="stat-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                  </svg>
                  <span>0</span>
                </div>
                <div className="stat-item">
                  <svg className="stat-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <span>{index}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* More Posts Section */}
      <section className="more-posts-section">
        <div className="section-header">
          <h2>다른 게시물</h2>
          <div className="header-underline"></div>
        </div>

        <div className="posts-grid">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="post-card">
              <div className="post-avatar"></div>
              <button className="add-friend-btn">친구추가</button>
              <img
                src={`/images/other-post-${index}.png`}
                alt={`게시물 ${index}`}
                className="post-image"
              />
              <div className="post-info">
                <div className="info-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <div className="post-stats">
                <div className="stat-item">
                  <svg className="stat-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span>1</span>
                </div>
                <div className="stat-item">
                  <svg className="stat-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                  </svg>
                  <span>0</span>
                </div>
                <div className="stat-item">
                  <svg className="stat-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <span>{index <= 3 ? '1' : index === 4 || index === 5 ? '２' : '３'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="more-btn">더보기</button>
      </section>

      {/* Footer */}
      <footer className="intro-footer">
        <div className="footer-logo">
          <div className="footer-cat-badge">CAT</div>
        </div>
        <div className="footer-content">
          <div className="footer-contact">
            <h3>1588-0000</h3>
            <p>고객센터 평일 10:00~18:00 (주말/공휴일 휴무)</p>
            <p>서울특별시 성동구 왕실리로 00길 00, 3층<br />(주)투리플레이</p>
          </div>

          <div className="footer-links">
            <a href="/coach-intro">코치소개</a>
            <a href="/coach-search">코치찾기</a>
            <a href="/coach-register">코치등록하기</a>
          </div>

          <div className="footer-social">
            <p>Instagram: 2play_health</p>
            <p>www.2play.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IntroPage;
