import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import hero1 from '/src/assets/images/webhero1.jpg';
import hero2 from '/src/assets/images/webhero2.jpg';

import mayura from '/src/assets/images/team/mayura.png';
import eranda from '/src/assets/images/team/eranda.jpg';
import chamathka from '/src/assets/images/team/chamathka.jpg';
import damian from '/src/assets/images/team/damian.png';

const Team = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroImages = [
        hero1,
        hero2
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const executiveTeam = [
        {
            name: "Mayura Athukorala",
            title: "Chief Executive Officer (CEO)",
            subtitle: "Co-Director Of Content Development",
            description: "Visionary leader driving our mission to create platforms that help businesses flourish globally. Focused on strategic growth and innovation.",
            image: mayura
        },
        {
            name: "Chamathka Prasad",
            title: "Chief Technical Officer (CTO)",
            subtitle: "",
            description: "Leading technical innovation and development strategies. Expert in cutting-edge technologies and system architecture.",
            image: chamathka
        },
        {
            name: "Eranda Chamara",
            title: "Chief Creative Officer (CCO)",
            subtitle: "Co-Director Of Content Development",
            description: "Creative mastermind behind our innovative designs and user experiences. Specializes in brand development and creative strategy.",
            image: eranda
        },
        {
            name: "Damian Fernando",
            title: "Chief Operating Officer (COO)",
            subtitle: "Co-Director Of Content Development",
            description: "Operational excellence leader ensuring smooth business processes and efficient project delivery across all departments.",
            image: damian
        }
    ];

    const contributors = [
        {
            name: "Chiran Gunathilaka",
            title: "Chief Financial Analytics Officer (FA)",
            subtitle: "",
            description: "Data-driven financial expert analyzing market trends and providing strategic insights for sustainable growth and profitability.",
            image: "/assets/team/chiran.jpg"
        },
        {
            name: "Kaveesh",
            title: "Director of Human Resources (HR)",
            subtitle: "",
            description: "People-focused leader building strong teams and fostering a positive work culture that attracts and retains top talent.",
            image: "/assets/team/kaveesh.jpg"
        }
    ];

    return (
        <div className="bg-black min-h-screen">
            {/* Hero Banner Section with Slideshow */}
            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                {/* Background Images with Slideshow */}
                {heroImages.map((image, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img 
                            src={image} 
                            alt={`Hero Background ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
                
                {/* Content */}
                <div className="relative h-full flex items-center justify-center px-6">
                    <div className="container mx-auto text-center max-w-4xl">
                        <h1 className="font-title text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide" 
                            style={{ 
                                background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #f97316 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                            LEADERSHIP EXCELLENCE
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-body">
                            Expert professionals driving global innovation and growth
                        </p>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === currentSlide 
                                    ? 'bg-orange-500 w-8' 
                                    : 'bg-gray-400 w-2 hover:bg-gray-300'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            <div className="py-20">
            <div className="container mx-auto px-6">
                {/* Executive Directors Section */}
                <div className="mb-20">
                    <h2 className="font-title text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        Executive Directors
                    </h2>
                    <div className="max-w-7xl mx-auto">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="team-swiper"
                        >
                            {executiveTeam.map((member, index) => (
                                <SwiperSlide key={index} className="h-auto">
                                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 transform hover:-translate-y-2 flex flex-col h-full">
                                        <div className="flex justify-center mb-6">
                                            <div className="w-40 h-40 rounded-full overflow-hidden bg-slate-700 border-4 border-orange-500/30 shadow-lg shadow-orange-500/20">
                                                <img 
                                                    src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=200&background=f97316&color=fff&bold=true`}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-center flex-grow flex flex-col">
                                            <h3 className="font-title text-xl font-bold mb-2" 
                                                style={{ color: '#f97316' }}>
                                                {member.name}
                                            </h3>
                                            <p className="text-gray-300 text-sm font-semibold mb-1">{member.title}</p>
                                            {member.subtitle && (
                                                <p className="text-gray-400 text-xs mb-3">{member.subtitle}</p>
                                            )}
                                            <p className="text-gray-400 text-sm leading-relaxed flex-grow">{member.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* Non-Executive Contributors Section (hidden) */}
                <div className="mb-20 hidden">
                    <h2 className="font-title text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        Non-Executive Contributors
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            loop={true}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                            }}
                            className="team-swiper"
                        >
                            {contributors.map((member, index) => (
                                <SwiperSlide key={index} className="h-auto">
                                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 transform hover:-translate-y-2 flex flex-col h-full">
                                        <div className="flex justify-center mb-6">
                                            <div className="w-40 h-40 rounded-full overflow-hidden bg-slate-700 border-4 border-orange-500/30 shadow-lg shadow-orange-500/20">
                                                <img 
                                                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=200&background=f97316&color=fff&bold=true`}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-center flex-grow flex flex-col">
                                            <h3 className="font-title text-xl font-bold mb-2" 
                                                style={{ color: '#f97316' }}>
                                                {member.name}
                                            </h3>
                                            <p className="text-gray-300 text-sm font-semibold mb-3">{member.title}</p>
                                            <p className="text-gray-400 text-sm leading-relaxed flex-grow">{member.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* Mission Statement Section */}
                <div className="max-w-6xl mx-auto mb-20 px-4">
                    <div className="text-center space-y-8">
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-5xl mx-auto">
                            100 International is a pioneering remote-based company with a mission to empower individuals and businesses to 
                            thrive in the global marketplace. Our core goal is to create platforms that help platforms flourish, offering robust 
                            support to new and existing ventures. We aim to inspire entrepreneurial growth by teaching individuals everything 
                            they need to start their own business platform.
                        </p>
                        <div className="w-24 h-px bg-orange-500/50 mx-auto"></div>
                        <p className="text-center italic text-base md:text-lg leading-relaxed max-w-4xl mx-auto"
                           style={{ 
                               background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #f97316 100%)',
                               WebkitBackgroundClip: 'text',
                               WebkitTextFillColor: 'transparent',
                               backgroundClip: 'text'
                           }}>
                            "To achieve this, we provide internships and diverse courses tailored for global accessibility. 
                            By combining education, mentorship, and platform development, we are shaping a world where innovation knows no boundaries."
                        </p>
                    </div>
                </div>


            </div>
            </div>

            {/* Custom Swiper Styles */}
            <style jsx>{`
                .team-swiper {
                    padding-bottom: 50px;
                }

                .team-swiper .swiper-slide {
                    height: auto;
                    display: flex;
                }

                .team-swiper .swiper-slide > div {
                    width: 100%;
                    height: 100%;
                }

                .team-swiper .swiper-pagination-bullet {
                    background: #f97316;
                    opacity: 0.5;
                    width: 12px;
                    height: 12px;
                }

                .team-swiper .swiper-pagination-bullet-active {
                    opacity: 1;
                    background: #f97316;
                    transform: scale(1.2);
                }

                .team-swiper .swiper-wrapper {
                    align-items: stretch;
                }
            `}</style>
        </div>
    );
};

export default Team;
