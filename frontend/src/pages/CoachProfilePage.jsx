import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CoachProfilePage.css';

const CoachProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock coach data (in real app, fetch by id)
  const coachData = {
    1: {
      name: '박성곤',
      specialty: '건강',
      title: '건전한 마인드, 건강한 삶',
      description: '진정한 건강한 삶을 위한 마인드셋과 실천 방법을 제공합니다.',
      experience: '10년',
      rating: 4.9,
      reviews: 128,
      bio: '건강한 삶은 단순히 운동만으로 이루어지지 않습니다. 올바른 마인드셋과 생활 습관, 그리고 지속가능한 건강 관리 방법을 통해 진정한 건강을 추구합니다.',
      certifications: ['국제 퍼스널트레이너 자격증', '스포츠영양학 전문가', '재활운동 전문가'],
      programs: [
        { name: '근력 강화 프로그램', duration: '12주', price: '500,000원' },
        { name: '체지방 감량 프로그램', duration: '8주', price: '400,000원' },
        { name: '체형 교정 프로그램', duration: '16주', price: '600,000원' },
      ],
    },
  };

  const coach = coachData[id] || coachData[1];
  const [selectedTab, setSelectedTab] = useState('about');

  const reviewsData = [
    {
      id: 1,
      author: '김민수',
      rating: 5,
      date: '2024-01-15',
      content: '정말 체계적이고 효과적인 트레이닝이었습니다. 3개월 만에 목표 체중을 달성했어요!',
    },
    {
      id: 2,
      author: '이지은',
      rating: 5,
      date: '2024-01-10',
      content: '친절하시고 전문적이세요. 운동이 처음이었는데 재미있게 배우고 있습니다.',
    },
    {
      id: 3,
      author: '박준형',
      rating: 4,
      date: '2024-01-05',
      content: '효과는 확실하지만 강도가 높아서 초보자에게는 조금 힘들 수 있어요.',
    },
  ];

  return (
    <div className="coach-profile-page">
      {/* Header */}
      <header className="profile-header">
        <div className="profile-logo">logo</div>
        <nav className="profile-nav">
          <a href="/main">홈</a>
          <a href="#certificate">자격증/소개</a>
          <a href="#recruit">인재모집</a>
          <a href="#community">커뮤니티</a>
          <a href="#mypage">마이페이지</a>
          <a href="#service">서비스 이용</a>
          <a href="/login">LOGIN</a>
        </nav>
      </header>

      {/* Profile Container */}
      <div className="profile-container">
        {/* Hero Section */}
        <div className="profile-hero">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← 뒤로 가기
          </button>

          <div className="profile-hero-content">
            <div className="profile-image-section">
              <div className="profile-image-large"></div>
            </div>

            <div className="profile-info-section">
              <div className="profile-specialty-badge">{coach.specialty}</div>
              <h1 className="profile-name">{coach.name} 코치</h1>
              <p className="profile-tagline">{coach.description}</p>

              <div className="profile-stats">
                <div className="stat-item">
                  <div className="stat-icon">⭐</div>
                  <div className="stat-info">
                    <div className="stat-value">{coach.rating}</div>
                    <div className="stat-label">평점</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">💬</div>
                  <div className="stat-info">
                    <div className="stat-value">{coach.reviews}</div>
                    <div className="stat-label">리뷰</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">🏆</div>
                  <div className="stat-info">
                    <div className="stat-value">{coach.experience}</div>
                    <div className="stat-label">경력</div>
                  </div>
                </div>
              </div>

              <div className="profile-actions">
                <button className="btn-primary">상담 신청하기</button>
                <button className="btn-secondary">메시지 보내기</button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="profile-content">
          <div className="profile-tabs">
            <button
              className={`tab-btn ${selectedTab === 'about' ? 'active' : ''}`}
              onClick={() => setSelectedTab('about')}
            >
              소개
            </button>
            <button
              className={`tab-btn ${selectedTab === 'programs' ? 'active' : ''}`}
              onClick={() => setSelectedTab('programs')}
            >
              프로그램
            </button>
            <button
              className={`tab-btn ${selectedTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setSelectedTab('reviews')}
            >
              리뷰 ({coach.reviews})
            </button>
          </div>

          <div className="tab-content">
            {selectedTab === 'about' && (
              <div className="about-tab">
                <section className="about-section">
                  <h2>코치 소개</h2>
                  <p>{coach.bio}</p>
                </section>

                <section className="certifications-section">
                  <h2>자격 및 인증</h2>
                  <ul className="certifications-list">
                    {coach.certifications.map((cert, index) => (
                      <li key={index}>
                        <span className="cert-icon">✓</span>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            )}

            {selectedTab === 'programs' && (
              <div className="programs-tab">
                <div className="programs-grid">
                  {coach.programs.map((program, index) => (
                    <div key={index} className="program-card">
                      <h3>{program.name}</h3>
                      <div className="program-details">
                        <span className="program-duration">기간: {program.duration}</span>
                        <span className="program-price">{program.price}</span>
                      </div>
                      <button className="program-btn">자세히 보기</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'reviews' && (
              <div className="reviews-tab">
                <div className="reviews-summary">
                  <div className="reviews-rating">
                    <div className="rating-score">{coach.rating}</div>
                    <div className="rating-stars">⭐⭐⭐⭐⭐</div>
                    <div className="rating-count">{coach.reviews}개의 리뷰</div>
                  </div>
                </div>

                <div className="reviews-list">
                  {reviewsData.map((review) => (
                    <div key={review.id} className="review-card">
                      <div className="review-header">
                        <div className="review-author">{review.author}</div>
                        <div className="review-date">{review.date}</div>
                      </div>
                      <div className="review-rating">{'⭐'.repeat(review.rating)}</div>
                      <p className="review-content">{review.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachProfilePage;
