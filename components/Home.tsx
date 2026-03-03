
import React from 'react';
import Hero from './Hero.tsx';
import HistoryPreview from './HistoryPreview.tsx';
import MissionVision from './MissionVision.tsx';
import LeadershipPreview from './LeadershipPreview.tsx';
import ServiceTimes from './ServiceTimes.tsx';
import PastorMessage from './PastorMessage.tsx';
import UpcomingEvents from './UpcomingEvents.tsx';
import Livestream from './Livestream.tsx';
import Ministries from './Ministries.tsx';
import Giving from './Giving.tsx';
import PrayerRequest from './PrayerRequest.tsx';

const Home: React.FC = () => {
  return (
    <>
      <section id="home"><Hero /></section>
      <HistoryPreview />
      <section id="mission"><MissionVision /></section>
      <LeadershipPreview />
      <section id="services"><ServiceTimes /></section>
      <section id="pastor"><PastorMessage /></section>
      <section id="events"><UpcomingEvents /></section>
      <section id="livestream"><Livestream /></section>
      <section id="ministries"><Ministries /></section>
      <section id="give"><Giving /></section>
      <section id="prayer"><PrayerRequest /></section>
    </>
  );
};

export default Home;
