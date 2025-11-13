import { useEffect } from 'react';
import { useLocation } from 'wouter';

export const useScrollAnimation = () => {
    const [location] = useLocation();

    useEffect(() => {
        // Reset all animated elements when route changes
        const resetAnimations = () => {
            const animateElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right');
            animateElements.forEach((el) => {
                el.classList.remove('active');
                // Force a reflow to ensure the class removal takes effect
                el.offsetHeight;
            });
        };

        // Small delay to ensure DOM is ready
        const timeoutId = setTimeout(() => {
            resetAnimations();
            
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('active');
                        }
                    });
                },
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                }
            );

            // Observe all elements with scroll-animate class
            const animateElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right');
            animateElements.forEach((el) => {
                observer.observe(el);
                
                // Check if element is already in viewport and trigger animation immediately
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                
                if (rect.top >= 0 && rect.top <= windowHeight * 0.9) {
                    // Small delay for elements already in view to ensure smooth loading
                    setTimeout(() => {
                        el.classList.add('active');
                    }, 100);
                }
            });

            // Store cleanup function
            window.currentScrollObserver = () => {
                animateElements.forEach((el) => observer.unobserve(el));
                observer.disconnect();
            };

        }, 50);

        return () => {
            clearTimeout(timeoutId);
            if (window.currentScrollObserver) {
                window.currentScrollObserver();
                window.currentScrollObserver = null;
            }
        };
    }, [location]); // Re-run when location changes
};
