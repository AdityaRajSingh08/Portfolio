import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, Phone, Linkedin, Github, Award, CheckCircle } from 'lucide-react';
import './ResumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handlePrint = () => {
        window.open('/Aditya_Raj_Singh_CV.html', '_blank');
    };

    return (
        <div className="resume-modal-overlay" onClick={onClose}>
            <div className="resume-modal-content glass" onClick={(e) => e.stopPropagation()}>
                {/* Modal Header Actions */}
                <div className="resume-modal-header">
                    <div className="resume-title-wrap">
                        <span className="badge-tag">ATS-Optimized CV</span>
                        <h2 className="modal-title">Aditya Raj Singh &mdash; Resume</h2>
                    </div>
                    <div className="modal-actions">
                        <button onClick={handlePrint} className="modal-btn btn-print" title="Open full printable view">
                            <Printer size={16} />
                            <span>Print / Save PDF</span>
                        </button>
                        <a href="/Aditya_Raj_Singh_CV.html" download="Aditya_Raj_Singh_CV.html" className="modal-btn btn-dl" title="Download CV File">
                            <Download size={16} />
                            <span>Download</span>
                        </a>
                        <button onClick={onClose} className="modal-btn btn-close" aria-label="Close modal">
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Resume Paper Body */}
                <div className="resume-paper">
                    {/* Header */}
                    <div className="rp-header">
                        <h1 className="rp-name">Aditya Raj Singh</h1>
                        <p className="rp-subtitle">Full-Stack Engineer &bull; Backend Systems &bull; Cloud Architectures</p>
                        <div className="rp-contact-bar">
                            <a href="mailto:adityarajsingh1189@gmail.com"><Mail size={13} /> adityarajsingh1189@gmail.com</a>
                            <span>&bull;</span>
                            <a href="tel:+918617463921"><Phone size={13} /> +91 8617463921</a>
                            <span>&bull;</span>
                            <a href="https://www.linkedin.com/in/adi-singh001" target="_blank" rel="noreferrer"><Linkedin size={13} /> LinkedIn</a>
                            <span>&bull;</span>
                            <a href="https://github.com/AdityaRajSingh08" target="_blank" rel="noreferrer"><Github size={13} /> GitHub</a>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="rp-section">
                        <h3 className="rp-sec-title">Education</h3>
                        <div className="rp-item">
                            <div className="rp-item-header">
                                <span className="rp-inst">Lovely Professional University</span>
                                <span className="rp-location-date">Phagwara, Punjab &bull; Since Aug &rsquo;23</span>
                            </div>
                            <div className="rp-item-sub">
                                <span>Bachelor of Technology &mdash; Computer Science and Engineering</span>
                                <span className="rp-highlight-badge">CGPA: 7.06</span>
                            </div>
                        </div>

                        <div className="rp-item">
                            <div className="rp-item-header">
                                <span className="rp-inst">Narayana School</span>
                                <span className="rp-location-date">Durgapur, West Bengal &bull; Apr &rsquo;21 &ndash; Mar &rsquo;22</span>
                            </div>
                            <div className="rp-item-sub">
                                <span>Intermediate (Senior Secondary)</span>
                                <span className="rp-highlight-badge">Percentage: 80.5%</span>
                            </div>
                        </div>

                        <div className="rp-item">
                            <div className="rp-item-header">
                                <span className="rp-inst">Narayana School</span>
                                <span className="rp-location-date">Durgapur, West Bengal &bull; Apr &rsquo;19 &ndash; Mar &rsquo;20</span>
                            </div>
                            <div className="rp-item-sub">
                                <span>Matriculation (Secondary)</span>
                                <span className="rp-highlight-badge">Percentage: 73.8%</span>
                            </div>
                        </div>
                    </div>

                    {/* Technical Skills */}
                    <div className="rp-section">
                        <h3 className="rp-sec-title">Technical Skills</h3>
                        <div className="rp-skills-grid">
                            <div className="rp-skill-row">
                                <span className="rp-skill-cat">Languages:</span>
                                <span>Java (5-Star), C/C++ (5-Star), Python, JavaScript (ES6+), HTML5, CSS3</span>
                            </div>
                            <div className="rp-skill-row">
                                <span className="rp-skill-cat">Web & Backend:</span>
                                <span>Node.js, Express.js, REST APIs, React.js, Flask, Tailwind CSS, Socket.IO, Razorpay Webhooks</span>
                            </div>
                            <div className="rp-skill-row">
                                <span className="rp-skill-cat">Cloud & DB:</span>
                                <span>MongoDB (Aggregation & Indexing), MySQL, AWS (EC2, S3, CloudFront), Docker, Cloudinary</span>
                            </div>
                            <div className="rp-skill-row">
                                <span className="rp-skill-cat">Security & Auth:</span>
                                <span>JWT, Argon2id Password Hashing, Role-Based Access Control (RBAC), Token Rotation</span>
                            </div>
                            <div className="rp-skill-row">
                                <span className="rp-skill-cat">Tools & CI/CD:</span>
                                <span>Git, GitHub Actions, Postman, Jest, Playwright, Jira, Selenium, Apache, Cisco, Overleaf</span>
                            </div>
                            <div className="rp-skill-row">
                                <span className="rp-skill-cat">Soft Skills:</span>
                                <span>Problem Solving, Systems Design, Cross-functional Collaboration, Adaptability</span>
                            </div>
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="rp-section">
                        <h3 className="rp-sec-title">Featured Projects</h3>

                        {/* Project 1 */}
                        <div className="rp-item">
                            <div className="rp-item-header">
                                <span className="rp-proj-name">
                                    Book Nest &mdash; Personal Library Tracker & Social Reading Platform
                                </span>
                                <span className="rp-date">Jul &rsquo;26 &ndash; Aug &rsquo;26</span>
                            </div>
                            <div className="rp-tech-line">
                                <strong>Tech:</strong> MERN (MongoDB, Express, React, Node.js), AWS (EC2, S3, CloudFront), Socket.IO, Razorpay, Docker, GitHub Actions, Tailwind CSS, JWT, Argon2id, Cloudinary
                            </div>
                            <ul className="rp-bullets">
                                <li>
                                    <strong>AWS Architecture & Hardened Auth:</strong> Architected and deployed an end-to-end MERN application on AWS (EC2, S3, CloudFront) featuring multi-tier authentication with rotated refresh tokens, Argon2id hashing, and granular RBAC, replacing vulnerable single long-lived tokens.
                                </li>
                                <li>
                                    <strong>Real-time Social & Subscriptions:</strong> Implemented real-time interactive community features using Socket.IO; integrated Razorpay subscription billing handling the full webhook lifecycle with cryptographic signature verification and idempotent processing.
                                </li>
                                <li>
                                    <strong>Analytics & Automated CI/CD:</strong> Engineered reading analytics via MongoDB aggregation pipelines and indexed search; automated end-to-end CI/CD using GitHub Actions, Docker containerization, and automated test coverage (Jest, Playwright).
                                </li>
                            </ul>
                        </div>

                        {/* Project 2 */}
                        <div className="rp-item">
                            <div className="rp-item-header">
                                <span className="rp-proj-name">
                                    Video Streaming Backend Service
                                </span>
                                <span className="rp-date">Feb &rsquo;26 &ndash; Mar &rsquo;26</span>
                            </div>
                            <div className="rp-tech-line">
                                <strong>Tech:</strong> JavaScript, Node.js, Express.js, RESTful APIs, MongoDB, JWT
                            </div>
                            <ul className="rp-bullets">
                                <li>
                                    <strong>Modular API Design:</strong> Architected backend microservices for a high-traffic video-streaming platform using Node.js, Express.js, and MongoDB, delivering 15+ RESTful API endpoints across an MVC design pattern.
                                </li>
                                <li>
                                    <strong>Route Security & Middleware:</strong> Implemented JWT-based authentication and reusable middleware in Node.js, securing 100% of protected API endpoints and reducing duplicate authorization boilerplate by ~30%.
                                </li>
                                <li>
                                    <strong>Centralized Error Handling:</strong> Engineered a centralized error-handling middleware layer and extensible MongoDB schemas, reducing unhandled request failures by ~25% and accelerating downstream feature integration.
                                </li>
                            </ul>
                        </div>

                        {/* Project 3 */}
                        <div className="rp-item">
                            <div className="rp-item-header">
                                <span className="rp-proj-name">
                                    AI Code Explainer & Review Assistant
                                </span>
                                <span className="rp-date">Jul &rsquo;26 &ndash; Jul &rsquo;26</span>
                            </div>
                            <div className="rp-tech-line">
                                <strong>Tech:</strong> HTML5, CSS3, JavaScript, React, Node.js, Grok API
                            </div>
                            <ul className="rp-bullets">
                                <li>
                                    <strong>Streaming AI Engine:</strong> Developed a low-latency Node.js backend powering an automated code-explanation service, supporting 5+ programming languages with real-time response handling and streaming.
                                </li>
                                <li>
                                    <strong>Automated Code Review:</strong> Integrated the Grok AI API for line-by-line algorithmic explanations and complexity analysis, cutting manual code-review time by an estimated ~40% in developer sample walkthroughs.
                                </li>
                                <li>
                                    <strong>Optimized React Interface:</strong> Engineered an interactive React/HTML5 user interface featuring syntax highlighting, responsive file inputs, and sub-100ms UI responsiveness across desktop and mobile devices.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="rp-section">
                        <h3 className="rp-sec-title">Achievements</h3>
                        <div className="rp-item">
                            <div className="rp-item-header">
                                <span className="rp-proj-name">5-Star Java Programmer &bull; HackerRank</span>
                                <span className="rp-date">Dec &rsquo;24</span>
                            </div>
                            <p className="rp-single-desc">Earned top-tier 5-star rating in Java by solving 100+ competitive programming challenges across Data Structures, Algorithms, and Object-Oriented Design.</p>
                        </div>
                        <div className="rp-item">
                            <div className="rp-item-header">
                                <span className="rp-proj-name">5-Star C++ Programmer &bull; HackerRank</span>
                                <span className="rp-date">Apr &rsquo;24</span>
                            </div>
                            <p className="rp-single-desc">Earned top-tier 5-star rating in C++ by solving 100+ competitive programming challenges in memory management, STL algorithms, and algorithmic complexity.</p>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="rp-section">
                        <h3 className="rp-sec-title">Certifications</h3>
                        <div className="rp-cert-grid">
                            <div className="rp-cert-pill">
                                <Award size={15} className="rp-cert-icon" />
                                <div>
                                    <strong>Bits and Bytes of Computer Networking</strong> &mdash; Google <span className="rp-cert-dt">(Jul '25)</span>
                                </div>
                            </div>
                            <div className="rp-cert-pill">
                                <Award size={15} className="rp-cert-icon" />
                                <div>
                                    <strong>AWS Academy Cloud Foundations</strong> &mdash; AWS <span className="rp-cert-dt">(Jul '25)</span>
                                </div>
                            </div>
                            <div className="rp-cert-pill">
                                <Award size={15} className="rp-cert-icon" />
                                <div>
                                    <strong>Computational Theory</strong> &mdash; Infosys Springboard <span className="rp-cert-dt">(Oct '24)</span>
                                </div>
                            </div>
                            <div className="rp-cert-pill">
                                <Award size={15} className="rp-cert-icon" />
                                <div>
                                    <strong>Introduction to Hardware and Operating System</strong> &mdash; IBM <span className="rp-cert-dt">(Sep '24)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ResumeModal;
