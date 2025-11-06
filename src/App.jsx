import { useState, useEffect } from 'react';
import { Route, Switch } from "wouter";
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { useScrollAnimation } from './hooks/useScrollAnimation.js';

import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

import Home from './pages/home.jsx';
import Services from './pages/services.jsx';
import Academy from './pages/academy.jsx';
import Team from './pages/team.jsx';
import Contact from './pages/contact.jsx';
import About from './pages/about.jsx';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    // Initialize scroll animation
    useScrollAnimation();

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const sections = ['home', 'services', 'about', 'contact'];
    //         const scrollPosition = window.scrollY + 100;

    //         for (const section of sections) {
    //             const element = document.getElementById(section);
    //             if (element) {
    //                 const offsetTop = element.offsetTop;
    //                 const offsetHeight = element.offsetHeight;

    //                 if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
    //                     setActiveSection(section);
    //                     break;
    //                 }
    //             }
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <main>

                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/academy" component={Academy} />
                    <Route path="/team" component={Team} />
                    <Route path="/contact" component={Contact} />
                </Switch>

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