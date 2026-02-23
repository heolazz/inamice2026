import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Throwback from '../components/sections/Throwback';
import EventProfile from '../components/sections/EventProfile';
import Inamice2026Section from '../components/sections/Inamice2026Section';
import Speakers from '../components/sections/Speakers';
import Rundown from '../components/sections/Rundown';
import Awards from '../components/sections/Awards';
import Articles from '../components/sections/Articles';

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <Throwback />
            <EventProfile />
            <Inamice2026Section />
            <Speakers />
            <Rundown />
            <Awards />
            <Articles />
            <Footer />
        </div>
    );
}
