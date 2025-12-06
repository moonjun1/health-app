import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import './MapPage.css';

const MapPage = () => {
  const [map, setMap] = useState(null);
  const [selectedGym, setSelectedGym] = useState(null);

  const gyms = [
    {
      id: 1,
      name: '한울도립체육관',
      address: '서울시 강남구 테헤란로 123',
      hours: '06:00-22:00',
      phone: '02-1234-5678',
      tags: ['헬스', '수영'],
      lat: 37.4979,
      lng: 127.0276,
      image: '/images/Rectangle 115.png'
    },
    {
      id: 2,
      name: '양양군민체육관',
      address: '서울시 서초구 서초대로 456',
      hours: '06:00-23:00',
      phone: '02-2345-6789',
      tags: ['헬스', '필라테스'],
      lat: 37.4833,
      lng: 127.0322,
      image: '/images/Rectangle 116.png'
    },
    {
      id: 3,
      name: '진부체육관',
      address: '서울시 강남구 강남대로 789',
      hours: '24시간',
      phone: '02-3456-7890',
      tags: ['헬스', '크로스핏'],
      lat: 37.5019,
      lng: 127.0411,
      image: '/images/Rectangle 117.png'
    },
    {
      id: 4,
      name: '서울특별체육관',
      address: '서울시 송파구 올림픽로 321',
      hours: '05:00-24:00',
      phone: '02-4567-8901',
      tags: ['헬스', '수영', '농구'],
      lat: 37.5145,
      lng: 127.1029,
      image: '/images/Rectangle 118.png'
    },
    {
      id: 5,
      name: '상경체육관',
      address: '서울시 강동구 천호대로 654',
      hours: '06:00-22:00',
      phone: '02-5678-9012',
      tags: ['헬스', '요가'],
      lat: 37.5301,
      lng: 127.1238,
      image: '/images/Rectangle 115.png'
    }
  ];

  useEffect(() => {
    // 카카오 맵 스크립트 로드
    const script = document.createElement('script');
    script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=bb4869a930660b479073d3a882c46c2c&autoload=false';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.5019, 127.0411),
          level: 5
        };

        const kakaoMap = new window.kakao.maps.Map(container, options);
        setMap(kakaoMap);

        // 마커 추가
        gyms.forEach(gym => {
          const markerPosition = new window.kakao.maps.LatLng(gym.lat, gym.lng);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            map: kakaoMap
          });

          // 마커 클릭 이벤트
          window.kakao.maps.event.addListener(marker, 'click', () => {
            setSelectedGym(gym);
            kakaoMap.setCenter(markerPosition);
          });
        });
      });
    };

    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="map-page">
      <Header />

      <div className="map-container">
        {/* Left Sidebar - Gym List */}
        <div className="gym-list-sidebar">
          <div className="gym-list-header">
            <h2>주변 체육관</h2>
            <div className="filter-buttons">
              <button className="filter-btn active">전체</button>
              <button className="filter-btn">헬스</button>
              <button className="filter-btn">수영</button>
              <button className="filter-btn">필라테스</button>
            </div>
          </div>

          <div className="gym-list">
            {gyms.map(gym => (
              <div
                key={gym.id}
                className={`gym-item ${selectedGym?.id === gym.id ? 'selected' : ''}`}
                onClick={() => setSelectedGym(gym)}
              >
                <div className="gym-image">
                  <img src={gym.image} alt={gym.name} />
                </div>
                <div className="gym-info">
                  <p className="gym-address">
                    <strong className="gym-name">{gym.name}</strong>
                    <span className="address-text">📍 {gym.address}</span>
                  </p>
                  <p className="gym-hours">⏰ {gym.hours}</p>
                  <p className="gym-phone">📞 {gym.phone}</p>
                  <div className="gym-tags">
                    {gym.tags.map((tag, index) => (
                      <span key={index} className="gym-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Map */}
        <div id="map" className="kakao-map"></div>
      </div>

      {/* Selected Gym Info Popup */}
      {selectedGym && (
        <div className="gym-detail-popup">
          <button className="close-popup" onClick={() => setSelectedGym(null)}>×</button>
          <p className="popup-address">
            <strong className="gym-name">{selectedGym.name}</strong>
            <span className="address-text">📍 {selectedGym.address}</span>
          </p>
          <p className="popup-hours">⏰ {selectedGym.hours}</p>
          <p className="popup-phone">📞 {selectedGym.phone}</p>
          <div className="gym-tags">
            {selectedGym.tags.map((tag, index) => (
              <span key={index} className="gym-tag">{tag}</span>
            ))}
          </div>
          <button className="detail-button">상세보기</button>
        </div>
      )}
    </div>
  );
};

export default MapPage;
