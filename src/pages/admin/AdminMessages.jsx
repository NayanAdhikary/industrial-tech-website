import React from 'react';

export default function AdminMessages() {
  const messages = [
    { id: 1, name: 'Sarah Jenkins', company: 'Global Logistics Corp', email: 's.jenkins@glc.com', date: 'Oct 24, 2023', subject: 'Computer Vision Integration', status: 'Unread' },
    { id: 2, name: 'Marcus Thorne', company: 'Future Retail', email: 'mthorne@futureretail.net', date: 'Oct 23, 2023', subject: 'Product Categorization Demo', status: 'Read' },
    { id: 3, name: 'Elena Rodriguez', company: 'FinServe Tech', email: 'erodriguez@finserve.io', date: 'Oct 21, 2023', subject: 'Data Annotation RFP', status: 'Replied' },
    { id: 4, name: 'James Wu', company: 'AutoParts Manufacturing', email: 'j.wu@autoparts-mfg.com', date: 'Oct 19, 2023', subject: 'Quality Control Models', status: 'Read' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 className="font-headline-lg text-white" style={{ fontSize: '2rem' }}>Messages & Leads</h1>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ position: 'relative' }}>
            <span className="material-symbols-outlined" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-on-surface-variant)', fontSize: '20px' }}>search</span>
            <input type="text" placeholder="Search messages..." style={{ padding: '10px 16px 10px 40px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--color-border-muted)', color: 'var(--color-on-surface)', fontSize: '14px', width: '240px' }} />
          </div>
          <button className="primary-button" style={{ padding: '8px 16px', borderRadius: '6px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>filter_list</span>
            Filter
          </button>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '24px', borderRadius: '12px', background: 'var(--color-surface)', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th style={{ padding: '12px 16px', width: '40px' }}><input type="checkbox" style={{ cursor: 'pointer' }} /></th>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)' }}>Contact</th>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)' }}>Subject</th>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)' }}>Date</th>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)' }}>Status</th>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)' }}></th>
              </tr>
            </thead>
            <tbody>
              {messages.map(msg => (
                <tr key={msg.id} style={{ 
                  borderBottom: '1px solid rgba(255,255,255,0.05)', 
                  background: msg.status === 'Unread' ? 'var(--color-surface-container)' : 'transparent',
                  transition: 'background 0.2s',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'var(--color-border-muted)'}
                onMouseOut={(e) => e.currentTarget.style.background = msg.status === 'Unread' ? 'var(--color-surface-container)' : 'transparent'}
                >
                  <td style={{ padding: '16px' }}><input type="checkbox" style={{ cursor: 'pointer' }} /></td>
                  <td style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span className="font-headline-sm text-white" style={{ fontWeight: msg.status === 'Unread' ? 'bold' : 'normal', fontSize: '1rem' }}>{msg.name}</span>
                      <span className="font-body-sm" style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.875rem' }}>{msg.company}</span>
                    </div>
                  </td>
                  <td className="font-body-md text-white" style={{ padding: '16px', fontWeight: msg.status === 'Unread' ? 'bold' : 'normal' }}>{msg.subject}</td>
                  <td className="font-label-mono-sm text-on-surface-variant" style={{ padding: '16px', color: '#71717a' }}>{msg.date}</td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ 
                      padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold',
                      background: msg.status === 'Unread' ? 'var(--color-primary-alpha-10)' : 'var(--color-border-muted)',
                      color: msg.status === 'Unread' ? '#64eedc' : 'var(--color-on-surface-variant)',
                    }}>
                      {msg.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'right' }}>
                    <button style={{ background: 'none', border: 'none', color: 'var(--color-on-surface-variant)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
