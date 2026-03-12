import { Link } from 'react-router-dom';

/**
 * Footer -- multi-column footer with social links,
 * quick navigation, and resources.
 * X/Twitter replaced with Meetup button per user request.
 * Added official Contact Email.
 */
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-amazon-navy dark:bg-black text-white relative border-t border-border-light/10">
            {/* Subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-amazon-blue/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Column 1 -- Club Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-gradient-purple-orange inline-block">
                            {/* COMMENT: Replace with official club name */}
                            AWS Cloud Club Atria
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed mb-6">
                            {/* COMMENT: Replace with a short 1-2 sentence description of the club and its college/university affiliation */}
                            AWS Cloud Club Atria is a student-led technical community focused on learning, building, and innovating with cloud technologies. We organize workshops, hands-on labs, hackathons, and collaborative sessions to help students explore AWS and real-world cloud development.
                        </p>
                        {/* Contact Email */}
                        <a
                            href="mailto:awscloudclubatria@gmail.com"
                            className="inline-flex items-center text-sm font-medium text-amazon-orange hover:text-amazon-orange-hover transition-colors duration-300"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            awscloudclubatria@gmail.com
                        </a>
                    </div>

                    {/* Column 2 -- Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/about"
                                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/team"
                                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                >
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/events"
                                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                >
                                    Events
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://www.meetup.com/aws-cloud-club-at-atria-inst-of-tech/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-400 hover:text-amazon-orange hover:translate-x-1 inline-block transition-all duration-300 font-bold"
                                >
                                    Join the Club
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 -- Resources */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
                        <ul className="space-y-3">
                            {/* COMMENT: Replace these placeholder links with actual resource URLs relevant to the club */}
                            <li>
                                <a
                                    href="https://console.aws.amazon.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                >
                                    AWS Console
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://aws.amazon.com/training/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                >
                                    AWS Training
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://aws.amazon.com/developer/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                >
                                    AWS Developer Center
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://docs.aws.amazon.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                >
                                    AWS Documentation
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 -- Connect */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white">Connect</h3>
                        <div className="flex gap-3">
                            {/* COMMENT: Replace href values with the club's actual social media profile URLs */}

                            {/* LinkedIn Icon */}
                            <a
                                href="https://www.linkedin.com/company/aws-cloud-club-at-atria-inst-of-tech/posts/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amazon-blue hover:scale-110 hover:border-transparent hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>

                            {/* Instagram Icon */}
                            <a
                                href="https://www.instagram.com/awscloudclub.atria/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amazon-orange hover:scale-110 hover:border-transparent hover:shadow-[0_0_15px_rgba(255,153,0,0.5)] transition-all duration-300"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>

                            {/* Meetup Button */}
                            <a
                                href="https://www.meetup.com/aws-cloud-club-at-atria-inst-of-tech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Meetup"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amazon-orange hover:scale-110 hover:border-transparent hover:shadow-[0_0_15px_rgba(255,153,0,0.5)] transition-all duration-300"
                            >
                                {/* COMMENT: Replace href with the club's actual Meetup group URL */}
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.71 12.21c-.18-.18-.43-.29-.71-.29h-1c0-.28-.11-.53-.29-.71s-.43-.29-.71-.29h-1v-2c0-.28-.11-.53-.29-.71s-.43-.29-.71-.29-.53.11-.71.29-.29.43-.29.71v5c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.28-.11-.53-.29-.71s-.43-.29-.71-.29-.53.11-.71.29-.29.43-.29.71v3c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.28-.11-.53-.29-.71C6.53 11.11 6.28 11 6 11s-.53.11-.71.29-.29.43-.29.71v2c0 .55-.45 1-1 1s-1-.45-1-1v-1c0-.28-.11-.53-.29-.71S2.28 12 2 12s-.53.11-.71.29-.29.43-.29.71v1c0 1.66 1.34 3 3 3 .95 0 1.78-.45 2.33-1.14C6.82 15.52 7.36 16 8 16c.95 0 1.78-.45 2.33-1.14.49.66 1.24 1.14 2.17 1.14.95 0 1.78-.45 2.33-1.14.49.66 1.24 1.14 2.17 1.14 1.66 0 3-1.34 3-3v-1c0-.28-.11-.53-.29-.71zM12 2C6.48 2 2 6.48 2 12h2c0-4.41 3.59-8 8-8s8 3.59 8 8h2c0-5.52-4.48-10-10-10z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500 font-medium">
                        {/* COMMENT: Replace with actual college name and club name */}
                        &copy; {currentYear} AWS Cloud Club. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-500 font-medium tracking-wide">
                        {/* COMMENT: Replace with the actual college/university name */}
                        A student-led community at Atria Institute of Technology
                    </p>
                </div>
            </div>
        </footer>
    );
}
