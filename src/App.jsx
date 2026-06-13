import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16 md:pt-20">
                <Hero />
                <Experience />
                <Education />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;