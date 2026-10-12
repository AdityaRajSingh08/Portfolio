import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';
import ResumeModal from './ResumeModal';

const Layout = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsResumeOpen(true);
        window.addEventListener('open-resume', handleOpen);
        return () => window.removeEventListener('open-resume', handleOpen);
    }, []);

    return (
        <>
            <ParticleBackground />
            <div className="animated-bg"></div>
            <Navbar onOpenResume={() => setIsResumeOpen(true)} />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer onOpenResume={() => setIsResumeOpen(true)} />
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </>
    );
};

export default Layout;
