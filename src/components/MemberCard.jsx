import ScrollReveal from '../components/ScrollReveal';

/**
 * MemberCard -- displays a club member with photo, name, role, and bio.
 * EXTREME Hover animations: 3D tilt feel via translateY, rotation, intense glowing box-shadow.
 */
export default function MemberCard({ name, role, bio, imageSrc, featured = false, delay = 0 }) {
    return (
        <ScrollReveal delay={delay}>
            <div
                className={`group relative bg-white dark:bg-bg-dark-card rounded-3xl overflow-hidden border border-border-light dark:border-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-3 hover:rotate-1 hover:shadow-[0_20px_60px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_20px_60px_rgba(139,92,246,0.25)] ${featured ? 'md:col-span-2 lg:col-span-1' : ''
                    }`}
            >
                {/* Neon Orange accent bar at top */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amazon-blue via-amazon-orange to-amazon-blue bg-[length:200%_100%] group-hover:animate-shimmer" />

                <div className={`p-8 flex flex-col items-center text-center ${featured ? 'py-12' : ''}`}>
                    {/* Member Photo */}
                    <div
                        className={`relative rounded-full overflow-hidden border-4 border-bg-secondary dark:border-white/10 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,153,0,0.3)] ${featured ? 'w-40 h-40 md:w-52 md:h-52' : 'w-32 h-32 md:w-40 md:h-40'
                            }`}
                    >
                        {/* COMMENT: Replace src with the actual path to this member's professional headshot photo */}
                        <img
                            src={imageSrc}
                            alt={`Photo of ${name}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Glowing inner shadow on hover */}
                        <div className="absolute inset-0 bg-amazon-orange/0 group-hover:bg-amazon-orange/10 transition-colors duration-500 rounded-full mix-blend-overlay" />
                    </div>

                    {/* Member Name */}
                    <h3
                        className={`font-black text-text-primary dark:text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amazon-blue group-hover:to-amazon-orange ${featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                            }`}
                    >
                        {name}
                    </h3>

                    {/* Role Badge */}
                    <span
                        className={`inline-block mt-4 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${featured
                                ? 'bg-amazon-orange text-white group-hover:shadow-[0_0_20px_rgba(255,153,0,0.4)]'
                                : 'bg-amazon-blue/10 text-amazon-blue dark:bg-amazon-blue/20 group-hover:bg-amazon-blue group-hover:text-white group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                            }`}
                    >
                        {role}
                    </span>

                    {/* Bio */}
                    <p className="mt-5 text-sm md:text-base text-text-secondary dark:text-text-dark-secondary leading-relaxed max-w-sm mx-auto">
                        {bio}
                    </p>
                </div>
            </div>
        </ScrollReveal>
    );
}
