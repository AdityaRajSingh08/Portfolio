import { Award, Code, ExternalLink, CheckCircle2 } from 'lucide-react';
import './Certificates.css';

const Certificates = () => {
    const certs = [
        {
            id: 1,
            title: 'Bits and Bytes of Computer Networking',
            issuer: 'Google',
            date: "Jul '25",
            badgeColor: '#4285f4',
            featured: true
        },
        {
            id: 2,
            title: 'AWS Academy Cloud Foundations',
            issuer: 'AWS',
            date: "Jul '25",
            badgeColor: '#ff9900',
            featured: true
        },
        {
            id: 3,
            title: 'Computational Theory',
            issuer: 'Infosys Springboard',
            date: "Oct '24",
            badgeColor: '#007cc3',
            featured: true
        },
        {
            id: 4,
            title: 'Introduction to Hardware and Operating System',
            issuer: 'IBM',
            date: "Sep '24",
            badgeColor: '#054ada',
            featured: true
        },
        {
            id: 5,
            title: 'AWS Academy Graduate - Cloud Architecting',
            issuer: 'AWS Academy',
            date: "Jan 2026",
            badgeColor: '#ff9900',
            link: "https://www.credly.com/go/qXxWkW3J"
        },
        {
            id: 6,
            title: 'ChatGPT-4 Prompt Engineering & Generative AI',
            issuer: 'Infosys Springboard',
            date: "Aug 2025",
            badgeColor: '#007cc3'
        }
    ];

    const training = [
        {
            id: 1,
            title: 'Fundamentals of Data Structures: Learn, Apply and Build Projects',
            issuer: 'Lovely Professional University',
            date: "Jun 2025 - Jul 2025",
            desc: "Earned Certificate of Merit with 'A' Grade from Centre for Professional Enhancement. Mastered and implemented core DSA concepts from scratch including trees, graphs, sorting, and dynamic programming in C++."
        }
    ];

    return (
        <div className="page-container">
            <div className="section-header">
                <h2 className="gradient-text">Certifications & Training</h2>
                <p>Validated credentials from Google, AWS, Infosys, and IBM.</p>
            </div>

            <h3 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.4rem' }}>
                Industry Certifications
            </h3>

            <div className="cert-gallery" style={{ marginBottom: '50px' }}>
                {certs.map((cert, index) => (
                    <div
                        key={cert.id}
                        className="cert-card glass"
                        style={{
                            animationDelay: `${index * 0.08}s`,
                            padding: '24px',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '16px'
                        }}
                    >
                        <div
                            style={{
                                background: `${cert.badgeColor || 'var(--accent-primary)'}18`,
                                border: `1px solid ${cert.badgeColor || 'var(--accent-primary)'}40`,
                                padding: '12px',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}
                        >
                            <Award size={28} style={{ color: cert.badgeColor || 'var(--accent-primary)' }} />
                        </div>

                        <div style={{ flexGrow: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px', marginBottom: '4px' }}>
                                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0, fontWeight: 600 }}>
                                    {cert.title}
                                </h3>
                                {cert.featured && (
                                    <span style={{ fontSize: '0.72rem', background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8', border: '1px solid rgba(99, 102, 241, 0.3)', padding: '2px 8px', borderRadius: '12px', fontWeight: 600 }}>
                                        CV Verified
                                    </span>
                                )}
                            </div>

                            <p style={{ color: 'var(--accent-secondary)', fontWeight: '600', margin: '0 0 4px 0', fontSize: '0.92rem' }}>
                                {cert.issuer}
                            </p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0 0 8px 0' }}>
                                {cert.date}
                            </p>

                            {cert.link && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        color: 'var(--accent-primary)',
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                        fontSize: '0.85rem',
                                        fontWeight: '600'
                                    }}
                                >
                                    View Credential <ExternalLink size={13} />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <h3 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.4rem' }}>
                Academic & Practical Training
            </h3>

            <div className="cert-gallery">
                {training.map((t, index) => (
                    <div
                        key={t.id}
                        className="cert-card glass"
                        style={{
                            animationDelay: `${index * 0.1}s`,
                            padding: '24px',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '16px'
                        }}
                    >
                        <div
                            style={{
                                background: 'rgba(99, 102, 241, 0.15)',
                                border: '1px solid rgba(99, 102, 241, 0.3)',
                                padding: '12px',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}
                        >
                            <Code size={28} className="text-accent" />
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: '0 0 6px 0', fontWeight: 600 }}>
                                {t.title}
                            </h3>
                            <p style={{ color: 'var(--accent-secondary)', fontWeight: '600', margin: '0 0 4px 0', fontSize: '0.92rem' }}>
                                {t.issuer}
                            </p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0 0 10px 0' }}>
                                {t.date}
                            </p>
                            <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6', fontSize: '0.92rem' }}>
                                {t.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;
