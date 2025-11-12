import BreadcrumbHero from "../components/breadcrumbHero";
import CustomHR from '../components/customHR.jsx';

import video1 from "/src/assets/videos/6.mp4";
import video2 from "/src/assets/videos/7.mp4";
import video3 from "/src/assets/videos/ad/6.mp4";

import certificate from "/src/assets/images/certificate.png";
import mayura from "/src/assets/images/mayura.png";

export default function Advertisement() {
    return (
        <>
            <BreadcrumbHero
                slides={[
                    { type: 'video', src: video1 },
                    { type: 'video', src: video2 },
                    { type: 'video', src: video3 }
                ]}
                title="World-Class Creativity On Demand"
                subtitle="EXPERT AI CURATION"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Advertisement' }
                ]}
                autoplayDelay={3000}
            />

            {/* Express AI Content Pricing Section */}
            <section className="py-16 bg-black text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">

                        {/* Section Title */}
                        <div className="text-center mb-12 scroll-animate">
                            <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6 font-title">
                                Express AI Content Pricing
                            </h2>
                            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                                Streamlined service focused on speed and affordability, using our expert team to guide AI technology
                            </p>
                        </div>

                        {/* Pricing Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

                            {/* Gold Package */}
                            <div className="bg-gradient-to-br from-yellow-900/20 to-black/50 rounded-2xl p-8 border border-yellow-500/30 relative overflow-hidden scroll-animate delay-100">

                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                    <div className="w-full h-full bg-yellow-500 rounded-full blur-3xl"></div>
                                </div>

                                <div className="relative z-10 text-center">
                                    {/* Icon and Title */}
                                    <div className="mb-6">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center">
                                            <span className="text-2xl">🥇</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-yellow-400 font-title">Gold</h3>
                                    </div>

                                    {/* Duration */}
                                    <div className="mb-6">
                                        <p className="text-gray-300 text-sm mb-2">15 - 45 Seconds</p>
                                        <div className="text-4xl font-bold text-yellow-400 mb-2">LKR 15,000</div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-300 text-sm leading-relaxed mb-8">
                                        Fast-Paced Social Media: Quick announcements, product teasers, and attention-grabbing content.
                                    </p>

                                    {/* Select Button */}
                                    <button className="w-full bg-orange-500 text-black px-6 py-3 rounded-full font-bold text-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                                        Select Package
                                    </button>
                                </div>
                            </div>

                            {/* Platinum Package */}
                            <div className="bg-gradient-to-br from-gray-600/20 to-black/50 rounded-2xl p-8 border border-gray-400/30 relative overflow-hidden scroll-animate delay-200">

                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                    <div className="w-full h-full bg-gray-400 rounded-full blur-3xl"></div>
                                </div>

                                <div className="relative z-10 text-center">
                                    {/* Icon and Title */}
                                    <div className="mb-6">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-gray-400 rounded-full flex items-center justify-center">
                                            <span className="text-2xl">🥈</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-300 font-title">Platinum</h3>
                                    </div>

                                    {/* Duration */}
                                    <div className="mb-6">
                                        <p className="text-gray-300 text-sm mb-2">45 - 75 Seconds</p>
                                        <div className="text-4xl font-bold text-gray-300 mb-2">LKR 20,000</div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-300 text-sm leading-relaxed mb-8">
                                        Digital Retargeting: Website banners, ad loops, and sustained engagement content.
                                    </p>

                                    {/* Select Button */}
                                    <button className="w-full bg-orange-500 text-black px-6 py-3 rounded-full font-bold text-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                                        Select Package
                                    </button>
                                </div>
                            </div>

                            {/* Diamond Package */}
                            <div className="bg-gradient-to-br from-blue-600/20 to-black/50 rounded-2xl p-8 border border-blue-400/30 relative overflow-hidden scroll-animate delay-300">

                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                    <div className="w-full h-full bg-blue-400 rounded-full blur-3xl"></div>
                                </div>

                                <div className="relative z-10 text-center">
                                    {/* Icon and Title */}
                                    <div className="mb-6">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-blue-400 rounded-full flex items-center justify-center">
                                            <span className="text-2xl">💎</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-blue-400 font-title">Diamond</h3>
                                    </div>

                                    {/* Duration */}
                                    <div className="mb-6">
                                        <p className="text-gray-300 text-sm mb-2">90+ Seconds</p>
                                        <div className="text-4xl font-bold text-blue-400 mb-2">LKR 25,000</div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-300 text-sm leading-relaxed mb-8">
                                        Basic Explainers: Longer promotional content, detailed product showcases, and comprehensive messaging.
                                    </p>

                                    {/* Select Button */}
                                    <button className="w-full bg-orange-500 text-black px-6 py-3 rounded-full font-bold text-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                                        Select Package
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Production Services Section */}
            <section className="pb-16 bg-black text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">

                        {/* Production Services Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Short Films */}
                            <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-3xl p-8 border border-orange-500/30 relative overflow-hidden scroll-animate delay-100">

                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                                    <div className="w-full h-full bg-orange-500 rounded-full blur-3xl"></div>
                                </div>

                                <div className="relative z-10">
                                    {/* Icon and Title */}
                                    <div className="text-center mb-8">
                                        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                                            <span className="text-3xl">🎬</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-orange-400 font-title mb-2">SHORT FILMS</h3>
                                        <p className="text-gray-300 text-lg">3 - 15 Minutes</p>
                                    </div>

                                    {/* Price */}
                                    <div className="text-center mb-8">
                                        <div className="text-5xl font-bold text-orange-400 mb-2">LKR 50,000</div>
                                        <p className="text-gray-400 italic">Onwards</p>
                                    </div>

                                    {/* Divider */}
                                    <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>

                                    {/* Description */}
                                    <p className="text-gray-300 text-center leading-relaxed mb-8">
                                        Professional storytelling with cinematic quality. Perfect for brand stories, documentaries, and narrative content with full production value.
                                    </p>

                                    {/* Features */}
                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium text-center">Script Development</span>
                                        <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium text-center">Professional Crew</span>
                                        <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium text-center">Location Shooting</span>
                                        <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium text-center">Post-Production</span>
                                    </div>

                                    {/* Get Started Button */}
                                    <button className="w-full bg-orange-500 text-black px-6 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                                        GET STARTED
                                    </button>
                                </div>
                            </div>

                            {/* Music Videos */}
                            <div className="bg-gradient-to-br from-blue-900/20 to-black/50 rounded-3xl p-8 border border-blue-500/30 relative overflow-hidden scroll-animate delay-200">

                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                                    <div className="w-full h-full bg-blue-500 rounded-full blur-3xl"></div>
                                </div>

                                <div className="relative z-10">
                                    {/* Icon and Title */}
                                    <div className="text-center mb-8">
                                        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                                            <span className="text-3xl">🎵</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-blue-400 font-title mb-2">MUSIC VIDEOS</h3>
                                        <p className="text-gray-300 text-lg">3 - 5 Minutes</p>
                                    </div>

                                    {/* Price */}
                                    <div className="text-center mb-8">
                                        <div className="text-5xl font-bold text-blue-400 mb-2">LKR 60,000</div>
                                        <p className="text-gray-400 italic">Onwards</p>
                                    </div>

                                    {/* Divider */}
                                    <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>

                                    {/* Description */}
                                    <p className="text-gray-300 text-center leading-relaxed mb-8">
                                        High-energy visual storytelling for artists and brands. Includes choreography planning, creative direction, and artistic post-production.
                                    </p>

                                    {/* Features */}
                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium text-center">Creative Direction</span>
                                        <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium text-center">Choreography</span>
                                        <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium text-center">Professional Lighting</span>
                                        <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium text-center">Color Grading</span>
                                    </div>

                                    {/* Get Started Button */}
                                    <button className="w-full bg-orange-500 text-black px-6 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                                        GET STARTED
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />
            <CustomHR variant="gradient" />

            {/* Extended & Custom Ad Rates Section */}
            <section className="py-16 bg-black text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">

                        {/* Extended Ad Rates */}
                        <div className="mb-16 scroll-animate">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6 font-title">
                                    📈 Extended & Custom Ad Rates
                                </h2>
                                <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                                    For advertisements requiring more runtime, our pricing scales clearly:
                                </p>
                            </div>

                            {/* Extended Rates Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                {/* 1 Minute Ad */}
                                <div className="bg-gradient-to-br from-purple-900/20 to-black/50 rounded-2xl p-6 border border-purple-500/30 relative overflow-hidden scroll-animate delay-100">
                                    <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                                        <div className="w-full h-full bg-purple-500 rounded-full blur-2xl"></div>
                                    </div>
                                    <div className="relative z-10 text-center">
                                        <div className="w-12 h-12 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center">
                                            <span className="text-lg">⏱️</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-purple-400 font-title mb-2">1 Minute Ad (Upto 1 Min)</h3>
                                        <div className="text-3xl font-bold text-purple-400">LKR 25,000</div>
                                    </div>
                                </div>

                                {/* 1.5 Minute Ad */}
                                <div className="bg-gradient-to-br from-pink-900/20 to-black/50 rounded-2xl p-6 border border-pink-500/30 relative overflow-hidden scroll-animate delay-200">
                                    <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                                        <div className="w-full h-full bg-pink-500 rounded-full blur-2xl"></div>
                                    </div>
                                    <div className="relative z-10 text-center">
                                        <div className="w-12 h-12 mx-auto mb-4 bg-pink-500 rounded-full flex items-center justify-center">
                                            <span className="text-lg">⏰</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-pink-400 font-title mb-2">1 Minute 30 Seconds Ad</h3>
                                        <div className="text-3xl font-bold text-pink-400">LKR 35,000</div>
                                    </div>
                                </div>

                                {/* 2 Minute Ad */}
                                <div className="bg-gradient-to-br from-indigo-900/20 to-black/50 rounded-2xl p-6 border border-indigo-500/30 relative overflow-hidden scroll-animate delay-300">
                                    <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                                        <div className="w-full h-full bg-indigo-500 rounded-full blur-2xl"></div>
                                    </div>
                                    <div className="relative z-10 text-center">
                                        <div className="w-12 h-12 mx-auto mb-4 bg-indigo-500 rounded-full flex items-center justify-center">
                                            <span className="text-lg">🕐</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-indigo-400 font-title mb-2">2 Minute Ad</h3>
                                        <div className="text-3xl font-bold text-indigo-400">LKR 45,000</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Premium Cinematic Projects */}
                        <div className="scroll-animate delay-400">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6 font-title">
                                    🎬 Premium Cinematic Projects
                                </h2>
                                <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                                    Ready for a full-scale production? We bring cinematic quality to your biggest ideas.
                                </p>
                            </div>

                            {/* Premium Projects Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                {/* Short Films Premium */}
                                <div className="bg-gradient-to-br from-orange-900/30 to-black/50 rounded-3xl p-8 border border-orange-500/40 relative overflow-hidden scroll-animate delay-500">
                                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                        <div className="w-full h-full bg-orange-500 rounded-full blur-3xl"></div>
                                    </div>
                                    <div className="relative z-10 text-center">
                                        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                                            <span className="text-2xl">🎬</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-orange-400 font-title mb-2">Short Films</h3>
                                        <p className="text-gray-300 text-sm mb-4">(3 - 15 Minutes)</p>
                                        <div className="text-4xl font-bold text-orange-400 mb-2">LKR 75,000</div>
                                        <p className="text-orange-300 text-sm mb-6 italic">onwards</p>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            Professional storytelling, documentaries, full narrative content.
                                        </p>
                                    </div>
                                </div>

                                {/* Music Videos Premium */}
                                <div className="bg-gradient-to-br from-blue-900/30 to-black/50 rounded-3xl p-8 border border-blue-500/40 relative overflow-hidden scroll-animate delay-600">
                                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                        <div className="w-full h-full bg-blue-500 rounded-full blur-3xl"></div>
                                    </div>
                                    <div className="relative z-10 text-center">
                                        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                                            <span className="text-2xl">🎵</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-blue-400 font-title mb-2">Music Videos</h3>
                                        <p className="text-gray-300 text-sm mb-4">(3 - 5 Minutes)</p>
                                        <div className="text-4xl font-bold text-blue-400 mb-2">LKR 60,000</div>
                                        <p className="text-blue-300 text-sm mb-6 italic">onwards</p>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            High-energy visuals, creative direction, choreography, artistic post-production.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Important Note */}
                            <div className="mt-12 scroll-animate delay-700">
                                <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-2xl p-6 border border-green-500/40 max-w-4xl mx-auto">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-black text-lg">💡</span>
                                        </div>
                                        <div className="text-sm text-gray-300 leading-relaxed">
                                            <strong className="text-green-400">Note:</strong> The duration and 'onwards' pricing for Short Films and Music Videos reflect the custom effort involved in script development, location scouting, crew, and post-production. We promise, it's worth it.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />
            <CustomHR variant="gradient" />

            {/* The Power of Our Team + AI Section */}
            <section className="py-16 bg-black text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">

                        {/* Section Title */}
                        <div className="text-center mb-12 scroll-animate">
                            <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6 font-title">
                                The Power of Our Team + AI
                            </h2>
                            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
                                While this service is automated for low cost, your content is overseen by the industry's strongest AI production team
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

                            {/* Expert AI Curation */}
                            <div className="bg-gradient-to-br from-red-900/20 to-black/50 rounded-2xl p-8 border border-red-500/30 relative overflow-hidden scroll-animate delay-100">

                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                    <div className="w-full h-full bg-red-500 rounded-full blur-3xl"></div>
                                </div>

                                <div className="relative z-10 text-center">
                                    {/* Icon */}
                                    <div className="w-16 h-16 mx-auto mb-6 bg-red-500 rounded-full flex items-center justify-center">
                                        <span className="text-2xl">🎯</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-red-400 font-title mb-6">Expert AI Curation</h3>

                                    {/* Description */}
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Our team ensures the AI output is creatively compelling and strategically sound.
                                    </p>
                                </div>
                            </div>

                            {/* Rapid Generation */}
                            <div className="bg-gradient-to-br from-yellow-900/20 to-black/50 rounded-2xl p-8 border border-yellow-500/30 relative overflow-hidden scroll-animate delay-200">

                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                    <div className="w-full h-full bg-yellow-500 rounded-full blur-3xl"></div>
                                </div>

                                <div className="relative z-10 text-center">
                                    {/* Icon */}
                                    <div className="w-16 h-16 mx-auto mb-6 bg-yellow-500 rounded-full flex items-center justify-center">
                                        <span className="text-2xl">⚡</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-yellow-400 font-title mb-6">Rapid Generation</h3>

                                    {/* Description */}
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Content created instantly using cutting-edge text-to-video synthesis.
                                    </p>
                                </div>
                            </div>

                            {/* Simple Revisions */}
                            <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-8 border border-orange-500/30 relative overflow-hidden scroll-animate delay-300">

                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                    <div className="w-full h-full bg-orange-500 rounded-full blur-3xl"></div>
                                </div>

                                <div className="relative z-10 text-center">
                                    {/* Icon */}
                                    <div className="w-16 h-16 mx-auto mb-6 bg-orange-500 rounded-full flex items-center justify-center">
                                        <span className="text-2xl">✏️</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-orange-400 font-title mb-6">Simple Revisions</h3>

                                    {/* Description */}
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        One round of minor text or color correction adjustments is included.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Important Note */}
                        <div className="mt-12 scroll-animate delay-400">
                            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-2xl p-6 border border-yellow-500/40 relative overflow-hidden">

                                {/* Warning Icon */}
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-black text-lg">⚠️</span>
                                    </div>

                                    <div className="text-sm text-gray-300 leading-relaxed">
                                        <strong className="text-yellow-400">Note:</strong> To maintain affordable pricing for AI Express packages, this service is automated and does not include traditional production elements. Premium packages (Short Films & Music Videos) include full production teams.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="text-center mt-12 scroll-animate delay-500">
                            <p className="text-gray-300 text-lg mb-6">
                                Ready to experience AI-powered content creation with expert oversight?
                            </p>
                            <button className="bg-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                                Start Your Project Today
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />
            <CustomHR variant="gradient" />

            {/* Sample Advertisement Videos Section */}
            <section className="py-16 bg-black text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">

                        {/* Section Title */}
                        <div className="text-center mb-12 scroll-animate">
                            <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6 font-title">
                                Sample Advertisement Videos
                            </h2>
                            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                                See the quality and creativity of our AI Express productions
                            </p>
                        </div>

                        {/* Video Samples Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

                            {/* Sample 1 - Product Launch (Diamond Package) */}
                            <div className="bg-gradient-to-br from-blue-900/20 to-black/50 rounded-3xl overflow-hidden border border-blue-500/30 relative group scroll-animate delay-100">

                                {/* Package Badge */}
                                <div className="absolute top-4 right-4 z-30">
                                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                                        Diamond Package
                                    </span>
                                </div>

                                {/* Video Container */}
                                <div className="relative aspect-video bg-gray-900 overflow-hidden">
                                    <video
                                        ref={(el) => { window.video1Ref = el; }}
                                        className="w-full h-full object-cover"
                                        muted
                                        loop
                                        playsInline
                                        onMouseEnter={(e) => e.target.play()}
                                        onMouseLeave={(e) => e.target.pause()}
                                    >
                                        <source src={video1} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                    {/* Play Button Overlay */}
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all duration-300"
                                        onClick={() => {
                                            const video = window.video1Ref;
                                            if (video) {
                                                if (video.paused) {
                                                    video.play();
                                                } else {
                                                    video.pause();
                                                }
                                            }
                                        }}
                                    >
                                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 cursor-pointer">
                                            <span className="text-black text-2xl ml-1">▶</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Video Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-blue-400 font-title">
                                        AI Express Sample - Product Launch
                                    </h3>
                                </div>
                            </div>

                            {/* Sample 2 - Brand Awareness (Platinum Package) */}
                            <div className="bg-gradient-to-br from-gray-600/20 to-black/50 rounded-3xl overflow-hidden border border-gray-400/30 relative group scroll-animate delay-200">

                                {/* Package Badge */}
                                <div className="absolute top-4 right-4 z-30">
                                    <span className="bg-gray-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                                        Platinum Package
                                    </span>
                                </div>

                                {/* Video Container */}
                                <div className="relative aspect-video bg-gray-900 overflow-hidden">
                                    <video
                                        ref={(el) => { window.video2Ref = el; }}
                                        className="w-full h-full object-cover"
                                        muted
                                        loop
                                        playsInline
                                        onMouseEnter={(e) => e.target.play()}
                                        onMouseLeave={(e) => e.target.pause()}
                                    >
                                        <source src={video2} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                    {/* Play Button Overlay */}
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all duration-300"
                                        onClick={() => {
                                            const video = window.video2Ref;
                                            if (video) {
                                                if (video.paused) {
                                                    video.play();
                                                } else {
                                                    video.pause();
                                                }
                                            }
                                        }}
                                    >
                                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 cursor-pointer">
                                            <span className="text-black text-2xl ml-1">▶</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Video Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-300 font-title">
                                        AI Express Sample - Brand Awareness
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />

            {/* Start Your Campaign Now! Section */}
            <section className="py-20 bg-black text-white relative overflow-hidden">
                {/* Rotating Background Element */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-96 h-96 bg-gradient-to-br from-orange-500/20 to-orange-900/10 rounded-3xl animate-spin-slow transform rotate-45"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center scroll-animate">
                        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6 font-title">
                            Start Your Campaign Now!
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 font-paragraph">
                            Ready to access world-class creativity instantly?
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="bg-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 flex items-center gap-2">
                                🎬  Order Your Video
                            </button>

                            <button className="bg-transparent border-2 border-orange-500/50 text-orange-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                                💬 Have Questions? Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <CustomHR variant="gradient" />
            <CustomHR variant="gradient" />
        </>
    )
}