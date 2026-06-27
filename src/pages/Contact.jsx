import React, { useState, useEffect, useRef } from 'react';

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
        transform: isIntersecting ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </div>
  );
}

export default function Contact() {
  const [logs, setLogs] = useState([
    { id: 1, time: '[08:42:11]', text: 'establishing_peer_handshake...' },
    { id: 2, time: '[08:42:12]', text: 'peer_connected: 192.168.1.1' },
    { id: 3, time: '[08:42:15]', text: 'cert_verified: ITC_GLOBAL_ROOT' },
    { id: 4, time: '[08:42:18]', text: 'session_token_assigned: A492-F921-X001' },
    { id: 5, time: '[08:42:19]', text: 'data_routing: secondary_uplink_active' },
    { id: 6, time: '[08:42:22]', text: 'ping: 12ms' },
    { id: 7, time: '[08:42:25]', text: 'heartbeat_active...' }
  ]);

  const [activeInput, setActiveInput] = useState(null);
  const [formData, setFormData] = useState({
    identity: '',
    channel: '',
    org: '',
    protocol: 'INDUSTRIAL_AUTOMATION',
    payload: ''
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const logTerminalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Log simulation stream
  useEffect(() => {
    const logPhrases = [
      "pinging_node_kolkata...",
      "handshake_accepted_node_7",
      "detecting_incoming_packet...",
      "buffer_overflow_prevented",
      "encryption_refresh_complete",
      "protocol_v4.2_operational",
      "operator_identity_verified",
      "link_latency_stabilized: 14ms"
    ];

    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = `[${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}]`;
      const randomPhrase = logPhrases[Math.floor(Math.random() * logPhrases.length)];
      
      setLogs((prev) => {
        const updated = [...prev, { id: Date.now(), time: timeStr, text: randomPhrase }];
        if (updated.length > 15) {
          updated.shift();
        }
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll logs
  useEffect(() => {
    if (logTerminalRef.current) {
      logTerminalRef.current.scrollTop = logTerminalRef.current.scrollHeight;
    }
  }, [logs]);

  const handleFocus = (field) => setActiveInput(field);
  const handleBlur = () => setActiveInput(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Transmission Executed. Secure handshake initiated with support operators.");
  };

  return (
    <div style={{ position: 'relative', fontFamily: 'var(--font-geist)', color: 'var(--color-on-surface)' }}>
      {/* Blueprint Grid Background Pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(100, 238, 220, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 238, 220, 0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        zIndex: 0
      }}></div>

      <main className="relative z-10 py-24 max-w-container-max mx-auto px-margin-edge">
        {/* Hero Section */}
        <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)', gap: '24px', marginBottom: '80px', paddingTop: '40px' }}>
          <div style={{ gridColumn: isMobile ? 'span 1' : 'span 7', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', backgroundColor: 'rgba(100, 238, 220, 0.1)', border: '1px solid rgba(100, 238, 220, 0.2)', borderRadius: '9999px', width: 'fit-content', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} className="animate-pulse"></span>
              <span className="font-label-mono-sm text-primary uppercase tracking-widest" style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px' }}>System Status: Active</span>
            </div>
            <h1 className="font-display-xl text-white mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '48px', color: 'var(--color-primary)' }}>
              Initialize Contact
            </h1>
            <p className="font-body-md text-on-surface-variant max-w-xl mb-12">
              Establish an encrypted link with our engineering teams. Our secure transmission protocol ensures data integrity and priority routing for high-stakes industrial projects.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '16px', width: '192px' }}>
                <span className="font-label-mono-sm text-primary uppercase" style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '10px' }}>Response Latency</span>
                <span className="font-data-mono text-white text-xl" style={{ fontFamily: 'var(--font-jetbrains)' }}>&lt; 120ms</span>
              </div>
              <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '16px', width: '192px' }}>
                <span className="font-label-mono-sm text-primary uppercase" style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '10px' }}>Encryption Status</span>
                <span className="font-data-mono text-white text-xl" style={{ fontFamily: 'var(--font-jetbrains)' }}>AES-256-GCM</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Terminal & Support Sidebar */}
        <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)', gap: '32px' }}>
          {/* Terminal Window */}
          <div style={{ gridColumn: isMobile ? 'span 1' : 'span 8' }}>
            <FadeIn>
              <div className="glass-card" style={{ padding: 0, position: 'relative', overflow: 'hidden', border: '1px solid rgba(100, 238, 220, 0.25)', boxShadow: '0 0 20px rgba(100, 238, 220, 0.1)' }}>
                {/* Horizontal scanner effect line */}
                <div style={{ width: '100%', height: '2px', backgroundColor: 'rgba(100, 238, 220, 0.1)', position: 'absolute', left: 0 }} className="scanning-line"></div>
                
                {/* Terminal Header */}
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '12px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'rgba(255, 107, 107, 0.5)' }}></div>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'rgba(255, 169, 99, 0.5)' }}></div>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'rgba(100, 238, 220, 0.5)' }}></div>
                    </div>
                    <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'var(--color-on-surface-variant)', opacity: 0.7 }}>itc_secure_link.terminal</span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'var(--color-primary)', opacity: 0.6 }}>ENC_V4.2</span>
                </div>

                {/* Terminal Form */}
                <form onSubmit={handleSubmit} style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '32px' }}>
                    {/* identity */}
                    <div style={{ position: 'relative' }}>
                      <label style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: activeInput === 'identity' ? 'var(--color-primary)' : 'rgba(100, 238, 220, 0.7)', transition: 'color 0.3s', marginBottom: '8px', display: 'block', textTransform: 'uppercase', tracking: '0.1em' }}>[USER_IDENTITY]</label>
                      <input 
                        onFocus={() => handleFocus('identity')}
                        onBlur={handleBlur}
                        onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
                        value={formData.identity}
                        required
                        style={{ width: '100%', backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-primary)', fontFamily: 'var(--font-jetbrains)', padding: '12px 16px', outline: 'none', transition: 'border-color 0.3s' }} 
                        className="focus:border-primary" 
                        placeholder="OPERATOR_NAME" 
                        type="text" 
                      />
                    </div>
                    {/* channel */}
                    <div style={{ position: 'relative' }}>
                      <label style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: activeInput === 'channel' ? 'var(--color-primary)' : 'rgba(100, 238, 220, 0.7)', transition: 'color 0.3s', marginBottom: '8px', display: 'block', textTransform: 'uppercase', tracking: '0.1em' }}>[COMM_CHANNEL]</label>
                      <input 
                        onFocus={() => handleFocus('channel')}
                        onBlur={handleBlur}
                        onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                        value={formData.channel}
                        required
                        style={{ width: '100%', backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-primary)', fontFamily: 'var(--font-jetbrains)', padding: '12px 16px', outline: 'none', transition: 'border-color 0.3s' }} 
                        className="focus:border-primary" 
                        placeholder="EMAIL@PROTOCOL.HOST" 
                        type="email" 
                      />
                    </div>
                    {/* org */}
                    <div style={{ position: 'relative' }}>
                      <label style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: activeInput === 'org' ? 'var(--color-primary)' : 'rgba(100, 238, 220, 0.7)', transition: 'color 0.3s', marginBottom: '8px', display: 'block', textTransform: 'uppercase', tracking: '0.1em' }}>[ORG_ROOT]</label>
                      <input 
                        onFocus={() => handleFocus('org')}
                        onBlur={handleBlur}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                        value={formData.org}
                        required
                        style={{ width: '100%', backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-primary)', fontFamily: 'var(--font-jetbrains)', padding: '12px 16px', outline: 'none', transition: 'border-color 0.3s' }} 
                        className="focus:border-primary" 
                        placeholder="ORGANIZATION_UNIT" 
                        type="text" 
                      />
                    </div>
                    {/* protocol */}
                    <div style={{ position: 'relative' }}>
                      <label style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: activeInput === 'protocol' ? 'var(--color-primary)' : 'rgba(100, 238, 220, 0.7)', transition: 'color 0.3s', marginBottom: '8px', display: 'block', textTransform: 'uppercase', tracking: '0.1em' }}>[PROTOCOL_TYPE]</label>
                      <select 
                        onFocus={() => handleFocus('protocol')}
                        onBlur={handleBlur}
                        onChange={(e) => setFormData({ ...formData, protocol: e.target.value })}
                        value={formData.protocol}
                        style={{ width: '100%', backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-primary)', fontFamily: 'var(--font-jetbrains)', padding: '12px 16px', outline: 'none' }}
                      >
                        <option value="INDUSTRIAL_AUTOMATION">INDUSTRIAL_AUTOMATION</option>
                        <option value="NETWORK_INFRASTRUCTURE">NETWORK_INFRASTRUCTURE</option>
                        <option value="SECURE_DATA_TERMINAL">SECURE_DATA_TERMINAL</option>
                        <option value="TECHNICAL_CONSULTANCY">TECHNICAL_CONSULTANCY</option>
                      </select>
                    </div>
                  </div>

                  {/* payload */}
                  <div style={{ position: 'relative' }}>
                    <label style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: activeInput === 'payload' ? 'var(--color-primary)' : 'rgba(100, 238, 220, 0.7)', transition: 'color 0.3s', marginBottom: '8px', display: 'block', textTransform: 'uppercase', tracking: '0.1em' }}>[TRANSMISSION_DATA]</label>
                    <textarea 
                      onFocus={() => handleFocus('payload')}
                      onBlur={handleBlur}
                      onChange={(e) => setFormData({ ...formData, payload: e.target.value })}
                      value={formData.payload}
                      required
                      style={{ width: '100%', backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-primary)', fontFamily: 'var(--font-jetbrains)', padding: '12px 16px', outline: 'none', resize: 'none' }} 
                      rows="6" 
                      placeholder="ENTER MESSAGE PAYLOAD..."
                    ></textarea>
                  </div>

                  {/* Action buttons */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'rgba(187, 202, 198, 0.4)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>lock</span>
                      END-TO-END VERIFICATION ENABLED
                    </div>
                    <button 
                      type="submit" 
                      className="primary-button font-label-mono-md" 
                      style={{ color: '#000', cursor: 'pointer', padding: '16px 40px', fontFamily: 'var(--font-jetbrains)', tracking: '0.2em' }}
                    >
                      Execute Transmission
                    </button>
                  </div>
                </form>
              </div>
            </FadeIn>
          </div>

          {/* Support Sidebar */}
          <aside style={{ gridColumn: isMobile ? 'span 1' : 'span 4', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <FadeIn>
              <div className="glass-card" style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'var(--color-primary)', marginBottom: '24px', textTransform: 'uppercase', tracking: '0.1em' }}>Direct Support Link</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'var(--color-on-surface-variant)' }}>SYSTEM_STATUS</span>
                    <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'var(--color-primary)' }}>[ OPTIMAL ]</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'var(--color-on-surface-variant)' }}>SUPPORT_OPS</span>
                    <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'var(--color-primary)' }}>ONLINE</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'var(--color-on-surface-variant)' }}>ACTIVE_NODES</span>
                    <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'var(--color-primary)' }}>14 / 14</span>
                  </div>
                </div>
                <button 
                  onClick={() => alert("VoIP Emergency tunnel request sent. Connecting to operator...")}
                  style={{ width: '100%', marginTop: '32px', border: '1px solid rgba(100, 238, 220, 0.4)', color: 'var(--color-primary)', backgroundColor: 'transparent', padding: '12px 0', fontFamily: 'var(--font-jetbrains)', fontSize: '12px', textTransform: 'uppercase', tracking: '0.1em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', cursor: 'pointer' }}
                  className="hover:bg-primary/10 transition-all"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>headset_mic</span>
                  Init Emergency VoIP
                </button>
              </div>
            </FadeIn>

            {/* Logs Window */}
            <FadeIn>
              <div className="glass-card" style={{ padding: '24px', height: '256px', position: 'relative', overflow: 'hidden' }}>
                <h3 style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'var(--color-primary)', marginBottom: '16px', textTransform: 'uppercase', tracking: '0.1em' }}>System Logs</h3>
                <div 
                  ref={logTerminalRef}
                  style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontFamily: 'var(--font-jetbrains)', fontSize: '10px', color: 'rgba(187,202,198,0.4)', lineHeight: 1.4, height: '160px', overflowY: 'auto', paddingRight: '8px' }}
                >
                  {logs.map((log) => (
                    <div key={log.id}>
                      <span style={{ color: 'var(--color-primary)', opacity: 0.6 }}>{log.time}</span> {log.text}
                    </div>
                  ))}
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '48px', background: 'linear-gradient(to top, var(--color-surface-deep), transparent)', pointerEvents: 'none' }}></div>
              </div>
            </FadeIn>
          </aside>
        </section>

        {/* Global Intelligence Nodes */}
        <section style={{ marginTop: '120px' }}>
          <FadeIn>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '24px', marginBottom: '48px' }}>
              <div>
                <h2 className="font-headline-lg text-primary tracking-tighter" style={{ fontFamily: 'var(--font-display)', margin: 0 }}>Global Intelligence Nodes</h2>
                <p className="font-label-mono-sm text-on-surface-variant uppercase" style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', marginTop: '8px' }}>Distributed Engineering Command Centers</p>
              </div>
              <div className="hidden md:block" style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'rgba(187, 202, 198, 0.5)' }}>COORD_SYNC: GMT+5.5</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '24px' }}>
              {/* Location Card */}
              <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ height: '192px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD13QGqsyDZAYirVzL-vnPWNfnaKoIGniTk9i9Eva2WV1Mgbgj6q-YdcM6iwnROCd42y0KI6veDH3s6_kLUptLB05pD-N0c-avfn12oiYvq7ryAXQWdJ4F7ZeCknoGdM3XytA6vgeTaqqhPRQ4_NFQV1U1mZVvRiwrZ3J_kIEcZriEZPoA7OPdBRWq9YclL5q7Ag0k7TGkU76fNZNmF-vuqpICL4aUC56bzcX1yCW7tJ_VaeR58mCMzZLrTUIu9Kr_nOhlnNf28qlff')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(100, 238, 220, 0.2)', mixBlendMode: 'overlay' }}></div>
                  <div style={{ position: 'absolute', top: '16px', left: '16px', backgroundColor: 'rgba(0,0,0,0.8)', padding: '4px 12px', border: '1px solid rgba(100, 238, 220, 0.3)', borderRadius: '2px', color: 'var(--color-primary)', fontFamily: 'var(--font-jetbrains)', fontSize: '10px' }}>HQ_HUB_01</div>
                </div>
                <div style={{ padding: '24px' }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '24px', margin: '0 0 8px 0' }}>Kolkata Terminal</h4>
                  <p style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'rgba(187,202,198,0.7)', margin: '0 0 24px 0', lineHeight: 1.6 }}>
                    Tower 42, Cyber Hub, Sector V<br />
                    Salt Lake, Kolkata, WB 700091
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>location_on</span>
                    <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'var(--color-on-surface-variant)' }}>22.5726° N, 88.3639° E</span>
                  </div>
                </div>
              </div>

              {/* Map Center placeholder */}
              <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2', minHeight: '400px', display: 'flex', position: 'relative' }} className="glass-card">
                <div className="absolute inset-0 blueprint-bg opacity-30" style={{
                  backgroundImage: 'linear-gradient(rgba(100, 238, 220, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 238, 220, 0.05) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  zIndex: 0
                }}></div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 1, position: 'relative' }}>
                  <span className="material-symbols-outlined text-primary/20 text-9xl animate-pulse" style={{ fontSize: '120px' }}>public</span>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'var(--color-primary)', opacity: 0.5, marginTop: '16px' }}>MAP_RENDER_INITIALIZING...</div>
                </div>
                <div style={{ position: 'absolute', bottom: '24px', right: '24px', backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', fontFamily: 'var(--font-jetbrains)', fontSize: '10px', display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div> ACTIVE_NODE</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffa963' }}></div> STANDBY</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ff6b6b' }}></div> CRITICAL_MAINT</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>
    </div>
  );
}
