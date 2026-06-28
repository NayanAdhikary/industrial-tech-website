import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function AdminLayout() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: 'dashboard' },
    { name: 'Messages', path: '/admin/messages', icon: 'mail' },
    { name: 'Users', path: '/admin/users', icon: 'group' },
    { name: 'Settings', path: '/admin/settings', icon: 'settings' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-background)', color: 'var(--color-on-surface)' }}>
      
      {/* Sidebar */}
      <aside style={{ width: '260px', backgroundColor: 'var(--color-surface)', borderRight: '1px solid var(--color-border-muted)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '24px', borderBottom: '1px solid var(--color-border-muted)' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'var(--color-on-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
            <span className="font-headline-md tracking-widest" style={{ fontSize: '1rem', fontWeight: 'bold' }}>ITC ADMIN</span>
          </Link>
        </div>
        
        <nav style={{ flex: 1, padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {navItems.map(item => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.name} 
                to={item.path} 
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px',
                  textDecoration: 'none', color: isActive ? 'var(--color-on-surface)' : 'var(--color-on-surface-variant)',
                  backgroundColor: isActive ? 'var(--color-teal-glow)' : 'transparent',
                  border: isActive ? '1px solid var(--color-primary-alpha-20)' : '1px solid transparent',
                  transition: 'all 0.2s'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface-variant)' }}>{item.icon}</span>
                <span className="font-label-mono-sm" style={{ fontWeight: isActive ? 'bold' : 'normal' }}>{item.name}</span>
              </Link>
            )
          })}
        </nav>
        
        <div style={{ padding: '24px 16px', borderTop: '1px solid var(--color-border-muted)' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-on-surface-variant)', textDecoration: 'none', padding: '12px 16px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>logout</span>
            <span className="font-label-mono-sm">Back to Site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{ height: '73px', borderBottom: '1px solid var(--color-border-muted)', display: 'flex', alignItems: 'center', padding: '0 32px', justifyContent: 'space-between', backgroundColor: 'var(--color-surface)' }}>
          <h2 className="font-headline-md" style={{ fontSize: '1.25rem', color: 'var(--color-on-surface)' }}>Admin Control Panel</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--color-teal-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>person</span>
            </div>
            <span className="font-label-mono-sm text-on-surface-variant">Administrator</span>
          </div>
        </header>
        
        <div style={{ padding: '32px', overflowY: 'auto', flex: 1 }}>
          <Outlet />
        </div>
      </main>

    </div>
  );
}
