import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Support from "@/pages/Support";
import Resources from "@/pages/Resources";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import Auth from "@/pages/Auth";
import Leadership from "@/pages/Leadership";
import MissionVision from "@/pages/MissionVision";
import OurHistory from "@/pages/OurHistory";
import JoinOL from "@/pages/JoinOL";
import MemberBenefits from "@/pages/MemberBenefits";
import TrainingPrograms from "@/pages/TrainingPrograms";
import GlobalChapters from "@/pages/GlobalChapters";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CodeOfConduct from "@/pages/CodeOfConduct";
import ReportMisconduct from "@/pages/ReportMisconduct";
import Search from "@/pages/Search";
import Orators from "@/pages/Orators";
import Events from "@/pages/Events";
import Notifications from "@/pages/Notifications";
import Profile from "@/pages/Profile";
import CustomCursor from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "@/lib/theme";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { applyCardStyles } from "@/lib/applyCardStyles";
import { useEffect } from "react";
import BottomNav from "@/components/ui/BottomNav";

function App() {
  const { theme } = useTheme();
  const [location] = useLocation();

  // Apply card styles after component mounts and whenever location changes
  useEffect(() => {
    // Small delay to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      applyCardStyles();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location]);

  // Check if current route should show bottom nav
  const showBottomNav = [
    '/search',
    '/orators',
    '/events',
    '/notifications',
    '/profile'
  ].includes(location);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-dark text-white' : 'bg-lightBg text-dark'}`}>
      <LoadingScreen />
      <CustomCursor />
      <ThemeToggle />
      <Navbar />
      <AnimatePresence mode="wait">
        <Switch key={location}>
          <Route path="/" component={Home} />
          <Route path="/sponsorships" component={Support} />
          <Route path="/resources" component={Resources} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/auth" component={Auth} />
          <Route path="/leadership" component={Leadership} />
          <Route path="/mission-vision" component={MissionVision} />
          <Route path="/our-history" component={OurHistory} />
          <Route path="/join" component={JoinOL} />
          <Route path="/member-benefits" component={MemberBenefits} />
          <Route path="/training-programs" component={TrainingPrograms} />
          <Route path="/global-chapters" component={GlobalChapters} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/code-of-conduct" component={CodeOfConduct} />
          <Route path="/report-misconduct" component={ReportMisconduct} />
          <Route path="/search" component={Search} />
          <Route path="/orators" component={Orators} />
          <Route path="/events" component={Events} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
      {showBottomNav && <BottomNav />}
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
