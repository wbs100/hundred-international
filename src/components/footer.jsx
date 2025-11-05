const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <a href="#home" className="flex items-center space-x-2 mb-6">
                            <span className="text-blue-400 text-2xl">🌍</span>
                            <span className="text-xl font-bold text-white">Hundred International</span>
                        </a>
                        <p className="text-gray-400 mb-4">Premium international services for businesses and individuals worldwide.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300 text-xl">
                                🐦
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300 text-xl">
                                💼
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300 text-xl">
                                📘
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300 text-xl">
                                📷
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Global Logistics</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Business Consulting</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Financial Services</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">HR Solutions</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Relocation Services</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Press</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Partners</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Cookie Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">GDPR Compliance</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 mt-12 pt-5 flex flex-col md:flex-row justify-center items-center">
                    <p className="text-gray-400 text-center mb-4 md:mb-0">2025 © All Rights Reserved | 100 International | Designed & Developed by Silicon Radon Networks (Pvt) Ltd.</p>
                    {/* <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">English</a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Español</a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Français</a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">中文</a>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;