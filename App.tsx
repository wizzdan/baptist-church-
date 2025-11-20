
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import MissionVision from './components/MissionVision.tsx';
import ServiceTimes from './components/ServiceTimes.tsx';
import PastorMessage from './components/PastorMessage.tsx';
import UpcomingEvents from './components/UpcomingEvents.tsx';
import Livestream from './components/Livestream.tsx';
import Ministries from './components/Ministries.tsx';
import Giving from './components/Giving.tsx';
import Testimonials from './components/Testimonials.tsx';
import PrayerRequest from './components/PrayerRequest.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="bg-light-neutral font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <MissionVision />
        <ServiceTimes />
        <PastorMessage />
        <UpcomingEvents />
        <Livestream />
        <Ministries />
        <Giving />
        <Testimonials />
        <PrayerRequest />
      </main>
      <Footer />
    </div>
  );
};

export default App;