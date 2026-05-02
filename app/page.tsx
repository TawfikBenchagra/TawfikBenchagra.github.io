import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col overflow-hidden bg-slate-950">
            <Navbar />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
