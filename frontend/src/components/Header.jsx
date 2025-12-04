import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowDropdown(false);
      navigate('/main');
      alert('로그아웃되었습니다.');
    } catch (error) {
      console.error('로그아웃 오류:', error);
      alert('로그아웃 중 오류가 발생했습니다.');
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <a href="/main" className="logo-link">
            <img src="/logo.png" alt="2RE PLAY" className="logo" />
          </a>
        </div>

        <nav className="header-nav">
          <a href="/main" className="nav-link">홈</a>
          <a href="/about" className="nav-link">소개</a>
          <a href="/certification" className="nav-link">특허·인증</a>
          <a href="/map" className="nav-link">지도</a>
          <a href="/recruit" className="nav-link">인재 모집</a>
          <a href="/community" className="nav-link">커뮤니티</a>
          <a href="/ai-matching" className="nav-link">AI추천</a>
          <a href="/subscription" className="nav-link">구독</a>
        </nav>

        {user ? (
          <div className="user-menu">
            <button
              className="user-button"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {user.email}
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={handleLogout} className="dropdown-item">
                  로그아웃
                </button>
              </div>
            )}
          </div>
        ) : (
          <a href="/login" className="login-link">LOGIN</a>
        )}
      </div>
    </header>
  );
};

export default Header;
