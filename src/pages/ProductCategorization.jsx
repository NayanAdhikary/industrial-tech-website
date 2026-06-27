import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeroCore3D from '../components/HeroCore3D';
import categorizationImg from '../assets/product_categorization.png';

const subtopicData = {
  'industrial-taxonomy': { label: "Industrial Taxonomy", title: "UNSPSC & eCl@ss Industrial Taxonomy", desc: "Standardized hierarchical mapping of complex industrial assets and engineering materials, fully optimized for multi-tenant enterprise resource planning.", Metric: "TAXONOMY_LVL: 04", value: "eCl@ss Core" },
  'attribute-annotation': { label: "Attribute Annotation", title: "Automated Attribute Annotation Engine", desc: "Dynamic injection and validation of component tolerances, operational voltages, metadata specifications, and material parameters.", Metric: "VALIDATION: 480V", value: "±0.001mm Tolerance" },
  'hierarchy-mapping': { label: "Hierarchy Mapping", title: "Asset Hierarchy Mapping Node", desc: "Structuring relationships and dependencies of assembly lines, robotic arms, and complex machinery into a unified registry sync.", Metric: "MESH_NODE: robotic_arm", value: "Online Sync" },
  'data-schema-sync': { label: "Data Schema Sync", title: "Supply Chain Schema Sync", desc: "Continuous database synchronization with enterprise systems (ERP, PLM) to sync catalog metadata and digital twin environments.", Metric: "EXPORT_TARGET: ERP/PLM", value: "Instant Handshake" }
};

export default function ProductCategorization() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const targetSubtopic = queryParams.get('subtopic');

  const cardRefs = {
    'industrial-taxonomy': React.useRef(null),
    'attribute-annotation': React.useRef(null),
    'hierarchy-mapping': React.useRef(null),
    'data-schema-sync': React.useRef(null)
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
    <div className="relative min-h-screen">
      <HeroCore3D />
      <div className="relative z-10">

        <main className="py-24 px-margin-edge max-w-container-max mx-auto space-y-gutter">
          
          {/* Header & Subtopic Tab Selector */}
          <div className="glass-panel p-8 text-center" style={{ marginBottom: '32px' }}>
            <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary font-data-mono text-label-xs uppercase tracking-widest" style={{ display: 'inline-block', marginBottom: '16px' }}>Protocol: CAT-04</span>
            <h1 className="font-display-lg text-display-lg text-white mb-4" style={{ fontSize: '42px', color: 'var(--color-primary)' }}>Product Categorization</h1>
            <p className="font-body-md text-on-surface-variant max-w-xl mx-auto mb-8">
              Hierarchical taxonomy mapping and attribute annotation for global enterprise asset catalogs.
            </p>
          </div>

          {/* Subtopics Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <img src={categorizationImg} alt={current.title} className="card-image w-full h-full" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="flex flex-col items-center justify-between flex-grow text-center" style={{ padding: '32px 24px', minHeight: '280px' }}>
                    <div className="flex flex-col items-center w-full">
                      <div className="font-data-mono text-label-xs text-primary/60 mb-2">SYSTEM_NODE: {key.toUpperCase()}</div>
                      <h3 className="font-headline-md text-white mb-4">{current.label}</h3>
                      <p className="font-body-md text-on-surface-variant mb-6">
                        {current.desc}
                      </p>
                      <div className="space-y-4 w-full mt-auto text-left">
                        <div className="bg-surface-container-low p-4 border-l-2 border-primary font-data-mono text-label-xs">
                          <div className="text-primary">{current.Metric}</div>
                          <div className="text-on-surface-variant">{current.value}</div>
                        </div>
                      </div>
                    </div>
                    <button className="card-read-more-btn" style={{ cursor: 'pointer', marginTop: '24px' }}>
                      Launch Spec
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

<section className="mt-gutter">
<div className="glass-panel overflow-hidden">
<div className="flex items-center justify-between px-8 py-4 border-b border-border-low bg-surface-container-high/50">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">terminal</span>
<h3 className="font-headline-lg-mobile text-headline-lg-mobile text-white uppercase tracking-tighter">System Intelligence Log</h3>
</div>
<div className="flex items-center gap-4">
<span className="font-data-mono text-label-xs text-primary">78,400 OPS/SEC</span>
<div className="flex gap-1">
<div className="w-1 h-1 bg-primary"></div>
<div className="w-1 h-1 bg-primary"></div>
<div className="w-1 h-1 bg-primary/20"></div>
</div>
</div>
</div>
<div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 space-y-4">
<div className="bg-black/60 p-6 border border-primary/20 font-data-mono text-label-xs h-64 overflow-y-auto terminal-scroll" id="terminal-output">

</div>
</div>
<div className="space-y-6">
<div className="bg-surface-container p-6 border border-border-low">
<h4 className="font-label-xs text-primary mb-4 uppercase">Live Throughput</h4>
<div className="flex items-end gap-2 h-20">
<div className="w-full bg-primary/20 h-1/2"></div>
<div className="w-full bg-primary/20 h-3/4"></div>
<div className="w-full bg-primary h-full"></div>
<div className="w-full bg-primary/60 h-2/3"></div>
<div className="w-full bg-primary h-5/6"></div>
<div className="w-full bg-primary/20 h-1/2"></div>
</div>
</div>
<div className="bg-surface-container p-6 border border-border-low">
<h4 className="font-label-xs text-primary mb-2 uppercase">Classification Accuracy</h4>
<div className="text-3xl font-bold text-white mb-2">99.982%</div>
<div className="w-full bg-surface-container-high h-1">
<div className="bg-primary h-full w-[99%] shadow-[0_0_10px_rgba(100,238,220,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-gutter h-auto md:h-[500px]">
<div className="md:col-span-2 md:row-span-2 glass-panel p-8 flex flex-col justify-end relative overflow-hidden">
<div className="absolute inset-0 z-0 opacity-20 transition-opacity hover:opacity-40" data-alt="A macro close-up of a complex industrial circuit board with glowing teal data paths. The focus is sharp on the intricate gold connectors and microchips, while the background falls into a soft technological bokeh. The lighting is cold and atmospheric, with subtle steam or smoke effects. Industrial dark aesthetic, 8k resolution." style={{}}></div>
<div className="relative z-10">
<h3 className="font-display-lg text-headline-lg text-white mb-4 uppercase">Neural Mesh Sync</h3>
<p className="font-body-md text-on-surface-variant max-w-md">Our neural mesh syncs multi-modal technical documentation into a unified taxonomy cloud in real-time.</p>
</div>
</div>
<div className="md:col-span-2 glass-panel p-8 bg-primary/5 border-primary/20">
<div className="flex justify-between items-start">
<div>
<h4 className="font-headline-lg-mobile text-white mb-2">Global Registry</h4>
<p className="font-label-xs text-on-surface-variant">Centralized node for all industrial identifiers.</p>
</div>
<span className="material-symbols-outlined text-primary text-4xl">public</span>
</div>
</div>
<div className="glass-panel p-6 flex flex-col justify-center items-center text-center">
<div className="text-primary font-bold text-2xl mb-1">2.4M</div>
<div className="font-label-xs text-on-surface-variant uppercase">Mapped Objects</div>
</div>
<div className="glass-panel p-6 flex flex-col justify-center items-center text-center">
<div className="text-primary font-bold text-2xl mb-1">12ms</div>
<div className="font-label-xs text-on-surface-variant uppercase">Latency Avg</div>
</div>
</section>
</main>


      </div>
    </div>
  );
}
