import { useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';

/**
 * AboutPage -- dedicated page for the club's mission, vision, and activities.
 * Features a hero banner, two-column content, and feature cards.
 */

const FEATURES = [
    {
        /* COMMENT: Replace with actual feature */
        title: 'Hands-on Workshops',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        /* COMMENT: Replace with actual feature */
        title: 'Cloud Certifications',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
    },
    {
        /* COMMENT: Replace with actual feature */
        title: 'Community Events',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
];

export default function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-enter">
            {/* Page Banner */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-amazon-navy dark:bg-black overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <div className="absolute top-0 right-[10%] w-72 h-72 rounded-full bg-amazon-orange/5 blur-[100px]" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-1 bg-amazon-orange rounded-full" />
                            <span className="text-sm font-bold uppercase tracking-wider text-amazon-orange">
                                About Us
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            {/* COMMENT: Replace with a real heading like "Empowering Future Cloud Leaders" */}
                            Empowering Future Cloud Leaders
                        </h1>
                    </ScrollReveal>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 md:py-28 bg-bg-primary dark:bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Text Column */}
                        <div>
                            <ScrollReveal>
                                <p className="text-lg text-text-secondary dark:text-text-dark-secondary leading-relaxed">
                                    {/* COMMENT: Replace with a detailed paragraph about the club's mission */}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={150}>
                                <p className="mt-6 text-lg text-text-secondary dark:text-text-dark-secondary leading-relaxed">
                                    {/* COMMENT: Replace with a second paragraph about club history and growth */}
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </p>
                            </ScrollReveal>

                            {/* Stats Row */}
                            <ScrollReveal delay={300}>
                                <div className="mt-10 grid grid-cols-3 gap-6">
                                    <div className="text-center p-4 rounded-xl bg-bg-secondary dark:bg-bg-dark-card border border-border-light dark:border-border-dark">
                                        <div className="text-3xl md:text-4xl font-bold text-amazon-orange">
                                            {/* COMMENT: Replace with the actual member count */}
                                            50+
                                        </div>
                                        <div className="text-sm text-text-secondary dark:text-text-dark-secondary mt-1">
                                            Members
                                        </div>
                                    </div>
                                    <div className="text-center p-4 rounded-xl bg-bg-secondary dark:bg-bg-dark-card border border-border-light dark:border-border-dark">
                                        <div className="text-3xl md:text-4xl font-bold text-amazon-orange">
                                            {/* COMMENT: Replace with the actual event count */}
                                            20+
                                        </div>
                                        <div className="text-sm text-text-secondary dark:text-text-dark-secondary mt-1">
                                            Events
                                        </div>
                                    </div>
                                    <div className="text-center p-4 rounded-xl bg-bg-secondary dark:bg-bg-dark-card border border-border-light dark:border-border-dark">
                                        <div className="text-3xl md:text-4xl font-bold text-amazon-orange">
                                            {/* COMMENT: Replace with the actual project count */}
                                            10+
                                        </div>
                                        <div className="text-sm text-text-secondary dark:text-text-dark-secondary mt-1">
                                            Projects
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Image Column */}
                        <ScrollReveal delay={200}>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                {/* COMMENT: Replace with a group photo of club members at an event or workshop session */}
                                <img
                                    src="/images/about-club.webp"
                                    alt="AWS Cloud Club members collaborating"
                                    className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-amazon-navy/50 to-transparent" />
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Feature Cards */}
                    <div className="mt-20 md:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {FEATURES.map((feature, index) => (
                            <ScrollReveal key={feature.title} delay={150 * (index + 1)}>
                                <div className="group p-6 md:p-8 bg-bg-secondary dark:bg-bg-dark-card rounded-2xl border border-border-light dark:border-border-dark card-hover h-full">
                                    <div className="w-12 h-12 rounded-xl bg-amazon-orange/10 dark:bg-amazon-orange/15 flex items-center justify-center text-amazon-orange mb-5 transition-all duration-400 group-hover:bg-amazon-orange group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amazon-orange/30">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-text-primary dark:text-text-dark-primary mb-3 group-hover:text-amazon-orange transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-text-secondary dark:text-text-dark-secondary leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
