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
import Advertisement from './pages/advertisement.jsx';
import Projects from './pages/projects.jsx';

// Theme Toggle Button Component
function ThemeToggle({ theme, setTheme }) {
    return (
        <button
            className="fixed bottom-[120px] right-6 z-50 bg-orange-500 text-black px-4 py-2 rounded-full font-bold shadow-lg hover:bg-orange-400 transition-all duration-300"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
    );
}

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    // Theme state
    const [theme, setTheme] = useState(() => {
        // Try to use system preference or fallback to dark
        if (typeof window !== "undefined") {
            return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        }
        return 'dark';
    });

    // Apply theme to <html> element
    useEffect(() => {
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Initialize scroll animation
    useScrollAnimation();

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-black transition-colors duration-300">
            <Navbar activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <main>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/academy" component={Academy} />
                    <Route path="/team" component={Team} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/advertisement" component={Advertisement} />
                    <Route path="/projects" component={Projects} />
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

            <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
    );
};

export default App;