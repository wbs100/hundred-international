import { useState, useEffect } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Services from './components/services.jsx';
import Advertisement from './components/advertisement.jsx';
import LatestWorks from './components/latestWorks.jsx';
import WebDevelopment from './components/webDevelopment.jsx';
import Academy from './components/academy.jsx';
import Testimonials from './components/testimonials.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import CustomHR from './components/customHR.jsx';
import { useScrollAnimation } from './hooks/useScrollAnimation.js';
import video1 from '/src/assets/videos/1.mp4';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    
    // Initialize scroll animation
    useScrollAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'services', 'about', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            
            <main>
                <Hero />
                
                <CustomHR variant="gradient"/>
                
                {/* <Services /> */}
                <Advertisement />
                
                <CustomHR variant="gradient"/>
                
                <LatestWorks />
                
                <CustomHR variant="gradient"/>
                
                <WebDevelopment />
                
                <CustomHR variant="gradient"/>
                
                <Academy />
                
                <CustomHR variant="gradient" />

                <div className="bg-gray-100 h-dvh relative overflow-hidden">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover z-20"
                    >
                        <source src={video1} type="video/mp4" />
                        {/* Fallback background image if video fails to load */}
                        <div
                            className="absolute top-0 left-0 w-full h-full"
                            style={{
                                background: 'url("/images/prod-1.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        />
                    </video>
                </div>
                
                <Testimonials />
                
                <CustomHR variant="gradient"/>
                
                {/* <Contact /> */}
            </main>
            
            <Footer />
            
            <FloatingWhatsApp 
                phoneNumber="94750605203"
                accountName="100 International"
                avatar="/logo.png"
                statusMessage="Typically replies within 1 hour"
                chatMessage="Hello! 👋 How can we help you?"
                placeholder="Type a message..."
                allowClickAway={true}
                notification={true}
                notificationDelay={60}
            />
        </div>
    );
};

export default App;