import React from 'react';
import '../styles/ReviewSection.css';

interface ReviewSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ isOpen, onClose }) => {
  const handleGoogleClick = () => {
    window.open('https://www.google.com/maps/place/Aydınbey+Famous+Resort', '_blank');
  };

  const handleTripadvisorClick = () => {
    window.open('https://www.tripadvisor.com/Hotel_Review-Aydınbey+Famous+Resort', '_blank');
  };

  return (
    <div className={`content-section ${isOpen ? 'open' : ''}`}>
      <button className="content-button" onClick={onClose}>
        <span>Güzel Yorumlarınız ile Bizi Değerlendirin</span>
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}>▼</span>
      </button>
      
      <div className="content-body review-content">
        <div className="review-platforms">
          <div className="platform-card" onClick={handleGoogleClick}>
            <img src="/google-logo.png" alt="Google" className="platform-logo" />
            <div className="platform-info">
              <div className="platform-rating">
                <span className="rating-score">4.5</span>
                <span className="rating-stars">★★★★½</span>
              </div>
              <div className="platform-reviews">2,345 değerlendirme</div>
              <button className="platform-button">Google'da Değerlendir</button>
            </div>
          </div>

          <div className="platform-card" onClick={handleTripadvisorClick}>
            <img src="/tripadvisor-logo.png" alt="Tripadvisor" className="platform-logo" />
            <div className="platform-info">
              <div className="platform-rating">
                <span className="rating-score">4.3</span>
                <span className="rating-stars">★★★★</span>
              </div>
              <div className="platform-reviews">1,876 değerlendirme</div>
              <button className="platform-button">Tripadvisor'da Değerlendir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection; 