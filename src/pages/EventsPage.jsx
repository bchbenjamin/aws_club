import { useEffect } from 'react';
import EventCard from '../components/EventCard';
import ScrollReveal from '../components/ScrollReveal';

/**
 * EventsPage -- Hackfest / Antigravity Style
 * Dark neon grid, massive typography, glowing aesthetics.
 */

const UPCOMING_EVENTS = [
    {
        month: 'APR', day: '05',
        title: 'Introduction to AWS Cloud Computing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'Seminar Hall A',
        time: '2:00 PM - 4:00 PM',
    },
];

export default function EventsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-enter bg-bg-primary dark:bg-bg-dark bg-grid-pattern min-h-screen relative">
            {/* Page Banner with extreme glowing orbs */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-screen dark:mix-blend-plus-lighter" aria-hidden="true">
                    <div className="absolute top-[10%] right-[15%] w-[350px] h-[350px] rounded-full bg-amazon-orange/20 dark:bg-amazon-orange/30 blur-[120px] animate-float" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amazon-navy/5 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/20 text-sm font-bold text-text-primary dark:text-white uppercase tracking-widest mb-8">
                            <span className="w-2 h-2 rounded-full bg-amazon-blue animate-pulse" />
                            Upcoming Events
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-text-primary dark:text-white leading-[0.9] tracking-tighter">
                            WHAT'S
                            <br />
                            <span className="text-gradient-purple-orange">HAPPENING</span>
                        </h1>
                        <p className="mt-8 text-xl text-text-secondary dark:text-text-dark-secondary max-w-3xl mx-auto font-medium">
                            {/* COMMENT: Replace with a short invite to attend events */}
                            Join us for workshops, hackathons, and guest speaker sessions designed to accelerate your cloud journey.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Events List */}
            <section className="py-16 md:py-24 relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-6 md:gap-8 relative z-10">
                        {UPCOMING_EVENTS.map((event, index) => (
                            <EventCard
                                key={`${event.month}-${event.day}-${event.title}`}
                                month={event.month}
                                day={event.day}
                                title={event.title}
                                description={event.description}
                                location={event.location}
                                time={event.time}
                                delay={150 * (index + 1)}
                            />
                        ))}
                    </div>

                    <ScrollReveal delay={800}>
                        <div className="mt-20 text-center">
                            <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-amazon-blue to-amazon-orange">
                                <div className="px-8 py-3 rounded-full bg-bg-primary dark:bg-bg-dark text-sm font-bold text-text-primary dark:text-white tracking-widest uppercase">
                                    {/* COMMENT: Replace with actual text or link to full calendar */}
                                    More Events Dropping Soon
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
