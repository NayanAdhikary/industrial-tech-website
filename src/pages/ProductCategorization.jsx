import React from 'react';
import HeroCore3D from '../components/HeroCore3D';

export default function ProductCategorization() {
  return (
    <div className="relative min-h-screen">
      <HeroCore3D />
      <div className="relative z-10">




<main className="py-24 px-margin-edge max-w-container-max mx-auto space-y-gutter">
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

<section className="glass-panel p-8 flex flex-col justify-between teal-glow-hover transition-all">
<div>
<div className="font-label-xs text-label-xs text-primary mb-6">METRIC 01 // TAXONOMY</div>
<h2 className="font-headline-lg text-headline-lg text-white mb-4">Core Hierarchy</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-8">
                        Hierarchical mapping of industrial assets based on UNSPSC and eCl@ss standards. Multi-tenant support for proprietary schemas.
                    </p>
</div>
<div className="space-y-4">
<div className="bg-surface-container-low p-4 border-l-2 border-primary">
<div className="font-data-mono text-label-xs text-primary">LVL_01: ASSEMBLY_LINES</div>
<div className="font-data-mono text-label-xs text-on-surface-variant">LVL_02: ROBOTIC_ARMS</div>
</div>
<div className="flex items-center justify-between font-data-mono text-[10px] text-on-surface-variant/50">
<span>NODE_SYNC_STATUS</span>
<span className="text-primary">ONLINE</span>
</div>
</div>
</section>

<section className="glass-panel p-8 flex flex-col justify-between teal-glow-hover transition-all">
<div>
<div className="font-label-xs text-label-xs text-primary mb-6">METRIC 02 // ATTRIBUTE</div>
<h2 className="font-headline-lg text-headline-lg text-white mb-4">Metadata Specs</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-8">
                        Dynamic attribute injection based on category logic. Validation of technical tolerances and material specifications.
                    </p>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="bg-surface-container-low p-3 text-center border border-border-low">
<div className="font-label-xs text-primary">VOLTAGE</div>
<div className="font-data-mono text-white">480V AC</div>
</div>
<div className="bg-surface-container-low p-3 text-center border border-border-low">
<div className="font-label-xs text-primary">TOLERANCE</div>
<div className="font-data-mono text-white">±0.001MM</div>
</div>
</div>
</section>

<section className="glass-panel p-8 flex flex-col justify-between teal-glow-hover transition-all">
<div>
<div className="font-label-xs text-label-xs text-primary mb-6">METRIC 03 // OBJECT</div>
<h2 className="font-headline-lg text-headline-lg text-white mb-4">Object Logic</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-8">
                        Final object instantiation using classified attributes. Direct export to ERP, PLM, and digital twin environments.
                    </p>
</div>
<div className="relative h-24 bg-surface-container-low border border-border-low flex items-center justify-center">
<span className="material-symbols-outlined text-4xl text-primary/40 animate-pulse">deployed_code</span>
<div className="absolute bottom-2 right-2 font-data-mono text-[10px] text-primary">HASH: 8F2A...9C</div>
</div>
</section>
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
