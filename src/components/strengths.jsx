import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OurStrengths = () => {
    // Sample client data - replace with your actual client logos and info
    const clients = [
        {
            id: 1,
            name: "TechCorp Solutions",
            logo: "/src/assets/images/clients/client1.png", // Replace with actual logo paths
            description: "Leading technology solutions provider"
        },
        {
            id: 2,
            name: "Creative Studios",
            logo: "/src/assets/images/clients/client2.png",
            description: "Award-winning creative agency"
        },
        {
            id: 3,
            name: "Innovation Labs",
            logo: "/src/assets/images/clients/client3.png",
            description: "Cutting-edge research and development"
        },
        {
            id: 4,
            name: "Digital Marketing Pro",
            logo: "/src/assets/images/clients/client4.png",
            description: "Digital marketing excellence"
        },
        {
            id: 5,
            name: "Future Enterprises",
            logo: "/src/assets/images/clients/client5.png",
            description: "Forward-thinking business solutions"
        },
        {
            id: 6,
            name: "Global Ventures",
            logo: "/src/assets/images/clients/client6.png",
            description: "International business partnerships"
        }
    ];

    return (
        <section className="py-16 dark:bg-black dark:text-white">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Section Title */}
                    <div className="text-center mb-12 scroll-animate">
                        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6 font-title">
                            💪 Our Strengths
                        </h2>
                        <p className="dark:text-gray-300 text-black text-lg max-w-3xl mx-auto leading-relaxed">
                            Trusted by leading brands and innovative companies worldwide
                        </p>
                    </div>

                    {/* Clients Slider */}
                    <div className="scroll-animate delay-100">
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            navigation={false}
                            loop={true}
                            className="clients-slider"
                        >
                            {clients.map((client) => (
                                <SwiperSlide key={client.id}>
                                    <div className="dark:bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 text-center h-full">
                                        
                                        {/* Client Logo */}
                                        <div className="w-24 h-24 mx-auto mb-4 bg-orange-500 dark:bg-white rounded-xl flex items-center justify-center p-4">
                                            <img 
                                                src={client.logo} 
                                                alt={client.name}
                                                className="max-w-full max-h-full object-contain"
                                                onError={(e) => {
                                                    // Fallback if image doesn't exist
                                                    e.target.style.display = 'none';
                                                    e.target.parentNode.innerHTML = `<div class="text-2xl text-white dark:text-black">${client.name.charAt(0)}</div>`;
                                                }}
                                            />
                                        </div>
                                        
                                        {/* Client Info */}
                                        <h3 className="text-lg font-bold text-orange-400 mb-2 font-title">
                                            {client.name}
                                        </h3>
                                        <p className="dark:text-gray-300 text-black text-sm leading-relaxed">
                                            {client.description}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 scroll-animate delay-200">
                        <div className="text-center p-6 dark:bg-gradient-to-br from-orange-900/20 to-black/50 rounded-xl border border-orange-500/30">
                            <div className="text-3xl font-bold text-orange-400 mb-2">100+</div>
                            <p className="dark:text-gray-300 text-black text-sm">Happy Clients</p>
                        </div>
                        <div className="text-center p-6 dark:bg-gradient-to-br from-orange-900/20 to-black/50 rounded-xl border border-orange-500/30">
                            <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                            <p className="dark:text-gray-300 text-black text-sm">Projects Completed</p>
                        </div>
                        <div className="text-center p-6 dark:bg-gradient-to-br from-orange-900/20 to-black/50 rounded-xl border border-orange-500/30">
                            <div className="text-3xl font-bold text-orange-400 mb-2">5+</div>
                            <p className="dark:text-gray-300 text-black text-sm">Years Experience</p>
                        </div>
                        <div className="text-center p-6 dark:bg-gradient-to-br from-orange-900/20 to-black/50 rounded-xl border border-orange-500/30">
                            <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                            <p className="dark:text-gray-300 text-black text-sm">Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStrengths;