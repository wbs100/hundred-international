
import { useState } from 'react';

const WebDevelopment = () => {
    return (
        <section className="py-20 bg-white dark:bg-black text-black dark:text-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 scroll-animate">
                    <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4 font-title">
                        Web Development & Software Solutions
                    </h2>
                    <p className="dark:text-gray-300 text-black text-lg max-w-2xl mx-auto font-paragraph">
                        Transform your innovative ideas into powerful digital solutions
                    </p>
                </div>

                {/* Main Content Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    
                    {/* Professional Development Services Card */}
                    <div className="dark:bg-gradient-to-br from-orange-900/20 to-black/50 p-8 rounded-2xl border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 scroll-animate delay-100">
                        {/* Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2Z"/>
                                </svg>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-orange-400 mb-6 text-center font-title">
                            Professional Development Services
                        </h3>

                        {/* Description */}
                        <p className="dark:text-gray-300 text-black text-center mb-8 font-paragraph">
                            We specialize in creating cutting-edge web applications, mobile apps, and custom software solutions.
                        </p>

                        {/* Services Lists */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h4 className="text-orange-400 font-semibold mb-3 font-title">OUR EXPERTISE:</h4>
                                <ul className="space-y-2 text-sm dark:text-gray-300 text-black font-paragraph">
                                    <li className="flex items-center">
                                        <span className="text-orange-400 mr-2">✓</span>
                                        Web Applications
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-orange-400 mr-2">✓</span>
                                        Mobile Apps
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-orange-400 mr-2">✓</span>
                                        E-commerce Solutions
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-orange-400 mr-2">✓</span>
                                        + Much more...
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="text-orange-400 font-semibold mb-3 font-title">TECHNOLOGIES:</h4>
                                <ul className="space-y-2 text-sm dark:text-gray-300 text-black font-paragraph">
                                    <li className="flex items-center">
                                        <span className="text-orange-400 mr-2">✓</span>
                                        Modern Frameworks
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-orange-400 mr-2">✓</span>
                                        Cloud Integration
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-orange-400 mr-2">✓</span>
                                        API Development
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-orange-400 mr-2">✓</span>
                                        + View all services...
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="text-center">
                            <button className="bg-transparent border-2 border-orange-500 text-orange-400 px-6 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 font-paragraph">
                                View More Details
                            </button>
                        </div>
                    </div>

                    {/* Ready to Build Card */}
                    <div className="dark:bg-gradient-to-br from-orange-900/20 to-black/50 p-8 rounded-2xl border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 scroll-animate delay-200">
                        
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-orange-400 mb-6 font-title">
                            Ready to Build Something Amazing?
                        </h3>

                        {/* Description */}
                        <p className="dark:text-gray-300 text-black mb-8 font-paragraph">
                            Explore our comprehensive development services and discover how we can help turn your ideas into reality.
                        </p>

                        {/* Call to Action Button */}
                        <div className="mb-8">
                            <button className="w-full bg-orange-500 text-white px-6 py-4 rounded-lg font-medium hover:bg-orange-600 transition-all duration-300 font-paragraph">
                                → Visit Our Development Page
                            </button>
                        </div>

                        {/* Contact Options */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center p-4 bg-black/30 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                                <div className="text-orange-400 text-2xl mb-2">📱</div>
                                <span className="text-xs dark:text-gray-300 text-black font-paragraph">Portfolio</span>
                            </div>
                            <div className="text-center p-4 bg-black/30 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                                <div className="text-orange-400 text-2xl mb-2">💬</div>
                                <span className="text-xs dark:text-gray-300 text-black font-paragraph">Get Quote</span>
                            </div>
                            <div className="text-center p-4 bg-black/30 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                                <div className="text-orange-400 text-2xl mb-2">📞</div>
                                <span className="text-xs dark:text-gray-300 text-black font-paragraph">Contact</span>
                            </div>
                        </div>

                        {/* Bottom Text */}
                        <p className="text-center text-xs text-gray-400 font-paragraph">
                            Complete project solutions • Pricing • Expert consultation
                        </p>
                    </div>
                </div>

                {/* Bottom Call to Action */}
                <div className="text-center mt-16 scroll-animate delay-300">
                    <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 cursor-pointer font-paragraph">
                        Start Your Project Today →
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebDevelopment;
