import React from 'react';
import './Trainers.css';

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      name: '김민수 트레이너',
      specialty: '웨이트 트레이닝',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070',
      experience: '10년 경력'
    },
    {
      id: 2,
      name: '박지영 트레이너',
      specialty: '필라테스',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=2070',
      experience: '8년 경력'
    },
    {
      id: 3,
      name: '이준호 트레이너',
      specialty: '크로스핏',
      image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=2070',
      experience: '12년 경력'
    }
  ];

  return (
    <section className="trainers">
      <div className="trainers-container">
        <div className="trainers-content">
          <p className="trainers-description">
            전문성을 갖춘 트레이너들이<br />
            당신의 건강한 변화를 함께합니다
          </p>

          <div className="trainers-grid">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="trainer-card">
                <div className="trainer-image-wrapper">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="trainer-image"
                  />
                </div>
                <div className="trainer-info">
                  <h3 className="trainer-name">{trainer.name}</h3>
                  <p className="trainer-specialty">{trainer.specialty}</p>
                  <p className="trainer-experience">{trainer.experience}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="trainers-more-btn">더보기</button>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
