import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

/**
 * HomePage -- a creative, visually striking landing page.
 * Inspired by antigravity.google and hackfest.dev aesthetics:
 * - Full-viewport hero with animated gradient, floating orbs
 * - Feature highlights with staggered scroll-reveal
 * - Community numbers strip
 * - Final CTA section
 * No "Powered by AWS" badge per user request.
 */

const HIGHLIGHTS = [
    {
        /* COMMENT: Replace title with actual highlight like "Cloud Workshops" */
        title: 'Cloud Workshops',
        /* COMMENT: Replace description with real details about workshops */
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        /* COMMENT: Replace title with actual highlight like "Industry Networking" */
        title: 'Industry Networking',
        /* COMMENT: Replace description with details about networking events */
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        /* COMMENT: Replace title with actual highlight like "AWS Certifications" */
        title: 'AWS Certifications',
        /* COMMENT: Replace description with details about certification prep */
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
    },
    {
        /* COMMENT: Replace title with actual highlight like "Hackathons" */
        title: 'Hackathons',
        /* COMMENT: Replace description with details about hackathon events */
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
];

const STATS = [
    { /* COMMENT: Replace with actual member count */ value: '50+', label: 'Members' },
    { /* COMMENT: Replace with actual event count */ value: '20+', label: 'Events Hosted' },
    { /* COMMENT: Replace with actual project count */ value: '10+', label: 'Projects Built' },
    { /* COMMENT: Replace with actual certification count */ value: '15+', label: 'Certifications' },
];

export default function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-enter">
            {/* ============================================================
          HERO SECTION
          Full-viewport with animated gradient background and floating orbs
          ============================================================ */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-amazon-navy dark:bg-black">
                {/* Animated gradient background */}
                <div className="absolute inset-0 opacity-30 dark:opacity-20">
                    {/* COMMENT: Replace with a high-quality hero background image -- ideally
              a photo of the club at an event, or abstract cloud/tech visual */}
                    <img
                        src="/images/hero-bg.webp"
                        alt="AWS Cloud Club hero background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-amazon-navy/90 via-amazon-navy/70 to-amazon-navy dark:from-black/90 dark:via-black/70 dark:to-black" />

                {/* Floating orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <div className="absolute top-[15%] left-[8%] w-72 h-72 md:w-[400px] md:h-[400px] rounded-full bg-amazon-orange/8 blur-[100px] animate-float" />
                    <div className="absolute bottom-[20%] right-[5%] w-64 h-64 md:w-[350px] md:h-[350px] rounded-full bg-amazon-blue/6 blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
                    <div className="absolute top-[50%] left-[40%] w-56 h-56 md:w-80 md:h-80 rounded-full bg-amazon-orange/4 blur-[120px] animate-float" style={{ animationDelay: '1.5s' }} />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal delay={100}>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
                            {/* COMMENT: Replace with the club's actual main headline */}
                            Build the Future
                            <span className="block text-gradient-orange mt-3 md:mt-4">
                                {/* COMMENT: Replace with a supporting headline phrase */}
                                in the Cloud
                            </span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <p className="mt-8 md:mt-10 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                            {/* COMMENT: Replace with a 2-3 sentence introduction describing the club's mission,
                  what members will learn, and why they should join */}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={500}>
                        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://tally.so/r/9q1QD5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 bg-amazon-orange text-white font-bold rounded-xl text-lg hover:bg-amazon-orange-hover transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:shadow-amazon-orange/30 animate-pulse-glow"
                            >
                                Join the Club
                                <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-400 hover:scale-105"
                            >
                                Discover More
                            </Link>
                        </div>
                    </ScrollReveal>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center">
                            <div className="w-1.5 h-3 bg-white/40 rounded-full mt-2 animate-bounce" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
          HIGHLIGHTS SECTION
          Feature grid with staggered entrance animations
          ============================================================ */}
            <section className="py-24 md:py-32 bg-bg-primary dark:bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary dark:text-text-dark-primary leading-tight">
                                {/* COMMENT: Replace with a real heading like "What We Do" */}
                                What We Do
                            </h2>
                            <p className="mt-4 text-lg text-text-secondary dark:text-text-dark-secondary">
                                {/* COMMENT: Replace with a short description of the club's activities */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {HIGHLIGHTS.map((item, index) => (
                            <ScrollReveal key={item.title} delay={150 * (index + 1)}>
                                <div className="group p-6 md:p-8 bg-bg-secondary dark:bg-bg-dark-card rounded-2xl border border-border-light dark:border-border-dark card-hover h-full">
                                    <div className="w-14 h-14 rounded-xl bg-amazon-orange/10 dark:bg-amazon-orange/15 flex items-center justify-center text-amazon-orange mb-5 transition-all duration-400 group-hover:bg-amazon-orange group-hover:text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-amazon-orange/30">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-text-primary dark:text-text-dark-primary mb-3 group-hover:text-amazon-orange transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-text-secondary dark:text-text-dark-secondary leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================
          STATS STRIP
          Horizontal stats bar with AMOLED-friendly gradient
          ============================================================ */}
            <section className="py-16 md:py-20 bg-gradient-to-r from-amazon-navy via-[#1a2744] to-amazon-navy dark:from-black dark:via-bg-dark-card dark:to-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {STATS.map((stat, index) => (
                            <ScrollReveal key={stat.label} delay={150 * (index + 1)}>
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-amazon-orange">
                                        {stat.value}
                                    </div>
                                    <div className="mt-2 text-sm text-white/60">
                                        {stat.label}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================
          CTA SECTION
          Final call-to-action with prominent button
          ============================================================ */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-bg-primary dark:bg-black">
                {/* Decorative orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 rounded-full bg-amazon-orange/5 blur-[100px] -translate-y-1/3 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-56 h-56 md:w-72 md:h-72 rounded-full bg-amazon-blue/5 blur-[100px] translate-y-1/3 -translate-x-1/4" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary dark:text-text-dark-primary leading-tight">
                            {/* COMMENT: Replace with a compelling CTA like "Ready to Start Your Cloud Journey?" */}
                            Ready to Start Your
                            <span className="block text-gradient-orange mt-2">Cloud Journey?</span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <p className="mt-6 text-lg md:text-xl text-text-secondary dark:text-text-dark-secondary max-w-2xl mx-auto leading-relaxed">
                            {/* COMMENT: Replace with motivating text about why joining the club is valuable */}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={400}>
                        <div className="mt-10">
                            <a
                                href="https://tally.so/r/9q1QD5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center px-10 py-5 bg-amazon-orange text-white font-bold rounded-xl text-lg md:text-xl hover:bg-amazon-orange-hover transition-all duration-400 hover:scale-105 shadow-lg shadow-amazon-orange/20 hover:shadow-2xl hover:shadow-amazon-orange/40"
                            >
                                Join the Club
                                <svg
                                    className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
