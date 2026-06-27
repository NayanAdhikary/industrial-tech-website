import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeroCore3D from '../components/HeroCore3D';
import nlpImg from '../assets/nlp_services.png';

const subtopicData = {
  'sentiment-analysis': { label: "Sentiment Analysis", title: "Linguistic Sentiment Valence Analysis", desc: "Deciphering emotional valence, urgency, and technical skepticism within industrial communication logs and maintenance documents.", Confidence: "99.82%", speed: "24.5k tokens/ms" },
  'entity-extraction': { label: "Entity Extraction", title: "Entity Recognition & Extraction", desc: "Identifying and tagging critical industrial assets, model parameters, part serials, and locations from unstructured technical documentation.", Confidence: "99.15%", speed: "19.8k tokens/ms" },
  'technical-taxonomy': { label: "Technical Taxonomy", title: "Regulatory Document Taxonomy", desc: "Automatic classification of standard documentation, regulatory papers, and engineering assets under strict ISO compliance standards.", Confidence: "98.90%", speed: "22.1k tokens/ms" },
  'machine-translation': { label: "Machine Translation", title: "Machine Technical Translation", desc: "High-precision, domain-specific translation of complex technical logs and maintenance guidelines across global deployment nodes.", Confidence: "99.05%", speed: "21.0k tokens/ms" }
};

export default function NLP() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const targetSubtopic = queryParams.get('subtopic');

  const cardRefs = {
    'sentiment-analysis': React.useRef(null),
    'entity-extraction': React.useRef(null),
    'technical-taxonomy': React.useRef(null),
    'machine-translation': React.useRef(null)
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

        <main className="pt-32 pb-24 px-margin-edge max-w-container-max mx-auto relative">
          <section className="relative min-h-[300px] flex flex-col items-center justify-center text-center mb-16 overflow-hidden rounded-xl border border-border-low glass-panel p-12 reveal">
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary font-data-mono text-label-xs uppercase tracking-widest">Protocol: NLP-09</span>
                <span className="px-3 py-1 bg-surface-container-high border border-border-low text-on-surface-variant font-data-mono text-label-xs">v4.2.0-STABLE</span>
              </div>
              <h1 className="font-display-lg text-display-lg md:text-display-lg text-surface-tint leading-none teal-text-glow" style={{ color: 'var(--color-primary)' }}>
                NLP Services
              </h1>
              <p className="max-w-2xl mx-auto text-on-surface-variant font-body-md">
                High-fidelity natural language analysis. Deciphering unstructured text into deterministic data streams.
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
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
                    <img src={nlpImg} alt={current.title} className="card-image w-full h-full" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="flex flex-col items-center justify-between flex-grow text-center" style={{ padding: '32px 24px', minHeight: '280px' }}>
                    <div className="flex flex-col items-center w-full">
                      <div className="font-data-mono text-label-xs text-primary/60 mb-2">SYSTEM_NODE: {key.toUpperCase()}</div>
                      <h3 className="font-headline-md text-white mb-4">{current.label}</h3>
                      <p className="font-body-md text-on-surface-variant mb-6">
                        {current.desc}
                      </p>
                      <div className="grid grid-cols-2 gap-4 w-full mt-auto">
                        <div className="p-3 bg-black/40 border border-border-low font-data-mono text-[11px] text-left">
                          <span className="text-on-surface-variant">Conf: </span>
                          <span className="text-primary">{current.Confidence}</span>
                        </div>
                        <div className="p-3 bg-black/40 border border-border-low font-data-mono text-[11px] text-left">
                          <span className="text-on-surface-variant">Speed: </span>
                          <span className="text-white">{current.speed.split(' ')[0]}</span>
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
        </main>

<section className="bg-surface-container-low border-y border-border-low py-20 mt-24 reveal">
<div className="max-w-container-max mx-auto px-margin-edge">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="space-y-4">
<div className="text-surface-tint font-data-mono text-label-xs uppercase">Metric 01 // Integrity</div>
<h4 className="font-headline-lg text-2xl text-on-surface">Sentence Quality</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">
                        Validation of grammatical integrity and technical syntax across heterogenous data sources. Automated cleanup of legacy OCR noise.
                    </p>
</div>
<div className="space-y-4">
<div className="text-surface-tint font-data-mono text-label-xs uppercase">Metric 02 // Cognitive</div>
<h4 className="font-headline-lg text-2xl text-on-surface">Sentiment Understanding</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">
                        Granular emotional mapping beyond binary positive/negative. Capturing urgency, skepticism, and confidence in technical logs.
                    </p>
</div>
<div className="space-y-4">
<div className="text-surface-tint font-data-mono text-label-xs uppercase">Metric 03 // Taxonomy</div>
<h4 className="font-headline-lg text-2xl text-on-surface">Document Classification</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">
                        Automatic sorting into 400+ industrial categories. Precision classification ensuring seamless data governance.
                    </p>
</div>
</div>
</div>
</section>


      </div>
    </div>
  );
}
