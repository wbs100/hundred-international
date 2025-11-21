import { useState, useEffect } from 'react';

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroImages = [
        '/src/assets/images/webhero1.jpg',
        '/src/assets/images/webhero2.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const stats = [
        { number: '50+', label: 'Projects Completed' },
        { number: '25+', label: 'Happy Clients' },
        { number: '3', label: 'Core Services' },
        { number: '100%', label: 'Passion Driven' }
    ];

    const services = [
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                </svg>
            ),
            title: 'Video Editing',
            description: 'Professional video editing services for businesses, content creators, and personal projects. We bring stories to life through visual storytelling.'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Web Development',
            description: 'Custom websites and applications built with modern technologies. From simple landing pages to complex web applications.'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
            ),
            title: 'Academy',
            description: 'Educational courses and training programs to help others learn video editing, web development, and digital skills.'
        }
    ];

    const whyChooseUs = [
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Passionate Team',
            description: 'We genuinely love what we do and it shows in our work quality.'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
            ),
            title: 'Personal Approach',
            description: 'We work closely with each client to understand their unique needs.'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Timely Delivery',
            description: 'We respect deadlines and deliver quality work on time.'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Fair Pricing',
            description: 'Quality services at competitive and transparent pricing.'
        }
    ];

    return (
        <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
            {/* Hero Banner Section */}
            <section className="relative h-[500px] md:h-[600px] overflow-hidden">
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
                
                {/* Hero Content */}
                <div className="relative h-full flex items-center justify-center px-6">
                    <div className="container mx-auto text-center max-w-4xl">
                        <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="text-white">ABOUT </span>
                            <span className="text-yellow-400">100 INTERNATIONAL</span>
                        </h1>
                        <p className="text-gray-200 text-base md:text-lg max-w-3xl mx-auto mb-8">
                            A growing creative company dedicated to bringing innovative ideas to life through video editing, web development, and digital education.
                        </p>
                        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Scroll Down Arrow */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
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

            {/* Stats Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div 
                                key={index}
                                className="bg-gradient-to-br from-slate-200/50 to-slate-300/50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50 rounded-2xl p-6 text-center hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 transform hover:-translate-y-1"
                            >
                                <h3 className="text-yellow-400 text-3xl md:text-4xl font-bold mb-2">{stat.number}</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="font-title text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-black dark:text-white">Our </span>
                            <span className="text-yellow-400">Story</span>
                        </h2>
                        <p className="text-gray-400">How we started and where we're headed</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-slate-200/50 to-slate-300/50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <h3 className="text-yellow-400 font-title text-2xl font-bold mb-4">Our Beginning</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                100 International started as a passion project to help businesses and individuals bring their creative visions to life. We began with video editing services and quickly expanded to web development and educational courses.
                            </p>
                            <p className="text-gray-400">
                                What sets us apart is our commitment to creativity and innovation in everything we do.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-slate-200/50 to-slate-300/50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <h3 className="text-yellow-400 font-title text-2xl font-bold mb-4">Growing Forward</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Today, we're expanding our reach by offering comprehensive digital solutions and academy programs. Our goal is to empower others with the skills and creativity needed in the digital age.
                            </p>
                            <p className="text-gray-400">
                                We believe in growing together with our clients and students.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="font-title text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-black dark:text-white">What We </span>
                            <span className="text-yellow-400">Do</span>
                        </h2>
                        <p className="text-gray-400">Our core services that drive creativity</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div 
                                key={index}
                                className="bg-gradient-to-br from-slate-200/50 to-slate-300/50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 transform hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-black dark:text-white font-title text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-slate-200/50 to-slate-300/50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border-l-4 border-yellow-400 rounded-2xl p-8">
                            <h3 className="text-yellow-400 font-title text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                To provide creative and innovative digital solutions that help our clients achieve their goals while fostering a community of learners and creators.
                            </p>
                            <p className="text-gray-400">
                                We believe in the power of creativity to transform ideas into reality.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-slate-200/50 to-slate-300/50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border-l-4 border-yellow-400 rounded-2xl p-8">
                            <h3 className="text-yellow-400 font-title text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                To become a recognized name in the creative digital space, known for quality work, innovative solutions, and empowering others through education.
                            </p>
                            <p className="text-gray-400">
                                Growing step by step, project by project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="font-title text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-black dark:text-white">Why </span>
                            <span className="text-yellow-400">Choose Us?</span>
                        </h2>
                        <p className="text-gray-400">What makes 100 International different</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyChooseUs.map((item, index) => (
                            <div 
                                key={index}
                                className="bg-gradient-to-br from-slate-200/50 to-slate-300/50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50 rounded-2xl p-6 text-center hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 transform hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-black dark:text-white font-title text-lg font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet Our Team Preview */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-6xl text-center">
                    <h2 className="font-title text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-black dark:text-white">Meet Our </span>
                        <span className="text-yellow-400">Team</span>
                    </h2>
                    <p className="text-gray-400 mb-8">The creative minds behind 100 International</p>
                    <a 
                        href="/team" 
                        className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        View Full Team
                    </a>
                </div>
            </section>

           
        </div>
    );
};

export default About;
