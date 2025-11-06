import BreadcrumbHero from "../components/breadcrumbHero";
import hero1 from "../../src/assets/images/webhero1.jpg";
import hero2 from "../../src/assets/images/webhero2.jpg";
import hero3 from "../../src/assets/videos/5.mp4";

export default function Services() {
    return (
        <BreadcrumbHero
            slides={[
                { type: 'image', src: hero1, alt: 'Team working' },
                { type: 'image', src: hero2 },
                { type: 'video', src: hero3 }
            ]}
            title="WEB DEVELOPMENT"
            subtitle="Modern web applications with cutting-edge technologies"
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Services' }
            ]}
            autoplayDelay={3000}
        />
    )
};