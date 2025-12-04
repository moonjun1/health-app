import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './ApplicationPage.css';

const ApplicationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    specialty: '',
    certification: '',
    motivation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제로는 서버에 데이터를 전송
    console.log('지원서 제출:', formData);
    alert('지원서가 성공적으로 제출되었습니다!');
    navigate('/recruit');
  };

  return (
    <div className="application-page">
      <Header />

      <div className="application-container">
        <div className="application-header">
          <h1 className="application-title">코치 지원하기</h1>
          <p className="application-subtitle">
            2RE PLAY와 함께 더 많은 사람들의<br />
            건강한 삶을 만들어가세요
          </p>
        </div>

        <form className="application-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2 className="section-title">기본 정보</h2>

            <div className="form-group">
              <label htmlFor="name">이름 *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="홍길동"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">이메일 *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">연락처 *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="010-0000-0000"
              />
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">경력 정보</h2>

            <div className="form-group">
              <label htmlFor="experience">경력 (년) *</label>
              <input
                type="number"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                placeholder="3"
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="specialty">전문 분야 *</label>
              <select
                id="specialty"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                required
              >
                <option value="">선택해주세요</option>
                <option value="헬스">헬스</option>
                <option value="필라테스">필라테스</option>
                <option value="요가">요가</option>
                <option value="크로스핏">크로스핏</option>
                <option value="재활운동">재활운동</option>
                <option value="기타">기타</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="certification">보유 자격증</label>
              <textarea
                id="certification"
                name="certification"
                value={formData.certification}
                onChange={handleChange}
                placeholder="보유하신 자격증을 입력해주세요&#10;예) 생활스포츠지도사 2급, 필라테스 국제자격증"
                rows="4"
              />
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">지원 동기</h2>

            <div className="form-group">
              <label htmlFor="motivation">지원 동기 및 각오 *</label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                required
                placeholder="2RE PLAY 코치로 지원하시는 동기와 각오를 자유롭게 작성해주세요"
                rows="8"
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={() => navigate('/recruit')}>
              취소
            </button>
            <button type="submit" className="btn-submit">
              지원서 제출
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="application-footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-links">
              <a href="#coach">코치소개</a>
              <a href="#find">코치찾기</a>
              <a href="#register">코치등록하기</a>
            </div>
            <div className="footer-contact">
              <p className="footer-phone">1588-0000</p>
              <p className="footer-hours">고객센터 평일 10:00~18:00 (주말/공휴일 휴무)</p>
            </div>
          </div>
          <div className="footer-section footer-right">
            <div className="footer-address">
              <p>서울특별시 성동구 왕십리로 00길 00, 3층</p>
              <p>(주)투리플레이</p>
            </div>
            <div className="footer-social">
              <span>Instagram</span>
              <div className="social-divider"></div>
              <span>2play_health</span>
              <div className="social-divider"></div>
              <span>www.2play.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ApplicationPage;
