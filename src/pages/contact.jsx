import { useState, useEffect } from 'react';

import hero1 from '/src/assets/images/webhero1.jpg';
import hero2 from '/src/assets/images/webhero2.jpg';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        service: '',
        message: ''
    });

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

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            service: '',
            message: ''
        });
    };

    return (
        <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
            {/* Hero Banner Section with Slideshow */}
            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                {/* Background Images with Slideshow */}
                {heroImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
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
                            GET IN TOUCH
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-body">
                            Ready to bring your creative vision to life? Let's connect and create something amazing together.
                        </p>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'bg-orange-500 w-8'
                                    : 'bg-gray-400 w-2 hover:bg-gray-300'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-6xl">
                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {/* Call Us Card */}
                        <div className="bg-gradient-to-br from-slate-200/50 to-slate-300/50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 transform hover:-translate-y-1">
                            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            </div>
                            <h3 className="text-orange-400 font-title text-xl font-bold mb-4">Call Us</h3>
                            <p className="text-black dark:text-white font-semibold text-lg mb-2">+94 76 368 7242</p>
                            <p className="text-gray-400 text-sm mb-1">Iruni Kalupahana</p>
                            <p className="text-gray-500 text-xs mb-3">(Director of Internationals)</p>
                            <p className="text-gray-400 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                        </div>

                        {/* Email Us Card */}
                        <div className="bg-gradient-to-br from-slate-200/50 to-slate-300/50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 transform hover:-translate-y-1">
                            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                            <h3 className="text-orange-400 font-title text-xl font-bold mb-4">Email Us</h3>
                            <p className="text-black dark:text-white font-semibold text-base mb-2">info@100-international.com</p>
                            <p className="text-gray-400 text-sm mb-3">creative@100-international.com</p>
                            <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                        </div>

                        {/* Visit Us Card */}
                        <div className="bg-gradient-to-br from-slate-200/50 to-slate-300/50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 transform hover:-translate-y-1">
                            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-orange-400 font-title text-xl font-bold mb-4">Visit Us</h3>
                            <p className="text-black dark:text-white font-semibold text-base mb-2">100 International</p>
                            <p className="text-gray-400 text-sm mb-1">School of Creativity</p>
                            <p className="text-gray-400 text-sm mb-3">Colombo, Sri Lanka</p>
                            <p className="text-gray-400 text-sm">Open for appointments</p>
                        </div>
                    </div>

                    {/* Contact Form and Location Section - Side by Side */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {/* Location Section - Left Side */}
                        <div className="bg-gradient-to-br from-slate-300/50 to-slate-200/50 dark:from-slate-900/60 dark:to-slate-800/60 backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50 rounded-3xl p-8 md:p-10 shadow-2xl">
                            <h2 className="font-title text-3xl md:text-4xl font-bold text-black dark:text-white mb-8">Our Location</h2>

                            <div className="bg-slate-200/50 dark:bg-slate-800/50 rounded-2xl p-12 text-center border border-slate-300/30 dark:border-slate-700/30 mb-6">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center shadow-lg">
                                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-black dark:text-gray-300 text-lg font-semibold mb-2">Interactive Map</p>
                                <p className="text-gray-500">Coming Soon</p>
                            </div>

                            <p className="text-center text-gray-700 dark:text-gray-400">
                                Located in the heart of Colombo, we're easily accessible for in-person consultations and meetings.
                            </p>
                        </div>

                        {/* Contact Form - Right Side */}
                        <div className="bg-gradient-to-br from-slate-300/50 to-slate-200/50 dark:from-slate-900/60 dark:to-slate-800/60 backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50 rounded-3xl p-8 md:p-10 shadow-2xl">
                            <h2 className="font-title text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">Send Us A Message</h2>
                            <p className="text-gray-700 dark:text-gray-400 mb-6">Have a project in mind? Fill out the form below and we'll get back to you soon.</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        id="firstName"
                                        placeholder="First Name *"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-200/70 dark:bg-slate-800/70 border border-slate-300/50 dark:border-slate-600/50 rounded-xl text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all duration-300"
                                        required
                                    />
                                    <input
                                        type="text"
                                        id="lastName"
                                        placeholder="Last Name *"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-200/70 dark:bg-slate-800/70 border border-slate-300/50 dark:border-slate-600/50 rounded-xl text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all duration-300"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email Address *"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-200/70 dark:bg-slate-800/70 border border-slate-300/50 dark:border-slate-600/50 rounded-xl text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all duration-300"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-200/70 dark:bg-slate-800/70 border border-slate-300/50 dark:border-slate-600/50 rounded-xl text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all duration-300"
                                    />
                                </div>

                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Subject *"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-200/70 dark:bg-slate-800/70 border border-slate-300/50 dark:border-slate-600/50 rounded-xl text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all duration-300"
                                    required
                                />

                                <select
                                    id="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-200/70 dark:bg-slate-800/70 border border-slate-300/50 dark:border-slate-600/50 rounded-xl text-gray-700 dark:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all duration-300"
                                    required
                                >
                                    <option value="">Select Service of Interest</option>
                                    <option value="web-development">Web Development</option>
                                    <option value="app-development">App Development</option>
                                    <option value="ui-ux-design">UI/UX Design</option>
                                    <option value="branding">Branding</option>
                                    <option value="digital-marketing">Digital Marketing</option>
                                    <option value="consultation">Consultation</option>
                                    <option value="other">Other</option>
                                </select>

                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Tell us about your project or inquiry..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-200/70 dark:bg-slate-800/70 border border-slate-300/50 dark:border-slate-600/50 rounded-xl text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all duration-300 resize-none"
                                    required
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full px-10 py-3.5 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/50 uppercase tracking-wide"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="text-center">
                        <h2 className="font-title text-3xl md:text-4xl font-bold text-black dark:text-white mb-8">Connect With Us</h2>
                        <div className="flex justify-center items-center gap-4 flex-wrap">
                            {[
                                { icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                                { icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                                { icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                                { icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                                { icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" },
                                { icon: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-black hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg"
                                >
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
