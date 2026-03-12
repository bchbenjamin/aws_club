import ScrollReveal from '../components/ScrollReveal';

/**
 * About -- Section describing the club's mission, vision, and activities.
 * Two-column layout with text + illustration, plus feature cards.
 * Matches the clean editorial style of aboutamazon.com.
 */

const FEATURES = [
    {
        /* COMMENT: Replace title with actual feature like "Hands-on Workshops" */
        title: 'Hands-on Workshops',
        /* COMMENT: Replace description with real details about the workshops the club runs */
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        /* COMMENT: Replace title with actual feature like "Cloud Certifications" */
        title: 'Cloud Certifications',
        /* COMMENT: Replace description with details about certification prep the club offers */
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
    },
    {
        /* COMMENT: Replace title with actual feature like "Community Events" */
        title: 'Community Events',
        /* COMMENT: Replace description with details about community events, hackathons, etc. */
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="py-20 md:py-28 bg-bg-primary dark:bg-bg-dark"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-1 bg-amazon-orange rounded-full" />
                            <span className="text-sm font-bold uppercase tracking-wider text-amazon-orange">
                                About Us
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary dark:text-text-dark-primary leading-tight">
                            {/* COMMENT: Replace with an actual headline like "Empowering Future Cloud Leaders" */}
                            Empowering Future Cloud Leaders
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Two-column layout */}
                <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Column */}
                    <ScrollReveal delay={1}>
                        <div>
                            <p className="text-lg text-text-secondary dark:text-text-dark-secondary leading-relaxed">
                                {/* COMMENT: Replace with a detailed paragraph about the club's mission -- why it exists,
                    what it aims to achieve, and how it benefits students */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p className="mt-4 text-lg text-text-secondary dark:text-text-dark-secondary leading-relaxed">
                                {/* COMMENT: Replace with a second paragraph about the club's history,
                    when it was founded, and its growth over time */}
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </p>

                            {/* Stats Row */}
                            <div className="mt-8 grid grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-amazon-orange">
                                        {/* COMMENT: Replace with the actual number of club members */}
                                        50+
                                    </div>
                                    <div className="text-sm text-text-secondary dark:text-text-dark-secondary mt-1">
                                        Members
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-amazon-orange">
                                        {/* COMMENT: Replace with the actual number of events hosted */}
                                        20+
                                    </div>
                                    <div className="text-sm text-text-secondary dark:text-text-dark-secondary mt-1">
                                        Events
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-amazon-orange">
                                        {/* COMMENT: Replace with the actual number of projects or workshops conducted */}
                                        10+
                                    </div>
                                    <div className="text-sm text-text-secondary dark:text-text-dark-secondary mt-1">
                                        Projects
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Image Column */}
                    <ScrollReveal delay={2}>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            {/* COMMENT: Replace with a group photo of club members at an event or workshop session.
                  Should be a candid, high-quality photo showing collaborative learning. */}
                            <img
                                src="/images/about-club.webp"
                                alt="AWS Cloud Club members collaborating"
                                className="w-full h-[300px] md:h-[400px] object-cover"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-amazon-navy/40 to-transparent" />
                        </div>
                    </ScrollReveal>
                </div>

                {/* Feature Cards */}
                <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {FEATURES.map((feature, index) => (
                        <ScrollReveal key={feature.title} delay={index + 1}>
                            <div className="group p-6 md:p-8 bg-bg-secondary dark:bg-bg-dark-secondary rounded-xl border border-border-light dark:border-border-dark transition-all duration-300 hover:shadow-lg hover:shadow-amazon-orange/5 hover:-translate-y-1 h-full">
                                <div className="w-12 h-12 rounded-lg bg-amazon-orange/10 dark:bg-amazon-orange/20 flex items-center justify-center text-amazon-orange mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-text-primary dark:text-text-dark-primary mb-2">
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
    );
}
