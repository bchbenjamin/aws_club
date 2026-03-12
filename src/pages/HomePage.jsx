import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

/**
 * HomePage -- Hackfest / Antigravity Style Landing Page
 * Full grid background, heavy neon glowing orbs, and massive typography.
 */

const HIGHLIGHTS = [
    {
        title: 'Cloud Workshops',
        description: 'Hands-on learning sessions covering AWS services, architecture, and cloud fundamentals.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: 'Hands-on Labs',
        description: 'Practical labs to give you direct experience working with AWS cloud environments.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        title: 'Hackathons',
        description: 'Collaborate with peers to build real-world cloud applications and technical solutions.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        title: 'Industry Talks',
        description: 'Gain insights and learn from professionals working in the cloud and tech industry.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
    },
    {
        title: 'Builder Sessions',
        description: 'Deep-dive sessions focusing on architecture, coding, and deploying to AWS.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
];

const STATS = [
    { value: '100+', label: 'Members' },
    { value: '10+', label: 'Events' },
    { value: '5+', label: 'Projects' },
    { value: 'Growing', label: 'Community' },
];

export default function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-enter">
            {/* ============================================================
          HERO SECTION
          Hackfest aesthetic: CSS Grid background, neon orbs, 
          massive typography, and edge-to-edge striking design.
          ============================================================ */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary dark:bg-bg-dark bg-grid-pattern">

                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30 pointer-events-none">
                    <img src="/images/hero-banner.webp" alt="Hero Background" className="w-full h-full object-cover" />
                </div>

                {/* Animated glowing orbs (Purple & Orange) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-screen dark:mix-blend-plus-lighter" aria-hidden="true">
                    <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-amazon-blue/20 dark:bg-amazon-blue/30 blur-[120px] animate-float" />
                    <div className="absolute bottom-[10%] right-[10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-amazon-orange/15 dark:bg-amazon-orange/25 blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center mt-10 md:mt-0">
                    <ScrollReveal delay={100}>
                        {/* The Badge */}
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amazon-navy/5 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/20 text-sm font-bold text-text-primary dark:text-white uppercase tracking-widest mb-8 md:mb-12 shadow-xl shadow-amazon-blue/10">
                            <span className="w-2 h-2 rounded-full bg-amazon-orange animate-pulse" />
                            Join the Movement
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <h1 className="text-[12vw] sm:text-[10vw] md:text-8xl lg:text-9xl font-extrabold text-text-primary dark:text-white leading-[0.9] tracking-tighter">
                            BUILD IN THE CLOUD
                            <br />
                            <span className="text-gradient-purple-orange">
                                WITH AWS
                            </span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={500}>
                        <p className="mt-8 md:mt-12 text-lg md:text-2xl text-text-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed font-medium">
                            AWS Cloud Club Atria is a community of builders passionate about cloud computing.
We learn, experiment, and build real-world solutions using AWS technologies while helping students grow their technical skills.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={700}>
                        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
                            {/* Primary Neon CTA */}
                            <a
                                href="https://www.meetup.com/aws-cloud-club-at-atria-inst-of-tech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center px-10 py-5 bg-amazon-orange text-white font-bold rounded-2xl text-xl hover:bg-amazon-orange-hover transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(255,153,0,0.3)] hover:shadow-[0_0_60px_rgba(255,153,0,0.6)] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                                <span className="relative z-10 flex items-center">
                                    Join the Club
                                    <svg className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </a>
                            {/* Secondary CTA */}
                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center px-10 py-5 bg-bg-secondary dark:bg-bg-dark-card border border-border-light dark:border-white/10 text-text-primary dark:text-white font-bold rounded-2xl text-xl hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-400 hover:scale-105"
                            >
                                Explore More
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ============================================================
          HIGHLIGHTS SECTION (Neon Cards)
          ============================================================ */}
            <section className="relative py-24 md:py-32 bg-bg-primary dark:bg-bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="mb-16 md:mb-24">
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-text-primary dark:text-white tracking-tighter">
                                WHAT WE DO.
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {HIGHLIGHTS.map((item, index) => (
                            <ScrollReveal key={item.title} delay={150 * (index + 1)}>
                                <div className="group relative p-8 md:p-12 bg-bg-secondary dark:bg-bg-dark-card rounded-3xl border border-border-light dark:border-white/5 card-hover overflow-hidden">
                                    {/* Hover gradient background injection */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-amazon-blue/0 to-amazon-orange/0 group-hover:from-amazon-blue/5 group-hover:to-amazon-orange/10 dark:group-hover:from-amazon-blue/10 dark:group-hover:to-amazon-orange/10 transition-all duration-500" />

                                    <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                                        <div className="shrink-0 w-16 h-16 rounded-2xl bg-amazon-blue/10 dark:bg-amazon-blue/20 flex items-center justify-center text-amazon-blue transition-all duration-500 group-hover:bg-amazon-blue group-hover:text-white group-hover:rotate-6 group-hover:scale-110 shadow-lg shadow-amazon-blue/20">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-white mb-4 group-hover:text-amazon-blue transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-lg text-text-secondary dark:text-text-dark-secondary leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================
          STATS SECTION (Massive numbers)
          ============================================================ */}
            <section className="py-24 md:py-32 bg-amazon-blue dark:bg-amazon-navy relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-amazon-blue to-[#6D28D9] dark:from-[#110C24] dark:to-[#170E38] mix-blend-multiply" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                        {STATS.map((stat, index) => (
                            <ScrollReveal key={stat.label} delay={150 * (index + 1)}>
                                <div className="text-center group">
                                    <div className="text-6xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-transform duration-500 group-hover:scale-110 group-hover:text-amazon-orange group-hover:drop-shadow-[0_0_50px_rgba(255,153,0,0.5)]">
                                        {stat.value}
                                    </div>
                                    <div className="mt-4 text-sm md:text-base font-bold text-white/80 uppercase tracking-widest">
                                        {stat.label}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================
          FINAL CTA (Neon border block)
          ============================================================ */}
            <section className="py-32 md:py-48 bg-bg-primary dark:bg-bg-dark bg-grid-pattern relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-primary dark:to-bg-dark" />
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-text-primary dark:text-white leading-[0.9] tracking-tighter">
                            READY TO
                            <br />
                            <span className="text-gradient-purple-orange">BUILD?</span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="mt-16">
                            <a
                                href="https://www.meetup.com/aws-cloud-club-at-atria-inst-of-tech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center px-12 py-6 bg-amazon-orange text-white font-black rounded-full text-2xl hover:bg-amazon-orange-hover transition-all duration-500 hover:scale-110 shadow-[0_0_50px_rgba(255,153,0,0.4)] hover:shadow-[0_0_80px_rgba(255,153,0,0.8)]"
                            >
                                Join the Club
                                <svg
                                    className="ml-4 w-7 h-7 transition-transform duration-300 group-hover:translate-x-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
