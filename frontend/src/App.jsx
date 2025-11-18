import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';
import MainPage from './pages/MainPage';
import MainPageNew from './pages/MainPageNew';
import Main2Page from './pages/Main2Page';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import SearchResultsPage from './pages/SearchResultsPage';
import CoachProfilePage from './pages/CoachProfilePage';
import CertificationPage from './pages/CertificationPage';
import MapPage from './pages/MapPage';
import CommunityPage from './pages/CommunityPage';
import SubscriptionPage from './pages/SubscriptionPage';
import AIMatchingPage from './pages/AIMatchingPage';
import RecruitPage from './pages/RecruitPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/main-new" element={<MainPageNew />} />
          <Route path="/main2" element={<Main2Page />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/coach/:id" element={<CoachProfilePage />} />
          <Route path="/certification" element={<CertificationPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/ai-matching" element={<AIMatchingPage />} />
          <Route path="/recruit" element={<RecruitPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
