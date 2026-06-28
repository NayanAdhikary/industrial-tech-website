import React, { useState } from 'react';

export default function AdminUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alex Mercer', email: 'alex@industrialtech.co', role: 'Super Admin', status: 'Active', lastLogin: '2 mins ago' },
    { id: 2, name: 'Elena Rodriguez', email: 'elena@industrialtech.co', role: 'Editor', status: 'Active', lastLogin: '1 hour ago' },
    { id: 3, name: 'Marcus Thorne', email: 'marcus@industrialtech.co', role: 'Viewer', status: 'Offline', lastLogin: '2 days ago' },
    { id: 4, name: 'Sarah Jenkins', email: 'sarah@industrialtech.co', role: 'Admin', status: 'Suspended', lastLogin: '1 month ago' },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Viewer', status: 'Active' });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const toggleAdminRole = (id) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        // Simple toggle for demonstration: If Viewer/Editor -> Admin, If Admin -> Viewer
        const newRole = (user.role === 'Admin' || user.role === 'Super Admin') ? 'Viewer' : 'Admin';
        return { ...user, role: newRole };
      }
      return user;
    }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const id = Math.max(...users.map(u => u.id), 0) + 1;
    setUsers([...users, { ...newUser, id, lastLogin: 'Never' }]);
    setShowAddModal(false);
    setNewUser({ name: '', email: '', role: 'Viewer', status: 'Active' });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 className="font-headline-lg text-white" style={{ fontSize: '2rem' }}>User Management</h1>
        <button 
          onClick={() => setShowAddModal(true)}
          className="primary-button" 
          style={{ padding: '10px 20px', borderRadius: '6px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', background: '#64eedc', color: 'var(--color-on-primary)', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
        >
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
                <tr key={user.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = 'var(--color-surface)'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
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
                    {/* Toggle Admin Permission Button */}
                    <button 
                      onClick={() => toggleAdminRole(user.id)}
                      title="Toggle Admin Access"
                      style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', marginRight: '12px' }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                        {user.role === 'Admin' || user.role === 'Super Admin' ? 'admin_panel_settings' : 'shield_person'}
                      </span>
                    </button>

                    <button 
                      onClick={() => handleDelete(user.id)}
                      title="Delete User"
                      style={{ background: 'none', border: 'none', color: '#f87171', cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: 'var(--color-surface-container)', padding: '32px', borderRadius: '12px', width: '400px', border: '1px solid var(--color-primary-alpha-20)' }}>
            <h2 className="font-headline-md text-white mb-6">Add New User</h2>
            <form onSubmit={handleAddUser} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label className="font-label-mono-sm text-on-surface-variant block mb-2">Name</label>
                <input 
                  type="text" required
                  value={newUser.name} onChange={e => setNewUser({...newUser, name: e.target.value})}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--color-border-muted)', background: 'var(--color-surface)', color: 'white' }} 
                />
              </div>
              <div>
                <label className="font-label-mono-sm text-on-surface-variant block mb-2">Email</label>
                <input 
                  type="email" required
                  value={newUser.email} onChange={e => setNewUser({...newUser, email: e.target.value})}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--color-border-muted)', background: 'var(--color-surface)', color: 'white' }} 
                />
              </div>
              <div>
                <label className="font-label-mono-sm text-on-surface-variant block mb-2">Role</label>
                <select 
                  value={newUser.role} onChange={e => setNewUser({...newUser, role: e.target.value})}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--color-border-muted)', background: 'var(--color-surface)', color: 'white' }}
                >
                  <option value="Viewer">Viewer</option>
                  <option value="Editor">Editor</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px' }}>
                <button type="button" onClick={() => setShowAddModal(false)} style={{ padding: '8px 16px', background: 'transparent', border: '1px solid var(--color-border-muted)', color: 'white', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ padding: '8px 16px', background: 'var(--color-primary)', border: 'none', color: 'var(--color-on-primary)', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Save User</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
