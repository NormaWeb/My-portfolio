import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import Navbar from '@/components/Navbar';
import NavLink from '@/components/NavLink';
import AboutSection from '@/components/AboutSection';
import ProjectSection from '@/components/ProjectSection';
import BlogSection from '@/components/BlogSection';
// import ProjectCard from '@/components/ProjectCard';
import EmailSection from '@/components/EmailSection';
import Footer from '@/components/Footer';



export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <Navbar/>
            <div class='container mt-24 mx-auto px-12 py-4 mb-0'>
                <HeroSection />
                <AboutSection />
                <ProjectSection />
                <BlogSection />
                {/* <ProjectCard /> */}
                <EmailSection />
                
            </div>
        <Footer />
        </main>
    );
}
