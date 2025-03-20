import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Sponsorships from "@/pages/Sponsorships";
import Resources from "@/pages/Resources";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import CustomCursor from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "@/lib/theme";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

function App() {
  const { theme } = useTheme();
  const [location] = useLocation();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-dark text-white' : 'bg-lightBg text-dark'}`}>
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
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
