import React from 'react';

export default function AdminSettings() {
  return (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <h1 className="font-headline-lg text-white" style={{ fontSize: '2rem', marginBottom: '8px' }}>Platform Settings</h1>
        <p className="font-body-md text-on-surface-variant" style={{ color: 'var(--color-on-surface-variant)' }}>Manage your global site configurations and preferences.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', maxWidth: '800px' }}>
        
        {/* General Settings */}
        <div className="glass-card" style={{ padding: '32px', borderRadius: '12px', background: 'var(--color-surface)', border: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 className="font-headline-md text-white" style={{ fontSize: '1.25rem', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>General Information</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label className="font-label-mono-sm text-on-surface-variant" style={{ color: 'var(--color-on-surface-variant)', fontWeight: 'bold' }}>Site Name</label>
              <input type="text" defaultValue="Industrial Tech Collective" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--color-border-muted)', color: 'var(--color-on-surface)', fontSize: '1rem' }} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label className="font-label-mono-sm text-on-surface-variant" style={{ color: 'var(--color-on-surface-variant)', fontWeight: 'bold' }}>Support Email</label>
              <input type="email" defaultValue="support@industrialtech.co" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--color-border-muted)', color: 'var(--color-on-surface)', fontSize: '1rem' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label className="font-label-mono-sm text-on-surface-variant" style={{ color: 'var(--color-on-surface-variant)', fontWeight: 'bold' }}>Maintenance Mode</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '44px', height: '24px', borderRadius: '12px', background: 'var(--color-border-muted)', position: 'relative', cursor: 'pointer' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--color-on-surface-variant)', position: 'absolute', top: '2px', left: '2px', transition: 'all 0.2s' }}></div>
                </div>
                <span className="font-body-sm text-on-surface-variant" style={{ color: 'var(--color-on-surface-variant)' }}>Currently disabled. Enable to block public access.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="glass-card" style={{ padding: '32px', borderRadius: '12px', background: 'var(--color-surface)', border: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 className="font-headline-md text-white" style={{ fontSize: '1.25rem', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>Notifications</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', accentColor: '#64eedc' }} />
              <span className="font-body-md text-white">Email alerts for new leads</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', accentColor: '#64eedc' }} />
              <span className="font-body-md text-white">Daily analytics report</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <input type="checkbox" style={{ width: '18px', height: '18px', accentColor: '#64eedc' }} />
              <span className="font-body-md text-white">System error notifications</span>
            </label>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
          <button style={{ padding: '12px 24px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: 'var(--color-on-surface)', fontSize: '1rem', cursor: 'pointer', fontWeight: 'bold' }}>Cancel</button>
          <button className="primary-button" style={{ padding: '12px 32px', borderRadius: '8px', border: 'none', background: '#64eedc', color: 'var(--color-on-primary)', fontSize: '1rem', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>save</span>
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}
