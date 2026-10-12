import { useState } from 'react';
import { Terminal, Code2, Rocket, FileText, Star, GitMerge, Award, Sparkles } from 'lucide-react';
import './Home.css';
import About from './About';
import Projects from './Projects';
import Certificates from './Certificates';
import Contact from './Contact';
import ResumeModal from '../components/ResumeModal';

const Home = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    return (
        <>
            <div className="home-container" id="home-section">
                <div className="hero-content">
                    <div className="badge glass">
                        <Terminal size={16} className="text-accent" />
                        <span>B.Tech CSE @ Lovely Professional University &bull; CGPA: 7.06</span>
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="animated-name" style={{ display: 'inline-block' }}>Aditya Raj Singh</span> <br />
                    </h1>

                    <p className="hero-subtitle">
                        {"A passionate Computer Science engineer and 5-Star HackerRank Programmer focused on Scalable Backend Systems, Cloud Architectures, and AI-Driven Applications."
                            .split(' ')
                            .map((word, index) => (
                                <span
                                    key={index}
                                    className="fade-up-word"
                                    style={{ animationDelay: `${0.3 + index * 0.08}s` }}
                                >
                                    {word}{' '}
                                </span>
                            ))}
                    </p>

                    <div className="hero-cta">
                        <button
                            onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn btn-primary"
                        >
                            <Code2 size={20} />
                            View Projects
                        </button>

                        <button
                            onClick={() => setIsResumeOpen(true)}
                            className="btn btn-secondary glass"
                        >
                            <FileText size={20} />
                            View CV
                        </button>

                        <a
                            href="/Aditya_Raj_Singh_CV.html"
                            download="Aditya_Raj_Singh_CV.html"
                            className="btn btn-secondary glass"
                        >
                            <FileText size={20} />
                            Download CV
                        </a>

                        <button
                            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn btn-secondary glass"
                        >
                            <Rocket size={20} />
                            Let's Talk
                        </button>
                    </div>

                    <div className="quick-highlights">
                        <div className="highlight-item glass">
                            <Star className="text-accent" size={24} />
                            <div className="highlight-text">
                                <span className="highlight-num">5-Star</span>
                                <span className="highlight-label">HackerRank (Java & C++)</span>
                            </div>
                        </div>

                        <div className="highlight-item glass">
                            <Award className="text-accent" size={24} />
                            <div className="highlight-text">
                                <span className="highlight-num">7.06</span>
                                <span className="highlight-label">Current B.Tech CGPA</span>
                            </div>
                        </div>

                        <div className="highlight-item glass">
                            <GitMerge className="text-accent" size={24} />
                            <div className="highlight-text">
                                <span className="highlight-num">200+</span>
                                <span className="highlight-label">DSA Challenges Solved</span>
                            </div>
                        </div>

                        <div className="highlight-item glass">
                            <Sparkles className="text-accent" size={24} />
                            <div className="highlight-text">
                                <span className="highlight-num">3+</span>
                                <span className="highlight-label">Production Apps</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Glow Elements */}
                <div className="floating-shape shape-1 glass"></div>
                <div className="floating-shape shape-2 glass"></div>
                <div className="floating-shape shape-3 glass"></div>
            </div>

            {/* Resume Interactive Modal */}
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

            <div id="about-section"><About /></div>
            <div id="projects-section"><Projects /></div>
            <div id="certificates-section"><Certificates /></div>
            <div id="contact-section"><Contact /></div>
        </>
    );
};

export default Home;
