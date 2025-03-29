import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/home/Hero';
import IntroSection from '@/components/home/IntroSection';
import WomensMonth from '@/components/home/WomensMonth';
import GrandOrate from '@/components/home/GrandOrate';
import CoreValues from '@/components/home/CoreValues';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import GlobalReach from '@/components/home/GlobalReach';
import CallToAction from '@/components/home/CallToAction';
import Partners from '@/components/home/Partners';
import GrandOrateCountdown from '@/components/home/GrandOrateCountdown';
import SponsorDonate from '@/components/home/SponsorDonate';
import TopDebaters from '@/components/home/TopDebaters';
import BottomNav from '@/components/ui/BottomNav';

const Home = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative pb-16"
    >
      <Hero />
      <main>
        <IntroSection />
        <WomensMonth />
        <CoreValues />
        <GrandOrate />
        <UpcomingEvents />
        <GrandOrateCountdown />
        <TopDebaters />
        <GlobalReach />
        <SponsorDonate />
        <Partners />
        <CallToAction />
      </main>
      <BottomNav />
    </motion.div>
  );
};

export default Home;
