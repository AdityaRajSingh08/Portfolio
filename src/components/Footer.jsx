import { Github, Linkedin, Heart, FileText } from 'lucide-react';
import './Footer.css';

const Footer = ({ onOpenResume }) => {
    const handleResume = () => {
        if (onOpenResume) {
            onOpenResume();
        } else {
            window.dispatchEvent(new CustomEvent('open-resume'));
        }
    };

    return (
        <footer className="footer glass">
            <div className="footer-content">
                <div className="footer-brand">
                    <span className="gradient-text" style={{ fontWeight: 800, fontSize: '1.5rem', fontFamily: 'Outfit' }}>Aditya.</span>
                    <p className="footer-desc">
                        Performance-driven Software Engineer specialized in MERN, Cloud Architectures, and Scalable Backend Systems.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Navigate</h4>
                    <ul>
                        <li><button onClick={() => document.getElementById('home-section')?.scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
                        <li><button onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
                        <li><button onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button></li>
                        <li><button onClick={handleResume}>View Resume</button></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h4>Connect</h4>
                    <div className="social-icons">
                        <a href="https://github.com/AdityaRajSingh08" target="_blank" rel="noreferrer" title="GitHub"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/adi-singh001" target="_blank" rel="noreferrer" title="LinkedIn"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Designed & Built with <Heart size={14} className="text-accent" style={{ display: 'inline', verticalAlign: 'middle', margin: '0 4px' }} /> by Aditya Raj Singh &copy; 2026</p>
            </div>
        </footer>
    );
};

export default Footer;
