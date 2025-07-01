import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SubjectCategories from './components/SubjectCategories';
import StudyGroups from './components/StudyGroups';
import RecentQuestions from './components/RecentQuestions';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && (
        <>
          <Hero />
          <Features />
          <Stats />
          <SubjectCategories />
          <StudyGroups />
          <RecentQuestions />
        </>
      )}
      
      {activeSection === 'subjects' && <SubjectCategories />}
      {activeSection === 'groups' && <StudyGroups />}
      {activeSection === 'questions' && <RecentQuestions />}
      
      <Footer />
    </div>
  );
}

export default App;