import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const BreadcrumbHero = ({ 
    slides = [], 
    title = "Default Title", 
    subtitle = "Default Subtitle",
    breadcrumbs = [],
    showBreadcrumbs = true,
    autoplay = true,
    autoplayDelay = 5000,
    showPagination = true,
    overlayOpacity = 0.6,
    className = ""
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    // Default slides if none provided
    const defaultSlides = [
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
            alt: 'Team collaboration'
        },
        {
            type: 'image', 
            src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
            alt: 'Mobile app development'
        }
    ];

    const slidesToUse = slides.length > 0 ? slides : defaultSlides;

    const swiperConfig = {
        modules: [Pagination, Autoplay, EffectFade],
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        speed: 1000,
        autoplay: autoplay ? {
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        } : false,
        pagination: showPagination ? {
            clickable: true,
            renderBullet: (index, className) => {
                return `<span class="${className} !bg-orange-500 !opacity-60 hover:!opacity-100 !w-3 !h-3"></span>`;
            }
        } : false,
        onSlideChange: (swiper) => {
            setActiveIndex(swiper.realIndex);
        },
        onSwiper: (swiper) => {
            swiperRef.current = swiper;
        }
    };

    const renderMedia = (slide) => {
        if (slide.type === 'video') {
            return (
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                >
                    <source src={slide.src} type="video/mp4" />
                </video>
            );
        } else {
            return (
                <img
                    src={slide.src}
                    alt={slide.alt || 'Slide image'}
                    className="w-full h-full object-cover"
                />
            );
        }
    };

    const renderBreadcrumbs = () => {
        if (!showBreadcrumbs || breadcrumbs.length === 0) return null;

        return (
            <nav className="flex items-center space-x-2 text-sm mb-4 scroll-animate delay-100">
                {breadcrumbs.map((crumb, index) => (
                    <div key={index} className="flex items-center">
                        {crumb.href ? (
                            <a 
                                href={crumb.href}
                                className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                            >
                                {crumb.label}
                            </a>
                        ) : (
                            <span className="text-orange-400 font-medium">{crumb.label}</span>
                        )}
                        {index < breadcrumbs.length - 1 && (
                            <svg 
                                className="w-4 h-4 mx-2 text-gray-500" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                            >
                                <path 
                                    fillRule="evenodd" 
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                                    clipRule="evenodd" 
                                />
                            </svg>
                        )}
                    </div>
                ))}
            </nav>
        );
    };

    return (
        <section className={`relative h-screen md:h-screen min-h-[50dvh] md:min-h-[100dvh] overflow-hidden ${className}`}>
            {/* Swiper Background */}
            <div className="absolute inset-0 z-0">
                <Swiper
                    {...swiperConfig}
                    className="w-full h-full breadcrumb-hero-swiper"
                >
                    {slidesToUse.map((slide, index) => (
                        <SwiperSlide key={index} className="relative">
                            {renderMedia(slide)}
                            {/* Floating Elements for Mobile App Development Theme */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                {/* Animated floating cards */}
                                <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg opacity-80 animate-float-slow transform rotate-12"></div>
                                <div className="absolute top-20 right-20 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg opacity-70 animate-float-medium transform -rotate-12"></div>
                                <div className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl opacity-60 animate-float-fast transform rotate-45"></div>
                                <div className="absolute bottom-40 right-32 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg opacity-75 animate-float-slow transform -rotate-45"></div>
                                
                                {/* Mobile device mockups */}
                                <div className="absolute top-1/4 right-10 w-8 h-14 bg-gray-800 rounded-lg opacity-60 animate-float-medium border border-gray-600">
                                    <div className="w-full h-2 bg-orange-500 rounded-t-lg"></div>
                                </div>
                                <div className="absolute bottom-1/3 left-20 w-6 h-10 bg-gray-900 rounded-md opacity-50 animate-float-fast border border-gray-700">
                                    <div className="w-full h-1 bg-blue-500 rounded-t-md"></div>
                                </div>
                                
                                {/* Abstract shapes */}
                                <div className="absolute top-1/2 left-1/4 w-10 h-10 border-2 border-purple-400 rounded-full opacity-40 animate-pulse"></div>
                                <div className="absolute bottom-1/4 right-1/4 w-8 h-8 border-2 border-orange-400 rotate-45 opacity-50 animate-bounce"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Dark Overlay */}
            <div 
                className="absolute inset-0 z-10"
                style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,${overlayOpacity}) 0%, rgba(0,0,0,${overlayOpacity * 0.8}) 100%)`
                }}
            ></div>

            {/* Content */}
            <div className="relative z-40 h-full flex items-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        {renderBreadcrumbs()}
                        
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight scroll-animate">
                            <span className="block">{title.split(' ').slice(0, -1).join(' ')}</span>
                            <span className="block">
                                {title.split(' ').slice(0, -2).join(' ') && 'APP '}
                                <span className="text-orange-500">
                                    {title.split(' ').slice(-1)[0]}
                                </span>
                            </span>
                        </h1>
                        
                        <div className="mb-8 scroll-animate delay-200">
                            {/* <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-4">
                                NATIVE & <span className="text-orange-400 font-bold">CROSS-PLATFORM</span>
                            </h2> */}
                            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                                {subtitle}
                            </p>
                        </div>

                        <div className="scroll-animate delay-300">
                            <button className="bg-transparent border-2 border-orange-500 text-orange-400 px-8 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 uppercase tracking-wide">
                                View Packages
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows (Desktop Only) */}
            <div className="hidden lg:block">
                <button 
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 z-40 bg-black/30 backdrop-blur-md border border-orange-500/30 text-white p-3 rounded-full hover:bg-orange-500/20 hover:border-orange-500 transition-all duration-300"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button 
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 z-40 bg-black/30 backdrop-blur-md border border-orange-500/30 text-white p-3 rounded-full hover:bg-orange-500/20 hover:border-orange-500 transition-all duration-300"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) rotate(12deg); }
                    50% { transform: translateY(-20px) rotate(12deg); }
                }
                @keyframes float-medium {
                    0%, 100% { transform: translateY(0px) rotate(-12deg); }
                    50% { transform: translateY(-15px) rotate(-12deg); }
                }
                @keyframes float-fast {
                    0%, 100% { transform: translateY(0px) rotate(45deg); }
                    50% { transform: translateY(-10px) rotate(45deg); }
                }
                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }
                .animate-float-medium {
                    animation: float-medium 4s ease-in-out infinite;
                }
                .animate-float-fast {
                    animation: float-fast 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default BreadcrumbHero;
