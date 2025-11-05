import { useState, useEffect } from 'react';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Services from './components/services.jsx';
import Advertisement from './components/advertisement.jsx';
import LatestWorks from './components/latestWorks.jsx';
import Testimonials from './components/testimonials.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import CustomHR from './components/customHR.jsx';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

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
                
                {/* <div className="bg-gray-100">
                    <Testimonials />
                </div>
                <Contact /> */}
            </main>
            
            <Footer />
        </div>
    );
};

export default App;