import ScrollReveal from '../components/ScrollReveal';

/**
 * EventCard -- displays an upcoming event with date badge,
 * Extreme hover: card lifts, rotates slightly, orange border thickens, massive glow.
 */
export default function EventCard({ month, day, title, description, location, time, delay = 0 }) {
    return (
        <ScrollReveal delay={delay}>
            <div className="group flex flex-col md:flex-row gap-5 md:gap-8 bg-white dark:bg-bg-dark-card rounded-3xl border border-border-light dark:border-white/10 p-6 md:p-8 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-2 hover:-rotate-1 hover:shadow-[0_20px_50px_rgba(255,153,0,0.2)] dark:hover:shadow-[0_20px_50px_rgba(255,153,0,0.25)] relative overflow-hidden">

                {/* Neon Orange accent left border effect */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 md:w-2 bg-amazon-orange scale-y-75 opacity-50 transition-all duration-500 group-hover:scale-y-100 group-hover:opacity-100 group-hover:shadow-[0_0_20px_rgba(255,153,0,0.8)]" />

                {/* Date Badge */}
                <div className="shrink-0 flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-amazon-orange/10 dark:bg-amazon-orange/15 text-amazon-orange transition-all duration-500 group-hover:bg-amazon-orange group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-amazon-orange/0 group-hover:shadow-amazon-orange/40">
                    <span className="text-sm font-black uppercase tracking-widest">
                        {month}
                    </span>
                    <span className="text-3xl md:text-4xl font-black leading-none mt-1">
                        {day}
                    </span>
                </div>

                {/* Event Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-black text-text-primary dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amazon-orange group-hover:to-amazon-blue transition-all duration-300">
                        {title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-text-secondary dark:text-text-dark-secondary line-clamp-2 md:line-clamp-none leading-relaxed">
                        {description}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-6 text-xs md:text-sm font-bold text-text-secondary dark:text-text-dark-secondary">
                        {/* Location */}
                        <span className="flex items-center gap-2 group-hover:text-amazon-orange transition-colors duration-300">
                            <div className="p-2 rounded-full bg-black/5 dark:bg-white/5 group-hover:bg-amazon-orange/20">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            {location}
                        </span>
                        {/* Time */}
                        <span className="flex items-center gap-2 group-hover:text-amazon-blue transition-colors duration-300">
                            <div className="p-2 rounded-full bg-black/5 dark:bg-white/5 group-hover:bg-amazon-blue/20">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            {time}
                        </span>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
}
