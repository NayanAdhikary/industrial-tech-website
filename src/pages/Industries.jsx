import React from 'react';
import ThreeJsHero from '../components/ThreeJsHero';

export default function Industries() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Hero Section */}
      <section style={{ minHeight: '900px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.4, background: 'radial-gradient(circle at center, rgba(64, 209, 192, 0.15) 0%, transparent 60%)' }}></div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <ThreeJsHero />
        </div>
        
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'inline-block', padding: '4px 12px', border: '1px solid rgba(100, 238, 220, 0.3)', backgroundColor: 'rgba(100, 238, 220, 0.05)', borderRadius: '9999px', alignSelf: 'center' }}>
            <span className="font-label-mono-sm text-primary uppercase tracking-widest">Industry 4.0 Standard</span>
          </div>
          <h1 className="font-display-xl text-white">
            Precision. Intelligence. <span className="text-primary">Security.</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant">
            The future of industrial technology. We architect resilient, hyper-connected infrastructures that drive the next wave of industrial evolution through data-driven precision.
          </p>
          <div className="flex gap-4 justify-center pt-8" style={{ marginTop: '32px' }}>
            <button className="primary-button font-headline-md">
              Initialize System
              <span className="material-symbols-outlined text-lg">terminal</span>
            </button>
            <button className="secondary-button font-label-mono-md">
              View Specifications
            </button>
          </div>
        </div>
        
        {/* Atmospheric Grid */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '128px', background: 'linear-gradient(to top, var(--color-background), transparent)', zIndex: 10 }}></div>
      </section>

      {/* Industries Bento Grid */}
      <section className="py-section-padding container">
        <div style={{ marginBottom: '64px' }}>
          <h2 className="font-headline-lg text-white mb-4">Core Verticals</h2>
          <div style={{ width: '96px', height: '4px', backgroundColor: 'var(--color-primary)', marginBottom: '16px' }}></div>
          <p className="font-label-mono-md text-on-surface-variant uppercase tracking-widest">Domain Expertise</p>
        </div>

        <div className="grid md:grid-cols-12 gap-6" style={{ gridAutoRows: '280px' }}>
          {/* Retail */}
          <div className="md:col-span-8 glass-card flex flex-col justify-end relative" style={{ overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '32px', left: '32px', opacity: 0.1 }}>
              <span className="material-symbols-outlined" style={{ fontSize: '96px', fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
            </div>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <h3 className="font-headline-md text-white mb-2">Retail</h3>
              <p className="font-body-md text-on-surface-variant" style={{ maxWidth: '400px' }}>
                AI in e-commerce and retail industry is creating a brand new dimension for the fashion and e-commerce industry with a much better shopping experience for customers.
              </p>
            </div>
          </div>

          {/* Security */}
          <div className="md:col-span-4 glass-card flex flex-col justify-between relative">
            <span className="material-symbols-outlined text-primary text-4xl teal-glow" style={{ fontVariationSettings: "'FILL' 1", fontSize: '36px' }}>security</span>
            <div>
              <h3 className="font-headline-md text-white mb-2">Security-Surveillance</h3>
              <p className="font-body-md text-on-surface-variant">
                Integration of high-tech video equipments into surveillance systems with rigorous training data sets.
              </p>
            </div>
          </div>

          {/* Real Estate */}
          <div className="md:col-span-4 glass-card flex flex-col justify-between relative">
            <span className="material-symbols-outlined text-primary text-4xl teal-glow" style={{ fontSize: '36px' }}>apartment</span>
            <div>
              <h3 className="font-headline-md text-white mb-2">Real Estate</h3>
              <p className="font-body-md text-on-surface-variant">
                Annotation for AI training data helping developers design and develop landscapes and structural frameworks.
              </p>
            </div>
          </div>

          {/* Automotive */}
          <div className="md:col-span-4 glass-card flex flex-col justify-between relative">
            <span className="material-symbols-outlined text-primary text-4xl teal-glow" style={{ fontSize: '36px' }}>directions_car</span>
            <div>
              <h3 className="font-headline-md text-white mb-2">Automotive</h3>
              <p className="font-body-md text-on-surface-variant">
                Wide range of image annotation techniques creating training data for autonomous driving vehicles.
              </p>
            </div>
          </div>

          {/* Sports */}
          <div className="md:col-span-4 glass-card flex flex-col justify-between relative">
            <span className="material-symbols-outlined text-primary text-4xl teal-glow" style={{ fontSize: '36px' }}>analytics</span>
            <div>
              <h3 className="font-headline-md text-white mb-2">Sports</h3>
              <p className="font-body-md text-on-surface-variant">
                Image annotation services for AI in sports analytics and cutting-edge game development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-section-padding bg-surface-deep relative" style={{ borderTop: '1px solid var(--color-border-muted)', borderBottom: '1px solid var(--color-border-muted)' }}>
        <div className="container grid md:grid-cols-2 gap-8 items-center relative z-10" style={{ gap: '64px' }}>
          <div className="flex flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', padding: '8px 16px', backgroundColor: 'rgba(100, 238, 220, 0.1)', border: '1px solid rgba(100, 238, 220, 0.2)', borderRadius: '8px', alignSelf: 'flex-start' }}>
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <span className="font-label-mono-md text-primary" style={{ fontWeight: 'bold' }}>ISO 27001:2013 CERTIFIED</span>
            </div>
            <h2 className="font-headline-lg text-white">Uncompromising Data Standards</h2>
            <p className="font-body-lg text-on-surface-variant">
              Security is not a feature; it is our foundation. Industrial Tech Collective operates under strict adherence to international information security management standards, ensuring your critical infrastructure data is protected by the most advanced protocols.
            </p>
            
            <div className="grid grid-cols-1 gap-6" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <p className="font-label-mono-sm text-primary uppercase">Encryption</p>
                <p className="font-headline-md text-white" style={{ fontWeight: 'bold' }}>AES-256</p>
                <p className="font-label-mono-sm text-on-surface-variant">Military Grade</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <p className="font-label-mono-sm text-primary uppercase">Compliance</p>
                <p className="font-headline-md text-white" style={{ fontWeight: 'bold' }}>SOC 2</p>
                <p className="font-label-mono-sm text-on-surface-variant">Type II Certified</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <p className="font-label-mono-sm text-primary uppercase">Reliability</p>
                <p className="font-headline-md text-white" style={{ fontWeight: 'bold' }}>99.999%</p>
                <p className="font-label-mono-sm text-on-surface-variant">Uptime SLA</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="glass-card flex flex-col items-center justify-center text-center" style={{ width: '100%', maxWidth: '400px', aspectRatio: '1/1', borderRadius: '50%', border: '2px solid rgba(100, 238, 220, 0.2)', padding: '48px', gap: '24px' }}>
              <div className="teal-glow" style={{ width: '96px', height: '96px', borderRadius: '50%', backgroundColor: 'rgba(100, 238, 220, 0.1)', border: '1px solid rgba(100, 238, 220, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '48px', fontVariationSettings: "'FILL' 1" }}>lock_person</span>
              </div>
              <h3 className="font-headline-md text-white">Vaulted Intelligence</h3>
              <p className="font-body-md text-on-surface-variant">Dedicated hardware security modules and multi-factor biometric authentication layers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-section-padding text-center container">
        <div style={{ maxWidth: '768px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <h2 className="font-headline-lg text-white">Ready for Integration?</h2>
          <p className="font-body-lg text-on-surface-variant">Deploy our proprietary technology stack across your enterprise ecosystem and unlock unprecedented operational clarity.</p>
          <div className="flex flex-col items-center justify-center gap-6" style={{ flexDirection: 'row', alignItems: 'center' }}>
            <button className="primary-button font-headline-md" style={{ padding: '20px 40px' }}>Get a Free Demo</button>
            <span className="text-on-surface-variant font-label-mono-md">OR</span>
            <a href="#" className="text-white font-label-mono-md" style={{ textDecoration: 'underline' }}>Review Documentation</a>
          </div>
        </div>
      </section>
    </div>
  );
}
