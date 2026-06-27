import React, { useState, useEffect, useRef } from 'react';
import HeroCore3D from '../components/HeroCore3D';
import systemArchImg from '../assets/system_architecture_diagram.png';

// Custom Intersection Observer fade-in wrapper component
function FadeIn({ children }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.05 });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </div>
  );
}

export default function DataAnnotation() {
  const [accuracyVal, setAccuracyVal] = useState(0);
  const [assetsVal, setAssetsVal] = useState(0);
  const [deployVal, setDeployVal] = useState(0);
  const [hoveredBox, setHoveredBox] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAccuracyVal(99.8);
      setAssetsVal(500);
      setDeployVal(100);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Bounding box configuration for interactive showcase
  const boundingBoxes = [
    { id: 1, label: 'VEHICLE_01', conf: '99.4%', top: '35%', left: '12%', width: '28%', height: '40%', color: 'var(--color-primary)' },
    { id: 2, label: 'PEDESTRIAN_03', conf: '98.1%', top: '42%', left: '55%', width: '8%', height: '25%', color: '#ffa963' },
    { id: 3, label: 'SIGNAL_LIGHT', conf: '99.9%', top: '15%', left: '46%', width: '4%', height: '10%', color: '#ff6b6b' },
  ];

  return (
    <div style={{ position: 'relative', fontFamily: 'var(--font-geist)', color: 'var(--color-on-surface)' }}>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden" style={{ minHeight: '850px', borderBottom: '1px solid var(--color-border-muted)', padding: '120px 0 60px' }}>
        <HeroCore3D />
        
        <div className="container relative z-10 text-center" style={{ maxWidth: '896px', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', backgroundColor: 'rgba(100, 238, 220, 0.1)', border: '1px solid rgba(100, 238, 220, 0.2)', borderRadius: '9999px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} className="animate-pulse"></span>
            <span className="font-label-mono-sm text-primary uppercase tracking-widest" style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px' }}>System Status: Optimal</span>
          </div>
          
          <h1 className="font-display-xl text-white" style={{ fontFamily: 'var(--font-geist)', background: 'linear-gradient(to right, #ffffff, var(--color-primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Data Annotation Services
          </h1>
          
          <p className="font-body-lg text-on-surface-variant" style={{ fontFamily: 'var(--font-geist)', maxWidth: '672px', margin: '0 auto' }}>
            Powering Artificial Intelligence with High-Quality Labeled Data. We provide industrial-grade precision for your most complex neural networks.
          </p>
          
          <div className="flex gap-4 pt-4 justify-center" style={{ marginTop: '32px' }}>
            <button className="primary-button font-headline-md" style={{ color: '#000', fontFamily: 'var(--font-geist)', cursor: 'pointer', boxShadow: '0 0 20px rgba(100, 238, 220, 0.3)' }}>
              Initiate Project
              <span className="material-symbols-outlined text-lg">bolt</span>
            </button>
            <button className="secondary-button font-label-mono-md" style={{ fontFamily: 'var(--font-jetbrains)', cursor: 'pointer' }}>
              Technical Specs
            </button>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section style={{ padding: '60px 0', backgroundColor: 'var(--color-surface-container-lowest)', borderBottom: '1px solid var(--color-border-muted)' }}>
        <div className="container">
          <FadeIn>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center', minWidth: '160px' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '42px', fontWeight: 'bold', color: 'var(--color-primary)', textShadow: '0 0 10px rgba(100,238,220,0.3)' }}>{accuracyVal}%</div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'var(--color-on-surface-variant)', tracking: '0.1em', textTransform: 'uppercase' }}>Label Accuracy</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center', minWidth: '160px' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '42px', fontWeight: 'bold', color: 'var(--color-primary)', textShadow: '0 0 10px rgba(100,238,220,0.3)' }}>{assetsVal}K+</div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'var(--color-on-surface-variant)', tracking: '0.1em', textTransform: 'uppercase' }}>Annotated Assets</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center', minWidth: '160px' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '42px', fontWeight: 'bold', color: 'var(--color-primary)', textShadow: '0 0 10px rgba(100,238,220,0.3)' }}>{deployVal}+</div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'var(--color-on-surface-variant)', tracking: '0.1em', textTransform: 'uppercase' }}>Global Deployments</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center', minWidth: '160px' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '42px', fontWeight: 'bold', color: 'var(--color-primary)', textShadow: '0 0 10px rgba(100,238,220,0.3)' }}>24/7</div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'var(--color-on-surface-variant)', tracking: '0.1em', textTransform: 'uppercase' }}>Mission Support</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid (Annotation Vectors) */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid var(--color-border-muted)' }} className="container">
        <FadeIn>
          <div style={{ marginBottom: '64px' }}>
            <h2 className="font-headline-lg text-white mb-4" style={{ fontFamily: 'var(--font-geist)' }}>Precision Annotation Vectors</h2>
            <div style={{ width: '96px', height: '4px', backgroundColor: 'var(--color-primary)', marginBottom: '16px' }}></div>
            <p className="font-label-mono-md text-on-surface-variant uppercase tracking-widest" style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '13px' }}>Multimodal Data Processing Frameworks</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="glass-card" style={{ padding: '32px', transition: 'all 0.4s ease' }}>
              <span className="material-symbols-outlined text-primary mb-6" style={{ fontSize: '40px' }}>image</span>
              <h3 className="font-headline-md text-white mb-4" style={{ fontFamily: 'var(--font-geist)' }}>Computer Vision</h3>
              <ul style={{ padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-jetbrains)', fontSize: '12px' }} className="text-on-surface-variant">
                <li><span className="text-primary mr-2">01</span> Bounding Box & Polygon</li>
                <li><span className="text-primary mr-2">02</span> Semantic Segmentation</li>
                <li><span className="text-primary mr-2">03</span> Key-point Mapping</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="glass-card" style={{ padding: '32px', transition: 'all 0.4s ease' }}>
              <span className="material-symbols-outlined text-primary mb-6" style={{ fontSize: '40px' }}>videocam</span>
              <h3 className="font-headline-md text-white mb-4" style={{ fontFamily: 'var(--font-geist)' }}>Video Perception</h3>
              <ul style={{ padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-jetbrains)', fontSize: '12px' }} className="text-on-surface-variant">
                <li><span className="text-primary mr-2">01</span> Object Tracking</li>
                <li><span className="text-primary mr-2">02</span> Event Localization</li>
                <li><span className="text-primary mr-2">03</span> Temporal Consistency</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="glass-card" style={{ padding: '32px', transition: 'all 0.4s ease' }}>
              <span className="material-symbols-outlined text-primary mb-6" style={{ fontSize: '40px' }}>translate</span>
              <h3 className="font-headline-md text-white mb-4" style={{ fontFamily: 'var(--font-geist)' }}>NLP & Text</h3>
              <ul style={{ padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-jetbrains)', fontSize: '12px' }} className="text-on-surface-variant">
                <li><span className="text-primary mr-2">01</span> Named Entity Recognition</li>
                <li><span className="text-primary mr-2">02</span> Sentiment Classification</li>
                <li><span className="text-primary mr-2">03</span> Intent Extraction</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="glass-card" style={{ padding: '32px', transition: 'all 0.4s ease' }}>
              <span className="material-symbols-outlined text-primary mb-6" style={{ fontSize: '40px' }}>mic</span>
              <h3 className="font-headline-md text-white mb-4" style={{ fontFamily: 'var(--font-geist)' }}>Audio Transcription</h3>
              <ul style={{ padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-jetbrains)', fontSize: '12px' }} className="text-on-surface-variant">
                <li><span className="text-primary mr-2">01</span> Phonetic Labeling</li>
                <li><span className="text-primary mr-2">02</span> Speaker Diarization</li>
                <li><span className="text-primary mr-2">03</span> Utterance Tagging</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="glass-card" style={{ padding: '32px', transition: 'all 0.4s ease' }}>
              <span className="material-symbols-outlined text-primary mb-6" style={{ fontSize: '40px' }}>description</span>
              <h3 className="font-headline-md text-white mb-4" style={{ fontFamily: 'var(--font-geist)' }}>Document AI</h3>
              <ul style={{ padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-jetbrains)', fontSize: '12px' }} className="text-on-surface-variant">
                <li><span className="text-primary mr-2">01</span> OCR Correction</li>
                <li><span className="text-primary mr-2">02</span> Form Field Mapping</li>
                <li><span className="text-primary mr-2">03</span> Layout Analysis</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="glass-card" style={{ padding: '32px', border: '1px solid rgba(100, 238, 220, 0.3)', transition: 'all 0.4s ease' }}>
              <span className="material-symbols-outlined text-primary mb-6" style={{ fontSize: '40px' }}>settings_suggest</span>
              <h3 className="font-headline-md text-white mb-4" style={{ fontFamily: 'var(--font-geist)' }}>Custom Solutions</h3>
              <p className="font-body-md text-on-surface-variant mb-6" style={{ fontFamily: 'var(--font-geist)' }}>
                Bespoke annotation workflows for proprietary sensor data (LIDAR, SAR, Hyperspectral).
              </p>
              <a href="#" className="text-primary font-label-mono-sm font-bold inline-flex items-center gap-2 hover:translate-x-2 transition-all" style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px' }}>
                Request Spec <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Techniques & Showcase section with interactive overlay */}
      <section style={{ padding: '100px 0', backgroundColor: 'var(--color-surface-deep)', borderBottom: '1px solid var(--color-border-muted)' }}>
        <div className="container">
          <FadeIn>
            <div className="text-center" style={{ marginBottom: '48px' }}>
              <h2 className="font-headline-lg text-white mb-4" style={{ fontFamily: 'var(--font-geist)' }}>Interactive Showcase</h2>
              <p className="font-body-md text-on-surface-variant max-w-lg mx-auto mb-8">Hover over the bounding boxes below to view real-time validation confidence tags.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', fontFamily: 'var(--font-jetbrains)', fontSize: '12px' }}>
                <span className="px-4 py-2 border border-primary/45 bg-primary/10 text-primary rounded-full">Bounding Box</span>
                <span className="px-4 py-2 border border-border-low bg-white/5 text-on-surface-variant rounded-full">Polygon</span>
                <span className="px-4 py-2 border border-border-low bg-white/5 text-on-surface-variant rounded-full">3D Cuboid</span>
                <span className="px-4 py-2 border border-border-low bg-white/5 text-on-surface-variant rounded-full">Semantic Masking</span>
                <span className="px-4 py-2 border border-border-low bg-white/5 text-on-surface-variant rounded-full">Skeleton Keypoint</span>
                <span className="px-4 py-2 border border-border-low bg-white/5 text-on-surface-variant rounded-full">LIDAR Fusion</span>
              </div>
            </div>

            <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(100, 238, 220, 0.1)', filter: 'blur(40px)', transform: 'scale(0.8)', zIndex: 0 }} className="animate-pulse"></div>
              <div className="glass-card" style={{ padding: 0, overflow: 'hidden', position: 'relative', zIndex: 1 }}>
                <div className="scanning-line"></div>
                <img style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.7 }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2mVJ5blaUqNgXHFa0XqKItRPnnU4BDIAPdtpPN1-kLO_6JYZpohm4GrDqesSZWxLUUdQvpjJgmJZu8L5uLs_RfQYa-f_sygVPAtA2quGHEH09qLNJwhz6EAAE0Y6nFAke98T8NOuS8t119j7mF7m-iS6YFYvuRihzP5Ad7BWHkv9WIc4FIuzn9K8DPdbfyrj5m6KyNScnPI3rL_lJ6k5SxNii2v1qE0t-lufoacPv5GBjs8kn2LOx4dhSZ_gy0aiGBkUoDLrxrjF8" alt="Data Annotation Core Showcase" />
                
                {/* Interactive Bounding Boxes */}
                {boundingBoxes.map((box) => {
                  const isHovered = hoveredBox === box.id;
                  return (
                    <div
                      key={box.id}
                      onMouseEnter={() => setHoveredBox(box.id)}
                      onMouseLeave={() => setHoveredBox(null)}
                      style={{
                        position: 'absolute',
                        top: box.top,
                        left: box.left,
                        width: box.width,
                        height: box.height,
                        border: `2px solid ${box.color}`,
                        boxShadow: isHovered ? `0 0 15px ${box.color}` : 'none',
                        backgroundColor: isHovered ? 'rgba(100, 238, 220, 0.05)' : 'transparent',
                        cursor: 'crosshair',
                        transition: 'all 0.3s ease',
                        zIndex: 10
                      }}
                    >
                      {/* Confidence tag */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '-20px',
                          left: '-2px',
                          backgroundColor: box.color,
                          color: '#000',
                          padding: '2px 6px',
                          fontSize: '10px',
                          fontFamily: 'var(--font-jetbrains)',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          opacity: isHovered ? 1 : 0.8,
                          transition: 'opacity 0.3s ease',
                          pointerEvents: 'none',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {box.label} // {box.conf}
                      </div>
                    </div>
                  );
                })}

                <div style={{ position: 'absolute', bottom: '24px', right: '24px', display: 'flex', gap: '16px', fontFamily: 'var(--font-jetbrains)', fontSize: '12px' }}>
                  <span style={{ backgroundColor: 'rgba(0,0,0,0.7)', padding: '6px 12px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', color: '#fff' }}>FPS: 60.0</span>
                  <span style={{ backgroundColor: 'rgba(0,0,0,0.7)', padding: '6px 12px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', color: 'var(--color-primary)' }}>IOU: 0.94</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Global Industry Support */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid var(--color-border-muted)' }} className="container">
        <FadeIn>
          <h2 className="font-headline-lg text-white mb-12 text-center" style={{ fontFamily: 'var(--font-geist)' }}>Global Industry Support</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '12px', backgroundColor: 'var(--color-surface-container)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s' }} className="teal-glow-hover">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant">directions_car</span>
              </div>
              <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'var(--color-on-surface-variant)', tracking: '0.05em', textTransform: 'uppercase' }}>Automotive</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '12px', backgroundColor: 'var(--color-surface-container)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s' }} className="teal-glow-hover">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant">medical_services</span>
              </div>
              <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'var(--color-on-surface-variant)', tracking: '0.05em', textTransform: 'uppercase' }}>Healthcare</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '12px', backgroundColor: 'var(--color-surface-container)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s' }} className="teal-glow-hover">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant">precision_manufacturing</span>
              </div>
              <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'var(--color-on-surface-variant)', tracking: '0.05em', textTransform: 'uppercase' }}>Manufacturing</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '12px', backgroundColor: 'var(--color-surface-container)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s' }} className="teal-glow-hover">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant">agriculture</span>
              </div>
              <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'var(--color-on-surface-variant)', tracking: '0.05em', textTransform: 'uppercase' }}>AgriTech</span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Integrated Intelligence / Why Choose Us */}
      <section style={{ padding: '100px 0', backgroundColor: 'var(--color-surface-container-low)', borderBottom: '1px solid var(--color-border-muted)' }}>
        <div className="container">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-headline-lg text-white mb-6" style={{ fontFamily: 'var(--font-geist)' }}>Integrated Intelligence</h2>
                <p className="font-body-md text-on-surface-variant mb-12" style={{ fontFamily: 'var(--font-geist)' }}>
                  Our annotation pipeline is a synthesis of human expertise and automated verification, ensuring zero-fault data integrity for high-stakes environments.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ width: '24px', height: '24px', flexShrink: 0, borderRadius: '4px', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-on-primary)' }}>
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </div>
                    <div>
                      <h4 className="font-headline-md text-white text-lg mb-1" style={{ margin: 0, fontFamily: 'var(--font-geist)' }}>Enterprise Security</h4>
                      <p className="text-on-surface-variant font-body-md text-sm" style={{ margin: '4px 0 0', fontFamily: 'var(--font-geist)' }}>ISO 27001 certified facilities with biometric access control.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ width: '24px', height: '24px', flexShrink: 0, borderRadius: '4px', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-on-primary)' }}>
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </div>
                    <div>
                      <h4 className="font-headline-md text-white text-lg mb-1" style={{ margin: 0, fontFamily: 'var(--font-geist)' }}>Full NDA Compliance</h4>
                      <p className="text-on-surface-variant font-body-md text-sm" style={{ margin: '4px 0 0', fontFamily: 'var(--font-geist)' }}>Dedicated air-gapped infrastructure for sensitive IP projects.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ width: '24px', height: '24px', flexShrink: 0, borderRadius: '4px', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-on-primary)' }}>
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </div>
                    <div>
                      <h4 className="font-headline-md text-white text-lg mb-1" style={{ margin: 0, fontFamily: 'var(--font-geist)' }}>Dynamic Scalability</h4>
                      <p className="text-on-surface-variant font-body-md text-sm" style={{ margin: '4px 0 0', fontFamily: 'var(--font-geist)' }}>Ability to ramp up to 500+ annotators within 72 hours.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <div className="glass-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '360px', backgroundColor: 'rgba(100, 238, 220, 0.03)' }}>
                  <img src={systemArchImg} alt="System Architecture Diagram" style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '360px', opacity: 0.8 }} />
                  <div className="font-label-mono-sm text-primary tracking-wider" style={{ position: 'absolute', bottom: '16px', left: '16px', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '6px 12px', borderRadius: '4px', border: '1px solid rgba(100, 238, 220, 0.3)', fontFamily: 'var(--font-jetbrains)', fontSize: '11px' }}>SYSTEM ARCHITECTURE: V4.2.0</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Workflow Cycle (Development Cycle) */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid var(--color-border-muted)' }} className="container">
        <FadeIn>
          <h2 className="font-headline-lg text-white mb-16 text-center" style={{ fontFamily: 'var(--font-geist)' }}>Development Cycle</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="glass-card p-6" style={{ position: 'relative' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: 'var(--color-on-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '16px' }}>1</div>
              <h4 className="font-headline-md text-white text-lg mb-2" style={{ fontFamily: 'var(--font-geist)' }}>Requirement Analysis</h4>
              <p className="text-on-surface-variant font-body-md text-sm" style={{ fontFamily: 'var(--font-geist)' }}>Defining taxonomy and edge-case protocols.</p>
            </div>

            <div className="glass-card p-6" style={{ position: 'relative' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--color-primary)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '16px' }}>2</div>
              <h4 className="font-headline-md text-white text-lg mb-2" style={{ fontFamily: 'var(--font-geist)' }}>Pilot Batch</h4>
              <p className="text-on-surface-variant font-body-md text-sm" style={{ fontFamily: 'var(--font-geist)' }}>Validation of guidelines through 1% data sample.</p>
            </div>

            <div className="glass-card p-6" style={{ position: 'relative' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--color-primary)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '16px' }}>3</div>
              <h4 className="font-headline-md text-white text-lg mb-2" style={{ fontFamily: 'var(--font-geist)' }}>Mass Scale-up</h4>
              <p className="text-on-surface-variant font-body-md text-sm" style={{ fontFamily: 'var(--font-geist)' }}>Parallelized human-in-the-loop annotation.</p>
            </div>

            <div className="glass-card p-6" style={{ position: 'relative' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--color-primary)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '16px' }}>4</div>
              <h4 className="font-headline-md text-white text-lg mb-2" style={{ fontFamily: 'var(--font-geist)' }}>Final QA Export</h4>
              <p className="text-on-surface-variant font-body-md text-sm" style={{ fontFamily: 'var(--font-geist)' }}>Multi-level review and delivery in native formats.</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Formats Section */}
      <section style={{ padding: '60px 0', backgroundColor: 'var(--color-surface-deep)', borderBottom: '1px solid var(--color-border-muted)' }}>
        <div className="container">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-8 font-label-mono-sm text-on-surface-variant opacity-60" style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px' }}>
              <span className="px-6 py-3 border border-border-low rounded bg-white/5">COCO</span>
              <span className="px-6 py-3 border border-border-low rounded bg-white/5">YOLO v8</span>
              <span className="px-6 py-3 border border-border-low rounded bg-white/5">TFRecord</span>
              <span className="px-6 py-3 border border-border-low rounded bg-white/5">JSON/XML</span>
              <span className="px-6 py-3 border border-border-low rounded bg-white/5">CSV/TSV</span>
              <span className="px-6 py-3 border border-border-low rounded bg-white/5">KML</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '100px 0' }} className="max-w-3xl mx-auto px-margin-edge">
        <FadeIn>
          <h2 className="font-headline-lg text-white mb-12 text-center" style={{ fontFamily: 'var(--font-geist)' }}>Frequently Asked Specs</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <details style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
              <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px', cursor: 'pointer', color: '#fff', fontWeight: '600', fontFamily: 'var(--font-geist)' }} className="text-base">
                <span>What is your standard turnaround time?</span>
                <span className="material-symbols-outlined">expand_more</span>
              </summary>
              <div style={{ padding: '24px', paddingTop: 0, color: 'var(--color-on-surface-variant)', fontSize: '14px', borderTop: '1px solid rgba(255,255,255,0.05)', fontFamily: 'var(--font-geist)' }}>
                Standard turnaround for a pilot batch is 48-72 hours. Massive scale production is project-dependent but optimized through parallel workflows.
              </div>
            </details>

            <details style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
              <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px', cursor: 'pointer', color: '#fff', fontWeight: '600', fontFamily: 'var(--font-geist)' }} className="text-base">
                <span>How do you ensure label consistency?</span>
                <span className="material-symbols-outlined">expand_more</span>
              </summary>
              <div style={{ padding: '24px', paddingTop: 0, color: 'var(--color-on-surface-variant)', fontSize: '14px', borderTop: '1px solid rgba(255,255,255,0.05)', fontFamily: 'var(--font-geist)' }}>
                We employ a Three-Layer Review System: Annotator (Self), QA Specialist (Review), and Project Lead (Final Validation), aiming for &gt;99.5% IOU.
              </div>
            </details>

            <details style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
              <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px', cursor: 'pointer', color: '#fff', fontWeight: '600', fontFamily: 'var(--font-geist)' }} className="text-base">
                <span>Can you work with proprietary data platforms?</span>
                <span className="material-symbols-outlined">expand_more</span>
              </summary>
              <div style={{ padding: '24px', paddingTop: 0, color: 'var(--color-on-surface-variant)', fontSize: '14px', borderTop: '1px solid rgba(255,255,255,0.05)', fontFamily: 'var(--font-geist)' }}>
                Yes, our engineers are proficient in major open-source tools (CVAT, Labelbox) as well as custom SDK integrations into your private ecosystem.
              </div>
            </details>
          </div>
        </FadeIn>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '100px 0' }} className="px-margin-edge">
        <FadeIn>
          <div className="container relative overflow-hidden rounded-xl border border-primary/20" style={{ padding: 0 }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(100, 238, 220, 0.15), transparent)', zIndex: 0 }}></div>
            <div className="glass-card relative z-10 flex flex-col md:flex-row items-center justify-between gap-8" style={{ padding: '64px', border: 'none' }}>
              <div className="text-center md:text-left">
                <h2 className="font-headline-lg text-white mb-4" style={{ fontFamily: 'var(--font-geist)' }}>Ready to Train Smarter AI Models?</h2>
                <p className="font-body-md text-on-surface-variant" style={{ fontFamily: 'var(--font-geist)' }}>Connect with our solutions architects to build a high-fidelity data pipeline today.</p>
              </div>
              <div className="flex gap-4">
                <button className="primary-button font-label-mono-md" style={{ color: '#000', fontFamily: 'var(--font-jetbrains)', cursor: 'pointer' }}>Get Free Quote</button>
                <button className="secondary-button font-label-mono-md" style={{ fontFamily: 'var(--font-jetbrains)', cursor: 'pointer' }}>View Case Studies</button>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
