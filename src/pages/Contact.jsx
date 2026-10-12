import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Copy, Check, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [sentStatus, setSentStatus] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('adityarajsingh1189@gmail.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const copyPhone = () => {
        navigator.clipboard.writeText('+918617463921');
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSentStatus(true);
        setTimeout(() => setSentStatus(false), 3500);
    };

    return (
        <div className="page-container">
            <div className="section-header">
                <h2 className="gradient-text">Get In Touch</h2>
                <p>Have an opportunity, internship, or project to discuss? Let's connect!</p>
            </div>

            <div className="contact-wrapper">
                <div className="contact-info glass">
                    <h3>Let's talk code & opportunities</h3>
                    <p className="contact-desc">
                        I am currently looking for software engineering roles and internships where I can contribute to backend systems, cloud architectures, and full-stack products.
                    </p>

                    <div className="info-items">
                        <div className="info-item">
                            <div className="info-icon"><Mail size={22} /></div>
                            <div className="info-text-wrap">
                                <h4>Email</h4>
                                <a href="mailto:adityarajsingh1189@gmail.com" className="contact-val-link">
                                    adityarajsingh1189@gmail.com
                                </a>
                            </div>
                            <button onClick={copyEmail} className="copy-action-btn" title="Copy Email">
                                {copiedEmail ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                            </button>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><Phone size={22} /></div>
                            <div className="info-text-wrap">
                                <h4>Mobile / WhatsApp</h4>
                                <a href="tel:+918617463921" className="contact-val-link">
                                    +91 8617463921
                                </a>
                            </div>
                            <button onClick={copyPhone} className="copy-action-btn" title="Copy Phone Number">
                                {copiedPhone ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                            </button>
                        </div>
                    </div>

                    <div className="social-links">
                        <a
                            href="https://github.com/AdityaRajSingh08"
                            target="_blank"
                            rel="noreferrer"
                            className="social-link"
                            title="GitHub Profile"
                        >
                            <Github size={22} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/adi-singh001"
                            target="_blank"
                            rel="noreferrer"
                            className="social-link"
                            title="LinkedIn Profile"
                        >
                            <Linkedin size={22} />
                        </a>
                    </div>
                </div>

                <form className="contact-form glass" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" placeholder="Alex Morgan" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="alex@company.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" placeholder="Hi Aditya, we loved your projects and would like to discuss..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn">
                        <Send size={18} />
                        {sentStatus ? 'Message Sent!' : 'Send Message'}
                    </button>
                    {sentStatus && (
                        <p style={{ color: '#10b981', fontSize: '0.88rem', textAlign: 'center', marginTop: '10px', fontWeight: 600 }}>
                            Thank you! Your message has been received.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;
