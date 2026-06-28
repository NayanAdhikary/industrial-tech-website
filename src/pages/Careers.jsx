import React from 'react';

export default function Careers() {
  const jobs = [
    {
      title: "Senior Computer Vision Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Join our core team to design, train, and deploy state-of-the-art computer vision models for industrial applications."
    },
    {
      title: "Machine Learning Researcher",
      department: "Research & Development",
      location: "Remote",
      type: "Full-time",
      description: "Push the boundaries of what's possible with multi-modal AI systems and deep neural networks in unconstrained environments."
    },
    {
      title: "Data Operations Manager",
      department: "Operations",
      location: "New York / Hybrid",
      type: "Full-time",
      description: "Oversee data pipeline strategies, annotation teams, and quality control processes for our massive proprietary datasets."
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Design intuitive and beautiful interfaces for complex enterprise AI tools and data visualization dashboards."
    }
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: '80px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 70% 30%, var(--color-primary-alpha-5) 0%, rgba(19, 19, 19, 0) 60%)', pointerEvents: 'none' }}></div>
        <div className="container relative z-10" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '800px' }} className="reveal">
            <div className="flex items-center gap-2 mb-6" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px', color: '#64eedc' }}>group_add</span>
              <span className="font-label-mono-md text-primary uppercase tracking-widest" style={{ color: '#64eedc', letterSpacing: '0.1em' }}>Join Our Team</span>
            </div>
            <h1 className="font-headline-xl text-white mb-6" style={{ fontSize: '4rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '24px', letterSpacing: '-0.02em' }}>
              Build the Future of Industrial AI
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-12" style={{ fontSize: '1.25rem', color: 'var(--color-on-surface-variant)', lineHeight: '1.6', marginBottom: '48px', maxWidth: '600px' }}>
              We are a collective of visionaries, researchers, and builders pushing the boundaries of AI. Join us in shaping next-generation technologies that define the modern enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-section-padding container" style={{ padding: '120px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <div className="text-center mb-16 reveal" style={{ marginBottom: '64px', textAlign: 'center' }}>
          <h2 className="font-headline-lg text-white mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}>Our Core Values</h2>
          <p className="font-body-md text-on-surface-variant mx-auto" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '600px', margin: '0 auto' }}>
            We foster an environment of relentless innovation, deep technical rigor, and radical transparency.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {[
            { icon: 'psychology', title: 'Deep Curiosity', desc: 'We question assumptions and dive deep into complex problems without fear.' },
            { icon: 'speed', title: 'Iterative Velocity', desc: 'We build fast, learn from failures, and continuously optimize our systems.' },
            { icon: 'handshake', title: 'Radical Collaboration', desc: 'We win together. Silos are eliminated; knowledge sharing is prioritized.' }
          ].map((value, idx) => (
            <div key={idx} className="glass-card reveal" style={{ padding: '40px', borderRadius: '16px', background: 'var(--color-surface)', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', flexDirection: 'column', gap: '16px', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ width: '64px', height: '64px', borderRadius: '12px', background: 'var(--color-primary-alpha-10)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-symbols-outlined" style={{ color: '#64eedc', fontSize: '32px' }}>{value.icon}</span>
              </div>
              <h3 className="font-headline-md text-white" style={{ fontSize: '1.5rem', fontWeight: '600' }}>{value.title}</h3>
              <p className="font-body-md text-on-surface-variant" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.6' }}>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-section-padding" style={{ padding: '120px 24px', background: 'var(--color-background)', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="flex justify-between items-end mb-12 reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', gap: '24px' }}>
            <div>
              <h2 className="font-headline-lg text-white mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}>Open Positions</h2>
              <p className="font-body-md text-on-surface-variant" style={{ color: 'var(--color-on-surface-variant)' }}>Join our growing team and make an impact.</p>
            </div>
            <a href="mailto:careers@industrialtech.co" className="primary-button" style={{ padding: '12px 24px', borderRadius: '8px', background: 'var(--color-border-muted)', color: 'var(--color-on-surface)', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)', transition: 'all 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'} onMouseOut={(e) => e.currentTarget.style.background = 'var(--color-border-muted)'}>
              Don't see your role? Email us
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {jobs.map((job, idx) => (
              <div key={idx} className="glass-card reveal" style={{ padding: '32px', borderRadius: '12px', background: 'var(--color-surface)', border: '1px solid rgba(255, 255, 255, 0.05)', transition: 'border-color 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-primary-alpha-40)'} onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--color-border-muted)'}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px' }}>
                  <div style={{ flex: '1 1 400px' }}>
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.75rem', padding: '4px 10px', borderRadius: '20px', background: 'var(--color-primary-alpha-10)', color: '#64eedc', border: '1px solid var(--color-primary-alpha-20)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>{job.department}</span>
                      <span style={{ fontSize: '0.75rem', padding: '4px 10px', borderRadius: '20px', background: 'var(--color-border-muted)', color: 'var(--color-on-surface-variant)', border: '1px solid rgba(255, 255, 255, 0.1)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{job.type}</span>
                    </div>
                    <h3 className="font-headline-md text-white" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '12px' }}>{job.title}</h3>
                    <p className="font-body-md text-on-surface-variant" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.5', maxWidth: '600px' }}>{job.description}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-on-surface-variant)' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>location_on</span>
                      <span style={{ fontSize: '0.875rem' }}>{job.location}</span>
                    </div>
                    <button style={{ padding: '10px 24px', borderRadius: '8px', background: 'var(--color-on-surface)', color: 'var(--color-on-primary)', fontWeight: 'bold', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      Apply Now
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
