import BreadcrumbHero from "../components/breadcrumbHero";
import CustomHR from '../components/customHR.jsx';

import video1 from "/src/assets/videos/3.mp4";
import video2 from "/src/assets/videos/4.mp4";
import video3 from "/src/assets/videos/ad/3.mp4";

import mayura from "/src/assets/images/mayura.png";

export default function Academy() {
    return (
        <>
            <BreadcrumbHero
                slides={[
                    { type: 'video', src: video1 },
                    { type: 'video', src: video2 },
                    { type: 'video', src: video3 }
                ]}
                title="AI Content Creation + DaVinci Resolve Masterclass"
                subtitle="HANDS-ON PRACTICAL TRAINING"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Academy' }
                ]}
                autoplayDelay={3000}
            />

            {/* Course Overview Section */}
            <section className="py-12 bg-black text-white">
                <div className="container mx-auto px-6">
                    {/* Main Course Title */}
                    <div className="text-center mb-16 scroll-animate">
                        <h2 className="text-4xl md:text-6xl font-bold text-orange-400 mb-6 font-title">
                            Advanced Prompt Engineering and DaVinci Resolve Film Making
                        </h2>
                        <h4 className="text-2xl md:text-4xl font-bold text-orange-400 mb-8 font-title">
                            Our World-Class Promise
                        </h4>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto font-paragraph">
                            We provide training at the highest global standard. Our mission is to transform you into
                            a top-tier expert by teaching you the world's most advanced, AI-driven creative techniques.
                            This is where you master the future of media.
                        </p>
                    </div>

                    {/* Course Programs */}
                    <div className="space-y-8 max-w-6xl mx-auto">

                        {/* The Foundation: AI Creator */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-8 border border-orange-500/30 scroll-animate delay-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl">
                                    🎯
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-orange-400 font-title">The Foundation: AI Creator</h3>
                                    <div className="flex items-center gap-4 mt-2">
                                        <span className="text-orange-300 text-xl font-bold">Rs. 150,000</span>
                                        <span className="text-gray-300">•</span>
                                        <span className="text-gray-300">6 Months Duration</span>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-gray-300 text-lg leading-relaxed">
                                This is your gateway into the world's most advanced creative field. This 6-month program is an intense boot camp 
                                focused on building an elite foundation. You will master the core of AI Prompt Engineering, learning to communicate 
                                with, command, and control AI models to generate exceptional creative assets. We then teach you to professionally 
                                edit and finalize your AI-generated visions using DaVinci Resolve.
                            </p>
                        </div>

                        {/* The Advanced: AI Visionary */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-8 border border-orange-500/30 scroll-animate delay-200">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl">
                                    🚀
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-orange-400 font-title">The Advanced: AI Visionary</h3>
                                    <div className="flex items-center gap-4 mt-2">
                                        <span className="text-orange-300 text-xl font-bold">Rs. 250,000</span>
                                        <span className="text-gray-300">•</span>
                                        <span className="text-gray-300">6 Months Duration</span>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-gray-300 text-lg leading-relaxed">
                                This program is where you achieve true mastery. We move beyond simple commands into the complex architecture 
                                of advanced AI prompting. You will learn to architect sophisticated, multi-layered prompts, chain AI models, 
                                and pioneer new creative techniques. Your DaVinci Resolve skills will be elevated to a world-class professional 
                                level, mastering advanced color and effects to bring your most visionary AI-driven projects to life.
                            </p>
                        </div>

                        {/* The Diploma: AI Master */}
                        <div className="bg-gradient-to-br from-orange-900/30 to-black/50 rounded-2xl p-8 border border-orange-500/50 relative overflow-hidden scroll-animate delay-300">
                            {/* Premium Badge */}
                            <div className="absolute top-4 right-4 bg-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold transform rotate-12">
                                FLAGSHIP PROGRAM
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl">
                                    👑
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-orange-400 font-title">The Diploma: AI Master</h3>
                                    <div className="flex items-center gap-4 mt-2">
                                        <span className="text-orange-300 text-2xl font-bold">Rs. 500,000</span>
                                        <span className="text-gray-300">•</span>
                                        <span className="text-gray-300">18 Months Duration</span>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-gray-300 text-lg leading-relaxed">
                                This 18-month program is our flagship, designed to forge world-leading experts. It combines the entire Foundation 
                                and Advanced AI curriculum, then expands it with elite, strategic modules. You will learn industry secrets, 
                                master complex AI-driven project workflows from concept to delivery, and build an industry-defining portfolio. 
                                This is the ultimate, all-in-one path to becoming a top-tier professional in AI-powered filmmaking.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />
            <CustomHR variant="gradient" />

            {/* Why Choose Our Academy Section */}
            <section className="py-12 bg-black text-white">
                <div className="container mx-auto px-6">
                    {/* Section Title */}
                    <div className="text-center mb-16 scroll-animate">
                        <h3 className="text-3xl md:text-4xl font-bold text-orange-400 font-title">
                            🏆 Why Choose 100 Academy?
                        </h3>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-animate delay-100">

                        {/* Expert Guidance */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 text-center">
                            <div className="text-5xl mb-4">🧑‍🏫</div>
                            <h4 className="text-orange-400 font-bold text-lg mb-3 font-title">Expert Guidance</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Learn from industry professionals with real-world experience in AI-powered creative production.
                            </p>
                        </div>

                        {/* Advanced Knowledge */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 text-center">
                            <div className="text-5xl mb-4">💡</div>
                            <h4 className="text-orange-400 font-bold text-lg mb-3 font-title">Cutting-Edge Curriculum</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Master the latest AI models and techniques used by top professionals in the creative industry.
                            </p>
                        </div>

                        {/* Practical Training */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 text-center">
                            <div className="text-5xl mb-4">🌍</div>
                            <h4 className="text-orange-400 font-bold text-lg mb-3 font-title">Hands-On Projects</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Apply your skills to real-world projects and build a professional portfolio that stands out.
                            </p>
                        </div>

                        {/* Complete Package */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 text-center">
                            <div className="text-5xl mb-4">💯</div>
                            <h4 className="text-orange-400 font-bold text-lg mb-3 font-title">Complete Solution</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                From AI prompt engineering to professional video editing - everything you need in one place.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />
            <CustomHR variant="gradient" />

            {/* Meet Your Lead Instructor Section */}
            <section className="py-12 bg-black text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">

                        {/* Section Title */}
                        <div className="text-center mb-12 scroll-animate">
                            <h3 className="text-3xl md:text-4xl font-bold text-white font-title mb-4">
                                Meet Your Lead Instructor 👨‍🏫
                            </h3>
                            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
                        </div>

                        {/* Instructor Profile */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-3xl p-8 border border-orange-500/30 relative overflow-hidden">

                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
                                <div className="w-full h-full bg-orange-500 rounded-full blur-3xl"></div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">

                                {/* Instructor Image */}
                                <div className="scroll-animate">
                                    <div className="bg-gradient-to-br from-orange-900/30 to-black/50 rounded-2xl p-4 border border-orange-500/40">
                                        <div className="w-full aspect-square bg-gray-700 rounded-xl flex items-center justify-center">
                                            <img src={mayura} alt="mayura" className="h-full w-full object-cover rounded-xl" />
                                        </div>
                                    </div>
                                </div>

                                {/* Instructor Information */}
                                <div className="scroll-animate delay-100">
                                    <div className="mb-4">
                                        <span className="bg-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                                            Lead Instructor & CEO
                                        </span>
                                    </div>

                                    <h4 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6 font-title">
                                        Mayura Athukorala
                                    </h4>

                                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                        CEO and Professional Level Mentor at 100 International with deep expertise in AI-powered creative production, 
                                        film making, and content creation. With years of industry experience, Mayura brings real-world knowledge and 
                                        cutting-edge techniques to help you master the latest tools and workflows in AI-driven creative fields.
                                    </p>

                                    {/* Credentials/Stats */}
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div className="text-center p-4 bg-black/30 rounded-lg border border-orange-500/20">
                                            <div className="text-3xl text-orange-400 font-bold">5+</div>
                                            <p className="text-gray-300 text-sm">Years Experience</p>
                                        </div>
                                        <div className="text-center p-4 bg-black/30 rounded-lg border border-orange-500/20">
                                            <div className="text-3xl text-orange-400 font-bold">500+</div>
                                            <p className="text-gray-300 text-sm">Students Trained</p>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <button className="bg-orange-500 text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                                        Start Learning with Mayura
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />
            <CustomHR variant="gradient" />

            {/* Final Enrollment CTA Section */}
            <section className="py-16 relative bg-black text-white overflow-hidden">

                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
                    <div className="w-full h-full bg-orange-500 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">

                        {/* Main Heading */}
                        <div className="scroll-animate">
                            <h2 className="text-4xl md:text-6xl font-bold text-orange-400 mb-6 font-title">
                                Transform Your Future with AI
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-paragraph">
                                Choose Your Path to AI Mastery
                            </p>
                        </div>

                        {/* Program Selection Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 scroll-animate delay-100">

                            {/* Foundation Program */}
                            <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300">
                                <h3 className="text-xl font-bold text-orange-400 mb-2">Foundation</h3>
                                <div className="text-2xl font-bold text-white mb-2">Rs. 150,000</div>
                                <p className="text-gray-300 text-sm mb-4">6 Months • AI Creator</p>
                                <button className="bg-orange-500 text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 w-full">
                                    ENROLL NOW
                                </button>
                            </div>

                            {/* Advanced Program */}
                            <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300">
                                <h3 className="text-xl font-bold text-orange-400 mb-2">Advanced</h3>
                                <div className="text-2xl font-bold text-white mb-2">Rs. 250,000</div>
                                <p className="text-gray-300 text-sm mb-4">6 Months • AI Visionary</p>
                                <button className="bg-orange-500 text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 w-full">
                                    ENROLL NOW
                                </button>
                            </div>

                            {/* Master Diploma */}
                            <div className="bg-gradient-to-br from-orange-900/30 to-black/50 rounded-2xl p-6 border border-orange-500/50 hover:border-orange-500/70 transition-all duration-300 relative">
                                <div className="absolute -top-2 -right-2 bg-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                                    FLAGSHIP
                                </div>
                                <h3 className="text-xl font-bold text-orange-400 mb-2">Master Diploma</h3>
                                <div className="text-2xl font-bold text-white mb-2">Rs. 500,000</div>
                                <p className="text-gray-300 text-sm mb-4">18 Months • AI Master</p>
                                <button className="bg-orange-500 text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 w-full">
                                    ENROLL NOW
                                </button>
                            </div>
                        </div>

                        {/* Bottom Text */}
                        <div className="scroll-animate delay-200">
                            <p className="text-lg text-gray-300 mb-8">
                                Ready to master the future of creative production? Choose your program and start your journey today.
                            </p>

                            {/* Contact Info */}
                            <p className="text-lg text-gray-300">
                                Questions? Contact us for more details about enrollment and course access.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />
            <CustomHR variant="gradient" />
        </>
    );
}