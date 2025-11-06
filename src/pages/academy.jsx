import BreadcrumbHero from "../components/breadcrumbHero";
import CustomHR from '../components/customHR.jsx';

import video1 from "/src/assets/videos/3.mp4";
import video2 from "/src/assets/videos/4.mp4";
import video3 from "/src/assets/videos/ad/3.mp4";

import certificate from "/src/assets/images/certificate.png";
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
                            🔥 AI Content Creation + DaVinci Resolve
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-orange-400 mb-8 font-title">
                            Film Making MasterClass 🔥
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto font-paragraph">
                            අපේ කාලයේ Content Creators ලා වෙනුවෙන්ම විශේෂයෙන්ම සැකසූ, AI Prompt Engineering සහ DaVinci Resolve Film Making පිළිබඳ අති නවීන තාක්ෂණික දැනුම සිංහලෙන්ම ඉගෙන ගන්න.
                        </p>
                    </div>

                    {/* Course Features Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 scroll-animate delay-100">
                        {/* Total Lectures */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 text-center">
                            <div className="text-4xl mb-3">📚</div>
                            <h4 className="text-orange-400 font-bold text-sm mb-2">Total Lectures</h4>
                            <p className="text-white text-lg font-bold">සම්පූර්ණ දේශන 15</p>
                        </div>

                        {/* Course Parts */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 text-center">
                            <div className="text-4xl mb-3">📦</div>
                            <h4 className="text-orange-400 font-bold text-sm mb-2">Course Parts</h4>
                            <p className="text-white text-lg font-bold">කොටස් 3</p>
                        </div>

                        {/* Delivery Method */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 text-center">
                            <div className="text-4xl mb-3">💻</div>
                            <h4 className="text-orange-400 font-bold text-sm mb-2">Delivery Method</h4>
                            <p className="text-white text-lg font-bold">Google Drive හරහා</p>
                        </div>

                        {/* Language */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 text-center">
                            <div className="text-4xl mb-3">🌐</div>
                            <h4 className="text-orange-400 font-bold text-sm mb-2">Language</h4>
                            <p className="text-white text-lg font-bold">සිංහල Medium</p>
                        </div>
                    </div>

                    {/* Course Content Title */}
                    <div className="text-center mb-12 scroll-animate delay-200">
                        <h3 className="text-3xl md:text-4xl font-bold text-orange-400 font-title">
                            🎬 පාඨමාලාවේ අන්තර්ගතය 🎬
                        </h3>
                    </div>

                    {/* Course Parts */}
                    <div className="space-y-8">

                        {/* Part 1 - DaVinci Resolve Masterclass */}
                        <div className="bg-gradient-to-br from-orange-900/10 to-black/50 rounded-2xl p-8 border border-orange-500/20 scroll-animate delay-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl">
                                    🎞️
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-orange-400 font-title">Part 1 - DaVinci Resolve Masterclass</h4>
                                    <p className="text-gray-300">Lecture 1 to 6 🔥</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg border border-orange-500/10">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">01</div>
                                    <p className="text-gray-300">DaVinci Resolve Editing වලට සම්පූර්ණ හැඳින්වීමක්.</p>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg border border-orange-500/10">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">02</div>
                                    <p className="text-gray-300">හැඟීම් නිවැරදිව ලබා දීමට Color Grading හැඳින්වීම.</p>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg border border-orange-500/10">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">03</div>
                                    <p className="text-gray-300">ලෝකයේ හොඳම Node Structure සමග Advanced Color Grading.</p>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg border border-orange-500/10">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">04</div>
                                    <p className="text-gray-300">DaVinci Resolve වලින් Cinematic Film Look නිර්මාණය.</p>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg border border-orange-500/10">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">05</div>
                                    <p className="text-gray-300">Fusion Basics - Visual Effects වලට අඩිතාලම.</p>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg border border-orange-500/10">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">06</div>
                                    <p className="text-gray-300">Fairlight සහ FL Studio සමඟින් Audio Engineering.</p>
                                </div>
                            </div>
                        </div>

                        {/* Part 2 - Advanced Prompt Engineering Masterclass */}
                        <div className="bg-gradient-to-br from-orange-900/10 to-black/50 rounded-2xl p-8 border border-orange-500/20 scroll-animate delay-400">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl">
                                    🧠
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-orange-400 font-title">Part 2 - Advanced Prompt Engineering Masterclass</h4>
                                    <p className="text-gray-300">Lecture 7 to 12 🔥</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg border border-orange-500/10">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">07</div>
                                    <p className="text-gray-300">විවිධ Prompt Structures සමග Prompt Engineering හැඳින්වීම.</p>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg border border-orange-500/10">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">08</div>
                                    <p className="text-gray-300">ලෝකයේ හොඳම AI Models වලින් Ultra-Realistic චරිත නිර්මාණය.</p>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg border border-orange-500/10">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">09</div>
                                    <p className="text-gray-300">ඔබ නිර්මාණය කල දර්ශන වීඩියෝ බවට පත් කිරීම.</p>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg border border-orange-500/10">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">10</div>
                                    <p className="text-gray-300">ඔබගේ Video Environment එකට අවශ්‍ය දේ AI මගින් එකතු කිරීම.</p>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg border border-orange-500/10">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">11</div>
                                    <p className="text-gray-300">AI Models වල සහයෙන් නිර්මාණයේ ගුණාත්මක බව වැඩි කිරීම.</p>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg border border-orange-500/10">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">12</div>
                                    <p className="text-gray-300">ඔබගේ නිර්මාණය සඳහා Quality Management උපක්‍රම.</p>
                                </div>
                            </div>
                        </div>

                        {/* Part 3 - AI in Music Production */}
                        <div className="bg-gradient-to-br from-orange-900/10 to-black/50 rounded-2xl p-8 border border-orange-500/20 scroll-animate delay-500">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl">
                                    🎶
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-orange-400 font-title">Part 3 - AI in Music Production</h4>
                                    <p className="text-gray-300">Lecture 13 to 15 🔥</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg border border-orange-500/10">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">13</div>
                                    <p className="text-gray-300">Music Production AI Models පිළිබඳව හැඳින්වීමක්.</p>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg border border-orange-500/10">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">14</div>
                                    <p className="text-gray-300">ඔබට අවශ්‍ය ඕනෑම Genre එකකින් Cover Song එකක් නිර්මාණය (Genres 10ක් මෙහිදී ආවරණය කෙරේ).</p>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg border border-orange-500/10">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">15</div>
                                    <p className="text-gray-300">චරිතයක් ලවා Lip-Synching සමග Visual Song එකක් Produce කිරීම.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />
            <CustomHR variant="gradient" />

            {/* Why This Course is Special Section */}
            <section className="py-12 bg-black text-white">
                <div className="container mx-auto px-6">
                    {/* Section Title */}
                    <div className="text-center mb-16 scroll-animate">
                        <h3 className="text-3xl md:text-4xl font-bold text-orange-400 font-title">
                            🏆 ඇයි මෙම පාඨමාලාව විශේෂ?
                        </h3>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-animate delay-100">

                        {/* Expert Guidance */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 text-center">
                            <div className="text-5xl mb-4">🧑‍🏫</div>
                            <h4 className="text-orange-400 font-bold text-lg mb-3 font-title">Expert උපදේශකත්වය</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                මෙම ක්ෂේත්‍රයේ ප්‍රවීණයෙකු විසින් Real World Projects හරහා සියලු දේ මුල සිට සරලව.
                            </p>
                        </div>

                        {/* Advanced Knowledge */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 text-center">
                            <div className="text-5xl mb-4">💡</div>
                            <h4 className="text-orange-400 font-bold text-lg mb-3 font-title">අති නවීන දැනුම</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Next Level Video Production එකකට අවශ්‍ය දැනට භාවිතාවන හොඳම සහ නවීනතම AI Models ගැන ගැඹුරු දැනුමක්.
                            </p>
                        </div>

                        {/* Practical Training */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 text-center">
                            <div className="text-5xl mb-4">🌍</div>
                            <h4 className="text-orange-400 font-bold text-lg mb-3 font-title">ප්‍රායෝගික පුහුණුව</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                සියලුම දේශන සැබෑ ලෝකයේ Video Productions මත පදනම්ව සිදුකෙරේ.
                            </p>
                        </div>

                        {/* Complete Package */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 text-center">
                            <div className="text-5xl mb-4">💯</div>
                            <h4 className="text-orange-400 font-bold text-lg mb-3 font-title">සම්පූර්ණ පැකේජය</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Video Editing, Color Grading, VFX, Audio Engineering සිට AI Visuals සහ AI Music දක්වා සියල්ල එකම තැනකින්.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />
            <CustomHR variant="gradient" />

            {/* Course Pricing Section */}
            <section className="py-12 bg-black text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">

                        {/* Pricing Title */}
                        <div className="text-center scroll-animate">
                            <h3 className="text-3xl md:text-4xl font-bold text-orange-400 font-title mb-8">
                                💰 පාඨමාලා ගාස්තුව
                            </h3>

                            {/* Main Price */}
                            <div className="mb-8">
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <span className="text-4xl">💎</span>
                                    <span className="text-4xl md:text-5xl font-bold text-orange-400">සම්පූර්ණ පාඨමාලාවම: රු. 6000/-</span>
                                </div>

                                {/* Special Offer */}
                                <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/30 inline-block">
                                    <p className="text-gray-300 text-lg mb-2">
                                        <span className="text-orange-400 font-bold">විශේෂ දීමනාව:</span> ඔබට මෙම ගාස්තුව වාරික දෙකකින් ගෙවීමටද අවස්ථාව ඇත!
                                    </p>
                                    <p className="text-white text-xl font-bold">(රු. 3000 x 2)</p>
                                </div>
                            </div>

                            {/* Value Proposition */}
                            <p className="text-gray-300 text-lg leading-relaxed mb-8 scroll-animate delay-100">
                                මේ මිලට, මේ තරම් වටිනා අන්තර්ගතයක්, ලෝකයේ හොඳම AI Models භාවිතා කරමින් ඔබට වෙන කොහෙන්වත්ම ලැබෙන්නේ නෑ!
                            </p>

                            {/* Course Features Tags */}
                            <div className="flex flex-wrap justify-center gap-3 mb-8 scroll-animate delay-200">
                                <span className="bg-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm">15 Full Lectures</span>
                                <span className="bg-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm">3 Complete Parts</span>
                                <span className="bg-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm">Certificate Included</span>
                                <span className="bg-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm">Lifetime Access</span>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center scroll-animate delay-300">
                                <button className="bg-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 flex items-center gap-2">
                                    ENROLL NOW 🚀
                                </button>

                                <button className="bg-transparent border-2 border-orange-500/50 text-orange-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-black transition-all duration-300 transform hover:scale-105">
                                    GET DETAILS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />
            <CustomHR variant="gradient" />

            {/* Featured Graduate Success Story Section */}
            <section className="py-12 bg-black text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">

                        {/* Section Title */}
                        <div className="text-center mb-12 scroll-animate">
                            <h3 className="text-3xl md:text-4xl font-bold text-white font-title mb-2">
                                Featured Graduate Success Story 🏆
                            </h3>
                            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
                        </div>

                        {/* Success Story Content */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-3xl p-8 border border-orange-500/30 relative overflow-hidden">

                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                <div className="w-full h-full bg-orange-500 rounded-full blur-3xl"></div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">

                                {/* Certificate Image */}
                                <div className="scroll-animate">
                                    <div className="relative">
                                        <div className="absolute -top-4 -right-4 bg-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold transform rotate-12 z-20">
                                            CERTIFIED PRO
                                        </div>
                                        <div className="bg-gradient-to-br from-orange-900/30 to-black/50 p-4 rounded-2xl border border-orange-500/40">
                                            <img
                                                src={certificate}
                                                alt="Dinujaya Akalanka Certificate"
                                                className="w-full h-auto rounded-lg shadow-2xl"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Graduate Information */}
                                <div className="scroll-animate delay-100">
                                    <h4 className="text-4xl md:text-5xl font-bold text-orange-400 mb-2 font-title">
                                        Dinujaya Akalanka
                                    </h4>
                                    <p className="text-xl text-gray-300 mb-6">
                                        Professional Video Editor & Colorist
                                    </p>

                                    {/* Testimonial */}
                                    <div className="bg-black/30 rounded-xl p-6 border border-orange-500/20 mb-6">
                                        <p className="text-gray-300 italic text-lg leading-relaxed">
                                            "100 Academy changed my life! මම මීට කලින් නවක professional level වෙන තනතුරක් නිසා full-time video editor වෙන්නට සිත් ගානි කරමින් work කරන ගම freelance projects හොඳින් handle කරන්නට නිසා Best decision I ever made!"
                                        </p>
                                    </div>

                                    {/* Skills Mastered */}
                                    <div className="mb-6">
                                        <h5 className="text-orange-400 font-bold text-lg mb-4 font-title">SKILLS MASTERED:</h5>
                                        <div className="grid grid-cols-2 gap-3">
                                            <span className="bg-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm text-center">DaVinci Resolve Pro</span>
                                            <span className="bg-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm text-center">Color Grading</span>
                                            <span className="bg-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm text-center">AI Prompting</span>
                                            <span className="bg-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm text-center">Music Production</span>
                                        </div>
                                    </div>

                                    {/* Call to Action */}
                                    <button className="bg-orange-500 text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                                        Join This Success Story
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />
            <CustomHR variant="gradient" />

            {/* What Our Students Say Section */}
            <section className="py-12 bg-black text-white">
                <div className="container mx-auto px-6">
                    
                    {/* Section Title */}
                    <div className="text-center mb-12 scroll-animate">
                        <h3 className="text-3xl md:text-4xl font-bold text-white font-title mb-4">
                            What Our Students Say 💬
                        </h3>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Real feedback from real students who transformed their careers
                        </p>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {/* Testimonial 1 - Dinujaya Akalanka */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/30 relative scroll-animate delay-100">
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                <span className="text-yellow-400 text-xl">⭐</span>
                                <span className="text-yellow-400 text-xl">⭐</span>
                                <span className="text-yellow-400 text-xl">⭐</span>
                                <span className="text-yellow-400 text-xl">⭐</span>
                                <span className="text-yellow-400 text-xl">⭐</span>
                            </div>
                            
                            {/* Quote */}
                            <p className="text-gray-300 italic text-base leading-relaxed mb-6">
                                "මම මේ course එක කලාට පස්සේ මගේ dream job එක හම්බුනා! AI tools සහ DaVinci Resolve වලින් professional level work කරන්න පුලුවන් වුණා. Best investment ever!"
                            </p>
                            
                            {/* Profile */}
                            <div className="flex items-center gap-3 border-t border-orange-500/20 pt-4">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                    <span className="text-black font-bold text-lg">D</span>
                                </div>
                                <div>
                                    <h4 className="text-orange-400 font-bold">Dinujaya Akalanka</h4>
                                    <p className="text-gray-400 text-sm">Video Editor @ Production House</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 - Sachini Perera */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/30 relative scroll-animate delay-200">
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                <span className="text-yellow-400 text-xl">⭐</span>
                                <span className="text-yellow-400 text-xl">⭐</span>
                                <span className="text-yellow-400 text-xl">⭐</span>
                                <span className="text-yellow-400 text-xl">⭐</span>
                                <span className="text-yellow-400 text-xl">⭐</span>
                            </div>
                            
                            {/* Quote */}
                            <p className="text-gray-300 italic text-base leading-relaxed mb-6">
                                "The practical approach and hands-on projects made all the difference. Within 3 months, I was freelancing and earning! Mayura sir's guidance was incredible."
                            </p>
                            
                            {/* Profile */}
                            <div className="flex items-center gap-3 border-t border-orange-500/20 pt-4">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                    <span className="text-black font-bold text-lg">S</span>
                                </div>
                                <div>
                                    <h4 className="text-orange-400 font-bold">Sachini Perera</h4>
                                    <p className="text-gray-400 text-sm">Freelance Content Creator</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 - Kavindu Silva */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-black/50 rounded-2xl p-6 border border-orange-500/30 relative scroll-animate delay-300">
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                <span className="text-yellow-400 text-xl">⭐</span>
                                <span className="text-yellow-400 text-xl">⭐</span>
                                <span className="text-yellow-400 text-xl">⭐</span>
                                <span className="text-yellow-400 text-xl">⭐</span>
                                <span className="text-yellow-400 text-xl">⭐</span>
                            </div>
                            
                            {/* Quote */}
                            <p className="text-gray-300 italic text-base leading-relaxed mb-6">
                                "AI Prompt Engineering එක ගැන මෙච්චර detail වලින් කියලා දෙන තැන වෙන තැනක නෑ. මේක හරිම value for money course එකක්. Highly recommended!"
                            </p>
                            
                            {/* Profile */}
                            <div className="flex items-center gap-3 border-t border-orange-500/20 pt-4">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                    <span className="text-black font-bold text-lg">K</span>
                                </div>
                                <div>
                                    <h4 className="text-orange-400 font-bold">Kavindu Silva</h4>
                                    <p className="text-gray-400 text-sm">AI Content Specialist</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-12 scroll-animate delay-400">
                        <p className="text-gray-300 text-lg mb-6">
                            ඔබත් අපගේ successful students ලාගේ කතාව අහන්න කැමතිද?
                        </p>
                        <button className="bg-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                            Start Your Success Story Today 🚀
                        </button>
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
                                            {/* Placeholder for instructor photo - you can replace this with actual image */}
                                            <img src={mayura} alt="mayura" className="h-full w-full object-cover" />
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
                                        CEO and Professional Level Mentor at 100 International with deep expertise in AI-powered creative production, film making, and content creation. With years of industry experience, Mayura brings real-world knowledge and cutting-edge techniques to help you master the latest tools and workflows.
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
                    <div className="w-full h-full bg-black rounded-full blur-3xl"></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        
                        {/* Main Heading */}
                        <div className="scroll-animate">
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-title">
                                ENROLL IN 100 ACADEMY TODAY
                            </h2>
                            <p className="text-xl md:text-2xl mb-12 font-paragraph">
                                Transform Your Creative Skills with AI-Powered Learning
                            </p>
                        </div>

                        {/* Pricing Options */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 scroll-animate delay-100">
                            
                            {/* Full Payment Option */}
                            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-black/30 hover:bg-black/30 transition-all duration-300">
                                <h3 className="text-2xl font-boldmb-4">Full Payment</h3>
                                <div className="text-4xl font-boldmb-4">LKR 6000</div>
                                <p className="mb-6">Complete course access immediately</p>
                                <button className="bg-black text-orange-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 w-full">
                                    ENROLL NOW - LKR 6000
                                </button>
                            </div>

                            {/* Installment Option */}
                            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-black/30 hover:bg-black/30 transition-all duration-300">
                                <h3 className="text-2xl font-boldmb-4">Pay in 2 Installments</h3>
                                <div className="text-4xl font-boldmb-4">LKR 3000 x 2</div>
                                <p className="mb-6">Flexible payment option available</p>
                                <button className="bg-black text-orange-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 w-full">
                                    Choose Installments
                                </button>
                            </div>
                        </div>

                        {/* Bottom Text */}
                        <div className="scroll-animate delay-200">
                            <p className="text-lg mb-8">
                                Or pay in 2 installments of LKR 3000 each
                            </p>
                            
                            {/* Course Features */}
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                <span className="bg-black text-orange-400 px-6 py-3 rounded-full font-bold text-sm">15 Complete Lectures</span>
                                <span className="bg-black text-orange-400 px-6 py-3 rounded-full font-bold text-sm">3 Comprehensive Parts</span>
                                <span className="bg-black text-orange-400 px-6 py-3 rounded-full font-bold text-sm">Lifetime Access</span>
                                <span className="bg-black text-orange-400 px-6 py-3 rounded-full font-bold text-sm">Certificate Included</span>
                            </div>

                            {/* Contact Info */}
                            <p className="text-lg">
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