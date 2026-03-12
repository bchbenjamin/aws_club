import { useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';

/**
 * AboutPage -- Hackfest / Antigravity Style
 * Features grid backgrounds, glowing orbs, and massive typography.
 * Included an expanded image grid placeholder for the user.
 */

const FEATURES = [
    {
        title: 'Learn Cloud',
        description: 'Hands-on learning sessions covering AWS services, architecture, and cloud fundamentals.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: 'Build Projects',
        description: 'Members collaborate to build real-world cloud applications and technical solutions.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
    },
    {
        title: 'Community Growth',
        description: 'A supportive learning environment where students share knowledge and grow together.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
];

export default function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-enter bg-bg-primary dark:bg-bg-dark bg-grid-pattern relative">
            {/* Page Banner with extreme glowing orbs */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-screen dark:mix-blend-plus-lighter" aria-hidden="true">
                    <div className="absolute top-[0%] right-[10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-amazon-orange/20 dark:bg-amazon-orange/30 blur-[120px] animate-float" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amazon-navy/5 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/20 text-sm font-bold text-text-primary dark:text-white uppercase tracking-widest mb-8">
                            <span className="w-2 h-2 rounded-full bg-amazon-blue animate-pulse" />
                            About Us
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-text-primary dark:text-white leading-[0.9] tracking-tighter">
                            EMPOWERING
                            <br />
                            <span className="text-gradient-purple-orange">FUTURE CLOUD BUILDERS</span>
                        </h1>
                    </ScrollReveal>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 md:py-28 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Text Column */}
                        <div className="order-2 lg:order-1">
                            <ScrollReveal>
                                <p className="text-xl md:text-2xl text-text-primary dark:text-white font-medium leading-relaxed tracking-tight">
                                    {/* COMMENT: Replace with a detailed paragraph about the club's mission */}
                                    AWS Cloud Club Atria is dedicated to helping students explore the world of cloud computing. Through workshops, collaborative projects, and industry exposure, we aim to give students practical experience with modern cloud technologies.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={150}>
                                <p className="mt-8 text-lg text-text-secondary dark:text-text-dark-secondary leading-relaxed">
                                    {/* COMMENT: Replace with a second paragraph about club history and growth */}
                                    Our vision is to create a strong community of cloud builders who are capable of designing scalable systems, building innovative solutions, and contributing to the global technology ecosystem.
                                </p>
                            </ScrollReveal>

                            {/* Stats Row */}
                            <ScrollReveal delay={300}>
                                <div className="mt-12 grid grid-cols-3 gap-6">
                                    <div className="text-center p-6 rounded-3xl bg-white dark:bg-bg-dark-card border border-border-light dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/20 card-hover">
                                        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amazon-orange to-amazon-blue">
                                            100+
                                        </div>
                                        <div className="text-xs md:text-sm font-bold tracking-widest uppercase text-text-secondary dark:text-text-dark-secondary mt-3">
                                            Members
                                        </div>
                                    </div>
                                    <div className="text-center p-6 rounded-3xl bg-white dark:bg-bg-dark-card border border-border-light dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/20 card-hover">
                                        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amazon-orange to-amazon-blue">
                                            10+
                                        </div>
                                        <div className="text-xs md:text-sm font-bold tracking-widest uppercase text-text-secondary dark:text-text-dark-secondary mt-3">
                                            Events
                                        </div>
                                    </div>
                                    <div className="text-center p-6 rounded-3xl bg-white dark:bg-bg-dark-card border border-border-light dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/20 card-hover">
                                        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amazon-orange to-amazon-blue">
                                            5+
                                        </div>
                                        <div className="text-xs md:text-sm font-bold tracking-widest uppercase text-text-secondary dark:text-text-dark-secondary mt-3">
                                            Projects
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Expanded Image Grid Column */}
                        <ScrollReveal delay={200}>
                            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 md:gap-6 relative">
                                {/* Background aura for images */}
                                <div className="absolute inset-0 bg-amazon-blue/20 blur-[100px] z-0 pointer-events-none" />

                                {/* Image 1 */}
                                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-amazon-blue/20 group hover:-translate-y-2 transition-transform duration-500">
                                    {/* COMMENT: Replace with actual club photo */}
                                    <img
                                        src="/images/about-1.webp"
                                        alt="AWS Cloud Club members collaborating"
                                        className="w-full h-[250px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <span className="text-white font-bold tracking-wider uppercase text-sm">Workshops</span>
                                    </div>
                                </div>
                                {/* Image 2 */}
                                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-amazon-orange/20 group hover:-translate-y-2 transition-transform duration-500 mt-12">
                                    {/* COMMENT: Replace with actual event photo */}
                                    <img
                                        src="/images/about-2.webp"
                                        alt="AWS Cloud Club hackathon"
                                        className="w-full h-[250px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <span className="text-white font-bold tracking-wider uppercase text-sm">Hackathons</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Feature Cards (Neon Style) */}
                    <div className="mt-32 border-t border-border-light dark:border-white/10 pt-24">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tighter text-text-primary dark:text-white">
                                THE EXPERIENCE
                            </h2>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {FEATURES.map((feature, index) => (
                                <ScrollReveal key={feature.title} delay={150 * (index + 1)}>
                                    <div className="group p-8 md:p-10 bg-white dark:bg-bg-dark-card rounded-3xl border border-border-light dark:border-white/10 card-hover h-full relative overflow-hidden">
                                        {/* Hover inner glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-amazon-blue/0 to-amazon-orange/0 group-hover:from-amazon-blue/10 group-hover:to-amazon-orange/10 transition-colors duration-500" />

                                        <div className="relative z-10">
                                            <div className="w-16 h-16 rounded-2xl bg-amazon-orange/10 dark:bg-amazon-orange/20 flex items-center justify-center text-amazon-orange mb-6 transition-all duration-500 group-hover:bg-amazon-orange group-hover:text-white group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-amazon-orange/20">
                                                {feature.icon}
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-text-primary dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amazon-orange group-hover:to-amazon-blue transition-all duration-300">
                                                {feature.title}
                                            </h3>
                                            <p className="text-base text-text-secondary dark:text-text-dark-secondary leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
