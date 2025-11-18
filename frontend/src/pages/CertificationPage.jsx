import React from 'react';
import './CertificationPage.css';

const CertificationPage = () => {
  const patents = [
    { id: 1, title: 'AI 기반 맞춤 운동 추천 시스템', number: '특허 제10-XXXXXXX호', status: '등록 완료' },
    { id: 2, title: '운동 데이터 분석을 통한 피드백 알고리즘', number: '출원 중', status: '심사 중' },
    { id: 3, title: '헬스케어 코칭 매칭 플랫폼', number: '특허 제10-YYYYYYY호', status: '등록 완료' },
  ];

  return (
    <div className="certification-page">
      <header className="cert-header">
        <div className="cert-logo">logo</div>
        <nav className="cert-nav">
          <a href="/main">홈</a>
          <a href="#certificate">자격증/소개</a>
          <a href="#recruit">인재모집</a>
          <a href="#community">커뮤니티</a>
          <a href="#mypage">마이페이지</a>
          <a href="#service">서비스 이용</a>
          <a href="/login">LOGIN</a>
        </nav>
      </header>

      <div className="cert-container">
        <section className="cert-hero">
          <h1>특허 및 인증</h1>
          <p>신뢰는 기술로부터, 기술은 사람으로부터</p>
        </section>

        <section className="cert-content">
          <div className="cert-intro">
            <h2>기술과 사람 두 가지 신뢰가 만나는 지점</h2>
            <p>AI와 전문가가 함께 만드는 신뢰 기반의 코칭 시스템. 특허받은 기술과 공식 인증 절차로, 모든 사용자에게 안정적인 서비스를 제공합니다</p>
          </div>

          <div className="patents-grid">
            {patents.map((patent) => (
              <div key={patent.id} className="patent-card">
                <div className="patent-status">{patent.status}</div>
                <h3>{patent.title}</h3>
                <p className="patent-number">{patent.number}</p>
              </div>
            ))}
          </div>

          <div className="cert-quote">
            <p>"운동 데이터를 단순히 수집하는 것을 넘어, 개인별 피드백으로 발전시키는 기술입니다."</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CertificationPage;
