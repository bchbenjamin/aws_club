import MemberCard from '../components/MemberCard';
import ScrollReveal from '../components/ScrollReveal';

/**
 * Members -- displays the club leadership: 1 Head and 2 Builders.
 * The Head gets a larger featured card; Builders are in a grid.
 * All cards include <img> tags for photos.
 */

const MEMBERS = [
    {
        /* COMMENT: Replace name with the actual Club Head's full name */
        name: 'Jane Doe',
        /* COMMENT: Replace role with the official title, e.g. "Club Head" or "President" */
        role: 'Club Head',
        /* COMMENT: Replace bio with a 2-3 sentence real biography about this person --
           their year of study, major, AWS certifications, and interests */
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        /* COMMENT: Replace with the file path to the Club Head's professional headshot.
           Save the photo as /public/images/members/head.webp */
        imageSrc: '/images/members/head.webp',
        featured: true,
    },
    {
        /* COMMENT: Replace name with the first Builder's full name */
        name: 'John Smith',
        /* COMMENT: Replace role with the official title, e.g. "Builder" or "Core Member" */
        role: 'Builder',
        /* COMMENT: Replace bio with a 2-3 sentence real biography about this person */
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
        /* COMMENT: Replace with the file path to the first Builder's headshot.
           Save the photo as /public/images/members/builder-1.webp */
        imageSrc: '/images/members/builder-1.webp',
        featured: false,
    },
    {
        /* COMMENT: Replace name with the second Builder's full name */
        name: 'Alice Johnson',
        /* COMMENT: Replace role with the official title, e.g. "Builder" or "Core Member" */
        role: 'Builder',
        /* COMMENT: Replace bio with a 2-3 sentence real biography about this person */
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
        /* COMMENT: Replace with the file path to the second Builder's headshot.
           Save the photo as /public/images/members/builder-2.webp */
        imageSrc: '/images/members/builder-2.webp',
        featured: false,
    },
];

export default function Members() {
    return (
        <section
            id="members"
            className="py-20 md:py-28 bg-bg-secondary dark:bg-bg-dark-secondary"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-1 bg-amazon-orange rounded-full" />
                            <span className="text-sm font-bold uppercase tracking-wider text-amazon-orange">
                                Our Team
                            </span>
                            <div className="w-12 h-1 bg-amazon-orange rounded-full" />
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary dark:text-text-dark-primary leading-tight">
                            {/* COMMENT: Replace with a real heading like "Meet the People Behind the Club" */}
                            Meet Our Team
                        </h2>
                        <p className="mt-4 text-lg text-text-secondary dark:text-text-dark-secondary">
                            {/* COMMENT: Replace with a short description about the leadership team */}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Members Grid */}
                <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {MEMBERS.map((member, index) => (
                        <MemberCard
                            key={member.name}
                            name={member.name}
                            role={member.role}
                            bio={member.bio}
                            imageSrc={member.imageSrc}
                            featured={member.featured}
                            delay={index + 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
