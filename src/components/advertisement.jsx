import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import video1 from '/src/assets/videos/ad/1.mp4';
import video6 from '/src/assets/videos/ad/6.mp4';
import video8 from '/src/assets/videos/ad/8.mp4';

const Advertisement = () => {
    const [playingVideo, setPlayingVideo] = useState(null);
    const [isInView, setIsInView] = useState(false);
    const swiperRef = useRef(null);
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
                        // Auto-play the first video when section comes into view
                        const activeSlide = swiperRef.current?.realIndex || 0;
                        const activeVideoId = videos[activeSlide].id;
                        
                        setPlayingVideo(activeVideoId);
                        
                        // Play the active video
                        const activeVideo = videoRefs.current[activeVideoId];
                        if (activeVideo) {
                            activeVideo.play();
                        }
                        
                        // Stop carousel autoplay when video is playing
                        if (swiperRef.current) {
                            swiperRef.current.autoplay.stop();
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
                        
                        // Restart carousel autoplay when section is out of view
                        if (swiperRef.current) {
                            swiperRef.current.autoplay.start();
                        }
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
        const newPlayingState = playingVideo === videoId ? null : videoId;
        setPlayingVideo(newPlayingState);
        
        // Stop autoplay when video is playing
        if (newPlayingState !== null && swiperRef.current) {
            swiperRef.current.autoplay.stop();
        } else if (swiperRef.current) {
            swiperRef.current.autoplay.start();
        }
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

                {/* Swipeable Video Carousel */}
                <div className="max-w-7xl mx-auto scroll-animate delay-200">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: true }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSlideChange={() => {
                            setPlayingVideo(null);
                            if (swiperRef.current) {
                                swiperRef.current.autoplay.start();
                            }
                        }}
                        className="advertisement-swiper"
                    >
                        {videos.map((video) => (
                            <SwiperSlide key={video.id}>
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 p-8 rounded-2xl border border-orange-500/30">
                                    <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
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
                                                        className="bg-orange-500/80 backdrop-blur-md rounded-full p-6 hover:bg-orange-500 transition-all duration-300 hover:scale-110 shadow-lg"
                                                        onClick={() => handlePlayClick(video.id)}
                                                    >
                                                        <svg 
                                                            className="w-16 h-16 text-white ml-1" 
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
                                    
                                    {/* Content below video */}
                                    <div className="text-center mt-8">
                                        <h3 className="text-2xl font-bold text-orange-400 mb-4">
                                            {video.title}
                                        </h3>
                                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                            {video.description}
                                        </p>
                                        <button className="bg-transparent border-2 border-orange-500 text-orange-400 px-8 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 uppercase tracking-wide">
                                            Explore More →
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Advertisement;
