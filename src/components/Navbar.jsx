import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Industries', path: '/' },
    { name: 'Solutions', path: '/solutions' },
  ];

  const domainLinks = [
    { name: 'Computer Vision', path: '/computer-vision' },
    { name: 'NLP', path: '/nlp' },
    { name: 'Content Moderation', path: '/content-moderation' },
    { name: 'Product Categorization', path: '/product-categorization' },
    { name: 'Data Annotation', path: '/data-annotation' },
  ];

  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', height: '64px', backgroundColor: 'rgba(19, 19, 19, 0.7)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--color-border-muted)', display: 'flex', alignItems: 'center', zIndex: 100 }}>
      <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" className="font-headline-md uppercase tracking-widest text-white" style={{ fontSize: '20px', letterSpacing: '0.05em', textDecoration: 'none' }}>
          Industrial Tech Collective
        </Link>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-label-mono-md ${location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant'}`}
              style={{ 
                borderBottom: location.pathname === link.path ? '2px solid var(--color-primary)' : 'none',
                paddingBottom: '4px',
                transition: 'color 0.3s',
                textDecoration: 'none'
              }}
            >
              {link.name}
            </Link>
          ))}
          <div 
            style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '64px', cursor: 'pointer' }}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="font-label-mono-md text-on-surface-variant" style={{ paddingBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px', color: isDropdownOpen ? 'var(--color-primary)' : 'var(--color-on-surface-variant)', transition: 'color 0.3s' }}>
              Domains
              <span className="material-symbols-outlined" style={{ fontSize: '18px', transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>expand_more</span>
            </span>
            
            {/* Dropdown Menu */}
            <div 
              style={{ 
                position: 'absolute', 
                top: '100%', 
                left: '50%', 
                transform: `translateX(-50%) translateY(${isDropdownOpen ? '0px' : '10px'})`,
                opacity: isDropdownOpen ? 1 : 0,
                visibility: isDropdownOpen ? 'visible' : 'hidden',
                transition: 'all 0.3s ease',
                paddingTop: '8px',
                zIndex: 100
              }}
            >
              <div style={{
                width: '260px', 
                backgroundColor: 'rgba(19, 19, 19, 0.9)', 
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(100, 238, 220, 0.15)', 
                borderRadius: '8px', 
                padding: '8px', 
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.8)',
                position: 'relative'
              }}>
                <div style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: '12px', height: '12px', backgroundColor: 'rgba(19, 19, 19, 0.9)', borderLeft: '1px solid rgba(100, 238, 220, 0.15)', borderTop: '1px solid rgba(100, 238, 220, 0.15)' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', position: 'relative', zIndex: 10 }}>
                  {domainLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="font-label-mono-sm text-on-surface-variant"
                      style={{ 
                        padding: '12px 16px', 
                        textDecoration: 'none', 
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => { 
                        e.currentTarget.style.backgroundColor = 'rgba(100, 238, 220, 0.1)'; 
                        e.currentTarget.style.color = 'var(--color-primary)';
                        e.currentTarget.children[0].style.backgroundColor = 'var(--color-primary)';
                      }}
                      onMouseLeave={(e) => { 
                        e.currentTarget.style.backgroundColor = 'transparent'; 
                        e.currentTarget.style.color = 'var(--color-on-surface-variant)';
                        e.currentTarget.children[0].style.backgroundColor = 'rgba(100, 238, 220, 0.2)';
                      }}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(100, 238, 220, 0.2)', transition: 'background-color 0.2s ease' }}></span>
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/contact">
          <button className="primary-button" style={{ padding: '8px 16px', fontSize: '14px', borderRadius: '4px', cursor: 'pointer' }}>
            Contact Us
          </button>
        </Link>
      </div>
    </nav>
  );
}
