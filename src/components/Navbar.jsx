import { useState, useEffect } from 'react';

/**
 * Navbar -- sticky navigation bar with glassmorphism effect.
 * Matches the clean, minimal navigation style of aboutamazon.com.
 * Mobile-responsive hamburger menu included.
 */

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Members', href: '#members' },
    { label: 'Events', href: '#events' },
    { label: 'Join', href: 'https://tally.so/r/9q1QD5', external: true },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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

    return (
        <nav
            id="navbar"
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/80 dark:bg-[#0F1111]/80 backdrop-blur-lg shadow-md'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo / Club Name */}
                    <a href="#hero" className="flex items-center gap-3 group">
                        {/* COMMENT: Replace this with the official AWS Cloud Club logo */}
                        <img
                            src="/images/aws-cloud-club-logo.png"
                            alt="AWS Cloud Club Logo"
                            className="h-8 md:h-10 w-auto"
                        />
                        <span className="text-lg md:text-xl font-bold text-amazon-navy dark:text-text-dark-primary tracking-tight">
                            {/* COMMENT: Replace with official club name, e.g. "AWS Cloud Club - [College Name]" */}
                            AWS Cloud Club
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) =>
                            link.external ? (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2.5 bg-amazon-orange text-white font-bold rounded-md hover:bg-amazon-orange-hover transition-colors duration-200 text-sm"
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="relative text-sm font-medium text-text-primary dark:text-text-dark-primary hover:text-amazon-orange transition-colors duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-amazon-orange after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {link.label}
                                </a>
                            )
                        )}
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        id="mobile-menu-toggle"
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                    >
                        <span
                            className={`block w-6 h-0.5 bg-amazon-navy dark:bg-text-dark-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-amazon-navy dark:bg-text-dark-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-amazon-navy dark:bg-text-dark-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 bg-white/95 dark:bg-[#0F1111]/95 backdrop-blur-lg ${menuOpen ? 'max-h-80 border-t border-border-light dark:border-border-dark' : 'max-h-0'
                    }`}
            >
                <div className="px-4 py-4 flex flex-col gap-3">
                    {NAV_LINKS.map((link) =>
                        link.external ? (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 bg-amazon-orange text-white font-bold rounded-md text-center hover:bg-amazon-orange-hover transition-colors duration-200 text-sm"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ) : (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-text-primary dark:text-text-dark-primary hover:text-amazon-orange transition-colors duration-200 py-2 border-b border-border-light dark:border-border-dark"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        )
                    )}
                </div>
            </div>
        </nav>
    );
}
