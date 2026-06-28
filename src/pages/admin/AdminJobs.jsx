import React, { useState } from 'react';

export default function AdminJobs() {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Senior AI Engineer', department: 'Engineering', type: 'Full-time', status: 'Open' },
    { id: 2, title: 'Computer Vision Researcher', department: 'R&D', type: 'Full-time', status: 'Open' },
    { id: 3, title: 'Technical Product Manager', department: 'Product', type: 'Contract', status: 'Closed' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  
  const initialForm = { title: '', department: 'Engineering', type: 'Full-time', status: 'Open' };
  const [formData, setFormData] = useState(initialForm);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job role?")) {
      setJobs(jobs.filter(job => job.id !== id));
    }
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData(job);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setEditingJob(null);
    setFormData(initialForm);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingJob) {
      setJobs(jobs.map(job => job.id === editingJob.id ? { ...formData, id: job.id } : job));
    } else {
      const id = Math.max(...jobs.map(j => j.id), 0) + 1;
      setJobs([...jobs, { ...formData, id }]);
    }
    setShowModal(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 className="font-headline-lg text-white" style={{ fontSize: '2rem' }}>Job Roles Management</h1>
        <button 
          onClick={handleAddNew}
          className="primary-button" 
          style={{ padding: '10px 20px', borderRadius: '6px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', background: '#64eedc', color: 'var(--color-on-primary)', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>work</span>
          Add New Role
        </button>
      </div>

      <div className="glass-card" style={{ padding: '24px', borderRadius: '12px', background: 'var(--color-surface)', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)' }}>Job Title</th>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)' }}>Department</th>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)' }}>Type</th>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)' }}>Status</th>
                <th className="font-label-mono-sm text-on-surface-variant" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(job => (
                <tr key={job.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = 'var(--color-surface)'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
                  <td style={{ padding: '16px' }}>
                    <span className="font-headline-sm text-white" style={{ fontSize: '1rem' }}>{job.title}</span>
                  </td>
                  <td style={{ padding: '16px', color: 'var(--color-on-surface-variant)' }}>
                    {job.department}
                  </td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', background: 'var(--color-border-muted)', color: 'var(--color-on-surface)' }}>
                      {job.type}
                    </span>
                  </td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ 
                      padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold',
                      background: job.status === 'Open' ? 'rgba(74,222,128,0.1)' : 'rgba(248,113,113,0.1)',
                      color: job.status === 'Open' ? '#4ade80' : '#f87171',
                    }}>
                      {job.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'right' }}>
                    <button 
                      onClick={() => handleEdit(job)}
                      title="Edit Job"
                      style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', marginRight: '12px' }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>edit</span>
                    </button>
                    <button 
                      onClick={() => handleDelete(job.id)}
                      title="Delete Job"
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

      {/* Add/Edit Job Modal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: 'var(--color-surface-container)', padding: '32px', borderRadius: '12px', width: '400px', border: '1px solid var(--color-primary-alpha-20)' }}>
            <h2 className="font-headline-md text-white mb-6">{editingJob ? 'Edit Job Role' : 'Add New Role'}</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label className="font-label-mono-sm text-on-surface-variant block mb-2">Job Title</label>
                <input 
                  type="text" required
                  value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--color-border-muted)', background: 'var(--color-surface)', color: 'white' }} 
                />
              </div>
              <div>
                <label className="font-label-mono-sm text-on-surface-variant block mb-2">Department</label>
                <input 
                  type="text" required
                  value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--color-border-muted)', background: 'var(--color-surface)', color: 'white' }} 
                />
              </div>
              <div>
                <label className="font-label-mono-sm text-on-surface-variant block mb-2">Type</label>
                <select 
                  value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--color-border-muted)', background: 'var(--color-surface)', color: 'white' }}
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              <div>
                <label className="font-label-mono-sm text-on-surface-variant block mb-2">Status</label>
                <select 
                  value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--color-border-muted)', background: 'var(--color-surface)', color: 'white' }}
                >
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px' }}>
                <button type="button" onClick={() => setShowModal(false)} style={{ padding: '8px 16px', background: 'transparent', border: '1px solid var(--color-border-muted)', color: 'white', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ padding: '8px 16px', background: 'var(--color-primary)', border: 'none', color: 'var(--color-on-primary)', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>{editingJob ? 'Save Changes' : 'Create Role'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
