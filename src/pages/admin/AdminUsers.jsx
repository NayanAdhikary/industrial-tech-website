import React, { useState } from 'react';

export default function AdminUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alex Mercer', email: 'alex@industrialtech.co', role: 'Super Admin', status: 'Active', lastLogin: '2 mins ago' },
    { id: 2, name: 'Elena Rodriguez', email: 'elena@industrialtech.co', role: 'Editor', status: 'Active', lastLogin: '1 hour ago' },
    { id: 3, name: 'Marcus Thorne', email: 'marcus@industrialtech.co', role: 'Viewer', status: 'Offline', lastLogin: '2 days ago' },
    { id: 4, name: 'Sarah Jenkins', email: 'sarah@industrialtech.co', role: 'Admin', status: 'Suspended', lastLogin: '1 month ago' },
  ]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 className="font-headline-lg text-white" style={{ fontSize: '2rem' }}>User Management</h1>
        <button className="primary-button" style={{ padding: '10px 20px', borderRadius: '6px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', background: '#64eedc', color: 'var(--color-on-primary)', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>person_add</span>
          Add New User
        </button>
      </div>

      <div className="glass-card" style={{ padding: '24px', borderRadius: '12px', background: 'var(--color-surface)', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)' }}>Name & Email</th>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)' }}>Role</th>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)' }}>Status</th>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)' }}>Last Login</th>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.background = 'var(--color-surface)'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
                  <td style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary-alpha-10)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64eedc', fontWeight: 'bold' }}>
                        {user.name.charAt(0)}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className="font-headline-sm text-white" style={{ fontSize: '1rem' }}>{user.name}</span>
                        <span className="font-body-sm" style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.875rem' }}>{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', background: 'var(--color-border-muted)', color: 'var(--color-on-surface)' }}>
                      {user.role}
                    </span>
                  </td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ 
                      padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold',
                      background: user.status === 'Active' ? 'rgba(74,222,128,0.1)' : user.status === 'Offline' ? 'rgba(161,161,170,0.1)' : 'rgba(248,113,113,0.1)',
                      color: user.status === 'Active' ? '#4ade80' : user.status === 'Offline' ? 'var(--color-on-surface-variant)' : '#f87171',
                    }}>
                      {user.status}
                    </span>
                  </td>
                  <td className="font-label-mono-sm text-on-surface-variant" style={{ padding: '16px', color: '#71717a' }}>{user.lastLogin}</td>
                  <td style={{ padding: '16px', textAlign: 'right' }}>
                    <button style={{ background: 'none', border: 'none', color: 'var(--color-on-surface-variant)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-on-surface)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}>
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>edit</span>
                    </button>
                    <button style={{ background: 'none', border: 'none', color: '#f87171', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', transition: 'color 0.2s', marginLeft: '12px' }} onMouseOver={(e) => e.currentTarget.style.color = '#dc2626'} onMouseOut={(e) => e.currentTarget.style.color = '#f87171'}>
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>delete</span>
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
