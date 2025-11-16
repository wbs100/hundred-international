import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const OurConnections = () => {
    const connections = [
        {
            id: 1,
            title: "Strategic Partnerships",
            description: "Building long-term relationships with industry leaders to deliver exceptional value to our clients.",
            icon: "🤝",
            color: "blue"
        },
        {
            id: 2,
            title: "Global Network",
            description: "Connected with creative professionals and agencies worldwide for collaborative projects.",
            icon: "🌍",
            color: "green"
        },
        {
            id: 3,
            title: "Technology Partners",
            description: "Partnered with leading tech companies to stay at the forefront of innovation and AI development.",
            icon: "⚡",
            color: "purple"
        },
        {
            id: 4,
            title: "Creative Community",
            description: "Active member of the global creative community, sharing knowledge and best practices.",
            icon: "🎨",
            color: "pink"
        },
        {
            id: 5,
            title: "Educational Institutes",
            description: "Collaborating with universities and educational institutions to nurture upcoming talent.",
            icon: "🎓",
            color: "indigo"
        },
        {
            id: 6,
            title: "Industry Associations",
            description: "Member of key industry associations and professional organizations worldwide.",
            icon: "🏢",
            color: "orange"
        }
    ];

    const getColorClasses = (color) => {
        const colorMap = {
            blue: {
                bg: "from-blue-900/30 to-black/50",
                border: "border-blue-500/40",
                text: "text-blue-400"
            },
            green: {
                bg: "from-green-900/30 to-black/50", 
                border: "border-green-500/40",
                text: "text-green-400"
            },
            purple: {
                bg: "from-purple-900/30 to-black/50",
                border: "border-purple-500/40", 
                text: "text-purple-400"
            },
            pink: {
                bg: "from-pink-900/30 to-black/50",
                border: "border-pink-500/40",
                text: "text-pink-400"
            },
            indigo: {
                bg: "from-indigo-900/30 to-black/50",
                border: "border-indigo-500/40",
                text: "text-indigo-400"
            },
            orange: {
                bg: "from-orange-900/30 to-black/50",
                border: "border-orange-500/40",
                text: "text-orange-400"
            }
        };
        return colorMap[color] || colorMap.orange;
    };

    return (
        <section className="py-16 bg-black text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Section Title */}
                    <div className="text-center mb-12 scroll-animate">
                        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6 font-title">
                            🔗 Our Connections
                        </h2>
                        <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
                            We believe in the power of connections. Our extensive network spans across industries, 
                            continents, and creative disciplines to bring you the best collaborative opportunities.
                        </p>
                    </div>

                    {/* Connections Slider */}
                    <div className="scroll-animate delay-100">
                        <Swiper
                            modules={[Autoplay, EffectCoverflow]}
                            effect="coverflow"
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView="auto"
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            className="connections-slider"
                        >
                            {connections.map((connection) => {
                                const colors = getColorClasses(connection.color);
                                return (
                                    <SwiperSlide key={connection.id} className="max-w-sm">
                                        <div className={`bg-gradient-to-br ${colors.bg} rounded-3xl p-8 ${colors.border} border transition-all duration-300 h-80 flex flex-col justify-center`}>
                                            
                                            {/* Icon */}
                                            <div className="text-6xl mb-6 text-center">
                                                {connection.icon}
                                            </div>
                                            
                                            {/* Title */}
                                            <h3 className={`text-2xl font-bold ${colors.text} mb-4 text-center font-title`}>
                                                {connection.title}
                                            </h3>
                                            
                                            {/* Description */}
                                            <p className="text-gray-300 text-sm leading-relaxed text-center">
                                                {connection.description}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-12 scroll-animate delay-200">
                        <p className="text-gray-300 text-lg mb-6">
                            Want to become part of our network?
                        </p>
                        <button className="bg-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                            Connect With Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurConnections;