import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
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
        default:
          setError('인증 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } finally {
      setLoading(false);
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
