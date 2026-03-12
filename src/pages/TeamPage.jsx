import { useEffect } from 'react';
import MemberCard from '../components/MemberCard';
import ScrollReveal from '../components/ScrollReveal';

/**
 * TeamPage -- Hackfest / Antigravity Style
 * Edge-to-edge aesthetics, grid pattern, massive glowing headers.
 */

const MEMBERS = [
    {
        name: 'Jane Doe',
        role: 'Club Head',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imageSrc: '/images/members/head.webp',
        featured: true,
    },
    {
        name: 'John Smith',
        role: 'Builder',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
        imageSrc: '/images/members/builder-1.webp',
        featured: false,
    },
    {
        name: 'Alice Johnson',
        role: 'Builder',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
        imageSrc: '/images/members/builder-2.webp',
        featured: false,
    },
];

export default function TeamPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-enter bg-bg-primary dark:bg-bg-dark bg-grid-pattern min-h-screen relative">
            {/* Page Banner with glowing orbs */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-screen dark:mix-blend-plus-lighter" aria-hidden="true">
                    <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] rounded-full bg-amazon-blue/20 dark:bg-amazon-blue/30 blur-[120px] animate-float" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amazon-navy/5 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/20 text-sm font-bold text-text-primary dark:text-white uppercase tracking-widest mb-8">
                                <span className="w-2 h-2 rounded-full bg-amazon-orange animate-pulse" />
                                The People
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-text-primary dark:text-white leading-[0.9] tracking-tighter">
                                MEET THE
                                <br />
                                <span className="text-gradient-purple-orange">CREATORS</span>
                            </h1>
                            <p className="mt-8 text-xl text-text-secondary dark:text-text-dark-secondary max-w-3xl mx-auto font-medium">
                                {/* COMMENT: Replace with a short description about the leadership team */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Members Grid */}
            <section className="py-20 md:py-28 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* We use an asymmetric grid: head takes up more space */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {MEMBERS.map((member, index) => (
                            <MemberCard
                                key={member.name}
                                name={member.name}
                                role={member.role}
                                bio={member.bio}
                                imageSrc={member.imageSrc}
                                featured={member.featured}
                                delay={150 * (index + 1)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Join CTA (Neon Border Block) */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-amazon-blue/10 to-transparent pointer-events-none" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-6xl font-black text-text-primary dark:text-white tracking-tighter">
                            BECOME A BUILDER.
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <p className="mt-6 text-xl text-text-secondary dark:text-text-dark-secondary">
                            {/* COMMENT: Replace with details about how to join or apply as a builder */}
                            Join our core team and help architect the future of student cloud initiatives.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                        <a
                            href="https://tally.so/r/9q1QD5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center mt-12 px-10 py-5 bg-amazon-orange text-white font-black rounded-2xl text-xl hover:bg-amazon-orange-hover transition-all duration-500 hover:scale-110 shadow-[0_0_40px_rgba(255,153,0,0.3)] hover:shadow-[0_0_60px_rgba(255,153,0,0.6)]"
                        >
                            Apply Now
                            <svg className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
