import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function CtaSection() {
  const location = useLocation();

  if (location.pathname === '/contact') {
    return null;
  }

  return (
    <section className="reveal" style={{ 
      padding: '120px 24px', 
      textAlign: 'center', 
      backgroundColor: '#121212',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className="font-headline-lg" style={{ 
          fontSize: '3rem', 
          fontWeight: '800', 
          marginBottom: '24px',
          color: 'var(--color-on-surface)',
          letterSpacing: '-0.02em',
          fontFamily: '"Rajdhani", "Orbitron", sans-serif',
          textTransform: 'none'
        }}>
          Ready for Integration?
        </h2>
        <p className="font-body-lg" style={{ 
          color: 'var(--color-on-surface-variant)', 
          fontSize: '1.125rem', 
          lineHeight: '1.6', 
          marginBottom: '48px',
          maxWidth: '640px'
        }}>
          Deploy our proprietary technology stack across your enterprise ecosystem and unlock unprecedented operational clarity.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/contact" style={{
            backgroundColor: '#5ce1e6', // Cyan/Mint color matching image
            color: '#000000',
            padding: '14px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.125rem',
            transition: 'background-color 0.2s',
            display: 'inline-block'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4bc5ca'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#5ce1e6'}
          >
            Get a Free Demo
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>OR</span>
            <Link to="/docs" style={{ 
              color: 'var(--color-on-surface)', 
              textDecoration: 'underline', 
              textUnderlineOffset: '4px',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-on-surface)'}
            >
              Review Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
