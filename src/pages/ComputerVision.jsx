import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeroCore3D from '../components/HeroCore3D';

// Import assets
import retailImg from '../assets/retail_detection.png';
import securityImg from '../assets/security_detection.png';
import realEstateImg from '../assets/real_estate_segmentation.png';
import automotiveImg from '../assets/automotive_detection.png';
import sportsImg from '../assets/sports_keypoints.png';
import agricultureImg from '../assets/agriculture_detection.png';
import medicalImg from '../assets/medical_segmentation.png';
import fashionImg from '../assets/fashion_segmentation.png';

const subtopicData = {
  retail: { label: "Retail", title: "Retail Object Detection", img: retailImg, desc: "AI in e-commerce and retail industry is creating a brand new dimension for the fashion and e-commerce industry with a much better shopping experience for customers." },
  security: { label: "Security", title: "Security Surveillance Weapon Detection", img: securityImg, desc: "To create such high-tech video equipments and integrate them into the surveillance system a training data set is required." },
  'real-estate': { label: "Real Estate", title: "Real Estate Building Segmentation", img: realEstateImg, desc: "Annotation for AI Training Data in Real Estate & Construction and help the real estate developers to design and develop the building landscape." },
  automotive: { label: "Automotive", title: "Automotive Detection", img: automotiveImg, desc: "A wide range of image annotation techniques is used to create training data for autonomous driving vehicles." },
  sports: { label: "Sports", title: "Sports Skeleton Keypoints", img: sportsImg, desc: "Image Annotation Services for AI in Sports Analytics & Game Development." },
  agriculture: { label: "Agriculture", title: "Agriculture Apples Detection", img: agricultureImg, desc: "The use of AI in agriculture reached ground level, from crop health monitoring to geo-sensing for better productivity." },
  medical: { label: "Medical", title: "Medical X-Ray Segmentation", img: medicalImg, desc: "Precision AI annotation for medical imaging diagnostics, helping healthcare providers classify and segment CT scans, X-rays, and MRI findings." },
  fashion: { label: "Fashion", title: "Fashion Segmentation", img: fashionImg, desc: "AI image segmentation and tagging services for fashion inventory categorization, digital catalogs, and recommendation engines." }
};

export default function ComputerVision() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const targetSubtopic = queryParams.get('subtopic');

  const cardRefs = {
    retail: React.useRef(null),
    security: React.useRef(null),
    'real-estate': React.useRef(null),
    automotive: React.useRef(null),
    sports: React.useRef(null),
    agriculture: React.useRef(null),
    medical: React.useRef(null),
    fashion: React.useRef(null)
  };

  useEffect(() => {
    if (targetSubtopic && cardRefs[targetSubtopic]) {
      const timer = setTimeout(() => {
        cardRefs[targetSubtopic].current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [targetSubtopic]);

  return (
    <div style={{ position: 'relative' }}>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden" style={{ minHeight: '600px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', padding: '120px 0 60px' }}>
        <HeroCore3D />
        <div className="container relative z-10 text-center flex flex-col items-center gap-6" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', backgroundColor: 'rgba(100, 238, 220, 0.1)', border: '1px solid rgba(100, 238, 220, 0.2)', borderRadius: '9999px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} className="animate-pulse"></span>
            <span className="font-label-mono-sm text-primary uppercase tracking-widest">Service Operational</span>
          </div>
          <h1 className="font-display-lg text-white" style={{ textShadow: '0 0 15px rgba(100, 238, 220, 0.4)' }}>
            Computer Vision Systems
          </h1>
          <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
            Precision labeling, bounding boxes, keypoint tracking, and semantic segmentation designed for the next generation of autonomous and visual intelligence.
          </p>
        </div>
      </section>

      {/* Subtopics Cards Grid */}
      <section className="py-section-padding container">
        <div style={{ marginBottom: '64px' }}>
          <h2 className="font-headline-lg text-white mb-4">Application Domains</h2>
          <div style={{ width: '96px', height: '4px', backgroundColor: 'var(--color-primary)', marginBottom: '16px' }}></div>
          <p className="font-label-mono-md text-on-surface-variant uppercase tracking-widest">Systems In Production</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.keys(subtopicData).map((key) => {
            const current = subtopicData[key];
            const isHighlighted = targetSubtopic === key;
            return (
              <div
                key={key}
                ref={cardRefs[key]}
                className="glass-card flex flex-col relative"
                style={{
                  overflow: 'hidden',
                  padding: 0,
                  border: isHighlighted ? '2px solid var(--color-primary)' : '1px solid var(--color-border-muted)',
                  boxShadow: isHighlighted ? '0 0 25px rgba(100, 238, 220, 0.35)' : 'none',
                  transition: 'all 0.5s ease'
                }}
              >
                <div className="card-image-container" style={{ width: '100%', height: '240px' }}>
                  <img src={current.img} alt={current.title} className="card-image w-full h-full" style={{ objectFit: 'cover' }} />
                </div>
                <div className="flex flex-col items-center justify-between flex-grow text-center" style={{ padding: '32px 24px', minHeight: '260px' }}>
                  <div className="flex flex-col items-center">
                    <h3 className="font-headline-md text-white mb-4">{current.label}</h3>
                    <p className="font-body-md text-on-surface-variant">
                      {current.desc}
                    </p>
                  </div>
                  <button className="card-read-more-btn" style={{ cursor: 'pointer' }}>
                    Launch Spec
                  </button>
                </div>
              </div>
            );
          })}
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
