import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AIMatchingPage.css';

const AIMatchingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: '',
    experience: '',
    frequency: '',
    intensity: '',
    location: '',
    budget: '',
    preferences: [],
  });

  const goals = [
    { id: 'weight-loss', name: '체중 감량', icon: '⚖️' },
    { id: 'muscle-gain', name: '근육 증가', icon: '💪' },
    { id: 'health', name: '건강 관리', icon: '❤️' },
    { id: 'flexibility', name: '유연성 향상', icon: '🧘' },
  ];

  const experiences = [
    { id: 'beginner', name: '초보자', desc: '운동 경험이 거의 없음' },
    { id: 'intermediate', name: '중급자', desc: '6개월 이상 규칙적 운동' },
    { id: 'advanced', name: '고급자', desc: '1년 이상 체계적 운동' },
  ];

  const frequencies = [
    { id: '1-2', name: '주 1-2회', icon: '📅' },
    { id: '3-4', name: '주 3-4회', icon: '📆' },
    { id: '5+', name: '주 5회 이상', icon: '🗓️' },
  ];

  const intensities = [
    { id: 'low', name: '낮음', desc: '가벼운 활동 선호' },
    { id: 'medium', name: '중간', desc: '적당한 강도' },
    { id: 'high', name: '높음', desc: '고강도 트레이닝' },
  ];

  const preferenceOptions = [
    '1:1 개인 레슨',
    '그룹 수업',
    '온라인 코칭',
    '식단 관리',
    '주말 수업 가능',
    '여성 코치 선호',
  ];

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Navigate to results page
      navigate('/ai-results');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handlePreferenceToggle = (pref) => {
    setFormData({
      ...formData,
      preferences: formData.preferences.includes(pref)
        ? formData.preferences.filter(p => p !== pref)
        : [...formData.preferences, pref],
    });
  };

  const isStepComplete = () => {
    switch (step) {
      case 1:
        return formData.goal && formData.experience;
      case 2:
        return formData.frequency && formData.intensity;
      case 3:
        return formData.location && formData.budget;
      case 4:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="ai-matching-page">
      <header className="ai-header">
        <div className="ai-logo">logo</div>
        <nav className="ai-nav">
          <a href="/main">홈</a>
          <a href="#certificate">자격증/소개</a>
          <a href="#recruit">인재모집</a>
          <a href="#community">커뮤니티</a>
          <a href="#mypage">마이페이지</a>
          <a href="#service">서비스 이용</a>
          <a href="/login">LOGIN</a>
        </nav>
      </header>

      <div className="ai-container">
        <div className="ai-hero">
          <h1>AI 맞춤 코치 매칭</h1>
          <p>당신에게 완벽한 코치를 찾아드립니다</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(step / 4) * 100}%` }}></div>
          </div>
          <div className="step-indicator">
            <span className="step-text">Step {step} of 4</span>
          </div>
        </div>

        <div className="ai-content">
          {step === 1 && (
            <div className="step-content">
              <h2>운동 목표와 경험을 알려주세요</h2>

              <div className="question-section">
                <h3>운동 목표</h3>
                <div className="options-grid">
                  {goals.map((goal) => (
                    <button
                      key={goal.id}
                      className={`option-card ${formData.goal === goal.id ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, goal: goal.id })}
                    >
                      <span className="option-icon">{goal.icon}</span>
                      <span className="option-name">{goal.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="question-section">
                <h3>운동 경험</h3>
                <div className="options-list">
                  {experiences.map((exp) => (
                    <button
                      key={exp.id}
                      className={`option-list-item ${formData.experience === exp.id ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, experience: exp.id })}
                    >
                      <div className="option-info">
                        <span className="option-name">{exp.name}</span>
                        <span className="option-desc">{exp.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="step-content">
              <h2>운동 빈도와 강도를 선택하세요</h2>

              <div className="question-section">
                <h3>운동 빈도</h3>
                <div className="options-grid">
                  {frequencies.map((freq) => (
                    <button
                      key={freq.id}
                      className={`option-card ${formData.frequency === freq.id ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, frequency: freq.id })}
                    >
                      <span className="option-icon">{freq.icon}</span>
                      <span className="option-name">{freq.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="question-section">
                <h3>선호 강도</h3>
                <div className="options-list">
                  {intensities.map((intensity) => (
                    <button
                      key={intensity.id}
                      className={`option-list-item ${formData.intensity === intensity.id ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, intensity: intensity.id })}
                    >
                      <div className="option-info">
                        <span className="option-name">{intensity.name}</span>
                        <span className="option-desc">{intensity.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="step-content">
              <h2>지역과 예산을 입력하세요</h2>

              <div className="question-section">
                <h3>선호 지역</h3>
                <input
                  type="text"
                  className="text-input"
                  placeholder="예: 강남구, 서초구"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              <div className="question-section">
                <h3>월 예산 (만원)</h3>
                <input
                  type="number"
                  className="text-input"
                  placeholder="예: 30"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="step-content">
              <h2>추가 선호사항을 선택하세요</h2>

              <div className="question-section">
                <div className="preferences-grid">
                  {preferenceOptions.map((pref) => (
                    <button
                      key={pref}
                      className={`preference-tag ${formData.preferences.includes(pref) ? 'selected' : ''}`}
                      onClick={() => handlePreferenceToggle(pref)}
                    >
                      {pref}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="step-actions">
            {step > 1 && (
              <button className="btn-secondary" onClick={handleBack}>
                이전
              </button>
            )}
            <button
              className="btn-primary"
              onClick={handleNext}
              disabled={!isStepComplete()}
            >
              {step === 4 ? 'AI 매칭 시작' : '다음'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMatchingPage;
