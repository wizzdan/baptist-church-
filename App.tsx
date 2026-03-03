
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Home from './components/Home.tsx';
import History from './components/History.tsx';
import Leadership from './components/Leadership.tsx';
import Footer from './components/Footer.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-light-neutral font-sans overflow-x-hidden min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/leadership" element={<Leadership />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
