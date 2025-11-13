
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import ServiceTimes from './components/ServiceTimes';
import PastorMessage from './components/PastorMessage';
import UpcomingEvents from './components/UpcomingEvents';
import Livestream from './components/Livestream';
import Ministries from './components/Ministries';
import Giving from './components/Giving';
import Testimonials from './components/Testimonials';
import PrayerRequest from './components/PrayerRequest';
import Footer from './components/Footer';

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
