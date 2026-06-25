import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Systems', path: '/systems' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Intelligence', path: '/computer-vision' },
    { name: 'Industries', path: '/' },
  ];

  return (
    <nav className="fixed inset-0 z-50 bg-surface/70 border-b border-muted" style={{ position: 'fixed', top: 0, width: '100%', height: '64px', backgroundColor: 'rgba(19, 19, 19, 0.7)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--color-border-muted)', display: 'flex', alignItems: 'center', zIndex: 50 }}>
      <div className="container flex justify-between items-center" style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" className="font-headline-md uppercase tracking-widest text-white" style={{ fontSize: '20px', letterSpacing: '0.05em', textDecoration: 'none' }}>
          Industrial Tech Collective
        </Link>
        <div className="flex gap-8" style={{ display: 'flex', gap: '32px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-label-mono-md ${location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant'}`}
              style={{ 
                borderBottom: location.pathname === link.path ? '2px solid var(--color-primary)' : 'none',
                paddingBottom: '4px',
                transition: 'color 0.3s'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button className="primary-button" style={{ padding: '8px 16px', fontSize: '14px', borderRadius: '4px' }}>
          Contact Us
        </button>
      </div>
    </nav>
  );
}
