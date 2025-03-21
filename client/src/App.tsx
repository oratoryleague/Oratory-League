import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Sponsorships from "@/pages/Sponsorships";
import Resources from "@/pages/Resources";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import Auth from "@/pages/Auth";
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

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-dark text-white' : 'bg-lightBg text-dark'}`}>
      <LoadingScreen />
      <CustomCursor />
      <ThemeToggle />
      <Navbar />
      <AnimatePresence mode="wait">
        <Switch key={location}>
          <Route path="/" component={Home} />
          <Route path="/sponsorships" component={Sponsorships} />
          <Route path="/resources" component={Resources} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/auth" component={Auth} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
