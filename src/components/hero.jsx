import { useState, useEffect } from 'react';

const Hero = () => {
    const [currentWord, setCurrentWord] = useState(0);
    const words = ['Creative', 'Innovative', '100'];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 2000); // Change word every 2 seconds
        
        return () => clearInterval(interval);
    }, []);

    return (
        <section 
            id="home" 
            className="text-white min-h-screen flex items-center relative overflow-hidden"
        >
            {/* Video Background */}
            <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/src/assets/videos/hero.mp4" type="video/mp4" />
                {/* Fallback background image if video fails to load */}
                <div 
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        background: 'url("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
            </video>
            
            {/* Dark overlay for better text readability */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
            
            {/* Content */}
            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        We are {' '}
                        <span 
                            className="text-orange-500 inline-block transition-all duration-500 ease-in-out animate-pulse"
                            key={currentWord}
                        >
                            {words[currentWord]}
                        </span>{' '}
                        
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">If You Think, You are the Game Changer! Always.</p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#services" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition duration-300">Our Services</a>
                        <a href="#contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition duration-300">Get in Touch</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;