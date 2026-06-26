import React from 'react';
import HeroCore3D from '../components/HeroCore3D';

export default function DataAnnotation() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden" style={{ minHeight: '921px', borderBottom: '1px solid var(--color-border-muted)' }}>
        <HeroCore3D />
        
        <div className="container relative z-10 text-center" style={{ maxWidth: '896px', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', backgroundColor: 'rgba(100, 238, 220, 0.1)', border: '1px solid rgba(100, 238, 220, 0.2)', borderRadius: '9999px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} className="animate-pulse"></span>
            <span className="font-label-mono-sm text-primary uppercase tracking-widest">System Status: Optimal</span>
          </div>
          
          <h1 className="font-display-xl text-white">
            High-Fidelity Labeling.<br />
            <span className="text-primary">Mission-Critical Data.</span>
          </h1>
          
          <p className="font-body-lg text-on-surface-variant" style={{ maxWidth: '672px', margin: '0 auto' }}>
            Precision-engineered data annotation for industrial AI applications. We deliver ground-truth datasets with military-grade accuracy and high-throughput pipelines.
          </p>
          
          <div className="flex gap-4 pt-4 justify-center" style={{ marginTop: '32px' }}>
            <button className="primary-button font-headline-md" style={{ color: '#000' }}>
              Initialize Pipeline
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
            <button className="secondary-button font-label-mono-md">
              Technical Whitepaper
            </button>
          </div>
        </div>
        
        {/* Atmospheric Grid */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '128px', background: 'linear-gradient(to top, var(--color-background), transparent)', zIndex: 10 }}></div>
      </section>

      {/* Workflows Section */}
      <section className="py-section-padding container">
        <div className="grid md:grid-cols-12 gap-8" style={{ marginBottom: '96px' }}>
          <div className="md:col-span-4" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 className="font-headline-lg text-on-surface">Annotation<br />Workflows</h2>
            <p className="font-body-md text-on-surface-variant">Standardized protocols for heterogeneous industrial sensor data processing.</p>
          </div>
          
          <div className="md:col-span-8 grid md:grid-cols-3 gap-6" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="glass-card" style={{ padding: '32px', borderTop: '2px solid var(--color-primary)' }}>
              <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '36px' }}>image</span>
              <h3 className="font-label-mono-md text-white mb-2 uppercase">Image</h3>
              <p className="text-on-surface-variant" style={{ fontSize: '14px' }}>Lidar-fused bounding boxes, pixel-perfect segmentation.</p>
            </div>
            
            <div className="glass-card" style={{ padding: '32px', borderTop: '2px solid var(--color-primary)' }}>
              <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '36px' }}>movie</span>
              <h3 className="font-label-mono-md text-white mb-2 uppercase">Video</h3>
              <p className="text-on-surface-variant" style={{ fontSize: '14px' }}>Temporal coherence tracking, frame-by-frame interpolation.</p>
            </div>
            
            <div className="glass-card" style={{ padding: '32px', borderTop: '2px solid var(--color-primary)' }}>
              <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '36px' }}>graphic_eq</span>
              <h3 className="font-label-mono-md text-white mb-2 uppercase">Audio</h3>
              <p className="text-on-surface-variant" style={{ fontSize: '14px' }}>Spectral analysis, anomaly tagging, acoustic separation.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="glass-card flex flex-col md:flex-row" style={{ gridColumn: 'span 2 / span 2', overflow: 'hidden', padding: 0 }}>
            <div style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="font-label-mono-sm text-primary mb-2" style={{ display: 'block' }}>Process ID: IMG_ANNO_04</span>
                <h4 className="font-headline-md text-white mb-4">Precision Computer Vision</h4>
                <p className="font-body-md text-on-surface-variant mb-6">Automated QA loops combined with expert human verification for sub-pixel accuracy in manufacturing defect detection.</p>
              </div>
              
              <div className="flex gap-8">
                <div style={{ paddingLeft: '12px', borderLeft: '1px solid rgba(100,238,220,0.3)' }}>
                  <p className="font-label-mono-sm text-on-surface-variant">Throughput</p>
                  <p className="font-label-mono-md text-primary">1.2M obj/hr</p>
                </div>
                <div style={{ paddingLeft: '12px', borderLeft: '1px solid rgba(100,238,220,0.3)' }}>
                  <p className="font-label-mono-sm text-on-surface-variant">Precision</p>
                  <p className="font-label-mono-md text-primary">99.9%</p>
                </div>
              </div>
            </div>
            <div style={{ flex: 1, minHeight: '256px', position: 'relative', backgroundColor: 'var(--color-surface-container)' }}>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1MyBQLpBXGSsPfjZHtAKUvhi_YnwAXScFaSWVu1a0qu2J7m5EQfHftlkm9c0V2V-et3f_HuXoImV6vBSCw6JFnaHQUHK-R65rE3FaO4Bpqv5Tio5mbprAGiYo-j3vUP128o0JqqUye_CgC3RJJi-j8SgeisWOubQoHL--qbVd1cQ19Ary4aAnvnwtfM3DrGY4lZMpn-HWbA5GJUMQusBD3ZW5BCtvHIyo-gTIYkzcds_o7fYvdcc8QUXuJhgKxPxgk1f-4Tn1SRTu" alt="Precision Computer Vision" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          
          <div className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '160px', height: '160px', backgroundColor: 'rgba(100,238,220,0.1)', filter: 'blur(30px)', borderRadius: '50%' }}></div>
            
            <div style={{ position: 'relative', zIndex: 10 }}>
              <h4 className="font-label-mono-md text-white uppercase mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">analytics</span> Performance
              </h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <div className="flex justify-between font-label-mono-sm mb-2 text-on-surface-variant">
                    <span>Accuracy Rate</span>
                    <span className="text-primary">Target: 100%</span>
                  </div>
                  <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.05)', width: '100%', overflow: 'hidden' }}>
                    <div style={{ height: '100%', backgroundColor: 'var(--color-primary)', width: '98%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between font-label-mono-sm mb-2 text-on-surface-variant">
                    <span>Sync Latency</span>
                    <span className="text-primary">Optimum: &lt;50ms</span>
                  </div>
                  <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.05)', width: '100%', overflow: 'hidden' }}>
                    <div style={{ height: '100%', backgroundColor: 'var(--color-primary)', width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: '32px', position: 'relative', zIndex: 10 }}>
              <button className="secondary-button" style={{ width: '100%', padding: '12px', fontSize: '12px', letterSpacing: '0.1em' }}>
                VIEW API DOCS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-section-padding bg-surface-deep relative" style={{ borderTop: '1px solid var(--color-border-muted)', borderBottom: '1px solid var(--color-border-muted)' }}>
        <div className="container grid md:grid-cols-2 gap-8 items-center relative z-10" style={{ gap: '96px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <h2 className="font-display-lg text-white">Security-First<br />Data Infrastructure</h2>
            <p className="font-body-md text-on-surface-variant">
              Data integrity is our baseline. All annotation environments are air-gapped, SOC2 Type II compliant, and operate under strict ISO 27001 protocols. Your intellectual property never leaves our encrypted nodes.
            </p>
            
            <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <div>
                  <p className="font-label-mono-md text-white mb-1">ISO 27001</p>
                  <p className="font-label-mono-sm text-on-surface-variant">Certified Handling</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">lock</span>
                <div>
                  <p className="font-label-mono-md text-white mb-1">AES-256</p>
                  <p className="font-label-mono-sm text-on-surface-variant">Rest & Transit</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div className="glass-card" style={{ padding: '32px', position: 'relative', zIndex: 10 }}>
              <div className="flex justify-between items-center mb-8">
                <div className="font-label-mono-sm text-white flex items-center gap-2">
                  <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }}></span>
                  SECURITY_MANIFEST.YAML
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">close</span>
              </div>
              
              <div className="font-label-mono-sm text-on-surface-variant" style={{ display: 'flex', flexDirection: 'column', gap: '8px', textTransform: 'none', letterSpacing: 'normal' }}>
                <p><span className="text-primary">encryption:</span> robust</p>
                <p><span className="text-primary">access_control:</span> rbac_enabled</p>
                <p><span className="text-primary">audit_log:</span> immutable_blockchain</p>
                <p><span className="text-primary">data_residency:</span> localized_cluster</p>
                <p><span className="text-primary">security_protocols:</span> [TLS_1.3, IPSec]</p>
                
                <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <p className="text-primary">// STATUS: COMPLIANT</p>
                </div>
              </div>
            </div>
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(100,238,220,0.1)', filter: 'blur(40px)', zIndex: 0, transform: 'scale(0.8)' }} className="animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-padding text-center container">
        <h2 className="font-headline-lg text-white mb-8">Ready to Scale Your Models?</h2>
        <p className="font-body-md text-on-surface-variant mb-12" style={{ maxWidth: '600px', margin: '0 auto 48px auto' }}>
          Join the global industrial leaders leveraging the Tech Collective's high-fidelity labeling clusters.
        </p>
        
        <div className="flex justify-center gap-6" style={{ alignItems: 'center' }}>
          <button className="primary-button font-headline-md" style={{ color: '#000' }}>Request Pilot Node</button>
          <span className="text-on-surface-variant font-label-mono-md">OR</span>
          <button className="secondary-button font-label-mono-md">Talk to an Engineer</button>
        </div>
      </section>
    </div>
  );
}
