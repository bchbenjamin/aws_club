import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Navbar -- sticky navigation bar with glassmorphism effect.
 * Uses React Router Link components for multi-page navigation.
 * Mobile-responsive hamburger menu included.
 */

const NAV_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Team', to: '/team' },
    { label: 'Events', to: '/events' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* Close mobile menu on resize to desktop */
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    /* Close mobile menu on navigation */
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            id="navbar"
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/85 dark:bg-black/85 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo / Club Name */}
                    <Link to="/" className="flex items-center gap-3 group">
                        {/* COMMENT: Replace this with the official AWS Cloud Club logo */}
                        <img
                            src="/images/aws-cloud-club-logo.png"
                            alt="AWS Cloud Club Logo"
                            className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="text-lg md:text-xl font-bold text-amazon-navy dark:text-text-dark-primary tracking-tight">
                            {/* COMMENT: Replace with official club name, e.g. "AWS Cloud Club - [College Name]" */}
                            AWS Cloud Club Atria
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                to={link.to}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive(link.to)
                                        ? 'text-amazon-orange bg-amazon-orange/10 dark:bg-amazon-orange/15'
                                        : 'text-text-primary dark:text-text-dark-primary hover:text-amazon-orange hover:bg-amazon-orange/5 dark:hover:bg-amazon-orange/10'
                                    }`}
                            >
                                {link.label}
                                {isActive(link.to) && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-amazon-orange rounded-full" />
                                )}
                            </Link>
                        ))}
                        <a
                            href="https://www.meetup.com/aws-cloud-club-at-atria-inst-of-tech/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 px-6 py-2.5 bg-amazon-orange text-white font-bold rounded-lg hover:bg-amazon-orange-hover transition-all duration-300 hover:shadow-lg hover:shadow-amazon-orange/25 hover:scale-105 text-sm"
                        >
                            Join Us
                        </a>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        id="mobile-menu-toggle"
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                    >
                        <span
                            className={`block w-5 h-0.5 bg-amazon-navy dark:bg-text-dark-primary transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''
                                }`}
                        />
                        <span
                            className={`block w-5 h-0.5 bg-amazon-navy dark:bg-text-dark-primary transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''
                                }`}
                        />
                        <span
                            className={`block w-5 h-0.5 bg-amazon-navy dark:bg-text-dark-primary transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out bg-white/95 dark:bg-black/95 backdrop-blur-xl ${menuOpen ? 'max-h-96 border-t border-border-light dark:border-border-dark' : 'max-h-0'
                    }`}
            >
                <div className="px-4 py-4 flex flex-col gap-1">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            className={`text-sm font-medium py-3 px-4 rounded-lg transition-all duration-200 ${isActive(link.to)
                                    ? 'text-amazon-orange bg-amazon-orange/10'
                                    : 'text-text-primary dark:text-text-dark-primary hover:text-amazon-orange hover:bg-amazon-orange/5'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://www.meetup.com/aws-cloud-club-at-atria-inst-of-tech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 px-6 py-3 bg-amazon-orange text-white font-bold rounded-lg text-center hover:bg-amazon-orange-hover transition-all duration-300 text-sm"
                    >
                        Join Us
                    </a>
                </div>
            </div>
        </nav>
    );
}
