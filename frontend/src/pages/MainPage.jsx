import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Trainers from '../components/Trainers';
import BottomSection from '../components/BottomSection';
import Footer from '../components/Footer';

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-navigate to Main2 after 5 seconds (as per Figma design)
    const timer = setTimeout(() => {
      navigate('/main2');
    }, 5000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="main-page">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Trainers />
        <BottomSection />
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
