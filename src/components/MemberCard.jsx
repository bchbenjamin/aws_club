import ScrollReveal from '../components/ScrollReveal';

/**
 * MemberCard -- displays a club member with photo, name, role, and bio.
 * Enhanced hover animations: 3D tilt feel via translateY + elevated shadow + orange glow.
 */
export default function MemberCard({ name, role, bio, imageSrc, featured = false, delay = 0 }) {
    return (
        <ScrollReveal delay={delay}>
            <div
                className={`group relative bg-white dark:bg-bg-dark-card rounded-2xl overflow-hidden border border-border-light dark:border-border-dark card-hover ${featured ? 'md:col-span-2 lg:col-span-1' : ''
                    }`}
            >
                {/* Orange accent bar at top */}
                <div className="h-1 bg-gradient-to-r from-amazon-orange via-amazon-blue to-amazon-orange bg-[length:200%_100%] group-hover:animate-shimmer" />

                <div className={`p-6 md:p-8 flex flex-col items-center text-center ${featured ? 'py-10' : ''}`}>
                    {/* Member Photo */}
                    <div
                        className={`relative rounded-full overflow-hidden border-4 border-bg-secondary dark:border-border-dark mb-5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amazon-orange/20 ${featured ? 'w-36 h-36 md:w-44 md:h-44' : 'w-28 h-28 md:w-32 md:h-32'
                            }`}
                    >
                        {/* COMMENT: Replace src with the actual path to this member's professional headshot photo */}
                        <img
                            src={imageSrc}
                            alt={`Photo of ${name}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    {/* Member Name */}
                    <h3
                        className={`font-bold text-text-primary dark:text-text-dark-primary transition-colors duration-300 group-hover:text-amazon-orange ${featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
                            }`}
                    >
                        {/* COMMENT: Replace with the actual member's full name */}
                        {name}
                    </h3>

                    {/* Role Badge */}
                    <span
                        className={`inline-block mt-3 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${featured
                                ? 'bg-amazon-orange text-white group-hover:shadow-md group-hover:shadow-amazon-orange/30'
                                : 'bg-amazon-blue/10 text-amazon-blue dark:bg-amazon-blue/20 group-hover:bg-amazon-blue/20 dark:group-hover:bg-amazon-blue/30'
                            }`}
                    >
                        {/* COMMENT: Replace with the actual role title for this member */}
                        {role}
                    </span>

                    {/* Bio */}
                    <p className="mt-4 text-sm text-text-secondary dark:text-text-dark-secondary leading-relaxed">
                        {/* COMMENT: Replace with a short 2-3 sentence bio about this member -- their year, major, and interests */}
                        {bio}
                    </p>
                </div>
            </div>
        </ScrollReveal>
    );
}
