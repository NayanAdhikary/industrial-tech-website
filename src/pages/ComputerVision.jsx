import React from 'react';

export default function ComputerVision() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden" style={{ minHeight: '921px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center" style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', backgroundColor: 'rgba(100, 238, 220, 0.1)', border: '1px solid rgba(100, 238, 220, 0.2)', borderRadius: '9999px', alignSelf: 'flex-start' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} className="animate-pulse"></span>
              <span className="font-label-mono-sm text-primary uppercase tracking-widest">Service Operational</span>
            </div>
            <h1 className="font-display-lg text-white" style={{ textShadow: '0 0 15px rgba(100, 238, 220, 0.4)' }}>
              Computer Vision Systems
            </h1>
            <p className="font-body-md text-on-surface-variant" style={{ maxWidth: '500px' }}>
              Precision labeling and semantic understanding for the next generation of autonomous and visual intelligence. We translate raw pixel data into actionable spatial knowledge.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="primary-button font-headline-md" style={{ color: '#000' }}>
                Request Technical Spec
              </button>
              <button className="secondary-button font-label-mono-md flex items-center gap-2">
                <span className="material-symbols-outlined">play_circle</span>
                View Live Demo
              </button>
            </div>
          </div>

          <div className="relative group">
            <div style={{ position: 'absolute', inset: '-16px', backgroundColor: 'rgba(100,238,220,0.1)', filter: 'blur(30px)', borderRadius: '50%', transition: 'all 0.3s' }}></div>
            <div className="glass-card" style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ width: '100%', aspectRatio: '1/1', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '200px', fontVariationSettings: "'wght' 100" }}>grid_view</span>
                </div>
                <div style={{ position: 'relative', width: '256px', height: '256px', border: '1px solid rgba(100,238,220,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(12deg)' }}>
                  <div style={{ position: 'absolute', width: '100%', height: '100%', border: '1px solid rgba(100,238,220,0.2)', transform: 'rotate(-45deg)' }}></div>
                  <div style={{ position: 'absolute', width: '100%', height: '100%', border: '1px solid rgba(100,238,220,0.2)', transform: 'rotate(90deg)' }}></div>
                  <div style={{ position: 'absolute', width: '100%', height: '100%', borderTop: '4px solid var(--color-primary)', boxShadow: '0 0 20px rgba(100,238,220,0.8)' }} className="animate-pulse"></div>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJTU_sRlKn_XA_KvRv4EooL-2Hild56kMu7FIcXe-EfQQys10x_1D-go_5rL3WAjFFkeiFb1RxXNvsBLDbZV9tqAb2he-zdOlRkPa3A0lUZvDvrTPKpdygNxKbnFOFK8Mk5QHgFU4Nlj1-9Dcas5f_sqNmOM6nqkEzwm-IyARu6P51hwvd-4qaND81QF42bsotPe1_hpAzIrP-bXlvhzXZMvf3LdXcvdyidq_cG40UN-BoPAmODmyWeYyQMrMq1i6pRv3-mfA6-LzR" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', opacity: 0.6 }} alt="Scanning view" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-section-padding container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6" style={{ marginBottom: '48px' }}>
          <div>
            <h2 className="font-headline-lg text-on-surface">Core Capabilities</h2>
            <p className="font-label-mono-sm text-on-surface-variant mt-2">Technical Breakdown v4.0</p>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-md text-right">
            Our systems are engineered for zero-latency inference and mathematical precision across diverse hardware environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 glass-card" style={{ padding: '32px' }}>
            <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '36px', fontVariationSettings: "'FILL' 1" }}>category</span>
            <h3 className="font-headline-lg mb-4 text-white">Semantic Segmentation</h3>
            <p className="text-on-surface-variant mb-6">Pixel-perfect classification for every element in the frame. We achieve 99.8% precision on complex industrial textures and materials.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ backgroundColor: 'var(--color-primary)', height: '100%', width: '99.8%', boxShadow: '0 0 10px rgba(100,238,220,0.5)' }}></div>
              </div>
              <div className="flex justify-between font-label-mono-sm text-primary">
                <span>PRECISION SCALE</span>
                <span>99.8%</span>
              </div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '32px' }}>
            <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '36px' }}>view_in_ar</span>
            <h3 className="font-label-mono-sm text-white mb-2">Spatial Intelligence</h3>
            <p className="text-on-surface-variant" style={{ fontSize: '14px' }}>3D Bounding Boxes & LiDAR integration for depth-aware spatial annotation in autonomous robotics.</p>
          </div>

          <div className="glass-card" style={{ padding: '32px' }}>
            <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '36px' }}>gesture</span>
            <h3 className="font-label-mono-sm text-white mb-2">Navigation Logic</h3>
            <p className="text-on-surface-variant" style={{ fontSize: '14px' }}>Polygon & Lane Annotation protocols critical for autonomous navigation and edge detection.</p>
          </div>
        </div>
      </section>

      {/* Security & Quality Section */}
      <section className="py-section-padding relative overflow-hidden" style={{ backgroundColor: 'var(--color-surface-container-lowest)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container relative z-10">
          <div className="glass-card flex flex-col md:flex-row items-center gap-16" style={{ padding: '48px', borderLeft: '4px solid var(--color-primary)' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <h2 className="font-display-lg text-white">Security & Integrity Without Compromise</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="flex gap-4">
                  <div style={{ width: '48px', height: '48px', borderRadius: '4px', backgroundColor: 'rgba(100,238,220,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined text-primary">verified_user</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">ISO 27001 Certified</h4>
                    <p className="text-on-surface-variant font-body-md">Standardized global excellence for information security management systems.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div style={{ width: '48px', height: '48px', borderRadius: '4px', backgroundColor: 'rgba(100,238,220,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined text-primary">lock</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Military Grade Encryption</h4>
                    <p className="text-on-surface-variant font-body-md">End-to-end multi-layer encryption for all training data and model weights.</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ flex: 1, width: '100%', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '-4px', background: 'linear-gradient(to right, var(--color-primary), transparent)', opacity: 0.2, filter: 'blur(20px)' }}></div>
              <div style={{ position: 'relative', backgroundColor: 'var(--color-surface-container-low)', padding: '32px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-2">
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-error)' }}></div>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-tertiary)' }}></div>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
                  </div>
                  <div className="font-label-mono-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>SECURITY_DASHBOARD_LIVE</div>
                </div>
                <div className="font-label-mono-sm" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div className="text-primary">{'>'} INITIALIZING SECURITY HANDSHAKE...</div>
                  <div className="text-on-surface-variant">{'>'} KEY EXCHANGE [AES-256-GCM] SUCCESSFUL</div>
                  <div className="text-on-surface-variant">{'>'} NODE 4A2-99 VERIFIED VIA BIOMETRIC TOKEN</div>
                  <div className="flex items-center gap-2">
                    <span className="text-on-surface-variant">{'>'} DATA ENCRYPTION STATUS:</span>
                    <span style={{ padding: '4px 8px', backgroundColor: 'rgba(100,238,220,0.2)', color: 'var(--color-primary)', border: '1px solid rgba(100,238,220,0.3)', borderRadius: '4px' }}>SECURE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
