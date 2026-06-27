import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeroCore3D from '../components/HeroCore3D';
import moderationImg from '../assets/content_moderation.png';

const subtopicData = {
  'policy-enforcement': { label: "Policy Enforcement", title: "Automated Policy Enforcement Protocol", desc: "Implementing real-time automated safety guidelines and filtering protocols across decentralized content distribution nodes.", Accuracy: "99.8%", Latency: "1.2ms" },
  'text-image-safety': { label: "Text & Image Safety", title: "Visual & Textual Safety Engine", desc: "Sub-millisecond deep-learning validation and categorization of media and textual feeds to guarantee complete regulatory safety.", Accuracy: "99.9%", Latency: "0.9ms" },
  'risk-vector-scrubbing': { label: "Risk Vector Scrubbing", title: "Risk Vector Identification & Scrubbing", desc: "Isolating and neutralizing malicious, anomalous, or sensitive data packets before database injection layers.", Accuracy: "99.7%", Latency: "1.5ms" },
  'metadata-audit': { label: "Metadata Audit", title: "Continuous Metadata Audit Pipeline", desc: "Performing automated compliance scans and structural validation audits across incoming stream pipelines.", Accuracy: "99.9%", Latency: "1.0ms" }
};

export default function ContentModeration() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const targetSubtopic = queryParams.get('subtopic');

  const cardRefs = {
    'policy-enforcement': React.useRef(null),
    'text-image-safety': React.useRef(null),
    'risk-vector-scrubbing': React.useRef(null),
    'metadata-audit': React.useRef(null)
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

        <main className="flex-grow pt-32 pb-20 px-margin-edge max-w-container-max mx-auto w-full">

          {/* Hero Section */}
          <section className="mb-20 flex flex-col items-center justify-center text-center">
            <div className="z-10 max-w-3xl flex flex-col items-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="inline-block w-2 h-2 bg-primary animate-pulse rounded-full"></span>
                <span className="font-label-xs text-label-xs text-primary uppercase tracking-widest">System Status: Active</span>
              </div>
              <h1 className="font-display-xl text-display-xl text-on-surface mb-6" style={{ color: 'var(--color-primary)' }}>
                Content Moderation
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mb-8 mx-auto">
                Sub-millisecond safety auditing and risk mitigation across decentralized data streams.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="glass-card px-4 py-2 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ "fontVariationSettings": "'FILL' 1" }}>verified_user</span>
                  <span className="font-label-xs text-label-xs">ISO 27001 Certified</span>
                </div>
                <div className="glass-card px-4 py-2 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ "fontVariationSettings": "'FILL' 1" }}>lock</span>
                  <span className="font-label-xs text-label-xs">SOC2 Type II</span>
                </div>
                <div className="glass-card px-4 py-2 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ "fontVariationSettings": "'FILL' 1" }}>security</span>
                  <span className="font-label-xs text-label-xs">NIST Compliance</span>
                </div>
              </div>
            </div>
          </section>

          {/* Subtopics Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
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
                    <img src={moderationImg} alt={current.title} className="card-image w-full h-full" style={{ objectFit: 'cover' }} />
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
                          <span className="text-on-surface-variant">Accuracy: </span>
                          <span className="text-primary">{current.Accuracy}</span>
                        </div>
                        <div className="p-3 bg-black/40 border border-border-low font-data-mono text-[11px] text-left">
                          <span className="text-on-surface-variant">Latency: </span>
                          <span className="text-white">{current.Latency}</span>
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

          {/* Features Grid Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-20">

            <div className="glass-card p-8 flex flex-col items-center text-center gap-6 teal-glow-hover transition-all duration-300">
              <div className="flex flex-col items-center gap-2">
                <div className="bg-primary/10 p-3 rounded-lg mb-2">
                  <span className="material-symbols-outlined text-primary text-3xl">image_search</span>
                </div>
                <span className="font-data-mono text-label-xs text-on-surface-variant">01 // VISUAL</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">Image Moderation</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Neural-link scanning for restricted visual content. Automated detection and quarantine of illicit assets.</p>
              </div>
              <div className="space-y-3 mt-auto w-full">
                <div className="flex justify-between font-label-xs text-label-xs border-b border-border-low pb-2">
                  <span>Nudity &amp; Toxicity</span>
                  <span className="text-primary">Detected</span>
                </div>
                <div className="flex justify-between font-label-xs text-label-xs border-b border-border-low pb-2">
                  <span>Weaponry Signatures</span>
                  <span className="text-primary">Flagged</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center gap-6 teal-glow-hover transition-all duration-300 border-primary/30">
              <div className="flex flex-col items-center gap-2">
                <div className="bg-primary/10 p-3 rounded-lg mb-2">
                  <span className="material-symbols-outlined text-primary text-3xl">movie_edit</span>
                </div>
                <span className="font-data-mono text-label-xs text-on-surface-variant">02 // TEMPORAL</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2 text-primary">Video Moderation</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Frame-by-frame analysis with temporal consistency checks. Real-time stream interception protocols.</p>
              </div>
              <div className="space-y-3 mt-auto w-full">
                <div className="flex justify-between font-label-xs text-label-xs border-b border-border-low pb-2">
                  <span>Violence Analysis</span>
                  <span className="text-primary">Suppressed</span>
                </div>
                <div className="flex justify-between font-label-xs text-label-xs border-b border-border-low pb-2">
                  <span>Drug Paraphernalia</span>
                  <span className="text-primary">Isolated</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center gap-6 teal-glow-hover transition-all duration-300">
              <div className="flex flex-col items-center gap-2">
                <div className="bg-primary/10 p-3 rounded-lg mb-2">
                  <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
                </div>
                <span className="font-data-mono text-label-xs text-on-surface-variant">03 // SEMANTIC</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">Text Moderation</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Linguistic parsing for extremist ideology and illicit transactions. Multi-language vector matching.</p>
              </div>
              <div className="space-y-3 mt-auto w-full">
                <div className="flex justify-between font-label-xs text-label-xs border-b border-border-low pb-2">
                  <span>Extremist Lexicons</span>
                  <span className="text-primary">Filtered</span>
                </div>
                <div className="flex justify-between font-label-xs text-label-xs border-b border-border-low pb-2">
                  <span>Hate Speech Vectors</span>
                  <span className="text-primary">Redacted</span>
                </div>
              </div>
            </div>
          </section>

          {/* Threat Intelligence / Log Section */}
          <section className="glass-card rounded-xl overflow-hidden border border-border-low p-0">
            <div className="bg-surface-container px-6 py-3 flex items-center justify-between border-b border-border-low">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-error" style={{ backgroundColor: '#ff6b6b' }}></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-tertiary" style={{ backgroundColor: '#ffd166' }}></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                </div>
                <span className="font-data-mono text-label-xs text-on-surface-variant uppercase">Collective_Security_Log.env</span>
              </div>
              <div className="font-data-mono text-label-xs text-primary">ENCRYPTED_LINK_ESTABLISHED</div>
            </div>
            <div className="flex flex-col items-center justify-center p-10 bg-surface-container-lowest/50 text-center">
              <div className="max-w-2xl w-full mb-10">
                <h2 className="font-headline-lg text-headline-lg mb-6">Threat Intelligence Integration</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  Our safeguards aren't just reactive; they are predictive. By integrating global threat intelligence feeds, the Industrial Tech Collective preemptively updates moderation nodes against emerging patterns of digital harm.
                </p>
                <ul className="space-y-4 inline-block text-left" style={{ margin: '0 auto', maxWidth: '100%' }}>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <span className="font-body-md text-body-md">Zero-day toxicity protection via decentralized heuristic matching.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <span className="font-body-md text-body-md">Advanced OCR for detecting extremist symbols within complex images.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <span className="font-body-md text-body-md">Automated hashing of known illegal content to prevent re-upload.</span>
                  </li>
                </ul>
              </div>
              <div className="w-full max-w-2xl bg-black/40 p-6 rounded border border-white/5 font-data-mono text-label-xs leading-relaxed overflow-hidden relative text-left">
                <div className="text-primary opacity-80 mb-2">[SYSTEM_LOG]: Initializing Content Moderation Module...</div>
                <div className="text-on-surface-variant/60"> &gt; Fetching Security Trust Signals... SUCCESS</div>
                <div className="text-on-surface-variant/60"> &gt; Node synchronization: 100%</div>
                <div className="text-on-surface-variant/60"> &gt; ISO_27001 Validation: Passed</div>
                <div className="text-on-surface-variant/60"> &gt; SOC2_Compliance: Verified</div>
                <div className="text-on-surface-variant/60"> &gt; Analyzing Inbound Stream #7721...</div>
                <div className="text-error mt-4"> [ALERT]: High-Risk Asset Identified (Vector: VIOLENCE_THREAT)</div>
                <div className="text-primary"> [ACTION]: Asset quarantined at node boundary. Logged for governance review.</div>
                <div className="text-on-surface-variant/60 mt-4"> &gt; Scanning complete. Zero breaches detected in session.</div>

                <div className="absolute bottom-4 left-6 right-6 h-12 flex items-end gap-1 opacity-20">
                  <div className="w-full bg-primary h-1/4"></div>
                  <div className="w-full bg-primary h-2/4"></div>
                  <div className="w-full bg-primary h-1/4"></div>
                  <div className="w-full bg-primary h-3/4"></div>
                  <div className="w-full bg-primary h-4/4"></div>
                  <div className="w-full bg-primary h-2/4"></div>
                  <div className="w-full bg-primary h-1/4"></div>
                  <div className="w-full bg-primary h-3/4"></div>
                </div>
              </div>
            </div>
          </section>
        </main>

      </div>
    </div>
  );
}
