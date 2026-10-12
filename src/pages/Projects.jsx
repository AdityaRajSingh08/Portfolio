import { useState } from 'react';
import { Github, ExternalLink, Code2, Cloud, Server, Cpu, Sparkles, Layers } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', 'Full-Stack & Cloud', 'Backend & APIs', 'AI Systems'];

    const projects = [
        {
            id: 1,
            title: 'Book Nest — Personal Library Tracker & Social Platform',
            category: 'Full-Stack & Cloud',
            badge: 'Flagship Project',
            icon: Cloud,
            date: "Jul '26 – Aug '26",
            desc: 'Architected and deployed a production-grade full-stack MERN application on AWS (EC2, S3, CloudFront). Features hardened security with Argon2id password hashing, rotated refresh tokens, and granular Role-Based Access Control (RBAC). Integrated real-time social feeds via Socket.IO, idempotent Razorpay webhook billing, and optimized MongoDB aggregation analytics with automated Dockerized CI/CD.',
            highlights: [
                'AWS Cloud Deployment (EC2, S3, CloudFront) & Docker CI/CD',
                'Hardened Auth: Argon2id, Rotated Refresh Tokens & RBAC',
                'Real-time Socket.IO social interactions & Razorpay webhook lifecycle',
                'MongoDB Aggregation Pipelines & Indexed Full-Text Search'
            ],
            tech: ['MERN Stack', 'AWS (EC2, S3)', 'Socket.IO', 'Razorpay', 'Docker', 'GitHub Actions', 'Tailwind CSS', 'JWT', 'Argon2id', 'Jest'],
            github: 'https://github.com/AdityaRajSingh08',
            color: '#6366f1'
        },
        {
            id: 2,
            title: 'Video Streaming Backend Service',
            category: 'Backend & APIs',
            badge: '15+ REST Endpoints',
            icon: Server,
            date: "Feb '26 – Mar '26",
            desc: 'Architected the modular backend engine for a video-streaming platform using Node.js, Express.js, and MongoDB. Structured around clean MVC architecture, delivering 15+ secure RESTful endpoints for video ingestion, playback metadata, and user watchlists.',
            highlights: [
                '15+ RESTful API endpoints following strict MVC architecture',
                'JWT-based authentication & reusable middleware cutting code duplication by ~30%',
                'Centralized error-handling layer reducing unhandled request failures by ~25%',
                'Extensible MongoDB schemas with compound indexing'
            ],
            tech: ['JavaScript', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'JWT Auth'],
            github: 'https://github.com/AdityaRajSingh08',
            color: '#ec4899'
        },
        {
            id: 3,
            title: 'AI Code Explainer & Review Assistant',
            category: 'AI Systems',
            badge: 'Grok AI Integrated',
            icon: Cpu,
            date: "Jul '26 – Jul '26",
            desc: 'Engineered an AI code-explanation service powered by Node.js and the Grok API. Supports real-time line-by-line code explanations across 5+ programming languages, cutting manual code-review time by an estimated ~40% in developer benchmarks.',
            highlights: [
                'Node.js backend with real-time response handling & streaming',
                'Grok API integration for algorithmic line-by-line explanations',
                'Multi-language parsing supporting 5+ popular programming languages',
                'Sub-100ms interactive React frontend with syntax highlighting'
            ],
            tech: ['React.js', 'Node.js', 'Grok API', 'JavaScript', 'HTML5', 'CSS3'],
            github: 'https://github.com/AdityaRajSingh08',
            color: '#8b5cf6'
        },
        {
            id: 4,
            title: 'AI Math Solver & Step-by-Step Reasoner',
            category: 'AI Systems',
            badge: 'Machine Learning',
            icon: Sparkles,
            date: "Recent",
            desc: 'Engineered an intelligent mathematical solver capable of parsing algebraic, calculus, and computational expressions into detailed step-by-step logical explanations and dynamic LaTeX visualizations.',
            highlights: [
                'Dynamic mathematical expression parsing and step solver',
                'Clean reactive UI with real-time solution rendering',
                'Python & Node.js backend calculation pipeline'
            ],
            tech: ['React', 'Python', 'Machine Learning', 'Node.js'],
            github: 'https://github.com/AdityaRajSingh08',
            color: '#10b981'
        }
    ];

    const filteredProjects = activeTab === 'All' ? projects : projects.filter(p => p.category === activeTab);

    return (
        <div className="page-container">
            <div className="section-header">
                <h2 className="gradient-text">Featured Projects</h2>
                <p>Real-world full-stack architectures, high-performance backends, and AI solutions.</p>
            </div>

            <div className="tabs-container">
                {categories.map(tab => (
                    <button
                        key={tab}
                        className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project, index) => {
                    const IconComponent = project.icon || Code2;
                    return (
                        <div key={project.id} className="project-card glass" style={{ animationDelay: `${index * 0.12}s` }}>
                            <div className="project-header">
                                <div className="proj-icon-badge-wrap">
                                    <div className="proj-icon-box" style={{ background: `${project.color}20`, borderColor: `${project.color}50` }}>
                                        <IconComponent size={26} style={{ color: project.color }} />
                                    </div>
                                    <span className="proj-category-pill" style={{ color: project.color, borderColor: `${project.color}40` }}>
                                        {project.badge}
                                    </span>
                                </div>

                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-link"
                                        title="View GitHub Repository"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-meta-date">{project.date}</p>
                            <p className="project-desc">{project.desc}</p>

                            {/* Impact Highlights */}
                            <div className="proj-highlights-list">
                                {project.highlights.map((item, hIdx) => (
                                    <div key={hIdx} className="proj-highlight-bullet">
                                        <span className="bullet-dot" style={{ backgroundColor: project.color }}></span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="project-tech">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="tech-tag" style={{ borderColor: `${project.color}35` }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
