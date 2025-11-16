import Hero from '../components/hero';
import Advertisement from '../components/advertisement.jsx';
import LatestWorks from '../components/latestWorks.jsx';
import WebDevelopment from '../components/webDevelopment.jsx';
import Academy from '../components/academy.jsx';
import Testimonials from '../components/testimonials.jsx';
import CustomHR from '../components/customHR.jsx';

import OurStrengths from '../components/strengths.jsx';
import OurConnections from '../components/connections.jsx';

import video1 from '/src/assets/videos/1.mp4';
//import ad8 from '/src/assets/videos/ad/8.mp4';

export default function Home() {
    return (
        <>
            <Hero />

            <CustomHR variant="gradient" />

            {/* <Services /> */}
            <Advertisement />

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

            <CustomHR variant="gradient" />

            <LatestWorks />

            <CustomHR variant="gradient" />

            <WebDevelopment />
            
            <CustomHR variant="gradient" />

            <OurStrengths />

            <CustomHR variant="gradient" />

            <Academy />
            
            <CustomHR variant="gradient" />

            <OurConnections />

            <CustomHR variant="gradient" />

            <Testimonials />

            <CustomHR variant="gradient" />
        </>
    );
}
