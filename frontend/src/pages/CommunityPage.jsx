import React, { useState } from 'react';
import './CommunityPage.css';

const CommunityPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'tips', name: '운동 팁' },
    { id: 'review', name: '후기' },
    { id: 'qna', name: 'Q&A' },
    { id: 'free', name: '자유게시판' },
  ];

  const posts = [
    { id: 1, category: 'tips', title: '초보자를 위한 스쿼트 자세 교정법', author: '김트레이너', views: 1234, likes: 89, comments: 23, time: '2시간 전' },
    { id: 2, category: 'review', title: '3개월 PT 후기 - 10kg 감량 성공!', author: '운동왕', views: 2341, likes: 156, comments: 45, time: '5시간 전' },
    { id: 3, category: 'qna', title: '헬스장 처음 가는데 준비물 뭐가 필요한가요?', author: '초보헬린이', views: 567, likes: 34, comments: 12, time: '1일 전' },
    { id: 4, category: 'tips', title: '아침 운동 vs 저녁 운동, 뭐가 더 좋을까?', author: '건강지킴이', views: 3421, likes: 201, comments: 67, time: '1일 전' },
    { id: 5, category: 'free', title: '운동 메이트 구합니다 (강남 쪽)', author: '같이운동', views: 789, likes: 45, comments: 18, time: '2일 전' },
  ];

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="community-page">
      <header className="community-header">
        <div className="community-logo">logo</div>
        <nav className="community-nav">
          <a href="/main">홈</a>
          <a href="#certificate">자격증/소개</a>
          <a href="#recruit">인재모집</a>
          <a href="#community">커뮤니티</a>
          <a href="#mypage">마이페이지</a>
          <a href="#service">서비스 이용</a>
          <a href="/login">LOGIN</a>
        </nav>
      </header>

      <div className="community-container">
        <div className="community-hero">
          <h1>커뮤니티</h1>
          <p>운동 경험을 나누고 함께 성장하세요</p>
        </div>

        <div className="community-content">
          <div className="community-sidebar">
            <div className="category-list">
              <h3>카테고리</h3>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <button className="write-btn">글쓰기</button>
          </div>

          <div className="community-main">
            <div className="posts-header">
              <h2>게시글</h2>
              <div className="sort-options">
                <button className="sort-btn active">최신순</button>
                <button className="sort-btn">인기순</button>
                <button className="sort-btn">조회순</button>
              </div>
            </div>

            <div className="posts-list">
              {filteredPosts.map((post) => (
                <div key={post.id} className="post-item">
                  <div className="post-category">{categories.find(c => c.id === post.category)?.name}</div>
                  <h3 className="post-title">{post.title}</h3>
                  <div className="post-meta">
                    <span className="post-author">{post.author}</span>
                    <span className="post-time">{post.time}</span>
                  </div>
                  <div className="post-stats">
                    <span>조회 {post.views}</span>
                    <span>좋아요 {post.likes}</span>
                    <span>댓글 {post.comments}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
