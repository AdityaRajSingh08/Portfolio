import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FileText, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onOpenResume }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleResumeClick = () => {
        if (onOpenResume) {
            onOpenResume();
        } else {
            window.dispatchEvent(new CustomEvent('open-resume'));
        }
        setMobileOpen(false);
    };

    return (
        <nav className="navbar glass">
            <div className="nav-brand">
                <span className="gradient-text" style={{ fontWeight: 800, fontSize: '1.45rem', fontFamily: 'Outfit', letterSpacing: '-0.02em' }}>
                    Aditya.
                </span>
            </div>

            <ul className={`nav-links ${mobileOpen ? 'mobile-active' : ''}`}>
                <li><NavLink to="/" end onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
                <li><NavLink to="/about" onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink></li>
                <li><NavLink to="/projects" onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink></li>
                <li><NavLink to="/certificates" onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Certificates</NavLink></li>
                <li><NavLink to="/contact" onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink></li>
                <li className="nav-resume-item">
                    <button onClick={handleResumeClick} className="nav-resume-btn">
                        <FileText size={15} />
                        <span>Resume</span>
                    </button>
                </li>
            </ul>

            <div className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
        </nav>
    );
};

export default Navbar;
