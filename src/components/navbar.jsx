"use client";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

const Navbar = ({ activeSection, menuOpen, setMenuOpen }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [location] = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Function to get active section based on current route
    const getActiveSection = () => {
        // Check for hash-based navigation first (for same-page sections)
        if (window.location.hash) {
            return window.location.hash.substring(1); // Remove the # symbol
        }

        // Check for route-based navigation
        if (location === '/') return 'home';
        if (location.startsWith('/services')) return 'services';
        if (location.startsWith('/academy')) return 'academy';
        if (location.startsWith('/advertisement')) return 'advertisement';
        if (location.startsWith('/about')) return 'about';
        if (location.startsWith('/team')) return 'team';
        if (location.startsWith('/contact')) return 'contact';
        if (location.startsWith('/projects')) return 'projects';

        return activeSection || 'home';
    };

    const currentActiveSection = getActiveSection();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50); // Change background after 50px scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-black/90 backdrop-blur-md shadow-lg'
                : 'bg-transparent max-md:backdrop-blur-md'
            }`}>
            <div className="container mx-auto px-6 py-1">
                <div className="flex justify-between items-center">
                    <Link href="#home" className="flex items-center space-x-3">
                        <img
                            src="/logo.png"
                            alt="Hundred International Logo"
                            className="h-20 w-auto"
                        />
                        <span className="text-xl font-bold text-white"></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-2">
                        <Link
                            href="/"
                            className={`relative px-4 py-2 rounded-md transition-all duration-300 font-title ${currentActiveSection === 'home'
                                    ? 'bg-orange-500 text-white font-medium'
                                    : 'text-white hover:bg-orange-500 hover:bg-opacity-50 hover:text-orange-300'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/academy"
                            className={`relative px-4 py-2 rounded-md transition-all duration-300 font-title ${currentActiveSection === 'academy'
                                    ? 'bg-orange-500 text-white font-medium'
                                    : 'text-white hover:bg-orange-500 hover:bg-opacity-50 hover:text-orange-300'
                                }`}
                        >
                            Academy
                        </Link>
                        <Link
                            href="/advertisement"
                            className={`relative px-4 py-2 rounded-md transition-all duration-300 font-title ${currentActiveSection === 'advertisement'
                                    ? 'bg-orange-500 text-white font-medium'
                                    : 'text-white hover:bg-orange-500 hover:bg-opacity-50 hover:text-orange-300'
                                }`}
                        >
                            Advertisement
                        </Link>
                        <Link
                            href="/projects"
                            className={`relative px-4 py-2 rounded-md transition-all duration-300 font-title ${currentActiveSection === 'projects'
                                    ? 'bg-orange-500 text-white font-medium'
                                    : 'text-white hover:bg-orange-500 hover:bg-opacity-50 hover:text-orange-300'
                                }`}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/services"
                            className={`relative px-4 py-2 rounded-md transition-all duration-300 font-title ${currentActiveSection === 'services'
                                    ? 'bg-orange-500 text-white font-medium'
                                    : 'text-white hover:bg-orange-500 hover:bg-opacity-50 hover:text-orange-300'
                                }`}
                        >
                            Web/App/Software
                        </Link>
                        <Link
                            href="/about"
                            className={`relative px-4 py-2 rounded-md transition-all duration-300 font-title ${currentActiveSection === 'about'
                                    ? 'bg-orange-500 text-white font-medium'
                                    : 'text-white hover:bg-orange-500 hover:bg-opacity-50 hover:text-orange-300'
                                }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/team"
                            className={`relative px-4 py-2 rounded-md transition-all duration-300 font-title ${currentActiveSection === 'team'
                                    ? 'bg-orange-500 text-white font-medium'
                                    : 'text-white hover:bg-orange-500 hover:bg-opacity-50 hover:text-orange-300'
                                }`}
                        >
                            Team
                        </Link>
                        <Link
                            href="/contact"
                            className={`relative px-4 py-2 rounded-md transition-all duration-300 font-title ${currentActiveSection === 'contact'
                                    ? 'bg-orange-500 text-white font-medium'
                                    : 'text-white hover:bg-orange-500 hover:bg-opacity-50 hover:text-orange-300'
                                }`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button className="md:hidden focus:outline-none z-40" onClick={toggleMenu}>
                        <div className="w-6 h-6 text-white text-xl">
                            {menuOpen ? '✕' : '☰'}
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation Overlay */}
                <div className={`fixed max-md:h-dvh inset-0 z-40 md:hidden transition-opacity bg-black duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}>
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black"
                        onClick={() => setMenuOpen(false)}
                    ></div>

                    {/* Off-canvas Menu */}
                    <div className={`absolute top-0 left-0 h-full w-full bg-black transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}>
                        {/* Menu Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-black">
                            <div className="flex items-center space-x-3">
                                <img
                                    src="/logo.png"
                                    alt="Hundred International Logo"
                                    className="h-12 w-auto"
                                />
                            </div>
                            <button
                                className="text-white text-2xl focus:outline-none hover:text-orange-400 transition-colors duration-200"
                                onClick={() => setMenuOpen(false)}
                            >
                                ✕
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex flex-col p-6 space-y-4">
                            <Link
                                href="/"
                                className={`block px-6 py-4 text-lg rounded-lg transition-all duration-300 font-title ${currentActiveSection === 'home'
                                        ? 'bg-orange-500 text-white font-medium transform '
                                        : 'text-white hover:bg-orange-500/20 hover:text-orange-400 hover:transform hover:'
                                    }`}
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/services"
                                className={`block px-6 py-4 text-lg rounded-lg transition-all duration-300 font-title ${currentActiveSection === 'services'
                                        ? 'bg-orange-500 text-white font-medium transform '
                                        : 'text-white hover:bg-orange-500/20 hover:text-orange-400 hover:transform hover:'
                                    }`}
                                onClick={() => setMenuOpen(false)}
                            >
                                Web/App/Software
                            </Link>
                            <Link
                                href="/academy"
                                className={`block px-6 py-4 text-lg rounded-lg transition-all duration-300 font-title ${currentActiveSection === 'academy'
                                        ? 'bg-orange-500 text-white font-medium transform '
                                        : 'text-white hover:bg-orange-500/20 hover:text-orange-400 hover:transform hover:'
                                    }`}
                                onClick={() => setMenuOpen(false)}
                            >
                                Academy
                            </Link>
                            <Link
                                href="/advertisement"
                                className={`block px-6 py-4 text-lg rounded-lg transition-all duration-300 font-title ${currentActiveSection === 'advertisement'
                                        ? 'bg-orange-500 text-white font-medium transform '
                                        : 'text-white hover:bg-orange-500/20 hover:text-orange-400 hover:transform hover:'
                                    }`}
                                onClick={() => setMenuOpen(false)}
                            >
                                Advertisement
                            </Link>
                            <Link
                                href="/about"
                                className={`block px-6 py-4 text-lg rounded-lg transition-all duration-300 font-title ${currentActiveSection === 'about'
                                        ? 'bg-orange-500 text-white font-medium transform '
                                        : 'text-white hover:bg-orange-500/20 hover:text-orange-400 hover:transform hover:'
                                    }`}
                                onClick={() => setMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/team"
                                className={`block px-6 py-4 text-lg rounded-lg transition-all duration-300 font-title ${currentActiveSection === 'team'
                                        ? 'bg-orange-500 text-white font-medium transform '
                                        : 'text-white hover:bg-orange-500/20 hover:text-orange-400 hover:transform hover:'
                                    }`}
                                onClick={() => setMenuOpen(false)}
                            >
                                Team
                            </Link>
                            <Link
                                href="/contact"
                                className={`block px-6 py-4 text-lg rounded-lg transition-all duration-300 font-title ${currentActiveSection === 'contact'
                                        ? 'bg-orange-500 text-white font-medium transform '
                                        : 'text-white hover:bg-orange-500/20 hover:text-orange-400 hover:transform hover:'
                                    }`}
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>

                        {/* Menu Footer */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
                            <div className="text-center">
                                <p className="text-gray-400 text-sm font-paragraph">We Sell <span className="text-orange-400">Creativity</span></p>
                                <div className="flex justify-center space-x-4 mt-4">
                                    <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;