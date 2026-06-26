import React from 'react';
import HeroCore3D from '../components/HeroCore3D';

export default function Solutions() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Hero Section */}
      <section style={{ height: '819px', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container grid md:grid-cols-2 gap-12 items-center relative z-10" style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', backgroundColor: 'rgba(100, 238, 220, 0.1)', border: '1px solid rgba(100, 238, 220, 0.2)', borderRadius: '9999px', alignSelf: 'flex-start' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} className="animate-pulse"></span>
              <span className="font-label-mono-sm text-primary uppercase tracking-widest">High-Fidelity Operations</span>
            </div>
            <h1 className="font-display-lg text-white" style={{ lineHeight: 1.1 }}>
              Industrial Intelligence. <br/>
              <span className="text-primary">Scaled.</span>
            </h1>
            <p className="font-body-md text-on-surface-variant" style={{ maxWidth: '500px' }}>
              Deploying proprietary computer vision, NLP, and content moderation systems built on uncompromising data standards for mission-critical infrastructure.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="primary-button font-headline-md">
                Explore Computer Vision
                <span className="material-symbols-outlined text-sm" style={{ marginLeft: '8px' }}>arrow_forward</span>
              </button>
              <button className="secondary-button font-label-mono-md">
                View NLP Frameworks
              </button>
            </div>
          </div>
          
          {/* Neural Network 3D Scene */}
          <div style={{ position: 'relative', height: '500px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroCore3D />
            <div className="glass-card" style={{ position: 'absolute', bottom: '16px', right: '16px', padding: '16px', borderRadius: '8px', zIndex: 20 }}>
              <div className="font-label-mono-sm text-primary mb-2">SYSTEM_CORE_LOAD</div>
              <div style={{ width: '128px', height: '4px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '9999px', overflow: 'hidden' }}>
                <div style={{ height: '100%', backgroundColor: 'var(--color-primary)', width: '66%' }} className="animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Solutions Grid */}
      <section className="py-section-padding container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6" style={{ marginBottom: '48px' }}>
          <div>
            <h2 className="font-headline-lg text-white mb-2">Technical Core Solutions</h2>
            <p className="text-on-surface-variant font-body-md">Precision engineering across every data stream.</p>
          </div>
          <div className="flex gap-4 font-label-mono-sm">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>verified_user</span>
              ISO 27001 Certified
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>lock</span>
              AES-256 Encrypted
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Computer Vision */}
          <div className="md:col-span-8 glass-card relative" style={{ overflow: 'hidden', padding: '32px' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, padding: '32px', opacity: 0.1 }}>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '120px', fontVariationSettings: "'FILL' 1" }}>visibility</span>
            </div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="text-primary font-label-mono-sm mb-4">ENGINEERING UNIT // 01</div>
              <h3 className="font-headline-lg text-white mb-4">Computer Vision</h3>
              <p className="text-on-surface-variant font-body-md mb-8" style={{ maxWidth: '600px' }}>
                High-density annotation services for autonomous systems, industrial robotics, and logistical oversight. We process complex sensor data with sub-pixel precision.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" style={{ marginTop: 'auto' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="font-label-mono-sm text-primary mb-2">VIDEO_STREAM</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-on-surface-variant)' }}>Frame-by-frame temporal tracking and object persistence.</div>
                </div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="font-label-mono-sm text-primary mb-2">IMAGE_SEMANTICS</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-on-surface-variant)' }}>Pixel-perfect segmentation and polygonal masking.</div>
                </div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="font-label-mono-sm text-primary mb-2">LIDAR_POINT_CLOUD</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-on-surface-variant)' }}>3D spatial annotation and depth-field categorization.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specs */}
          <div className="md:col-span-4 glass-card relative flex flex-col" style={{ padding: '32px', background: 'linear-gradient(to bottom right, rgba(100, 238, 220, 0.05), transparent)' }}>
            <div className="font-label-mono-sm text-primary mb-6">COMPLIANCE_PROTOCOL</div>
            <h3 className="font-headline-lg text-white mb-8">Security Standards</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '24px', flexGrow: 1, padding: 0, margin: 0, listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(100, 238, 220, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(100, 238, 220, 0.3)', marginTop: '4px' }}>
                  <span className="material-symbols-outlined text-primary text-sm">shield</span>
                </div>
                <div>
                  <div className="font-label-mono-md text-white">ISO 27001:2013</div>
                  <p style={{ fontSize: '12px', color: 'var(--color-on-surface-variant)' }}>Global standard for information security management.</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(100, 238, 220, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(100, 238, 220, 0.3)', marginTop: '4px' }}>
                  <span className="material-symbols-outlined text-primary text-sm">encrypted</span>
                </div>
                <div>
                  <div className="font-label-mono-md text-white">AES-256 BIT</div>
                  <p style={{ fontSize: '12px', color: 'var(--color-on-surface-variant)' }}>Military-grade encryption for all data at rest and transit.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Integration Section */}
      <section className="py-section-padding bg-surface-container-lowest relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-primary font-label-mono-sm mb-4">SYSTEM_CAPABILITIES</div>
              <h2 className="font-headline-lg text-white mb-6">Built for Industrial Performance</h2>
              <p className="text-on-surface-variant font-body-md mb-8">
                Our solutions are designed to integrate seamlessly into existing DevOps pipelines. We prioritize latency reduction, data sovereignty, and high-availability architecture.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ padding: '24px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <div className="font-label-mono-sm" style={{ fontSize: '32px', color: 'rgba(100,238,220,0.4)', fontWeight: 900 }}>01</div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Scalable API Architecture</h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>RESTful endpoints with GraphQL support for complex data queries.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(100,238,220,0.2)', filter: 'blur(100px)', borderRadius: '50%' }}></div>
              <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ backgroundColor: 'var(--color-surface-container-high)', padding: '12px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="flex gap-2">
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'rgba(255, 180, 171, 0.4)' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'rgba(255, 169, 99, 0.4)' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'rgba(100, 238, 220, 0.4)' }}></div>
                  </div>
                  <div className="font-label-mono-sm" style={{ color: 'var(--color-on-surface-variant)' }}>TERMINAL // CORE_OS_V4.2</div>
                </div>
                <div style={{ padding: '32px', fontFamily: 'var(--font-jetbrains)', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div className="text-primary flex gap-2">
                    <span style={{ opacity: 0.5 }}>$</span>
                    <span>initiate_scan --protocol=LIDAR_S3</span>
                  </div>
                  <div className="text-on-surface-variant">Connecting to neural_node_07... [OK]</div>
                  <div className="text-on-surface-variant">Analyzing point_cloud_data (4.2GB)...</div>
                  <div className="text-primary animate-pulse">_</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
