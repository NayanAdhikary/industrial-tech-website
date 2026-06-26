import React from 'react';
import HeroCore3D from '../components/HeroCore3D';

export default function ContentModeration() {
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
              <h1 className="font-display-xl text-display-xl text-on-surface mb-6">
                Global Safeguards.<br />
                <span className="text-primary">Autonomous.</span>
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mb-8 mx-auto">
                Implementing sub-millisecond content moderation across decentralized nodes. Our industrial-grade AI protocols ensure technical integrity by scrubbing high-risk data vectors in real-time.
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

            <div className="relative max-w-md w-full mx-auto">
              <div className="group">
                <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative glass-card rounded-xl overflow-hidden aspect-square flex items-center justify-center border-2 border-primary/20 p-0">
                  <div className="scanning-line"></div>
                  <img className="w-full h-full object-cover grayscale brightness-75 contrast-125 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZOpTxtFKU4n8QvUx-gXMoFSbqaMn6iNdi2_Hf0MblgJJ-euJ_RlIjy6vbygBwsTs2xCCuAp_67amxps3K5jD4bmWMwDHqslCEGfgqeYS4OmhtYpqAB6SaSrqbuJcnIkk6L3KH61OcLfMsoPmBs1z938dzMy43q1_3DV16KwntC940dTVrOPjxxXFKtL2uvDSxCTqBIZDO_ccvBR8MSANL5LNAnd_zgP7GOynEObWXYhq6311jU0Fv1_TEQTxPY2xUQR6-gufkqCVU" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

                  <div className="absolute top-4 left-4 font-data-mono text-label-xs text-primary/60">SCAN_ENGINE_v4.02</div>
                  <div className="absolute bottom-4 right-4 flex flex-col items-end">
                    <div className="font-data-mono text-headline-lg text-primary">99.8%</div>
                    <div className="font-label-xs text-label-xs text-on-surface-variant uppercase">Accuracy Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
