import { useEffect } from 'react';
import EventCard from '../components/EventCard';
import ScrollReveal from '../components/ScrollReveal';

/**
 * EventsPage -- dedicated page for upcoming club events.
 */

const UPCOMING_EVENTS = [
    {
        month: 'APR', day: '05',
        /* COMMENT: Replace with the actual event title */
        title: 'Introduction to AWS Cloud Computing',
        /* COMMENT: Replace with a real description */
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        /* COMMENT: Replace with the actual venue */
        location: 'Seminar Hall A',
        /* COMMENT: Replace with the actual time */
        time: '2:00 PM - 4:00 PM',
    },
    {
        month: 'APR', day: '15',
        title: 'Hands-on Lab: Deploying with EC2 & S3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        location: 'Computer Lab 2',
        time: '3:00 PM - 5:30 PM',
    },
    {
        month: 'MAY', day: '01',
        title: 'AWS Solutions Architect Study Group',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        location: 'Library Meeting Room',
        time: '1:00 PM - 3:00 PM',
    },
    {
        month: 'MAY', day: '20',
        title: 'Cloud Hackathon: Build & Deploy Challenge',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
        location: 'Innovation Center',
        time: '9:00 AM - 6:00 PM',
    },
];

export default function EventsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-enter">
            {/* Page Banner */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-amazon-navy dark:bg-black overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <div className="absolute top-[20%] right-[5%] w-64 h-64 rounded-full bg-amazon-orange/5 blur-[100px]" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-1 bg-amazon-orange rounded-full" />
                            <span className="text-sm font-bold uppercase tracking-wider text-amazon-orange">
                                Upcoming Events
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            {/* COMMENT: Replace with a real heading */}
                            What's Happening Next
                        </h1>
                        <p className="mt-4 text-lg text-white/60 max-w-2xl">
                            {/* COMMENT: Replace with a short invite to attend events */}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Events List */}
            <section className="py-20 md:py-28 bg-bg-primary dark:bg-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-5 md:gap-6">
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
                        <div className="mt-12 text-center">
                            <p className="text-sm text-text-secondary dark:text-text-dark-secondary">
                                {/* COMMENT: Replace with actual text or link to full calendar */}
                                More events coming soon. Stay tuned!
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
