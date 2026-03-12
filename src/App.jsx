import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import EventsPage from './pages/EventsPage';

/**
 * App -- root component with React Router for multi-page navigation.
 * Each section lives on its own route:
 *   /       -> HomePage
 *   /about  -> AboutPage
 *   /team   -> TeamPage
 *   /events -> EventsPage
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-primary dark:bg-black text-text-primary dark:text-text-dark-primary">
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
