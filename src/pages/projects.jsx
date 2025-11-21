import BreadcrumbHero from "../components/breadcrumbHero";
import hero1 from "../../src/assets/images/webhero1.jpg";
import hero2 from "../../src/assets/images/webhero2.jpg";
import hero3 from "../../src/assets/videos/5.mp4";
import CustomHR from '../components/customHR.jsx';

import thumb1 from "../../src/assets/images/thumbnails/projects/1.jpg";
import thumb2 from "../../src/assets/images/thumbnails/projects/2.jpg";
import thumb3 from "../../src/assets/images/thumbnails/projects/3.jpg";
import thumb4 from "../../src/assets/images/thumbnails/projects/4.jpg";

import { useState } from 'react';

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [playingVideo, setPlayingVideo] = useState(null);

    // Project data with Google Drive video IDs
    const projects = [
        {
            id: 1,
            title: "Nexus Events - Premium Event Management",
            category: "advertising",
            type: "video",
            videoId: "1O-Ap5Tsf-F_brq7gsG7FmIUuKmrheJmv",
            description: "A sophisticated brand campaign for Nexus Events showcasing their expertise as Sri Lanka's premier event management company. From intimate gatherings to grand celebrations, this advertisement highlights their commitment to creating unforgettable experiences with meticulous attention to detail and world-class service standards.",
            thumb: thumb1,
            client: "Nexus Events",
            duration: "2:30",
            tags: ["Event Management", "Premium Branding", "Corporate"]
        },
        {
            id: 2,
            title: "100 International - DaVinci Resolve Masterclass",
            category: "advertising",
            type: "video",
            videoId: "11NeNSssxUVWmvz_rK5oYikAnQAPkw9-g",
            description: "An engaging promotional video for 100 International's comprehensive DaVinci Resolve course. This advertisement demonstrates the power of professional video editing and color grading, showcasing real student transformations and highlighting how our expert-led training program can elevate creative skills to industry standards.",
            thumb: thumb2,
            client: "100 International",
            duration: "3:45",
            tags: ["Education", "DaVinci Resolve", "Course Promotion"]
        },
        {
            id: 3,
            title: "Discover Sri Lanka - Tourism Campaign",
            category: "advertising",
            type: "video",
            videoId: "191X7fN1hQ1ADxWNILMjdq7t_eQJsA9FB",
            description: "A breathtaking tourism advertisement capturing the essence of Sri Lanka's natural beauty and rich cultural heritage. From pristine beaches and ancient temples to lush tea plantations and vibrant wildlife, this cinematic journey invites travelers to experience the pearl of the Indian Ocean and create memories that last a lifetime.",
            thumb: thumb3,
            client: "Sri Lanka Tourism Board",
            duration: "8:15",
            tags: ["Tourism", "Destination Marketing", "Cultural Heritage"]
        },
        {
            id: 4,
            title: "100 International - Creative Music Video",
            category: "music-video",
            type: "video",
            videoId: "1W5hhRLnao22SP_ag9IwOEMXPqU2EoKGK",
            description: "An innovative music video production showcasing 100 International's creative prowess in combining AI technology with traditional filmmaking. This dynamic visual narrative demonstrates our ability to blend cutting-edge techniques with artistic vision, featuring synchronized choreography, stunning visual effects, and seamless transitions that elevate the musical experience.",
            thumb: thumb4,
            client: "100 International",
            duration: "1:45",
            tags: ["Music Video", "AI Technology", "Creative Production"]
        }
    ];

    const categories = [
        { key: 'all', label: 'All Projects', icon: '📁' },
        { key: 'advertising', label: 'Advertising', icon: '📺' },
        { key: 'music-video', label: 'Music Videos', icon: '🎵' },
        // { key: 'short-film', label: 'Short Films', icon: '🎬' }
    ];

    const filteredProjects = selectedCategory === 'all' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    const handleVideoPlay = (projectId) => {
        setPlayingVideo(playingVideo === projectId ? null : projectId);
    };

    return (
        <>
            <BreadcrumbHero
                slides={[
                    { type: 'image', src: hero1 },
                    { type: 'image', src: hero2 },
                    { type: 'video', src: hero3 }
                ]}
                title="PROJECTS PORTFOLIO"
                subtitle="Our Recent Works and Projects"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Projects' }
                ]}
                autoplayDelay={3000}
            />

            <CustomHR variant="gradient" />
            <CustomHR variant="gradient" />

            {/* Portfolio Section */}
            <section className="py-16 dark:bg-black dark:text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">

                        {/* Section Title */}
                        <div className="text-center mb-12 scroll-animate">
                            <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6 font-title">
                                🎬 Featured Projects
                            </h2>
                            <p className="dark:text-gray-300 text-black text-lg max-w-3xl mx-auto leading-relaxed">
                                Explore our diverse portfolio of creative projects, from AI-powered advertisements 
                                to cinematic productions that showcase our expertise and innovation.
                            </p>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-animate delay-100">
                            {categories.map((category) => (
                                <button
                                    key={category.key}
                                    onClick={() => setSelectedCategory(category.key)}
                                    className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                                        selectedCategory === category.key
                                            ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/25'
                                            : 'dark:bg-gradient-to-br from-orange-900/20 to-black/50 border border-orange-500/30 text-orange-400 hover:border-orange-500/50'
                                    }`}
                                >
                                    <span>{category.icon}</span>
                                    {category.label}
                                </button>
                            ))}
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 scroll-animate delay-200">
                            {filteredProjects.map((project) => (
                                <div 
                                    key={project.id}
                                    className="dark:bg-gradient-to-br from-orange-900/20 to-black/50 rounded-3xl overflow-hidden border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 group"
                                >
                                    {/* Video Container */}
                                    <div className="relative aspect-video bg-gray-900 overflow-hidden">
                                        
                                        {/* Google Drive Video Embed */}
                                        {playingVideo === project.id ? (
                                            <iframe
                                                src={`https://drive.google.com/file/d/${project.videoId}/preview`}
                                                width="100%"
                                                height="100%"
                                                allow="autoplay"
                                                className="absolute inset-0"
                                                title={project.title}
                                            />
                                        ) : (
                                            <>
                                                {/* Video Thumbnail */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-red-800 to-gray-900 flex items-center justify-center" style={{backgroundImage: `url(${project.thumb})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                                    {/* <div className="text-center">
                                                        <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                                                            <span className="text-3xl">🎬</span>
                                                        </div>
                                                        <p className="text-gray-400 text-sm">Click to play video</p>
                                                    </div> */}
                                                </div>

                                                {/* Play Button Overlay */}
                                                <div
                                                    className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all duration-300 cursor-pointer"
                                                    onClick={() => handleVideoPlay(project.id)}
                                                >
                                                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                                                        <span className="text-black text-2xl ml-1">▶</span>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* Project Category Badge */}
                                        <div className="absolute top-4 right-4 z-30">
                                            <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase">
                                                {categories.find(cat => cat.key === project.category)?.label || project.category}
                                            </span>
                                        </div>

                                        {/* Duration Badge */}
                                        <div className="absolute bottom-4 right-4 z-30">
                                            <span className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-bold">
                                                {project.duration}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-orange-400 font-title mb-2">
                                                    {project.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm">
                                                    Client: {project.client}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <p className="dark:text-gray-300 text-black text-sm leading-relaxed mb-4">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, index) => (
                                                <span 
                                                    key={index}
                                                    className="bg-orange-500/20 text-orange-600 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        {/* <div className="flex gap-3">
                                            <button 
                                                onClick={() => handleVideoPlay(project.id)}
                                                className="flex-1 bg-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-orange-400 transition-all duration-300 transform hover:scale-105"
                                            >
                                                {playingVideo === project.id ? 'Close Video' : 'Watch Project'}
                                            </button>
                                            <button className="bg-transparent border border-orange-500/50 text-orange-400 px-4 py-2 rounded-full font-bold text-sm hover:bg-orange-500 hover:text-black transition-all duration-300">
                                                View Details
                                            </button>
                                        </div> */}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 scroll-animate delay-300">
                            <div className="text-center p-6 dark:bg-gradient-to-br from-orange-900/20 to-black/50 rounded-xl border border-orange-500/30">
                                <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
                                <p className="dark:text-gray-300 text-black text-sm">Projects Completed</p>
                            </div>
                            <div className="text-center p-6 dark:bg-gradient-to-br from-blue-900/20 to-black/50 rounded-xl border border-blue-500/30">
                                <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
                                <p className="dark:text-gray-300 text-black text-sm">Happy Clients</p>
                            </div>
                            <div className="text-center p-6 dark:bg-gradient-to-br from-green-900/20 to-black/50 rounded-xl border border-green-500/30">
                                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                                <p className="dark:text-gray-300 text-black text-sm">Satisfaction Rate</p>
                            </div>
                            <div className="text-center p-6 dark:bg-gradient-to-br from-purple-900/20 to-black/50 rounded-xl border border-purple-500/30">
                                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                                <p className="dark:text-gray-300 text-black text-sm">Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CustomHR variant="gradient" />

            {/* Call to Action Section */}
            <section className="py-16 dark:bg-black dark:text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center scroll-animate">
                        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6 font-title">
                            Ready to Start Your Project?
                        </h2>
                        <p className="dark:text-gray-300 text-black text-lg mb-8 font-paragraph">
                            Let's collaborate and bring your creative vision to life with our expertise and innovation.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="bg-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 flex items-center gap-2">
                                🚀 Start Your Project
                            </button>

                            <button className="bg-transparent border-2 border-orange-500/50 text-orange-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                                💬 Discuss Your Ideas
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