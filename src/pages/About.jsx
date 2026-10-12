import { BookOpen, Code, Trophy, MapPin, Award, ShieldCheck, Cloud, Cpu } from 'lucide-react';
import './About.css';

const About = () => {
    const skills = [
        {
            category: 'Languages',
            items: ['Java (5-Star)', 'C/C++ (5-Star)', 'Python', 'JavaScript (ES6+)', 'HTML5', 'CSS3']
        },
        {
            category: 'Web & Backend',
            items: ['Node.js', 'Express.js', 'REST APIs', 'React.js', 'Flask', 'Tailwind CSS', 'Socket.IO', 'Razorpay Webhooks']
        },
        {
            category: 'Cloud, DevOps & Databases',
            items: ['MongoDB (Aggregation)', 'MySQL', 'AWS (EC2, S3, CloudFront)', 'Docker', 'GitHub Actions CI/CD', 'Cloudinary']
        },
        {
            category: 'Security & Auth',
            items: ['JWT Authentication', 'Argon2id Hashing', 'Role-Based Access Control (RBAC)', 'Token Rotation']
        },
        {
            category: 'Testing & Developer Tools',
            items: ['Git', 'Postman', 'Jest', 'Playwright', 'Jira', 'Selenium', 'Apache', 'Cisco', 'Overleaf']
        },
        {
            category: 'Core Competencies',
            items: ['Data Structures & Algorithms', 'System Architecture', 'Problem Solving', 'Adaptability', 'Team Player']
        }
    ];

    return (
        <div className="page-container">
            <div className="section-header">
                <h2 className="gradient-text">About Me</h2>
                <p>Get to know my academic background, technical arsenal, and competitive achievements.</p>
            </div>

            <div className="about-grid">
                {/* Education Card */}
                <div className="about-card glass">
                    <div className="card-top-header">
                        <BookOpen className="icon-accent" size={32} />
                        <span className="card-badge">Academic Background</span>
                    </div>
                    <h3>Education</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <h4>Lovely Professional University</h4>
                            <p className="timeline-date">Since Aug '23 &bull; Phagwara, Punjab</p>
                            <p className="timeline-desc">
                                <strong>Bachelor of Technology &mdash; Computer Science and Engineering</strong>
                            </p>
                            <div className="timeline-badge-wrap">
                                <span className="cgpa-pill">Current CGPA: 7.06</span>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <h4>Narayana School</h4>
                            <p className="timeline-date">Apr '21 &ndash; Mar '22 &bull; Durgapur, West Bengal</p>
                            <p className="timeline-desc">
                                Intermediate (Senior Secondary) &bull; <strong>Percentage: 80.5%</strong>
                            </p>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <h4>Narayana School</h4>
                            <p className="timeline-date">Apr '19 &ndash; Mar '20 &bull; Durgapur, West Bengal</p>
                            <p className="timeline-desc">
                                Matriculation (Secondary) &bull; <strong>Percentage: 73.8%</strong>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Technical Arsenal Card */}
                <div className="about-card glass">
                    <div className="card-top-header">
                        <Code className="icon-accent" size={32} />
                        <span className="card-badge">Full Stack & Cloud</span>
                    </div>
                    <h3>Technical Arsenal</h3>
                    <div className="skills-grid">
                        {skills.map((skillGroup, idx) => (
                            <div key={idx} className="skill-category">
                                <h4 className="skill-title">{skillGroup.category}</h4>
                                <div className="skill-tags">
                                    {skillGroup.items.map((item, i) => (
                                        <span key={i} className="skill-tag">{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements Card */}
                <div className="about-card glass about-full">
                    <div className="card-top-header">
                        <Award className="icon-accent" size={32} />
                        <span className="card-badge">HackerRank Top Tier</span>
                    </div>
                    <h3>Competitive Programming & Achievements</h3>
                    <div className="achievements-container">
                        <div className="achievement-box">
                            <div className="achieve-icon-wrap">
                                <Trophy size={28} className="achieve-gold" />
                            </div>
                            <div className="achieve-content">
                                <h4>5-Star Java Programmer</h4>
                                <span className="achieve-org">HackerRank &bull; Dec '24</span>
                                <p>Earned top-tier 5-star rating in Java by solving 100+ competitive programming challenges in Data Structures, Algorithms, and Object-Oriented Design.</p>
                            </div>
                        </div>

                        <div className="achievement-box">
                            <div className="achieve-icon-wrap">
                                <Trophy size={28} className="achieve-gold" />
                            </div>
                            <div className="achieve-content">
                                <h4>5-Star C++ Programmer</h4>
                                <span className="achieve-org">HackerRank &bull; Apr '24</span>
                                <p>Earned top-tier 5-star rating in C++ by solving 100+ competitive programming challenges in memory management, STL algorithms, and algorithmic complexity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
