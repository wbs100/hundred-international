import { useState } from 'react';
import video2 from '/src/assets/videos/2.mp4';

const Advertisement = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-orange-500 text-black px-4 py-2 rounded-full text-sm font-medium mb-4 uppercase tracking-wide">
                        Featured Advertisement
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
                        Discover Our Latest Innovation
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Experience the Future of creative solutions
                    </p>
                </div>

                {/* Video Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-orange-900/20 to-black/50 p-8 rounded-2xl border border-orange-500/30">
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
                                <source src={video2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            
                            {/* Video overlay elements */}
                            <div className="absolute inset-0 pointer-events-none">
                                {/* Dark overlay for better visibility of controls */}
                                <div className="absolute inset-0 bg-black/20"></div>
                                
                                {/* Play button overlay (only show when not playing) */}
                                {!isPlaying && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                                        <button 
                                            className="bg-white/20 backdrop-blur-md rounded-full p-4 hover:bg-white/30 transition-all duration-300 hover:scale-110"
                                            onClick={handlePlayClick}
                                        >
                                            <svg 
                                                className="w-12 h-12 text-white ml-1" 
                                                fill="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </button>
                                    </div>
                                )}
                                
                                {/* 100 Logo overlay */}
                                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md rounded-lg p-3 border border-orange-500/50">
                                    <span className="text-orange-500 text-2xl font-bold">100</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Content below video */}
                        <div className="text-center mt-8">
                            <h3 className="text-2xl font-bold text-orange-400 mb-4">
                                Transform Your Ideas Into Reality
                            </h3>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                Join us in revolutionizing the creative industry with cutting-edge technology and innovative solutions.
                            </p>
                            <button className="bg-transparent border-2 border-orange-500 text-orange-400 px-8 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 uppercase tracking-wide">
                                Explore More →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advertisement;
