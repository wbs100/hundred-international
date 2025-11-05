import { useState, useEffect } from 'react';
import logo from '/src/assets/logo.png';

const Navbar = ({ activeSection, menuOpen, setMenuOpen }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50); // Change background after 50px scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-black/90 backdrop-blur-md shadow-lg' 
                : 'bg-transparent max-md:backdrop-blur-md'
        }`}>
            <div className="container mx-auto px-6 py-1">
                <div className="flex justify-between items-center">
                    <a href="#home" className="flex items-center space-x-3">
                        <img 
                            src={logo} 
                            alt="Hundred International Logo" 
                            className="h-20 w-auto"
                        />
                        <span className="text-xl font-bold text-white"></span>
                    </a>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-2">
                        <a 
                            href="#home" 
                            className={`relative px-4 py-2 rounded-md transition-all duration-300 ${
                                activeSection === 'home' 
                                    ? 'bg-orange-500 text-white font-medium' 
                                    : 'text-white hover:bg-orange-500 hover:bg-opacity-50 hover:text-orange-300'
                            }`}
                        >
                            Home
                        </a>
                        <a 
                            href="#services" 
                            className={`relative px-4 py-2 rounded-md transition-all duration-300 ${
                                activeSection === 'services' 
                                    ? 'bg-orange-500 text-white font-medium' 
                                    : 'text-white hover:bg-orange-500 hover:bg-opacity-50 hover:text-orange-300'
                            }`}
                        >
                            Services
                        </a>
                        <a 
                            href="#about" 
                            className={`relative px-4 py-2 rounded-md transition-all duration-300 ${
                                activeSection === 'about' 
                                    ? 'bg-orange-500 text-white font-medium' 
                                    : 'text-white hover:bg-orange-500 hover:bg-opacity-50 hover:text-orange-300'
                            }`}
                        >
                            About
                        </a>
                        <a 
                            href="#contact" 
                            className={`relative px-4 py-2 rounded-md transition-all duration-300 ${
                                activeSection === 'contact' 
                                    ? 'bg-orange-500 text-white font-medium' 
                                    : 'text-white hover:bg-orange-500 hover:bg-opacity-50 hover:text-orange-300'
                            }`}
                        >
                            Contact
                        </a>
                    </div>
                    
                    {/* Mobile menu button */}
                    <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
                        <div className="w-6 h-6 text-white text-xl">
                            {menuOpen ? '✕' : '☰'}
                        </div>
                    </button>
                </div>
                
                {/* Mobile Navigation */}
                <div className={`transition-all duration-300 ${menuOpen ? 'max-h-96 py-4' : 'max-h-0'} overflow-hidden md:hidden`}>
                    <div className="flex flex-col space-y-2 mt-4 bg-black bg-opacity-50 rounded-lg p-4">
                        <a 
                            href="#home" 
                            className={`px-4 py-2 rounded-md transition-all duration-300 ${
                                activeSection === 'home' 
                                    ? 'bg-orange-500 text-white font-medium' 
                                    : 'text-white hover:bg-orange-500 hover:bg-opacity-50 hover:text-orange-300'
                            }`}
                        >
                            Home
                        </a>
                        <a 
                            href="#services" 
                            className={`px-4 py-2 rounded-md transition-all duration-300 ${
                                activeSection === 'services' 
                                    ? 'bg-orange-500 text-white font-medium' 
                                    : 'text-white hover:bg-orange-500 hover:bg-opacity-50 hover:text-orange-300'
                            }`}
                        >
                            Services
                        </a>
                        <a 
                            href="#about" 
                            className={`px-4 py-2 rounded-md transition-all duration-300 ${
                                activeSection === 'about' 
                                    ? 'bg-orange-500 text-white font-medium' 
                                    : 'text-white hover:bg-orange-500 hover:bg-opacity-50 hover:text-orange-300'
                            }`}
                        >
                            About
                        </a>
                        <a 
                            href="#contact" 
                            className={`px-4 py-2 rounded-md transition-all duration-300 ${
                                activeSection === 'contact' 
                                    ? 'bg-orange-500 text-white font-medium' 
                                    : 'text-white hover:bg-orange-500 hover:bg-opacity-50 hover:text-orange-300'
                            }`}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;