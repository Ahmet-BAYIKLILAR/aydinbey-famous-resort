import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ReviewPage.css';

type Language = 'tr' | 'en' | 'de' | 'ru';

const translations = {
  tr: {
    title: 'Değerlendirmeler',
    back: 'Geri Dön',
    google: {
      title: 'Google Değerlendirmeleri',
      count: 'değerlendirme',
      button: 'Google\'da Değerlendir'
    },
    tripadvisor: {
      title: 'Tripadvisor Değerlendirmeleri',
      count: 'değerlendirme',
      button: 'Tripadvisor\'da Değerlendir'
    }
  },
  en: {
    title: 'Reviews',
    back: 'Go Back',
    google: {
      title: 'Google Reviews',
      count: 'reviews',
      button: 'Review on Google'
    },
    tripadvisor: {
      title: 'Tripadvisor Reviews',
      count: 'reviews',
      button: 'Review on Tripadvisor'
    }
  },
  de: {
    title: 'Bewertungen',
    back: 'Zurück',
    google: {
      title: 'Google Bewertungen',
      count: 'Bewertungen',
      button: 'Auf Google bewerten'
    },
    tripadvisor: {
      title: 'Tripadvisor Bewertungen',
      count: 'Bewertungen',
      button: 'Auf Tripadvisor bewerten'
    }
  },
  ru: {
    title: 'Отзывы',
    back: 'Назад',
    google: {
      title: 'Отзывы Google',
      count: 'отзывов',
      button: 'Оставить отзыв на Google'
    },
    tripadvisor: {
      title: 'Отзывы Tripadvisor',
      count: 'отзывов',
      button: 'Оставить отзыв на Tripadvisor'
    }
  }
};

const ReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<Language>('tr');

  const t = translations[language];

  const handleGoogleClick = () => {
    window.open('https://www.google.com/maps/place/Aydınbey+Famous+Resort', '_blank');
  };

  const handleTripadvisorClick = () => {
    window.open('https://www.tripadvisor.com/Hotel_Review-Aydınbey+Famous+Resort', '_blank');
  };

  return (
    <div className="review-page">
      <div className="review-page-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <span className="back-arrow">←</span> {t.back}
        </button>
        <div className="language-selector">
          {(['tr', 'en', 'de', 'ru'] as Language[]).map((lang) => (
            <button
              key={lang}
              className={`lang-button ${language === lang ? 'active' : ''}`}
              onClick={() => setLanguage(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="review-page-content">
        <h1>{t.title}</h1>
        
        <div className="review-cards">
          <div className="review-card" onClick={handleGoogleClick}>
            <div className="review-card-header">
              <img src="/google-logo.png" alt="Google" className="review-platform-logo" />
              <h2>{t.google.title}</h2>
            </div>
            <div className="review-stats">
              <div className="rating-average">4.5</div>
              <div className="rating-stars">★★★★½</div>
              <div className="rating-count">2,345 {t.google.count}</div>
            </div>
            <button className="review-button">{t.google.button}</button>
          </div>

          <div className="review-card" onClick={handleTripadvisorClick}>
            <div className="review-card-header">
              <img src="/tripadvisor-logo.png" alt="Tripadvisor" className="review-platform-logo" />
              <h2>{t.tripadvisor.title}</h2>
            </div>
            <div className="review-stats">
              <div className="rating-average">4.3</div>
              <div className="rating-stars">★★★★</div>
              <div className="rating-count">1,876 {t.tripadvisor.count}</div>
            </div>
            <button className="review-button">{t.tripadvisor.button}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage; 