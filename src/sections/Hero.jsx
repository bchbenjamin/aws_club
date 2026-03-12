import ScrollReveal from '../components/ScrollReveal';

/**
 * Hero -- Full-viewport hero section introducing the club.
 * Features gradient overlay, decorative floating elements,
 * and a primary CTA button. Matches the bold, editorial
 * hero style of aboutamazon.com.
 */
export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-amazon-navy"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                {/* COMMENT: Replace with a high-quality hero background image -- ideally a photo of
            the club members at a cloud computing event, or an abstract cloud/tech visual */}
                <img
                    src="/images/hero-bg.webp"
                    alt="AWS Cloud Club hero background"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-amazon-navy/80 via-amazon-navy/60 to-amazon-navy" />
            </div>

            {/* Decorative floating elements (cloud-inspired) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/4 left-[10%] w-64 h-64 md:w-96 md:h-96 rounded-full bg-amazon-orange/5 blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-[10%] w-48 h-48 md:w-72 md:h-72 rounded-full bg-amazon-blue/5 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-amazon-orange/3 blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <ScrollReveal>
                    {/* Tagline */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white/80 mb-8">
                        {/* COMMENT: Replace with a short tagline like "Powered by AWS" or "Cloud Computing Community" */}
                        <svg className="w-4 h-4 text-amazon-orange" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>Powered by Amazon Web Services</span>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={1}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                        {/* COMMENT: Replace with the club's actual headline, e.g. "Build. Learn. Innovate."
                or "Welcome to AWS Cloud Club at [College Name]" */}
                        Build the Future
                        <span className="block text-amazon-orange mt-2">
                            {/* COMMENT: Replace with a supporting headline phrase */}
                            in the Cloud
                        </span>
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={2}>
                    <p className="mt-6 md:mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                        {/* COMMENT: Replace with a 2-3 sentence introduction describing the club's mission,
                what members will learn, and why they should join */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={3}>
                    <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://tally.so/r/9q1QD5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-amazon-orange text-white font-bold rounded-lg text-lg hover:bg-amazon-orange-hover transition-all duration-300 hover:scale-105 animate-pulse-glow"
                        >
                            Join the Club
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        <a
                            href="#about"
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
                        >
                            Learn More
                        </a>
                    </div>
                </ScrollReveal>

                {/* Scroll-down indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <a href="#about" aria-label="Scroll to About section">
                        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
