import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReviewPage from './pages/ReviewPage';
import ReviewSection from './components/ReviewSection';

const App: React.FC = () => {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/reviews" element={<ReviewPage />} />
        </Routes>
        <ReviewSection isOpen={showReviews} onClose={() => setShowReviews(false)} />
      </div>
    </Router>
  );
};

export default App; 