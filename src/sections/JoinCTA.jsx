import ScrollReveal from '../components/ScrollReveal';

/**
 * JoinCTA -- full-width call-to-action banner inviting visitors to join.
 * Features a gradient background, bold headline, and a prominent button
 * linking to the Tally signup form.
 */
export default function JoinCTA() {
    return (
        <section
            id="join"
            className="relative py-20 md:py-28 overflow-hidden"
        >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-amazon-navy via-[#1a2744] to-amazon-dark-navy" />

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full bg-amazon-orange/10 blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 rounded-full bg-amazon-blue/10 blur-3xl translate-y-1/3 -translate-x-1/4" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <ScrollReveal>
                    <span className="inline-block px-4 py-2 rounded-full bg-amazon-orange/20 text-amazon-orange text-sm font-bold uppercase tracking-wider mb-6">
                        {/* COMMENT: Replace with a short badge text like "Open to All Students" */}
                        Open to All Students
                    </span>
                </ScrollReveal>

                <ScrollReveal delay={1}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        {/* COMMENT: Replace with a compelling CTA headline like
                "Ready to Start Your Cloud Journey?" */}
                        Ready to Start Your
                        <span className="block text-amazon-orange mt-2">Cloud Journey?</span>
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={2}>
                    <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                        {/* COMMENT: Replace with a motivating paragraph about why joining the club is valuable --
                mention networking, learning, certifications, career opportunities */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={3}>
                    <div className="mt-10">
                        <a
                            href="https://tally.so/r/9q1QD5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center px-10 py-5 bg-amazon-orange text-white font-bold rounded-xl text-lg md:text-xl hover:bg-amazon-orange-hover transition-all duration-300 hover:scale-105 shadow-lg shadow-amazon-orange/30 hover:shadow-xl hover:shadow-amazon-orange/40"
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
    );
}
