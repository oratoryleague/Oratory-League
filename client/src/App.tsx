import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './lib/theme.tsx';
import { AuthProvider } from './lib/auth';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import LoadingScreen from './components/ui/LoadingScreen';
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';
import { BottomNav } from './components/ui/BottomNav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Search from './pages/Search';
import Orators from './pages/Orators';
import Events from './pages/Events';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

const AppContent = () => {
  const location = useLocation();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load delay
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pb-16 pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="/orators" element={<Orators />} />
            <Route path="/events" element={<Events />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <BottomNav />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <AppContent />
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
