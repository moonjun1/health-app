import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-logo">운동 파트너</h3>
            <p className="footer-description">
              건강한 운동 문화를 만들어갑니다
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">서비스</h4>
              <ul className="footer-list">
                <li><a href="#about">소개</a></li>
                <li><a href="#features">특징</a></li>
                <li><a href="#trainers">트레이너</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">고객지원</h4>
              <ul className="footer-list">
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">문의하기</a></li>
                <li><a href="#support">지원센터</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">회사</h4>
              <ul className="footer-list">
                <li><a href="#company">회사소개</a></li>
                <li><a href="#privacy">개인정보처리방침</a></li>
                <li><a href="#terms">이용약관</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 운동 파트너. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
