import React, { useState } from 'react';
import './RecruitPage.css';

const RecruitPage = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const positions = [
    {
      id: 1,
      title: 'AI 엔지니어',
      department: 'Engineering',
      type: '정규직',
      location: '서울',
      experience: '경력 3년 이상',
      description: 'AI 기반 운동 추천 시스템 개발 및 최적화',
      requirements: [
        'Python, TensorFlow/PyTorch 활용 능력',
        '머신러닝/딥러닝 모델 개발 경험',
        '데이터 분석 및 처리 능력',
        '협업 및 커뮤니케이션 능력',
      ],
      preferred: [
        '헬스케어 도메인 경험',
        '추천 시스템 구축 경험',
        '클라우드 서비스 경험 (AWS/GCP)',
      ],
    },
    {
      id: 2,
      title: '프론트엔드 개발자',
      department: 'Engineering',
      type: '정규직',
      location: '서울',
      experience: '경력 2년 이상',
      description: '사용자 친화적인 웹/앱 서비스 개발',
      requirements: [
        'React, Vue.js 등 모던 프레임워크 경험',
        'HTML5, CSS3, JavaScript(ES6+) 능숙',
        'RESTful API 연동 경험',
        '반응형 웹 개발 경험',
      ],
      preferred: [
        'TypeScript 사용 경험',
        'Next.js, Nuxt.js 경험',
        '모바일 앱 개발 경험',
      ],
    },
    {
      id: 3,
      title: '백엔드 개발자',
      department: 'Engineering',
      type: '정규직',
      location: '서울',
      experience: '경력 3년 이상',
      description: '안정적이고 확장 가능한 서버 시스템 개발',
      requirements: [
        'Node.js, Python, Java 중 1개 이상 능숙',
        '데이터베이스 설계 및 최적화 경험',
        'RESTful API 설계 및 구현 경험',
        '클라우드 인프라 운영 경험',
      ],
      preferred: [
        '마이크로서비스 아키텍처 경험',
        'Docker, Kubernetes 경험',
        '대용량 트래픽 처리 경험',
      ],
    },
    {
      id: 4,
      title: '전문 트레이너',
      department: 'Training',
      type: '정규직',
      location: '서울/경기',
      experience: '경력 2년 이상',
      description: '회원 맞춤형 운동 프로그램 기획 및 코칭',
      requirements: [
        '생활체육지도자/건강운동관리사 자격증 보유',
        '퍼스널 트레이닝 경력 2년 이상',
        '운동 생리학 및 해부학 이해',
        '원활한 커뮤니케이션 능력',
      ],
      preferred: [
        '재활 트레이닝 경험',
        '온라인 코칭 경험',
        '영양학 관련 지식',
      ],
    },
    {
      id: 5,
      title: 'UX/UI 디자이너',
      department: 'Design',
      type: '정규직',
      location: '서울',
      experience: '경력 2년 이상',
      description: '사용자 중심의 서비스 디자인',
      requirements: [
        'Figma, Sketch 등 디자인 툴 능숙',
        '모바일/웹 UI/UX 디자인 경험',
        '사용자 리서치 및 분석 능력',
        '디자인 시스템 구축 경험',
      ],
      preferred: [
        '프로토타이핑 툴 활용 능력',
        '모션 디자인 경험',
        '개발자와의 협업 경험',
      ],
    },
    {
      id: 6,
      title: '콘텐츠 마케터',
      department: 'Marketing',
      type: '정규직',
      location: '서울',
      experience: '경력 2년 이상',
      description: '브랜드 콘텐츠 기획 및 제작',
      requirements: [
        '콘텐츠 마케팅 기획 및 실행 경험',
        'SNS 채널 운영 경험',
        '데이터 분석을 통한 성과 측정 능력',
        '트렌드에 대한 높은 이해도',
      ],
      preferred: [
        '헬스/피트니스 분야 관심 및 이해',
        '영상 제작 및 편집 능력',
        'SEO/SEM 경험',
      ],
    },
  ];

  const benefits = [
    { icon: '💰', title: '경쟁력 있는 연봉', desc: '업계 최고 수준의 보상' },
    { icon: '⏰', title: '유연 근무제', desc: '자율 출퇴근 및 재택근무' },
    { icon: '🏥', title: '건강 지원', desc: '건강검진 및 헬스케어 지원' },
    { icon: '📚', title: '교육 지원', desc: '외부 교육 및 도서 구입 지원' },
    { icon: '🌴', title: '휴가 제도', desc: '리프레시 휴가 및 안식년' },
    { icon: '🎉', title: '복지 포인트', desc: '연 200만원 복지 포인트' },
  ];

  return (
    <div className="recruit-page">
      <header className="recruit-header">
        <div className="recruit-logo">logo</div>
        <nav className="recruit-nav">
          <a href="/main">홈</a>
          <a href="#certificate">자격증/소개</a>
          <a href="#recruit">인재모집</a>
          <a href="#community">커뮤니티</a>
          <a href="#mypage">마이페이지</a>
          <a href="#service">서비스 이용</a>
          <a href="/login">LOGIN</a>
        </nav>
      </header>

      <div className="recruit-container">
        <section className="recruit-hero">
          <h1>함께 성장할 인재를 찾습니다</h1>
          <p>건강한 일상을 만드는 혁신적인 서비스를 함께 만들어가요</p>
        </section>

        <section className="company-intro">
          <div className="intro-content">
            <h2>2RE PLAY는</h2>
            <p className="intro-text">
              AI 기술과 전문가의 노하우를 결합하여 누구나 쉽게 건강한 라이프스타일을 유지할 수 있도록 돕는 헬스케어 플랫폼입니다.
              우리는 기술로 사람들의 삶을 더 나은 방향으로 변화시키는 것을 목표로 합니다.
            </p>
            <div className="company-values">
              <div className="value-item">
                <h3>혁신</h3>
                <p>새로운 기술로 더 나은 서비스를 만듭니다</p>
              </div>
              <div className="value-item">
                <h3>성장</h3>
                <p>함께 배우고 발전하는 문화를 지향합니다</p>
              </div>
              <div className="value-item">
                <h3>신뢰</h3>
                <p>전문성과 책임감으로 신뢰를 쌓습니다</p>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <h2>복지 혜택</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="positions-section">
          <h2>채용 공고</h2>
          <div className="positions-list">
            {positions.map((position) => (
              <div
                key={position.id}
                className={`position-card ${selectedPosition === position.id ? 'expanded' : ''}`}
                onClick={() => setSelectedPosition(selectedPosition === position.id ? null : position.id)}
              >
                <div className="position-header">
                  <div className="position-title-group">
                    <h3>{position.title}</h3>
                    <div className="position-tags">
                      <span className="tag">{position.department}</span>
                      <span className="tag">{position.type}</span>
                      <span className="tag">{position.location}</span>
                    </div>
                  </div>
                  <div className="position-experience">{position.experience}</div>
                </div>

                {selectedPosition === position.id && (
                  <div className="position-details">
                    <div className="detail-section">
                      <h4>업무 내용</h4>
                      <p>{position.description}</p>
                    </div>
                    <div className="detail-section">
                      <h4>자격 요건</h4>
                      <ul>
                        {position.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>우대 사항</h4>
                      <ul>
                        {position.preferred.map((pref, index) => (
                          <li key={index}>{pref}</li>
                        ))}
                      </ul>
                    </div>
                    <button className="apply-btn">지원하기</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <h2>채용 문의</h2>
          <p>궁금한 점이 있으시면 언제든 연락주세요</p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">이메일</span>
              <span className="contact-value">recruit@2replay.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">전화</span>
              <span className="contact-value">02-1234-5678</span>
            </div>
          </div>
        </section>
      </div>

      <footer className="recruit-footer">
        <p>© 2024 2RE PLAY. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RecruitPage;
