/**
 * Footer -- multi-column footer matching the clean editorial style
 * of aboutamazon.com with social links and copyright.
 */
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-amazon-navy dark:bg-amazon-dark-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Column 1 -- Club Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-amazon-orange">
                            {/* COMMENT: Replace with official club name */}
                            AWS Cloud Club
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            {/* COMMENT: Replace with a short 1-2 sentence description of the club and its college/university affiliation */}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    {/* Column 2 -- Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#about"
                                    className="text-sm text-gray-300 hover:text-amazon-orange transition-colors duration-200"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#members"
                                    className="text-sm text-gray-300 hover:text-amazon-orange transition-colors duration-200"
                                >
                                    Our Team
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#events"
                                    className="text-sm text-gray-300 hover:text-amazon-orange transition-colors duration-200"
                                >
                                    Events
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://tally.so/r/9q1QD5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-300 hover:text-amazon-orange transition-colors duration-200"
                                >
                                    Join the Club
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 -- Resources */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {/* COMMENT: Replace these placeholder links with actual resource URLs relevant to the club (AWS docs, learning paths, etc.) */}
                            <li>
                                <a
                                    href="https://aws.amazon.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-300 hover:text-amazon-orange transition-colors duration-200"
                                >
                                    AWS Console
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://aws.amazon.com/training/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-300 hover:text-amazon-orange transition-colors duration-200"
                                >
                                    AWS Training
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://aws.amazon.com/developer/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-300 hover:text-amazon-orange transition-colors duration-200"
                                >
                                    Developer Center
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 -- Connect */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Connect</h3>
                        <div className="flex gap-4">
                            {/* COMMENT: Replace href values with the club's actual social media profile URLs */}

                            {/* LinkedIn Icon */}
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amazon-orange transition-colors duration-200"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>

                            {/* Instagram Icon */}
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amazon-orange transition-colors duration-200"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>

                            {/* Twitter / X Icon */}
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amazon-orange transition-colors duration-200"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>

                        {/* COMMENT: Replace with club's actual contact email */}
                        <p className="mt-4 text-sm text-gray-300">
                            contact@awscloudclub.edu
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">
                        {/* COMMENT: Replace with actual college name and club name */}
                        {currentYear} AWS Cloud Club. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-400">
                        {/* COMMENT: Replace with the actual college/university name */}
                        A student-led community at [College Name]
                    </p>
                </div>
            </div>
        </footer>
    );
}
