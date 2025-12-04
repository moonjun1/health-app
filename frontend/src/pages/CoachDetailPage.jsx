import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './CoachDetailPage.css';

const CoachDetailPage = () => {
  const { coachId } = useParams();
  const navigate = useNavigate();

  // 코치 데이터
  const coaches = {
    'park-sungkon': {
      name: '박성곤',
      image: '/trainer1.png',
      category: '헬스',
      categoryClass: 'health',
      intro: '효율적으로 근력을 키우는 맞춤 트레이닝',
      experience: '10년',
      specialty: ['근력 운동', '체형 교정', '다이어트'],
      certifications: [
        '생활스포츠지도사 2급',
        '퍼스널 트레이닝 자격증',
        'NSCA-CPT 국제 자격증'
      ],
      introduction: '안녕하세요, 박성곤 코치입니다. 10년간의 현장 경험을 바탕으로 개인별 맞춤 트레이닝을 제공합니다. 과학적인 운동 방법과 체계적인 프로그램으로 회원님의 목표 달성을 돕겠습니다.',
      philosophy: '올바른 자세와 체계적인 계획이 건강한 몸을 만듭니다. 단순히 운동을 가르치는 것이 아니라, 평생 건강을 유지할 수 있는 습관을 만들어드립니다.',
      programs: [
        { title: '근력 향상 프로그램', duration: '12주', description: '체계적인 근력 운동으로 기초 체력 향상' },
        { title: '체형 교정 프로그램', duration: '8주', description: '불균형한 체형을 바로잡는 맞춤 운동' },
        { title: '다이어트 프로그램', duration: '16주', description: '건강한 다이어트와 체중 관리' }
      ],
      reviews: [
        { author: '김**', rating: 5, content: '체계적인 수업으로 3개월만에 10kg 감량했습니다!' },
        { author: '이**', rating: 5, content: '자세 교정 덕분에 허리 통증이 많이 좋아졌어요.' },
        { author: '박**', rating: 5, content: '친절하고 세심한 지도 감사합니다.' }
      ]
    },
    'song-jiyeon': {
      name: '송지연',
      image: '/trainer2.png',
      category: '필라테스',
      categoryClass: 'pilates',
      intro: '부상 없이 달리는 러닝 코치',
      experience: '8년',
      specialty: ['필라테스', '러닝', '자세 교정'],
      certifications: [
        '필라테스 국제자격증 (PMA)',
        '러닝 코치 자격증',
        '재활운동 전문가'
      ],
      introduction: '안녕하세요, 송지연 코치입니다. 필라테스와 러닝을 전문으로 하며, 부상 없이 건강하게 운동할 수 있도록 도와드립니다. 특히 자세 교정과 재활 운동에 강점이 있습니다.',
      philosophy: '몸과 마음의 균형을 찾는 것이 진정한 건강입니다. 필라테스를 통해 코어 근육을 강화하고, 올바른 러닝 자세로 부상 없이 오래 달릴 수 있습니다.',
      programs: [
        { title: '필라테스 기초반', duration: '8주', description: '필라테스의 기본 동작과 호흡법 마스터' },
        { title: '러닝 교정 프로그램', duration: '6주', description: '올바른 러닝 폼으로 부상 예방' },
        { title: '재활 운동 프로그램', duration: '12주', description: '부상 후 재활과 근력 회복' }
      ],
      reviews: [
        { author: '최**', rating: 5, content: '필라테스 덕분에 허리가 정말 좋아졌어요!' },
        { author: '정**', rating: 5, content: '러닝 자세 교정 후 무릎 통증이 사라졌습니다.' },
        { author: '강**', rating: 5, content: '친절한 설명과 세심한 지도 감사합니다.' }
      ]
    },
    'kim-yena': {
      name: '김예나',
      image: '/trainer3.png',
      category: '헬스',
      categoryClass: 'health',
      intro: '시니어 전용 안전한 홈 트레이닝',
      experience: '7년',
      specialty: ['홈 트레이닝', '시니어 운동', '기능성 운동'],
      certifications: [
        '노인체육지도사',
        '생활스포츠지도사 1급',
        '기능성 트레이닝 전문가'
      ],
      introduction: '안녕하세요, 김예나 코치입니다. 시니어와 홈 트레이닝을 전문으로 하며, 안전하고 효과적인 운동을 제공합니다. 나이와 상관없이 건강한 삶을 누릴 수 있도록 돕겠습니다.',
      philosophy: '운동은 나이가 들어도 계속되어야 합니다. 안전한 범위 내에서 즐겁게 운동하며, 건강한 노후를 준비할 수 있도록 도와드립니다.',
      programs: [
        { title: '시니어 건강 프로그램', duration: '12주', description: '안전하고 효과적인 시니어 맞춤 운동' },
        { title: '홈 트레이닝 프로그램', duration: '8주', description: '집에서 할 수 있는 전신 운동' },
        { title: '관절 건강 프로그램', duration: '10주', description: '관절 강화와 유연성 향상' }
      ],
      reviews: [
        { author: '윤**', rating: 5, content: '어머니께서 운동하신 후 훨씬 건강해지셨어요.' },
        { author: '서**', rating: 5, content: '집에서도 할 수 있는 운동을 알려주셔서 좋습니다.' },
        { author: '한**', rating: 5, content: '안전하게 운동할 수 있어서 감사합니다.' }
      ]
    }
  };

  const coach = coaches[coachId];

  if (!coach) {
    return (
      <div className="coach-detail-page">
        <Header />
        <div className="error-message">
          <h2>코치를 찾을 수 없습니다.</h2>
          <button onClick={() => navigate('/ai-recommendation-result')}>돌아가기</button>
        </div>
      </div>
    );
  }

  return (
    <div className="coach-detail-page">
      <Header />

      {/* Hero Section */}
      <section className="coach-hero">
        <div className="coach-hero-content">
          <img src={coach.image} alt={coach.name} className="coach-hero-image" />
          <div className="coach-hero-info">
            <h1 className="coach-hero-name">{coach.name} 코치</h1>
            <div className={`coach-hero-badge ${coach.categoryClass}`}>{coach.category}</div>
            <p className="coach-hero-intro">"{coach.intro}"</p>
            <div className="coach-hero-stats">
              <div className="stat-item">
                <span className="stat-label">경력</span>
                <span className="stat-value">{coach.experience}</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-label">전문 분야</span>
                <span className="stat-value">{coach.specialty.length}개</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="coach-about">
        <div className="section-container">
          <h2 className="section-title">소개</h2>
          <p className="coach-introduction">{coach.introduction}</p>

          <h3 className="subsection-title">코칭 철학</h3>
          <p className="coach-philosophy">{coach.philosophy}</p>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="coach-specialty">
        <div className="section-container">
          <h2 className="section-title">전문 분야</h2>
          <div className="specialty-list">
            {coach.specialty.map((item, index) => (
              <div key={index} className="specialty-item">
                <span className="specialty-icon">✓</span>
                <span className="specialty-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="coach-certifications">
        <div className="section-container">
          <h2 className="section-title">보유 자격증</h2>
          <div className="certifications-list">
            {coach.certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <span className="cert-icon">🏆</span>
                <span className="cert-text">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="coach-programs">
        <div className="section-container">
          <h2 className="section-title">제공 프로그램</h2>
          <div className="programs-grid">
            {coach.programs.map((program, index) => (
              <div key={index} className="program-card">
                <h3 className="program-title">{program.title}</h3>
                <p className="program-duration">기간: {program.duration}</p>
                <p className="program-description">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="coach-reviews">
        <div className="section-container">
          <h2 className="section-title">수강생 후기</h2>
          <div className="reviews-list">
            {coach.reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <span className="review-author">{review.author}</span>
                  <div className="review-rating">
                    {'★'.repeat(review.rating)}
                  </div>
                </div>
                <p className="review-content">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="coach-cta">
        <div className="section-container">
          <h2 className="cta-title">지금 바로 시작하세요!</h2>
          <p className="cta-subtitle">{coach.name} 코치와 함께 건강한 변화를 만들어보세요</p>
          <div className="cta-buttons">
            <button className="btn-primary">수업 신청하기</button>
            <button className="btn-secondary" onClick={() => navigate('/ai-recommendation-result')}>
              다른 코치 보기
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="coach-footer">
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

export default CoachDetailPage;
