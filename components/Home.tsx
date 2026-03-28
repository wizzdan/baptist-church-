
import React from 'react';
import SEO from './SEO.tsx';
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
import SectionDivider from './SectionDivider.tsx';

const Home: React.FC = () => {
  return (
    <>
      <SEO title="A Home for All" description="Welcome to Limuru Town Baptist Church. A community of believers dedicated to knowing God and making Him known." />
      <section id="home"><Hero /></section>
      
      <SectionDivider color="#E5E1D8" backgroundColor="transparent" position="bottom" />
      <HistoryPreview />
      
      <SectionDivider color="#FFFFFF" backgroundColor="#E5E1D8" position="bottom" flip={true} />
      <section id="mission"><MissionVision /></section>
      
      <SectionDivider color="#2F4A61" backgroundColor="#FFFFFF" position="bottom" />
      <LeadershipPreview />
      
      <section id="services"><ServiceTimes /></section>
      
      <SectionDivider color="#FFFFFF" backgroundColor="#2F4A61" position="bottom" flip={true} />
      <section id="pastor"><PastorMessage /></section>
      
      <SectionDivider color="#E5E1D8" backgroundColor="#FFFFFF" position="bottom" />
      <section id="events"><UpcomingEvents /></section>
      
      <SectionDivider color="#1A1B1E" backgroundColor="#E5E1D8" position="bottom" flip={true} />
      <section id="livestream"><Livestream /></section>
      
      <SectionDivider color="#FFFFFF" backgroundColor="#1A1B1E" position="bottom" />
      <section id="ministries"><Ministries /></section>
      
      <SectionDivider color="#E5E1D8" backgroundColor="#FFFFFF" position="bottom" flip={true} />
      <section id="give"><Giving /></section>
      
      <SectionDivider color="#2F4A61" backgroundColor="#E5E1D8" position="bottom" />
      <section id="prayer"><PrayerRequest /></section>
    </>
  );
};

export default Home;
