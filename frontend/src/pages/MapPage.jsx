import React, { useState } from 'react';
import './MapPage.css';

const MapPage = () => {
  const gyms = [
    { id: 1, name: '인제체육관', address: '서울시 강남구', phone: '02-1234-5678' },
    { id: 2, name: '원효로다목적체육관', address: '서울시 용산구', phone: '02-2345-6789' },
    { id: 3, name: '올림픽체조경기장', address: '서울시 송파구', phone: '02-3456-7890' },
  ];

  return (
    <div className="map-page">
      <header className="map-header">
        <div className="map-logo">logo</div>
        <nav className="map-nav">
          <a href="/main">홈</a>
          <a href="#certificate">자격증/소개</a>
          <a href="#recruit">인재모집</a>
          <a href="#community">커뮤니티</a>
          <a href="#mypage">마이페이지</a>
          <a href="#service">서비스 이용</a>
          <a href="/login">LOGIN</a>
        </nav>
      </header>

      <div className="map-container">
        <div className="map-sidebar">
          <h2>주변 체육관</h2>
          <div className="gym-list">
            {gyms.map((gym) => (
              <div key={gym.id} className="gym-item">
                <h3>{gym.name}</h3>
                <p>{gym.address}</p>
                <p>{gym.phone}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="map-view">
          <div className="map-placeholder">
            <p>지도 영역</p>
            <p className="map-note">실제 구현시 카카오맵 또는 구글맵 API 사용</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
