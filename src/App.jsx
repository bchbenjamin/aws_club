import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import EventsPage from './pages/EventsPage';
import CustomCursor from './components/CustomCursor';

/**
 * App -- root component with React Router for multi-page navigation.
 * Wraps everything in the Black/Purple/Orange theme context.
 * Injects CustomCursor at the highest level so it persists across pages.
 */
export default function App() {
  return (
    <BrowserRouter>
      {/* 
        The CustomCursor handles its own mobile-hiding logic.
        It sits at the top level to avoid re-mounting on route changes.
      */}
      <CustomCursor />

      <div className="min-h-screen bg-bg-primary dark:bg-bg-dark text-text-primary dark:text-text-dark-primary font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
