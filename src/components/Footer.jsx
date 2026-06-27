import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const getLinkStyle = (index) => ({
    color: hoveredLink === index ? '#fff' : '#a1a1aa',
    textDecoration: 'none',
    transition: 'color 0.3s ease, transform 0.3s ease',
    transform: hoveredLink === index ? 'translateX(5px)' : 'translateX(0)',
    display: 'inline-block'
  });

  return (
    <footer className="border-t border-muted relative overflow-hidden" style={{ backgroundColor: '#09090b', borderTop: '1px solid rgba(255, 255, 255, 0.05)', padding: '100px 0 40px', color: '#fff', position: 'relative' }}>
      
      {/* Background glow effects */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '1px', background: 'radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(0,0,0,0) 100%)', boxShadow: '0 0 60px 15px rgba(99,102,241,0.2)' }}></div>
      <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '100%', background: 'radial-gradient(circle at bottom right, rgba(99,102,241,0.05) 0%, rgba(0,0,0,0) 50%)', pointerEvents: 'none' }}></div>

      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        
        {/* Top Section - CTA for Productiveness */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '100px', animation: 'fadeInUp 1s ease-out' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', backgroundColor: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', marginBottom: '24px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#818cf8' }}>rocket_launch</span>
            <span style={{ fontSize: '14px', color: '#818cf8', fontWeight: '500' }}>Accepting New Clients</span>
          </div>
          <h2 className="font-headline-lg" style={{ marginBottom: '24px', background: 'linear-gradient(to right, #ffffff, #a1a1aa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '3rem', fontWeight: '800', letterSpacing: '-0.02em' }}>
            Ready to Build the Future?
          </h2>
          <p className="font-body-lg" style={{ maxWidth: '600px', marginBottom: '40px', color: '#a1a1aa', fontSize: '1.125rem', lineHeight: '1.6' }}>
            Transform your business with our state-of-the-art AI solutions. Let's discuss how Computer Vision and NLP can elevate your operations.
          </p>
          <Link to="/contact" className="primary-button" style={{ 
            background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', 
            color: 'white', 
            padding: '16px 40px', 
            borderRadius: '30px', 
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.125rem',
            boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.4), 0 8px 10px -6px rgba(124, 58, 237, 0.1)',
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Start a Project with Us
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
          </Link>
        </div>

        {/* Links Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '64px', marginBottom: '64px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '64px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', gridColumn: '1 / -1' }} className="md:col-span-2">
            <div className="font-headline-md uppercase tracking-widest" style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '0.1em' }}>
              <span style={{ color: '#818cf8' }}>Industrial Tech</span> Collective
            </div>
            <p className="font-body-md" style={{ lineHeight: '1.6', color: '#a1a1aa', maxWidth: '400px' }}>
              Showcasing our cutting-edge AI projects and partnering with innovative clients to build next-generation solutions.
            </p>
            <div className="flex gap-4" style={{ display: 'flex', gap: '20px', color: '#a1a1aa', marginTop: '8px' }}>
              {['public', 'share', 'monitoring'].map((icon, i) => (
                <a key={icon} href="#" style={{ 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  width: '40px', height: '40px', borderRadius: '50%', 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: 'inherit', transition: 'all 0.3s ease' 
                }} 
                onMouseOver={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.backgroundColor = 'rgba(99,102,241,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} 
                onMouseOut={(e) => { e.currentTarget.style.color = '#a1a1aa'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{ fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.875rem', color: '#fff', marginBottom: '8px' }}>Expertise</h4>
            <Link to="/computer-vision" style={getLinkStyle('cv')} onMouseEnter={() => setHoveredLink('cv')} onMouseLeave={() => setHoveredLink(null)}>Computer Vision</Link>
            <Link to="/nlp" style={getLinkStyle('nlp')} onMouseEnter={() => setHoveredLink('nlp')} onMouseLeave={() => setHoveredLink(null)}>NLP Frameworks</Link>
            <Link to="/categorization" style={getLinkStyle('cat')} onMouseEnter={() => setHoveredLink('cat')} onMouseLeave={() => setHoveredLink(null)}>Product Categorization</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{ fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.875rem', color: '#fff', marginBottom: '8px' }}>Company</h4>
            <Link to="/#projects-showcase" style={getLinkStyle('proj')} onMouseEnter={() => setHoveredLink('proj')} onMouseLeave={() => setHoveredLink(null)}>Our Projects</Link>
            <Link to="/contact" style={getLinkStyle('contact')} onMouseEnter={() => setHoveredLink('contact')} onMouseLeave={() => setHoveredLink(null)}>Contact Us</Link>
            <a href="#" style={getLinkStyle('careers')} onMouseEnter={() => setHoveredLink('careers')} onMouseLeave={() => setHoveredLink(null)}>Careers <span style={{ fontSize: '0.7rem', padding: '2px 6px', backgroundColor: 'rgba(99,102,241,0.2)', color: '#818cf8', borderRadius: '10px', marginLeft: '6px', verticalAlign: 'middle' }}>Hiring</span></a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '32px', gap: '16px' }}>
          <p className="font-label-mono-sm" style={{ color: '#71717a' }}>© {new Date().getFullYear()} Industrial Tech Collective. ISO 27001 Certified.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center' }}>
            {['Privacy Policy', 'Compliance', 'SOC2 Report', 'Security', 'Terms of Service'].map((link) => (
              <a key={link} href="#" className="font-label-mono-sm" style={{ color: '#71717a', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = '#d4d4d8'} onMouseOut={(e) => e.currentTarget.style.color = '#71717a'}>{link}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 768px) {
          .md\\:col-span-2 { grid-column: span 2 / span 2; }
        }
      `}</style>
    </footer>
  );
}
