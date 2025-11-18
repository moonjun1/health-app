import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // Add login logic here
  };

  return (
    <div className="login-page">
      {/* Header */}
      <header className="login-header">
        <div className="login-logo">logo</div>
        <nav className="login-nav">
          <a href="/main">홈</a>
          <a href="#certificate">자격증/소개</a>
          <a href="#recruit">인재모집</a>
          <a href="#community">커뮤니티</a>
          <a href="#mypage">마이페이지</a>
          <a href="#service">서비스 이용</a>
          <a href="/login">LOGIN</a>
        </nav>
      </header>

      {/* Login Form Container */}
      <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">로그인</h1>
          <p className="login-subtitle">2RE PLAY에 오신 것을 환영합니다</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                이메일
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" />
                <span>로그인 상태 유지</span>
              </label>
              <a href="#forgot" className="forgot-link">
                비밀번호 찾기
              </a>
            </div>

            <button type="submit" className="login-button">
              로그인
            </button>
          </form>

          <div className="login-divider">
            <span>또는</span>
          </div>

          <div className="social-login">
            <button className="social-button google">
              <span className="social-icon">G</span>
              Google로 계속하기
            </button>
            <button className="social-button kakao">
              <span className="social-icon">K</span>
              카카오로 계속하기
            </button>
          </div>

          <div className="signup-prompt">
            <p>
              계정이 없으신가요?{' '}
              <a href="#signup" className="signup-link">
                회원가입
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
