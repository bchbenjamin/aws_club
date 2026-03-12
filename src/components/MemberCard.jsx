import ScrollReveal from './ScrollReveal';

/**
 * MemberCard -- displays a club member with photo, name, role, and bio.
 * Features hover scale + glow effect. Responsive for all screen sizes.
 *
 * Props:
 *  - name     : string
 *  - role     : string ("Head" | "Builder")
 *  - bio      : string
 *  - imageSrc : string (path to member photo)
 *  - featured : boolean (larger card for the Head)
 *  - delay    : number (scroll-reveal stagger index)
 */
export default function MemberCard({ name, role, bio, imageSrc, featured = false, delay = 0 }) {
    return (
        <ScrollReveal delay={delay}>
            <div
                className={`group relative bg-white dark:bg-bg-dark-secondary rounded-xl overflow-hidden border border-border-light dark:border-border-dark transition-all duration-300 hover:shadow-xl hover:shadow-amazon-orange/10 hover:-translate-y-1 ${featured ? 'md:col-span-2 lg:col-span-1' : ''
                    }`}
            >
                {/* Orange accent bar at top */}
                <div className="h-1 bg-gradient-to-r from-amazon-orange to-amazon-blue" />

                <div className={`p-6 md:p-8 flex flex-col items-center text-center ${featured ? 'py-10' : ''}`}>
                    {/* Member Photo */}
                    <div
                        className={`relative rounded-full overflow-hidden border-4 border-bg-secondary dark:border-border-dark mb-5 transition-transform duration-300 group-hover:scale-105 ${featured ? 'w-36 h-36 md:w-44 md:h-44' : 'w-28 h-28 md:w-32 md:h-32'
                            }`}
                    >
                        {/* COMMENT: Replace src with the actual path to this member's professional headshot photo */}
                        <img
                            src={imageSrc}
                            alt={`Photo of ${name}`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Member Name */}
                    <h3
                        className={`font-bold text-text-primary dark:text-text-dark-primary ${featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
                            }`}
                    >
                        {/* COMMENT: Replace with the actual member's full name */}
                        {name}
                    </h3>

                    {/* Role Badge */}
                    <span
                        className={`inline-block mt-2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${featured
                                ? 'bg-amazon-orange text-white'
                                : 'bg-amazon-blue/10 text-amazon-blue dark:bg-amazon-blue/20'
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
