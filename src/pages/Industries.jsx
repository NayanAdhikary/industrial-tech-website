import React from 'react';
import { Link } from 'react-router-dom';
import HeroCore3D from '../components/HeroCore3D';
import cvImg from '../assets/automotive_detection.png';
import nlpImg from '../assets/nlp_services.png';
import moderationImg from '../assets/content_moderation.png';
import categorizationImg from '../assets/product_categorization.png';

export default function Industries() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Hero Section */}
      <section style={{ minHeight: '900px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.4, background: 'radial-gradient(circle at center, rgba(64, 209, 192, 0.15) 0%, transparent 60%)' }}></div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <HeroCore3D />
        </div>
        
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'inline-block', padding: '4px 12px', border: '1px solid rgba(100, 238, 220, 0.3)', backgroundColor: 'rgba(100, 238, 220, 0.05)', borderRadius: '9999px', alignSelf: 'center' }}>
            <span className="font-label-mono-sm text-primary uppercase tracking-widest">Industry 4.0 Standard</span>
          </div>
          <h1 className="font-display-xl text-white">
            Precision. Intelligence. <span className="text-primary">Security.</span>
          </h1>
          <a href="https://github.com/NayanAdhikary/industrial-tech-website" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline', marginTop: '8px' }}>View source on GitHub</a>
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

        <div className="grid md:grid-cols-2 gap-8">
          {/* Computer Vision Systems */}
          <div className="glass-card flex flex-col relative" style={{ overflow: 'hidden', padding: 0 }}>
            <div className="card-image-container" style={{ width: '100%', height: '260px' }}>
              <img src={cvImg} alt="Computer Vision Systems" className="card-image w-full h-full" style={{ objectFit: 'cover' }} />
            </div>
            <div className="flex flex-col items-center justify-between flex-grow text-center" style={{ padding: '32px 24px', minHeight: '280px' }}>
              <div className="flex flex-col items-center w-full">
                <h3 className="font-headline-md text-white mb-4">Computer Vision Systems</h3>
                <p className="font-body-md text-on-surface-variant mb-6">
                  Precision labeling and semantic understanding for autonomous and visual intelligence. We translate raw pixel data into actionable spatial knowledge.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '8px' }}>
                  {[
                    { label: 'Retail', slug: 'retail' },
                    { label: 'Security', slug: 'security' },
                    { label: 'Real Estate', slug: 'real-estate' },
                    { label: 'Automotive', slug: 'automotive' },
                    { label: 'Sports', slug: 'sports' },
                    { label: 'Agriculture', slug: 'agriculture' },
                    { label: 'Medical', slug: 'medical' },
                    { label: 'Fashion', slug: 'fashion' }
                  ].map((opt) => (
                    <Link key={opt.slug} to={`/computer-vision?subtopic=${opt.slug}`} style={{ padding: '4px 10px', fontSize: '11px', border: '1px solid rgba(100, 238, 220, 0.2)', backgroundColor: 'rgba(100, 238, 220, 0.05)', borderRadius: '4px', color: 'var(--color-primary)', textDecoration: 'none', transition: 'all 0.2s ease' }} className="font-label-mono-sm subtopic-link-tag">
                      {opt.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/computer-vision" className="card-read-more-btn">
                Launch System spec
              </Link>
            </div>
          </div>

          {/* NLP Services */}
          <div className="glass-card flex flex-col relative" style={{ overflow: 'hidden', padding: 0 }}>
            <div className="card-image-container" style={{ width: '100%', height: '260px' }}>
              <img src={nlpImg} alt="NLP Services" className="card-image w-full h-full" style={{ objectFit: 'cover' }} />
            </div>
            <div className="flex flex-col items-center justify-between flex-grow text-center" style={{ padding: '32px 24px', minHeight: '280px' }}>
              <div className="flex flex-col items-center w-full">
                <h3 className="font-headline-md text-white mb-4">NLP Services</h3>
                <p className="font-body-md text-on-surface-variant mb-6">
                  Deciphering the industrial complex through high-fidelity linguistic analysis. We transform unstructured text into deterministic data streams for autonomous decision-making.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '8px' }}>
                  {[
                    { label: 'Sentiment Analysis', slug: 'sentiment-analysis' },
                    { label: 'Entity Extraction', slug: 'entity-extraction' },
                    { label: 'Technical Taxonomy', slug: 'technical-taxonomy' },
                    { label: 'Machine Translation', slug: 'machine-translation' }
                  ].map((opt) => (
                    <Link key={opt.slug} to={`/nlp?subtopic=${opt.slug}`} style={{ padding: '4px 10px', fontSize: '11px', border: '1px solid rgba(100, 238, 220, 0.2)', backgroundColor: 'rgba(100, 238, 220, 0.05)', borderRadius: '4px', color: 'var(--color-primary)', textDecoration: 'none', transition: 'all 0.2s ease' }} className="font-label-mono-sm subtopic-link-tag">
                      {opt.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/nlp" className="card-read-more-btn">
                Launch System spec
              </Link>
            </div>
          </div>

          {/* Content Moderation */}
          <div className="glass-card flex flex-col relative" style={{ overflow: 'hidden', padding: 0 }}>
            <div className="card-image-container" style={{ width: '100%', height: '260px' }}>
              <img src={moderationImg} alt="Content Moderation" className="card-image w-full h-full" style={{ objectFit: 'cover' }} />
            </div>
            <div className="flex flex-col items-center justify-between flex-grow text-center" style={{ padding: '32px 24px', minHeight: '280px' }}>
              <div className="flex flex-col items-center w-full">
                <h3 className="font-headline-md text-white mb-4">Content Moderation</h3>
                <p className="font-body-md text-on-surface-variant mb-6">
                  Implementing sub-millisecond content moderation and safety auditing across decentralized nodes. Our protocols ensure technical integrity in real-time.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '8px' }}>
                  {[
                    { label: 'Policy Enforcement', slug: 'policy-enforcement' },
                    { label: 'Text & Image Safety', slug: 'text-image-safety' },
                    { label: 'Risk Vector Scrubbing', slug: 'risk-vector-scrubbing' },
                    { label: 'Metadata Audit', slug: 'metadata-audit' }
                  ].map((opt) => (
                    <Link key={opt.slug} to={`/content-moderation?subtopic=${opt.slug}`} style={{ padding: '4px 10px', fontSize: '11px', border: '1px solid rgba(100, 238, 220, 0.2)', backgroundColor: 'rgba(100, 238, 220, 0.05)', borderRadius: '4px', color: 'var(--color-primary)', textDecoration: 'none', transition: 'all 0.2s ease' }} className="font-label-mono-sm subtopic-link-tag">
                      {opt.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/content-moderation" className="card-read-more-btn">
                Launch System spec
              </Link>
            </div>
          </div>

          {/* Product Categorization */}
          <div className="glass-card flex flex-col relative" style={{ overflow: 'hidden', padding: 0 }}>
            <div className="card-image-container" style={{ width: '100%', height: '260px' }}>
              <img src={categorizationImg} alt="Product Categorization" className="card-image w-full h-full" style={{ objectFit: 'cover' }} />
            </div>
            <div className="flex flex-col items-center justify-between flex-grow text-center" style={{ padding: '32px 24px', minHeight: '280px' }}>
              <div className="flex flex-col items-center w-full">
                <h3 className="font-headline-md text-white mb-4">Product Categorization</h3>
                <p className="font-body-md text-on-surface-variant mb-6">
                  Hierarchical mapping and attribute injection based on industrial classification standards. Structured data cataloging for global supply chain assets.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '8px' }}>
                  {[
                    { label: 'Industrial Taxonomy', slug: 'industrial-taxonomy' },
                    { label: 'Attribute Annotation', slug: 'attribute-annotation' },
                    { label: 'Hierarchy Mapping', slug: 'hierarchy-mapping' },
                    { label: 'Data Schema Sync', slug: 'data-schema-sync' }
                  ].map((opt) => (
                    <Link key={opt.slug} to={`/product-categorization?subtopic=${opt.slug}`} style={{ padding: '4px 10px', fontSize: '11px', border: '1px solid rgba(100, 238, 220, 0.2)', backgroundColor: 'rgba(100, 238, 220, 0.05)', borderRadius: '4px', color: 'var(--color-primary)', textDecoration: 'none', transition: 'all 0.2s ease' }} className="font-label-mono-sm subtopic-link-tag">
                      {opt.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/product-categorization" className="card-read-more-btn">
                Launch System spec
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Industrial Tech Collective Section */}
      <section className="py-section-padding container" style={{ borderTop: '1px solid var(--color-border-muted)' }}>
        <div style={{ marginBottom: '64px', textAlign: 'center' }}>
          <p className="font-label-mono-md text-primary uppercase tracking-widest" style={{ marginBottom: '16px' }}>Core Advantages</p>
          <h2 className="font-headline-lg text-white mb-4">Why Industrial Tech Collective</h2>
          <div style={{ width: '96px', height: '4px', backgroundColor: 'var(--color-primary)', margin: '0 auto 16px' }}></div>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Architecting the future of secure, high-precision industrial metadata orchestration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 flex flex-col gap-4">
            <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>gshield</span>
            <h3 className="font-headline-md text-white">01 // Defense-Grade Security</h3>
            <p className="font-body-md text-on-surface-variant">
              Full compliance with ISO 27001 and SOC 2 Type II auditing standards. End-to-end AES-256 data encryption guarantees maximum structural security.
            </p>
          </div>
          <div className="glass-card p-8 flex flex-col gap-4">
            <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
            <h3 className="font-headline-md text-white">02 // Precision-Engineered Quality</h3>
            <p className="font-body-md text-on-surface-variant">
              Multi-tiered annotation and verification pipelines ensuring 99.9% dataset precision, verified by automated logic protocols.
            </p>
          </div>
          <div className="glass-card p-8 flex flex-col gap-4">
            <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_sync</span>
            <h3 className="font-headline-md text-white">03 // Turnkey Scale & Latency</h3>
            <p className="font-body-md text-on-surface-variant">
              Sub-millisecond inference and high-throughput data processing networks deployed across edge nodes for infinite horizontal system scalability.
            </p>
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
