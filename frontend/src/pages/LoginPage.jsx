import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/config';
import Header from '../components/Header';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        // 회원가입
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        alert('회원가입이 완료되었습니다! 로그인해주세요.');
        setIsSignUp(false);
        setFormData({ email: '', password: '', rememberMe: false });
      } else {
        // 로그인
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        alert('로그인 성공!');
        navigate('/main');
      }
    } catch (error) {
      console.error('인증 오류:', error);
      handleAuthError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert('구글 로그인 성공!');
      navigate('/main');
    } catch (error) {
      console.error('구글 로그인 오류:', error);
      handleAuthError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAuthError = (error) => {
    // 오류 메시지 한글화
    switch (error.code) {
      case 'auth/invalid-email':
        setError('유효하지 않은 이메일 형식입니다.');
        break;
      case 'auth/user-disabled':
        setError('비활성화된 계정입니다.');
        break;
      case 'auth/user-not-found':
        setError('존재하지 않는 계정입니다.');
        break;
      case 'auth/wrong-password':
        setError('비밀번호가 일치하지 않습니다.');
        break;
      case 'auth/email-already-in-use':
        setError('이미 사용 중인 이메일입니다.');
        break;
      case 'auth/weak-password':
        setError('비밀번호는 최소 6자 이상이어야 합니다.');
        break;
      case 'auth/network-request-failed':
        setError('네트워크 연결을 확인해주세요.');
        break;
      case 'auth/popup-closed-by-user':
        setError('로그인 팝업이 닫혔습니다.');
        break;
      case 'auth/cancelled-popup-request':
        setError('이미 로그인 팝업이 열려있습니다.');
        break;
      default:
        setError('인증 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="login-page">
      <Header />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">{isSignUp ? '회원가입' : '로그인'}</h2>

          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="비밀번호 (최소 6자)"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              required
              disabled={loading}
            />
          </div>

          {!isSignUp && (
            <div className="form-checkbox">
              <label>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  disabled={loading}
                />
                <span>로그인 상태 유지</span>
              </label>
            </div>
          )}

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? '처리 중...' : (isSignUp ? '회원가입' : '로그인')}
          </button>

          {!isSignUp && (
            <>
              <div className="divider">
                <span>또는</span>
              </div>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="google-button"
                disabled={loading}
              >
                <svg className="google-icon" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google로 로그인
              </button>
            </>
          )}

          <div className="toggle-auth">
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError('');
                setFormData({ email: '', password: '', rememberMe: false });
              }}
              className="toggle-button"
              disabled={loading}
            >
              {isSignUp ? '이미 계정이 있으신가요? 로그인' : '계정이 없으신가요? 회원가입'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
