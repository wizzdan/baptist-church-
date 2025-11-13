import React from 'react';

type SocialIconProps = {
    href: string;
    children: React.ReactNode;
};

// Fix: Explicitly type SocialIcon as a React.FC to help TypeScript correctly infer the `children` prop.
const SocialIcon: React.FC<SocialIconProps> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-light-neutral/70 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-deep-black-gray text-light-neutral/90 py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* About Section */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-white mb-4">Limuru Town Baptist Church</h3>
                        <p className="text-sm leading-relaxed">A community of believers dedicated to knowing God and making Him known. Join us as we grow in faith, love, and service.</p>
                        <div className="flex space-x-4 mt-6">
                            <SocialIcon href="#">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z" /></svg>
                            </SocialIcon>
                            <SocialIcon href="#">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg>
                            </SocialIcon>
                            <SocialIcon href="#">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                            </SocialIcon>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#mission" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Service Times</a></li>
                            <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
                            <li><a href="#ministries" className="hover:text-white transition-colors">Ministries</a></li>
                            <li><a href="#give" className="hover:text-white transition-colors">Give</a></li>
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start"><span className="mt-1 mr-2 w-4 h-4 text-warm-brown-gray">&#9679;</span> 123 Church St, Limuru Town, Kenya</li>
                            <li className="flex items-start"><span className="mt-1 mr-2 w-4 h-4 text-warm-brown-gray">&#9679;</span> (254) 700-123-456</li>
                            <li className="flex items-start"><span className="mt-1 mr-2 w-4 h-4 text-warm-brown-gray">&#9679;</span> contact@limurubaptist.org</li>
                        </ul>
                    </div>
                    {/* Newsletter */}
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-4">Stay Connected</h4>
                        <p className="text-sm mb-4">Subscribe to our weekly newsletter for updates, encouragement, and event reminders.</p>
                        <form className="flex">
                            <input type="email" placeholder="Your Email" className="w-full p-2 bg-white/20 rounded-l-md border border-transparent focus:bg-white focus:text-deep-blue-gray focus:outline-none placeholder:text-light-neutral/70" />
                            <button type="submit" className="bg-warm-brown-gray text-white px-4 rounded-r-md hover:bg-deep-blue-gray transition-colors">Go</button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 text-center text-sm text-light-neutral/60">
                    <p>&copy; {new Date().getFullYear()} Limuru Town Baptist Church. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;