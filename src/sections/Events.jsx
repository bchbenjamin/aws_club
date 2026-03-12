import EventCard from '../components/EventCard';
import ScrollReveal from '../components/ScrollReveal';

/**
 * Events -- displays upcoming club events in a list/grid.
 * Each event has a date badge, title, description, location, and time.
 */

const UPCOMING_EVENTS = [
    {
        /* COMMENT: Replace with the actual month abbreviation for event 1 */
        month: 'APR',
        /* COMMENT: Replace with the actual day for event 1 */
        day: '05',
        /* COMMENT: Replace with the actual event title */
        title: 'Introduction to AWS Cloud Computing',
        /* COMMENT: Replace with a real 1-2 sentence description of this event */
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        /* COMMENT: Replace with the actual event venue, e.g. "Room 301, Engineering Block" */
        location: 'Seminar Hall A',
        /* COMMENT: Replace with the actual event time */
        time: '2:00 PM - 4:00 PM',
    },
    {
        month: 'APR',
        day: '15',
        /* COMMENT: Replace with the actual event title */
        title: 'Hands-on Lab: Deploying with EC2 & S3',
        /* COMMENT: Replace with a real description of this workshop event */
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        /* COMMENT: Replace with the actual venue */
        location: 'Computer Lab 2',
        /* COMMENT: Replace with the actual time */
        time: '3:00 PM - 5:30 PM',
    },
    {
        month: 'MAY',
        day: '01',
        /* COMMENT: Replace with the actual event title */
        title: 'AWS Solutions Architect Study Group',
        /* COMMENT: Replace with a real description of this study group session */
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        /* COMMENT: Replace with the actual venue */
        location: 'Library Meeting Room',
        /* COMMENT: Replace with the actual time */
        time: '1:00 PM - 3:00 PM',
    },
    {
        month: 'MAY',
        day: '20',
        /* COMMENT: Replace with the actual event title */
        title: 'Cloud Hackathon: Build & Deploy Challenge',
        /* COMMENT: Replace with a real description of this hackathon event */
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
        /* COMMENT: Replace with the actual venue */
        location: 'Innovation Center',
        /* COMMENT: Replace with the actual time */
        time: '9:00 AM - 6:00 PM',
    },
];

export default function Events() {
    return (
        <section
            id="events"
            className="py-20 md:py-28 bg-bg-primary dark:bg-bg-dark"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-1 bg-amazon-orange rounded-full" />
                            <span className="text-sm font-bold uppercase tracking-wider text-amazon-orange">
                                Upcoming Events
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary dark:text-text-dark-primary leading-tight">
                            {/* COMMENT: Replace with a real heading like "What's Coming Up" or "Join Our Next Session" */}
                            What's Happening Next
                        </h2>
                        <p className="mt-4 text-lg text-text-secondary dark:text-text-dark-secondary">
                            {/* COMMENT: Replace with a short invite to attend events */}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Events List */}
                <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
                    {UPCOMING_EVENTS.map((event, index) => (
                        <EventCard
                            key={`${event.month}-${event.day}-${event.title}`}
                            month={event.month}
                            day={event.day}
                            title={event.title}
                            description={event.description}
                            location={event.location}
                            time={event.time}
                            delay={index + 1}
                        />
                    ))}
                </div>

                {/* CTA to See All */}
                <ScrollReveal>
                    <div className="mt-10 text-center">
                        <p className="text-sm text-text-secondary dark:text-text-dark-secondary">
                            {/* COMMENT: Replace with actual text, or link to a full events calendar page if one exists */}
                            More events coming soon. Stay tuned!
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
