import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './CoachRegisterPage.css';

const CoachRegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    birthYear: '',
    gender: '',
    sport: '',
    team: '',
    career: '',
    certifications: '',
    introduction: ''
  });
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 대한체육회 선수 등록 정보로 경력 검증
  const verifyAthleteCareer = async () => {
    setIsVerifying(true);

    // TODO: 실제 API 연동 (현재는 시뮬레이션)
    setTimeout(() => {
      // 시뮬레이션: 입력된 정보가 있으면 인증 성공
      if (formData.name && formData.sport && formData.team) {
        setVerificationStatus({
          verified: true,
          message: '✅ 선수 경력이 확인되었습니다!',
          data: {
            registeredYears: '2015-2022',
            sport: formData.sport,
            team: formData.team,
            achievements: '전국체전 금메달 2회'
          }
        });
      } else {
        setVerificationStatus({
          verified: false,
          message: '❌ 선수 경력을 확인할 수 없습니다. 정보를 다시 확인해주세요.'
        });
      }
      setIsVerifying(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!verificationStatus || !verificationStatus.verified) {
      alert('선수 경력 인증을 먼저 완료해주세요.');
      return;
    }

    // TODO: 코치 회원가입 API 호출
    console.log('코치 등록 데이터:', formData);
    alert('코치 등록이 완료되었습니다! 🎉');
    navigate('/login');
  };

  return (
    <div className="coach-register-page">
      <Header />

      <div className="register-container">
        <div className="register-header">
          <h1>코치 등록하기</h1>
          <p>은퇴 선수 경력을 인증하고 전문 코치로 활동하세요</p>
        </div>

        <div className="verification-notice">
          <h3>📋 국민체육진흥공단 데이터 활용 인증</h3>
          <p>대한체육회 선수등록정보를 통해 자동으로 선수 경력을 검증합니다.</p>
          <p className="data-source">
            데이터 출처: <a href="https://www.data.go.kr/data/15052695/fileData.do" target="_blank" rel="noopener noreferrer">
              대한체육회 스포츠지원포털 선수등록정보
            </a>
          </p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>기본 정보</h2>

            <div className="form-group">
              <label>이름 *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="실명을 입력하세요"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>출생연도 *</label>
                <input
                  type="number"
                  name="birthYear"
                  value={formData.birthYear}
                  onChange={handleChange}
                  placeholder="예: 1990"
                  min="1950"
                  max="2010"
                  required
                />
              </div>

              <div className="form-group">
                <label>성별 *</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">선택하세요</option>
                  <option value="남자">남자</option>
                  <option value="여자">여자</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>선수 경력 정보</h2>

            <div className="form-group">
              <label>종목 *</label>
              <input
                type="text"
                name="sport"
                value={formData.sport}
                onChange={handleChange}
                placeholder="예: 농구, 축구, 배구 등"
                required
              />
            </div>

            <div className="form-group">
              <label>소속팀 *</label>
              <input
                type="text"
                name="team"
                value={formData.team}
                onChange={handleChange}
                placeholder="예: OO고등학교, OO대학교, OO실업팀"
                required
              />
            </div>

            <div className="form-group">
              <label>선수 경력 기간 *</label>
              <input
                type="text"
                name="career"
                value={formData.career}
                onChange={handleChange}
                placeholder="예: 2015년 ~ 2022년"
                required
              />
            </div>

            <button
              type="button"
              className="verify-button"
              onClick={verifyAthleteCareer}
              disabled={isVerifying || !formData.name || !formData.sport || !formData.team}
            >
              {isVerifying ? '검증 중...' : '선수 경력 인증하기'}
            </button>

            {verificationStatus && (
              <div className={`verification-result ${verificationStatus.verified ? 'success' : 'error'}`}>
                <p>{verificationStatus.message}</p>
                {verificationStatus.verified && (
                  <div className="verified-info">
                    <p><strong>등록 기간:</strong> {verificationStatus.data.registeredYears}</p>
                    <p><strong>종목:</strong> {verificationStatus.data.sport}</p>
                    <p><strong>소속:</strong> {verificationStatus.data.team}</p>
                    <p><strong>주요 성적:</strong> {verificationStatus.data.achievements}</p>
                    <div className="badge">🏅 인증된 선수</div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="form-section">
            <h2>코칭 정보</h2>

            <div className="form-group">
              <label>보유 자격증</label>
              <textarea
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
                placeholder="예: 생활체육지도자 2급, 스포츠마사지 자격증 등"
                rows="3"
              />
            </div>

            <div className="form-group">
              <label>자기소개 *</label>
              <textarea
                name="introduction"
                value={formData.introduction}
                onChange={handleChange}
                placeholder="코칭 경험, 전문 분야, 코칭 철학 등을 자유롭게 작성해주세요"
                rows="5"
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={() => navigate(-1)}>
              취소
            </button>
            <button type="submit" className="submit-button">
              코치 등록하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CoachRegisterPage;
