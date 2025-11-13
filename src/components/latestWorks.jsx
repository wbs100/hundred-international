import { useState } from 'react';
import video3 from '/src/assets/videos/3.mp4';
import prod1 from '/src/assets/images/prod-1.png';
import prod2 from '/src/assets/images/prod-2.png';

const LatestWorks = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 scroll-animate">
                    <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
                        Our Latest Works
                    </h2>
                    <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Discover our most recent projects and creative achievements
                    </p>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto scroll-animate delay-200">
                    <div className="bg-gradient-to-br from-orange-900/20 to-black/50 p-8 rounded-2xl border border-orange-500/30">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            
                            {/* Left Side - Content */}
                            <div className="space-y-6">
                                {/* Course Icon */}
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                                    </svg>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-orange-400">
                                    Advanced Prompt Engineering with
                                    DaVinci Resolve Film Making
                                </h3>

                                {/* Description */}
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Master advanced Content Creation with DaVinci Resolve 2024's latest AI Prompt Engineering and DaVinci Resolve Film Making techniques.
                                </p>

                                {/* Features */}
                                <div className="space-y-3">
                                    <h4 className="text-orange-400 font-semibold">What you'll learn:</h4>
                                    <ul className="space-y-2 text-sm text-gray-300">
                                        <li className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                                            <span>AI Prompt Engineering with ChatGPT for content creation</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                                            <span>AI in Music Production Field</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                                            <span>DaVinci Resolve for Professional Video Editing and Color Grading</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Course Details Box */}
                                <div className="bg-orange-900/30 border border-orange-500/50 rounded-lg p-4">
                                    <div className="text-center">
                                        <p className="text-sm text-gray-300 mb-2">
                                            Complete course with 15+ hours of content
                                        </p>
                                        <p className="text-sm text-orange-300 mb-1">(15 Lectures 📚)</p>
                                        <div className="text-2xl font-bold text-orange-400 flex items-center justify-center space-x-2">
                                            <span>Starting at Rs. 6000</span>
                                            <span className="text-lg">💰🔥</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <button className="bg-transparent border-2 border-orange-500 text-orange-400 px-6 py-2 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm">
                                        Get Course Details
                                    </button>
                                    <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-all duration-300 text-sm">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>

                            {/* Right Side - Video */}
                            <div className="relative">
                                <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
                                    {/* Video Player */}
                                    <video 
                                        className="w-full h-full object-cover"
                                        controls={isPlaying}
                                        muted
                                        onClick={handlePlayClick}
                                        ref={(video) => {
                                            if (video) {
                                                if (isPlaying) {
                                                    video.play();
                                                } else {
                                                    video.pause();
                                                }
                                            }
                                        }}
                                    >
                                        <source src={video3} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    
                                    {/* Video overlay elements */}
                                    <div className="absolute inset-0 pointer-events-none">
                                        {/* Play button overlay (only show when not playing) */}
                                        {!isPlaying && (
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                                                <button 
                                                    className="bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-white/30 transition-all duration-300 hover:scale-110"
                                                    onClick={handlePlayClick}
                                                >
                                                    <svg 
                                                        className="w-8 h-8 text-white ml-1" 
                                                        fill="currentColor" 
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M8 5v14l11-7z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                {/* Course Preview Label */}
                                <div className="absolute bottom-4 left-4 bg-orange-500/90 backdrop-blur-sm text-white px-3 py-1 rounded text-sm font-medium">
                                    📹 Course Preview Video - Click to Play
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Website Products Portfolio Section */}
                <div className="mt-20">
                    {/* Portfolio Header */}
                    <div className="text-center mb-12 scroll-animate">
                        <div className="inline-block bg-orange-500 text-black px-4 py-2 rounded-full text-sm font-medium mb-4 uppercase tracking-wide">
                            📊 Latest Website Products
                        </div>
                        <p className="text-gray-300 text-lg">
                            Check out our most recent website developments and digital solutions
                        </p>
                    </div>

                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        
                        {/* Project 1 - KW Industries */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl overflow-hidden border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-2 scroll-animate delay-100">
                            <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                                <img 
                                    src={prod1} 
                                    alt="KW Industries Website" 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-orange-400 mb-2">KW INDUSTRIES</h3>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    Sri Lankan Free cinnamon (Ceylon cinnamon) export business website with e-commerce integration and international shipping.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs">WordPress</span>
                                    <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs">WooCommerce</span>
                                </div>
                                <button className="w-full bg-transparent border border-orange-500/50 text-orange-400 py-2 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300">
                                    View Project
                                </button>
                            </div>
                        </div>

                        {/* Project 2 - Hela Weda Gedara */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl overflow-hidden border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-2 scroll-animate delay-200">
                            <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                                <img 
                                    src={prod2} 
                                    alt="Hela Weda Gedara Website" 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-orange-400 mb-2">HELA WEDA GEDARA</h3>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    Indigenous Sri Lankan medicine and Ayurveda healthcare services platform combining traditional and modern treatments.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs">WordPress</span>
                                    <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs">Custom CMS</span>
                                </div>
                                <button className="w-full bg-transparent border border-orange-500/50 text-orange-400 py-2 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300">
                                    View Project
                                </button>
                            </div>
                        </div>

                        {/* Project 3 - Smart POS System */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl overflow-hidden border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-2 scroll-animate delay-300">
                            <div className="aspect-[4/3] bg-gradient-to-br from-orange-900 to-orange-700 relative overflow-hidden flex items-center justify-center">
                                <div className="text-6xl text-orange-300">📱</div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-orange-400 mb-2">SMART POS SYSTEM</h3>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    Mobile application for billing and inventory management with real-time tracking and sales analytics.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs">React Native</span>
                                    <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs">Node.js</span>
                                </div>
                                <button className="w-full bg-transparent border border-orange-500/50 text-orange-400 py-2 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300">
                                    View Project
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* View Complete Portfolio Button */}
                    <div className="text-center scroll-animate delay-400">
                        <button className="bg-transparent border-2 border-orange-500 text-orange-400 px-8 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
                            <span>📊</span>
                            <span>View Complete Portfolio</span>
                        </button>
                        <p className="text-gray-400 text-sm mt-4">
                            See all projects • Client testimonials • Development process
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LatestWorks;
