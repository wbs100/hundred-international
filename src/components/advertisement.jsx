import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import video1 from '/src/assets/videos/ad/1.mp4';
import video6 from '/src/assets/videos/ad/6.mp4';
import video8 from '/src/assets/videos/ad/8.mp4';

const Advertisement = () => {
    const [playingVideo, setPlayingVideo] = useState(null);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);
    const videoRefs = useRef({});

    const videos = [
        {
            id: 1,
            src: video1,
            title: "Transform Your Ideas Into Reality",
            description: "Join us in revolutionizing the creative industry with cutting-edge technology and innovative solutions."
        },
        {
            id: 6,
            src: video6,
            title: "Creative Excellence Delivered",
            description: "Discover how we blend artistry with technology to create stunning digital experiences."
        },
        {
            id: 8,
            src: video8,
            title: "Innovation Meets Creativity",
            description: "Experience the power of modern technology combined with creative excellence."
        }
    ];

    // Intersection Observer for auto-play when in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsInView(entry.isIntersecting);
                    
                    if (entry.isIntersecting) {
                        // Auto-play the middle video when section comes into view
                        const middleVideoId = videos[1].id; // Index 1 is the middle video (6)
                        setPlayingVideo(middleVideoId);
                        
                        // Play the middle video
                        const middleVideo = videoRefs.current[middleVideoId];
                        if (middleVideo) {
                            middleVideo.play();
                        }
                    } else {
                        // Stop all videos when section is out of view
                        setPlayingVideo(null);
                        Object.values(videoRefs.current).forEach((video) => {
                            if (video) {
                                video.pause();
                                video.currentTime = 0.1;
                            }
                        });
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handlePlayClick = (videoId) => {
        setPlayingVideo(playingVideo === videoId ? null : videoId);
    };

    return (
        <section ref={sectionRef} className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 scroll-animate">
                    <div className="inline-block bg-orange-500 text-black px-4 py-2 rounded-full text-sm font-medium mb-4 uppercase tracking-wide">
                        Featured Advertisements
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
                        Discover Our Latest Innovations
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Experience the Future of creative solutions
                    </p>
                </div>

                {/* Desktop: Video Cards Grid, Mobile: Swiper Slider */}
                <div className="max-w-7xl mx-auto scroll-animate delay-200">
                    {/* Desktop Grid - Hidden on Mobile */}
                    <div className="hidden md:grid grid-cols-3 gap-6">
                        {videos.map((video) => (
                            <div 
                                key={video.id}
                                className={`bg-gradient-to-br from-orange-900/20 to-black/50 p-6 rounded-2xl border border-orange-500/30 transition-all duration-300 ${
                                    playingVideo === video.id ? 'ring-2 ring-orange-500 scale-105' : 'hover:scale-105'
                                }`}
                            >
                                <div className="relative aspect-video bg-black rounded-xl overflow-hidden mb-4">
                                    {/* Video Player */}
                                    <video 
                                        className="w-full h-full object-cover"
                                        controls={playingVideo === video.id}
                                        muted
                                        loop
                                        preload="metadata"
                                        playsInline
                                        onClick={() => handlePlayClick(video.id)}
                                        onLoadedMetadata={(e) => {
                                            e.target.currentTime = 0.1;
                                        }}
                                        ref={(videoElement) => {
                                            videoRefs.current[video.id] = videoElement;
                                            if (videoElement) {
                                                if (playingVideo === video.id && isInView) {
                                                    videoElement.play();
                                                } else {
                                                    videoElement.pause();
                                                    videoElement.currentTime = 0.1;
                                                }
                                            }
                                        }}
                                    >
                                        <source src={video.src + '#t=0.1'} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    
                                    {/* Video overlay elements */}
                                    <div className="absolute inset-0 pointer-events-none">
                                        {/* Play button overlay (only show when not playing) */}
                                        {playingVideo !== video.id && (
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                                                <button 
                                                    className="bg-orange-500/80 backdrop-blur-md rounded-full p-4 hover:bg-orange-500 transition-all duration-300 hover:scale-110 shadow-lg"
                                                    onClick={() => handlePlayClick(video.id)}
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
                                        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md rounded-lg p-2 border border-orange-500/50">
                                            <span className="text-orange-500 text-xl font-bold">100</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Content below video */}
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-orange-400 mb-2">
                                        {video.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4">
                                        {video.description}
                                    </p>
                                    <button className="bg-transparent border-2 border-orange-500 text-orange-400 px-6 py-2 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 uppercase tracking-wide text-sm">
                                        Explore More →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Swiper - Hidden on Desktop */}
                    <div className="md:hidden">
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            pagination={{ 
                                clickable: true,
                                dynamicBullets: true
                            }}
                            loop={true}
                            className="advertisement-swiper-mobile"
                        >
                            {videos.map((video) => (
                                <SwiperSlide key={video.id}>
                                    <div className={`bg-gradient-to-br from-orange-900/20 to-black/50 p-6 rounded-2xl border border-orange-500/30 transition-all duration-300 ${
                                        playingVideo === video.id ? 'ring-2 ring-orange-500' : ''
                                    }`}>
                                        <div className="relative aspect-video bg-black rounded-xl overflow-hidden mb-4">
                                            {/* Video Player */}
                                            <video 
                                                className="w-full h-full object-cover"
                                                controls={playingVideo === video.id}
                                                muted
                                                loop
                                                preload="metadata"
                                                playsInline
                                                onClick={() => handlePlayClick(video.id)}
                                                onLoadedMetadata={(e) => {
                                                    e.target.currentTime = 0.1;
                                                }}
                                                ref={(videoElement) => {
                                                    videoRefs.current[video.id] = videoElement;
                                                    if (videoElement) {
                                                        if (playingVideo === video.id && isInView) {
                                                            videoElement.play();
                                                        } else {
                                                            videoElement.pause();
                                                            videoElement.currentTime = 0.1;
                                                        }
                                                    }
                                                }}
                                            >
                                                <source src={video.src + '#t=0.1'} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                            
                                            {/* Video overlay elements */}
                                            <div className="absolute inset-0 pointer-events-none">
                                                {/* Play button overlay (only show when not playing) */}
                                                {playingVideo !== video.id && (
                                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                                                        <button 
                                                            className="bg-orange-500/80 backdrop-blur-md rounded-full p-4 hover:bg-orange-500 transition-all duration-300 hover:scale-110 shadow-lg"
                                                            onClick={() => handlePlayClick(video.id)}
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
                                                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md rounded-lg p-2 border border-orange-500/50">
                                                    <span className="text-orange-500 text-xl font-bold">100</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Content below video */}
                                        <div className="text-center">
                                            <h3 className="text-xl font-bold text-orange-400 mb-2">
                                                {video.title}
                                            </h3>
                                            <p className="text-gray-300 text-sm mb-4">
                                                {video.description}
                                            </p>
                                            <button className="bg-transparent border-2 border-orange-500 text-orange-400 px-6 py-2 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 uppercase tracking-wide text-sm">
                                                Explore More →
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advertisement;
