import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Members from './sections/Members';
import Events from './sections/Events';
import JoinCTA from './sections/JoinCTA';

/**
 * App -- root component that assembles all page sections.
 * This is a single-page layout; each section is navigated
 * via smooth-scroll anchor links in the Navbar.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary dark:bg-bg-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Members />
        <Events />
        <JoinCTA />
      </main>
      <Footer />
    </div>
  );
}
