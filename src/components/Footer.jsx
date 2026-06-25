import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-muted" style={{ backgroundColor: 'var(--color-surface-container-lowest)', borderTop: '1px solid var(--color-border-muted)', padding: '48px 0' }}>
      <div className="container grid md:grid-cols-2 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="font-headline-md uppercase tracking-widest text-on-surface">Industrial Tech Collective</div>
          <p className="font-label-mono-sm text-on-surface-variant">© 2026 Industrial Tech Collective. ISO 27001 Certified.</p>
          <div className="flex gap-4" style={{ display: 'flex', gap: '16px', color: 'var(--color-on-surface-variant)' }}>
            <span className="material-symbols-outlined" style={{ cursor: 'pointer' }}>public</span>
            <span className="material-symbols-outlined" style={{ cursor: 'pointer' }}>share</span>
            <span className="material-symbols-outlined" style={{ cursor: 'pointer' }}>monitoring</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-end', justifyContent: 'flex-end', alignContent: 'flex-end' }}>
          <a href="#" className="font-label-mono-sm text-on-surface-variant" style={{ textDecoration: 'underline' }}>Privacy Policy</a>
          <a href="#" className="font-label-mono-sm text-on-surface-variant" style={{ textDecoration: 'underline' }}>Compliance</a>
          <a href="#" className="font-label-mono-sm text-on-surface-variant" style={{ textDecoration: 'underline' }}>SOC2 Report</a>
          <a href="#" className="font-label-mono-sm text-on-surface-variant" style={{ textDecoration: 'underline' }}>Security</a>
          <a href="#" className="font-label-mono-sm text-on-surface-variant" style={{ textDecoration: 'underline' }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
