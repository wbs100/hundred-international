"use client";
import { useState } from 'react';
import video4 from '/src/assets/videos/4.mp4';

const Academy = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Video */}
            <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-10"
            >
                <source src={video4} type="video/mp4" />
                {/* Fallback background image if video fails to load */}
                <div 
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        background: 'url("/images/prod-1.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
            </video>

            <div className="absolute inset-0 bg-black/70 z-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 scroll-animate">
                    <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4 font-title">
                        100 International Academy
                    </h2>
                    <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto font-paragraph">
                        Empowering the next generation of creative and technical professionals
                    </p>
                </div>

                {/* Main Content Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    
                    {/* Launch Your Creative Career Card */}
                    <div className="bg-gradient-to-br from-orange-900/30 to-black/60 p-8 rounded-2xl border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 backdrop-blur-sm scroll-animate delay-100">
                        {/* Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                                </svg>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-orange-400 mb-6 text-center font-title">
                            Launch Your Creative Career
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 text-center mb-8 font-paragraph">
                            Discover our comprehensive training programs designed to equip you with industry-ready skills.
                        </p>

                        {/* Explore Button */}
                        <div className="text-center mb-8">
                            <button className="bg-transparent border-2 border-orange-500 text-orange-400 px-8 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 font-paragraph">
                                → Explore Academy Programs
                            </button>
                        </div>

                        {/* Platform Icons */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-black/40 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                                <div className="text-orange-400 text-2xl mb-2">🎨</div>
                                <span className="text-xs text-gray-300 font-paragraph">Canvas</span>
                            </div>
                            <div className="text-center p-4 bg-black/40 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                                <div className="text-orange-400 text-2xl mb-2">📊</div>
                                <span className="text-xs text-gray-300 font-paragraph">Schedule</span>
                            </div>
                            <div className="text-center p-4 bg-black/40 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                                <div className="text-orange-400 text-2xl mb-2">💼</div>
                                <span className="text-xs text-gray-300 font-paragraph">Toolkit</span>
                            </div>
                        </div>
                    </div>

                    {/* What You'll Find in Our Academy Card */}
                    <div className="bg-gradient-to-br from-orange-900/30 to-black/60 p-8 rounded-2xl border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 backdrop-blur-sm scroll-animate delay-200">
                        
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-orange-400 mb-6 font-title">
                            What You'll Find in Our Academy
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 mb-8 font-paragraph">
                            Professional-grade training with industry experts, real-world projects, and career support.
                        </p>

                        {/* Course Categories */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h4 className="text-orange-400 font-semibold mb-3 font-title text-sm">TECHNICAL COURSES:</h4>
                                <ul className="space-y-2 text-sm text-gray-300 font-paragraph">
                                    <li className="flex items-center">
                                        <span className="text-orange-400 mr-2">💻</span>
                                        Web Development
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-orange-400 mr-2">📱</span>
                                        Mobile Development
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-orange-400 mr-2">🗄️</span>
                                        Database Management
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-orange-400 mr-2">➕</span>
                                        + 5 more courses...
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="text-orange-400 font-semibold mb-3 font-title text-sm">CREATIVE COURSES:</h4>
                                <ul className="space-y-2 text-sm text-gray-300 font-paragraph">
                                    <li className="flex items-center">
                                        <span className="text-orange-400 mr-2">🎬</span>
                                        Video Editing
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-orange-400 mr-2">🎨</span>
                                        Graphic Design
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-orange-400 mr-2">🎭</span>
                                        Film Making
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-orange-400 mr-2">➕</span>
                                        + 4 more courses...
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* View All Courses Button */}
                        <div className="text-center mb-6">
                            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-all duration-300 font-paragraph">
                                View All Courses
                            </button>
                        </div>

                        {/* What's Included */}
                        <div className="text-center">
                            <p className="text-xs text-gray-400 font-paragraph">
                                What's included: Expert instructors • Hands-on projects • Industry certifications • Job placement support
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Statistics or Call to Action */}
                <div className="text-center mt-16 scroll-animate delay-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-400 font-title">500+</div>
                            <div className="text-gray-300 font-paragraph">Students Trained</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-400 font-title">15+</div>
                            <div className="text-gray-300 font-paragraph">Course Programs</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-400 font-title">95%</div>
                            <div className="text-gray-300 font-paragraph">Job Placement Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Academy;
