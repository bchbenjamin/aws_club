import ScrollReveal from './ScrollReveal';

/**
 * EventCard -- displays an upcoming event with date badge,
 * title, description, and location.
 * Features a timeline-style orange left border and hover lift.
 *
 * Props:
 *  - date        : string (e.g. "Mar 25")
 *  - month       : string (e.g. "MAR")
 *  - day         : string (e.g. "25")
 *  - title       : string
 *  - description : string
 *  - location    : string
 *  - time        : string (e.g. "2:00 PM - 4:00 PM")
 *  - delay       : number (scroll-reveal stagger index)
 */
export default function EventCard({ month, day, title, description, location, time, delay = 0 }) {
    return (
        <ScrollReveal delay={delay}>
            <div className="group flex gap-4 md:gap-6 bg-white dark:bg-bg-dark-secondary rounded-xl border border-border-light dark:border-border-dark p-5 md:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-amazon-orange/5 hover:-translate-y-1 border-l-4 border-l-amazon-orange">
                {/* Date Badge */}
                <div className="shrink-0 flex flex-col items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-lg bg-amazon-orange/10 dark:bg-amazon-orange/20 text-amazon-orange">
                    <span className="text-xs font-bold uppercase tracking-wider">
                        {/* COMMENT: Replace with the actual month abbreviation for this event */}
                        {month}
                    </span>
                    <span className="text-2xl md:text-3xl font-bold leading-tight">
                        {/* COMMENT: Replace with the actual day of the month for this event */}
                        {day}
                    </span>
                </div>

                {/* Event Details */}
                <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-bold text-text-primary dark:text-text-dark-primary group-hover:text-amazon-orange transition-colors duration-200 truncate">
                        {/* COMMENT: Replace with the actual event name/title */}
                        {title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary dark:text-text-dark-secondary line-clamp-2 leading-relaxed">
                        {/* COMMENT: Replace with a real 1-2 sentence description of what this event is about */}
                        {description}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-text-secondary dark:text-text-dark-secondary">
                        {/* Location */}
                        <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {/* COMMENT: Replace with the actual event venue/location */}
                            {location}
                        </span>
                        {/* Time */}
                        <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {/* COMMENT: Replace with the actual event time range */}
                            {time}
                        </span>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
}
