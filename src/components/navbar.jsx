const Navbar = ({ activeSection, menuOpen, setMenuOpen }) => {
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="fixed w-full bg-white shadow-md z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="#home" className="flex items-center space-x-2">
                        <div className="text-blue-800 text-2xl">🌍</div>
                        <span className="text-xl font-bold text-blue-800">Hundred International</span>
                    </a>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <a 
                            href="#home" 
                            className={`relative transition-all duration-300 ${activeSection === 'home' ? 'text-blue-800 font-medium' : 'text-gray-600 hover:text-blue-800'}`}
                        >
                            Home
                            {activeSection === 'home' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800"></div>}
                        </a>
                        <a 
                            href="#services" 
                            className={`relative transition-all duration-300 ${activeSection === 'services' ? 'text-blue-800 font-medium' : 'text-gray-600 hover:text-blue-800'}`}
                        >
                            Services
                            {activeSection === 'services' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800"></div>}
                        </a>
                        <a 
                            href="#about" 
                            className={`relative transition-all duration-300 ${activeSection === 'about' ? 'text-blue-800 font-medium' : 'text-gray-600 hover:text-blue-800'}`}
                        >
                            About
                            {activeSection === 'about' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800"></div>}
                        </a>
                        <a 
                            href="#contact" 
                            className={`relative transition-all duration-300 ${activeSection === 'contact' ? 'text-blue-800 font-medium' : 'text-gray-600 hover:text-blue-800'}`}
                        >
                            Contact
                            {activeSection === 'contact' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800"></div>}
                        </a>
                    </div>
                    
                    {/* Mobile menu button */}
                    <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
                        <div className="w-6 h-6 text-gray-700 text-xl">
                            {menuOpen ? '✕' : '☰'}
                        </div>
                    </button>
                </div>
                
                {/* Mobile Navigation */}
                <div className={`transition-all duration-300 ${menuOpen ? 'max-h-96 py-4' : 'max-h-0'} overflow-hidden md:hidden`}>
                    <div className="flex flex-col space-y-3 mt-4">
                        <a href="#home" className={activeSection === 'home' ? 'text-blue-800 font-medium' : 'text-gray-600'}>Home</a>
                        <a href="#services" className={activeSection === 'services' ? 'text-blue-800 font-medium' : 'text-gray-600'}>Services</a>
                        <a href="#about" className={activeSection === 'about' ? 'text-blue-800 font-medium' : 'text-gray-600'}>About</a>
                        <a href="#contact" className={activeSection === 'contact' ? 'text-blue-800 font-medium' : 'text-gray-600'}>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;