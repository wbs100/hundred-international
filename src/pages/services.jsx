import BreadcrumbHero from "../components/breadcrumbHero";
import hero1 from "../../src/assets/images/webhero1.jpg";
import hero2 from "../../src/assets/images/webhero2.jpg";
import hero3 from "../../src/assets/videos/5.mp4";
import prod1 from '/src/assets/images/prod-1.png';
import prod2 from '/src/assets/images/prod-2.png';
import CustomHR from '../components/customHR.jsx';
import { Link } from "wouter";

export default function Services() {
    return (
        <>
            <BreadcrumbHero
                slides={[
                    { type: 'image', src: hero1, alt: 'Team working' },
                    { type: 'image', src: hero2 },
                    { type: 'video', src: hero3 }
                ]}
                title="WEB DEVELOPMENT"
                subtitle="Modern web applications with cutting-edge technologies"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services' }
                ]}
                autoplayDelay={3000}
            />

            <CustomHR variant="gradient" />
            <CustomHR variant="gradient" />

            {/* Portfolio Section */}
            <section className="py-20 bg-black text-white">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16 scroll-animate">
                        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4 font-title">
                            Our Recent Projects
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto font-paragraph">
                            Successful digital solutions we've delivered for our clients
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

                        {/* Project 4 - Work Hour Calculator */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl overflow-hidden border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-2 scroll-animate delay-300">
                            <div className="aspect-[4/3] bg-gradient-to-br from-orange-900 to-orange-700 relative overflow-hidden flex items-center justify-center">
                                <div className="text-6xl text-orange-300">⏰</div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-orange-400 mb-2">Work Hour Calculator</h3>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    Daily work hours tracking app with analytics
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs">Flutter</span>
                                    <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs">Firebase</span>
                                </div>
                                <small>Year: 2024</small>
                            </div>
                        </div>

                        {/* Project 5 - 100 International */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl overflow-hidden border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-2 scroll-animate delay-300">
                            <div className="aspect-[4/3] bg-gradient-to-br from-orange-900 to-orange-700 relative overflow-hidden flex items-center justify-center">
                                <div className="text-6xl text-orange-300">💼</div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-orange-400 mb-2">100 International</h3>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    Corporate services website with portfolio showcase
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs">React</span>
                                    <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs">Tailwind</span>
                                </div>
                                <small>Year: 2025</small>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />

            {/* Our Development Services Section */}
            <section className="py-20 bg-black text-white">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16 scroll-animate">
                        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4 font-title">
                            Our Development Services
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto font-paragraph">
                            Comprehensive solutions for web, mobile, and enterprise applications
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="space-y-8">

                        {/* Web Development */}
                        <div className="bg-gradient-to-br from-orange-900/10 to-black/50 rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 scroll-animate">
                            <div className="flex items-start gap-6 mb-6">
                                <div className="bg-orange-500/20 p-4 rounded-full">
                                    <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-orange-400 mb-3 font-title">Web Development</h3>
                                    <p className="text-gray-300 text-base leading-relaxed max-w-3xl">
                                        Professional website development with modern design, responsive layouts, and SEO optimization. From simple landing pages to complex corporate websites, we deliver solutions that drive results and provide exceptional user experiences across all devices.
                                    </p>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-black/30 p-4 rounded-lg border border-orange-500/10">
                                    <div className="text-orange-400 text-sm font-medium mb-1">✨ Responsive Design</div>
                                    <div className="text-gray-400 text-xs">Perfect display on all screen sizes</div>
                                </div>
                                <div className="bg-black/30 p-4 rounded-lg border border-orange-500/10">
                                    <div className="text-orange-400 text-sm font-medium mb-1">⚡ Fast Performance</div>
                                    <div className="text-gray-400 text-xs">Optimized loading speeds</div>
                                </div>
                                <div className="bg-black/30 p-4 rounded-lg border border-orange-500/10">
                                    <div className="text-orange-400 text-sm font-medium mb-1">🎨 Modern UI/UX</div>
                                    <div className="text-gray-400 text-xs">Beautiful and intuitive interfaces</div>
                                </div>
                                <div className="bg-black/30 p-4 rounded-lg border border-orange-500/10">
                                    <div className="text-orange-400 text-sm font-medium mb-1">🔍 SEO Optimized</div>
                                    <div className="text-gray-400 text-xs">Better search engine visibility</div>
                                </div>
                            </div>
                        </div>

                        {/* Web Applications */}
                        <div className="bg-gradient-to-br from-orange-900/10 to-black/50 rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 scroll-animate delay-100">
                            <div className="flex items-start gap-6 mb-6">
                                <div className="bg-orange-500/20 p-4 rounded-full">
                                    <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-orange-400 mb-3 font-title">Web Applications</h3>
                                    <p className="text-gray-300 text-base leading-relaxed max-w-3xl">
                                        Custom web applications with advanced functionality, user authentication, database integration, and real-time features. Built with scalable architecture and enterprise-grade security to support your business growth and complex operational requirements.
                                    </p>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-black/30 p-4 rounded-lg border border-orange-500/10">
                                    <div className="text-orange-400 text-sm font-medium mb-1">🔐 User Authentication</div>
                                    <div className="text-gray-400 text-xs">Secure login and access control</div>
                                </div>
                                <div className="bg-black/30 p-4 rounded-lg border border-orange-500/10">
                                    <div className="text-orange-400 text-sm font-medium mb-1">🗄️ Database Integration</div>
                                    <div className="text-gray-400 text-xs">Robust data management systems</div>
                                </div>
                                <div className="bg-black/30 p-4 rounded-lg border border-orange-500/10">
                                    <div className="text-orange-400 text-sm font-medium mb-1">⚡ Real-time Features</div>
                                    <div className="text-gray-400 text-xs">Live updates and notifications</div>
                                </div>
                                <div className="bg-black/30 p-4 rounded-lg border border-orange-500/10">
                                    <div className="text-orange-400 text-sm font-medium mb-1">📊 Admin Dashboard</div>
                                    <div className="text-gray-400 text-xs">Comprehensive management tools</div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Applications */}
                        <div className="bg-gradient-to-br from-orange-900/10 to-black/50 rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 scroll-animate delay-200">
                            <div className="flex items-start gap-6 mb-6">
                                <div className="bg-orange-500/20 p-4 rounded-full">
                                    <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-orange-400 mb-3 font-title">Mobile Applications</h3>
                                    <p className="text-gray-300 text-base leading-relaxed max-w-3xl">
                                        Native and cross-platform mobile applications for iOS and Android. Using React Native, Flutter, and native technologies, we create apps with push notifications, offline capabilities, smooth animations, and seamless integration with device features for optimal user experience.
                                    </p>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-black/30 p-4 rounded-lg border border-orange-500/10">
                                    <div className="text-orange-400 text-sm font-medium mb-1">📱 iOS & Android</div>
                                    <div className="text-gray-400 text-xs">Native and cross-platform support</div>
                                </div>
                                <div className="bg-black/30 p-4 rounded-lg border border-orange-500/10">
                                    <div className="text-orange-400 text-sm font-medium mb-1">🔔 Push Notifications</div>
                                    <div className="text-gray-400 text-xs">Engage users with timely alerts</div>
                                </div>
                                <div className="bg-black/30 p-4 rounded-lg border border-orange-500/10">
                                    <div className="text-orange-400 text-sm font-medium mb-1">📴 Offline Support</div>
                                    <div className="text-gray-400 text-xs">Works without internet connection</div>
                                </div>
                                <div className="bg-black/30 p-4 rounded-lg border border-orange-500/10">
                                    <div className="text-orange-400 text-sm font-medium mb-1">🏪 App Store Ready</div>
                                    <div className="text-gray-400 text-xs">Full submission assistance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />

            {/* Our Technology Stack Section */}
            <section className="py-20 bg-black text-white">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16 scroll-animate">
                        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4 font-title">
                            Our Technology Stack
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto font-paragraph">
                            Modern technologies we use to build exceptional solutions
                        </p>
                    </div>

                    {/* Technology Categories */}
                    <div className="space-y-12">

                        {/* Frontend Technologies */}
                        <div className="scroll-animate">
                            <h3 className="text-2xl font-bold text-orange-400 mb-8 text-center font-title">Frontend Technologies</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

                                {/* React */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 mb-4 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                                        <div className="text-2xl">⚛️</div>
                                    </div>
                                    <h4 className="font-bold text-white text-sm">REACT</h4>
                                </div>

                                {/* Vue.js */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 mb-4 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-all duration-300">
                                        <div className="text-2xl">💚</div>
                                    </div>
                                    <h4 className="font-bold text-white text-sm">VUE.JS</h4>
                                </div>

                                {/* Angular */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 mb-4 rounded-lg bg-red-500/20 flex items-center justify-center group-hover:bg-red-500/30 transition-all duration-300">
                                        <div className="text-2xl text-red-400 font-bold">A</div>
                                    </div>
                                    <h4 className="font-bold text-white text-sm">ANGULAR</h4>
                                </div>

                                {/* Next.js */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 mb-4 rounded-lg bg-gray-500/20 flex items-center justify-center group-hover:bg-gray-500/30 transition-all duration-300">
                                        <div className="text-2xl">▲</div>
                                    </div>
                                    <h4 className="font-bold text-white text-sm">NEXT.JS</h4>
                                </div>

                                {/* React Native */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 mb-4 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                                        <div className="text-2xl">📱</div>
                                    </div>
                                    <h4 className="font-bold text-white text-sm">REACT NATIVE</h4>
                                </div>

                                {/* Flutter */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 mb-4 rounded-lg bg-blue-400/20 flex items-center justify-center group-hover:bg-blue-400/30 transition-all duration-300">
                                        <div className="text-2xl">🎯</div>
                                    </div>
                                    <h4 className="font-bold text-white text-sm">FLUTTER</h4>
                                </div>
                            </div>
                        </div>

                        {/* Backend Technologies */}
                        <div className="scroll-animate delay-100">
                            <h3 className="text-2xl font-bold text-orange-400 mb-8 text-center font-title">Backend Technologies</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

                                {/* Node.js */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 mb-4 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-all duration-300">
                                        <div className="text-2xl">🟢</div>
                                    </div>
                                    <h4 className="font-bold text-white text-sm">NODE.JS</h4>
                                </div>

                                {/* Python */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 mb-4 rounded-lg bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/30 transition-all duration-300">
                                        <div className="text-2xl">🐍</div>
                                    </div>
                                    <h4 className="font-bold text-white text-sm">PYTHON</h4>
                                </div>

                                {/* PHP */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 mb-4 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300">
                                        <div className="text-2xl">🐘</div>
                                    </div>
                                    <h4 className="font-bold text-white text-sm">PHP</h4>
                                </div>

                                {/* .NET Core */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 mb-4 rounded-lg bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300">
                                        <div className="text-2xl">💎</div>
                                    </div>
                                    <h4 className="font-bold text-white text-sm">.NET CORE</h4>
                                </div>

                                {/* Java */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 mb-4 rounded-lg bg-orange-600/20 flex items-center justify-center group-hover:bg-orange-600/30 transition-all duration-300">
                                        <div className="text-2xl">☕</div>
                                    </div>
                                    <h4 className="font-bold text-white text-sm">JAVA</h4>
                                </div>

                                {/* Go */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 mb-4 rounded-lg bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-all duration-300">
                                        <div className="text-2xl">🔵</div>
                                    </div>
                                    <h4 className="font-bold text-white text-sm">GO</h4>
                                </div>
                            </div>
                        </div>

                        {/* Cloud & DevOps */}
                        <div className="scroll-animate delay-200">
                            <h3 className="text-2xl font-bold text-orange-400 mb-8 text-center font-title">Cloud & DevOps</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

                                {/* AWS */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 mb-4 rounded-lg bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-all duration-300">
                                        <div className="text-2xl">☁️</div>
                                    </div>
                                    <h4 className="font-bold text-white text-sm">AWS</h4>
                                </div>

                                {/* Google Cloud */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 mb-4 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                                        <div className="text-2xl">☁️</div>
                                    </div>
                                    <h4 className="font-bold text-white text-sm">GOOGLE CLOUD</h4>
                                </div>

                                {/* Azure */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 mb-4 rounded-lg bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300">
                                        <div className="text-2xl">💙</div>
                                    </div>
                                    <h4 className="font-bold text-white text-sm">AZURE</h4>
                                </div>

                                {/* Docker */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 mb-4 rounded-lg bg-blue-400/20 flex items-center justify-center group-hover:bg-blue-400/30 transition-all duration-300">
                                        <div className="text-2xl">🐳</div>
                                    </div>
                                    <h4 className="font-bold text-white text-sm">DOCKER</h4>
                                </div>

                                {/* Kubernetes */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 mb-4 rounded-lg bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300">
                                        <div className="text-2xl">⚓</div>
                                    </div>
                                    <h4 className="font-bold text-white text-sm">KUBERNETES</h4>
                                </div>

                                {/* Jenkins */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 mb-4 rounded-lg bg-red-500/20 flex items-center justify-center group-hover:bg-red-500/30 transition-all duration-300">
                                        <div className="text-2xl">🔧</div>
                                    </div>
                                    <h4 className="font-bold text-white text-sm">JENKINS</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />

            {/* Why Choose Us Section */}
            <section className="py-20 bg-black text-white">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16 scroll-animate">
                        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4 font-title">
                            Why Choose Us
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto font-paragraph">
                            Professional development services with a focus on quality and results
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Custom Solutions */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 scroll-animate">
                            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-red-500/20">
                                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-white"></div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-orange-400 mb-4 font-title">Custom Solutions</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Tailored development services designed specifically for your business needs and goals.
                            </p>
                        </div>

                        {/* Fast Performance */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 scroll-animate delay-100">
                            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-yellow-500/20">
                                <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-orange-400 mb-4 font-title">Fast Performance</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Optimized code and architecture ensuring blazing fast load and smooth user experience.
                            </p>
                        </div>

                        {/* Secure & Scalable */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 scroll-animate delay-200">
                            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-500/20">
                                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-orange-400 mb-4 font-title">Secure & Scalable</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Enterprise-grade security measures and scalable infrastructure that grows with your business.
                            </p>
                        </div>

                        {/* Modern Design */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 scroll-animate delay-300">
                            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-500/20">
                                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-orange-400 mb-4 font-title">Modern Design</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Beautiful, responsive designs that work seamlessly across all devices and screen sizes.
                            </p>
                        </div>

                        {/* Ongoing Support */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 scroll-animate delay-400">
                            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-500/20">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-orange-400 mb-4 font-title">Ongoing Support</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Comprehensive maintenance and support packages to keep your application running smoothly.
                            </p>
                        </div>

                        {/* Analytics Integration */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 scroll-animate delay-500">
                            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-purple-500/20">
                                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-orange-400 mb-4 font-title">Analytics Integration</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Built-in analytics and reporting tools to track performance and user engagement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />

            {/* Development Packages Section */}
            <section className="py-20 bg-black text-white">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16 scroll-animate">
                        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4 font-title">
                            Development Packages
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto font-paragraph">
                            Transparent pricing for quality development services
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {/* Basic Website */}
                        <div className="bg-gradient-to-br from-orange-900/10 to-black/50 rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 scroll-animate">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2 font-title">Basic Website</h3>
                                <div className="text-4xl font-bold text-orange-400 mb-2">LKR 200,000</div>
                                <div className="text-gray-400 text-sm">Onwards</div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Responsive Design</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Up to 5 Pages</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Contact Form</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>SEO Optimization</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>3 Months Support</span>
                                </div>
                            </div>

                            <button className="w-full bg-transparent border-2 border-orange-500/50 text-orange-400 py-3 px-6 rounded-full font-medium hover:bg-orange-500 hover:text-white transition-all duration-300">
                                Get Started
                            </button>
                        </div>

                        {/* Web Application - Best Value */}
                        <div className="bg-gradient-to-br from-orange-500/20 to-orange-900/30 rounded-2xl p-8 border-2 border-orange-500 hover:border-orange-400 transition-all duration-300 hover:-translate-y-2 scroll-animate delay-100 relative">
                            {/* Best Value Badge */}
                            <div className="absolute -top-4 right-6 bg-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold transform rotate-12">
                                Best Value
                            </div>

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2 font-title">Web Application</h3>
                                <div className="text-4xl font-bold text-orange-400 mb-2">LKR 500,000</div>
                                <div className="text-gray-400 text-sm">Onwards</div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Custom Functionality</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>User Authentication</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Database Integration</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Admin Panel</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>API Development</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>6 Months Support</span>
                                </div>
                            </div>

                            <button className="w-full bg-orange-500 text-black py-3 px-6 rounded-full font-bold hover:bg-orange-400 transition-all duration-300">
                                Get Started
                            </button>
                        </div>

                        {/* Mobile App */}
                        <div className="bg-gradient-to-br from-orange-900/10 to-black/50 rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 scroll-animate delay-200">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2 font-title">Mobile App</h3>
                                <div className="text-4xl font-bold text-orange-400 mb-2">LKR 800,000</div>
                                <div className="text-gray-400 text-sm">Onwards</div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>iOS & Android</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Push Notifications</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Offline Capability</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>App Store Submission</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Backend Integration</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>12 Months Support</span>
                                </div>
                            </div>

                            <button className="w-full bg-transparent border-2 border-orange-500/50 text-orange-400 py-3 px-6 rounded-full font-medium hover:bg-orange-500 hover:text-white transition-all duration-300">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Contact for Custom Solutions */}
                    <div className="text-center mt-12 scroll-animate delay-300 inline-flex justify-center items-center w-full gap-1">
                        <p className="text-gray-300">
                            Need a custom solution? </p>
                        <Link href="/contact" className="text-orange-400 hover:text-orange-300 font-medium underline">
                            Contact us
                        </Link>
                        <p className="text-gray-300">
                            for a personalized quote.
                        </p>
                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />

            {/* Ready to Start Your Project Section */}
            <section className="py-20 bg-black text-white relative overflow-hidden">
                {/* Rotating Background Element */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-96 h-96 bg-gradient-to-br from-orange-500/20 to-orange-900/10 rounded-3xl animate-spin-slow transform rotate-45"></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center scroll-animate">
                        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6 font-title">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 font-paragraph">
                            Let's build something amazing together!
                        </p>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="bg-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                Get Started Now
                            </button>
                            
                            <button className="bg-transparent border-2 border-orange-500/50 text-orange-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Schedule a Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />
        </>
    )
};