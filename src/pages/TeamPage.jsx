import { useEffect } from 'react';
import MemberCard from '../components/MemberCard';
import ScrollReveal from '../components/ScrollReveal';

/**
 * TeamPage -- dedicated page displaying club leadership.
 * 1 Head and 2 Builders, with photo img tags.
 */

const MEMBERS = [
    {
        /* COMMENT: Replace name with the actual Club Head's full name */
        name: 'Jane Doe',
        /* COMMENT: Replace role with the official title */
        role: 'Club Head',
        /* COMMENT: Replace bio with a 2-3 sentence real biography */
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        /* COMMENT: Replace with path to the Club Head's headshot. Save as /public/images/members/head.webp */
        imageSrc: '/images/members/head.webp',
        featured: true,
    },
    {
        /* COMMENT: Replace with first Builder's full name */
        name: 'John Smith',
        /* COMMENT: Replace with official title, e.g. "Builder" */
        role: 'Builder',
        /* COMMENT: Replace with real biography */
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
        /* COMMENT: Replace with path to first Builder's headshot. Save as /public/images/members/builder-1.webp */
        imageSrc: '/images/members/builder-1.webp',
        featured: false,
    },
    {
        /* COMMENT: Replace with second Builder's full name */
        name: 'Alice Johnson',
        /* COMMENT: Replace with official title */
        role: 'Builder',
        /* COMMENT: Replace with real biography */
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
        /* COMMENT: Replace with path to second Builder's headshot. Save as /public/images/members/builder-2.webp */
        imageSrc: '/images/members/builder-2.webp',
        featured: false,
    },
];

export default function TeamPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-enter">
            {/* Page Banner */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-amazon-navy dark:bg-black overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <div className="absolute bottom-0 left-[15%] w-72 h-72 rounded-full bg-amazon-blue/5 blur-[100px]" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-12 h-1 bg-amazon-orange rounded-full" />
                                <span className="text-sm font-bold uppercase tracking-wider text-amazon-orange">
                                    Our Team
                                </span>
                                <div className="w-12 h-1 bg-amazon-orange rounded-full" />
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                {/* COMMENT: Replace with a real heading */}
                                Meet the People Behind the Club
                            </h1>
                            <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
                                {/* COMMENT: Replace with a short description about the leadership team */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Members Grid */}
            <section className="py-20 md:py-28 bg-bg-secondary dark:bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {MEMBERS.map((member, index) => (
                            <MemberCard
                                key={member.name}
                                name={member.name}
                                role={member.role}
                                bio={member.bio}
                                imageSrc={member.imageSrc}
                                featured={member.featured}
                                delay={200 * (index + 1)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="py-20 md:py-24 bg-bg-primary dark:bg-black">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-dark-primary">
                            {/* COMMENT: Replace with an invitation to join the team */}
                            Want to Be Part of the Team?
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <p className="mt-4 text-lg text-text-secondary dark:text-text-dark-secondary">
                            {/* COMMENT: Replace with details about how to join or apply as a builder */}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                        <a
                            href="https://tally.so/r/9q1QD5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center mt-8 px-8 py-4 bg-amazon-orange text-white font-bold rounded-xl text-lg hover:bg-amazon-orange-hover transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:shadow-amazon-orange/30"
                        >
                            Apply Now
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
