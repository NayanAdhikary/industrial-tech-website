import React from 'react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Visitors', value: '124,500', trend: '+12%', color: '#64eedc' },
    { label: 'New Leads', value: '342', trend: '+5%', color: '#818cf8' },
    { label: 'Active Models', value: '14', trend: '0%', color: 'var(--color-on-surface-variant)' },
    { label: 'Uptime', value: '99.99%', trend: '+0.01%', color: '#4ade80' }
  ];

  const recentActivity = [
    { id: 1, type: 'Lead', user: 'Sarah Jenkins', action: 'Requested Demo - Computer Vision', time: '10 mins ago', status: 'Pending' },
    { id: 2, type: 'System', user: 'Auto-ML', action: 'Model Retraining Completed', time: '1 hour ago', status: 'Success' },
    { id: 3, type: 'Lead', user: 'Marcus Thorne', action: 'Downloaded NLP Whitepaper', time: '3 hours ago', status: 'Completed' },
    { id: 4, type: 'Admin', user: 'System Admin', action: 'Updated Privacy Policy', time: '1 day ago', status: 'Success' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 className="font-headline-lg text-white" style={{ fontSize: '2rem' }}>Dashboard Overview</h1>
        <button className="primary-button" style={{ padding: '8px 16px', borderRadius: '6px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>refresh</span>
          Refresh Data
        </button>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '48px' }}>
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '24px', borderRadius: '12px', background: 'var(--color-surface)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <p className="font-label-mono-sm text-on-surface-variant" style={{ marginBottom: '8px', color: 'var(--color-on-surface-variant)' }}>{stat.label}</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <h2 className="font-headline-xl text-white" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{stat.value}</h2>
              <span className="font-label-mono-sm" style={{ color: stat.color }}>{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Table */}
      <div className="glass-card" style={{ padding: '24px', borderRadius: '12px', background: 'var(--color-surface)', border: '1px solid rgba(255,255,255,0.05)' }}>
        <h3 className="font-headline-md text-white mb-6" style={{ marginBottom: '24px' }}>Recent Activity</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)' }}>Type</th>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)' }}>User / System</th>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)' }}>Action</th>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)' }}>Time</th>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map(activity => (
                <tr key={activity.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '16px' }}>
                    <span style={{ 
                      padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold',
                      background: activity.type === 'Lead' ? 'rgba(129,140,248,0.1)' : 'rgba(161,161,170,0.1)',
                      color: activity.type === 'Lead' ? '#818cf8' : 'var(--color-on-surface-variant)',
                      border: activity.type === 'Lead' ? '1px solid rgba(129,140,248,0.2)' : '1px solid rgba(161,161,170,0.2)'
                    }}>
                      {activity.type}
                    </span>
                  </td>
                  <td className="font-body-sm text-white" style={{ padding: '16px' }}>{activity.user}</td>
                  <td className="font-body-sm text-on-surface-variant" style={{ padding: '16px', color: '#d4d4d8' }}>{activity.action}</td>
                  <td className="font-label-mono-sm text-on-surface-variant" style={{ padding: '16px', color: '#71717a' }}>{activity.time}</td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', color: activity.status === 'Success' || activity.status === 'Completed' ? '#4ade80' : '#fbbf24' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: activity.status === 'Success' || activity.status === 'Completed' ? '#4ade80' : '#fbbf24' }}></span>
                      {activity.status}
                    </span>
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
