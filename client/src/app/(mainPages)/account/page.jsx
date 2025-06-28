'use client';
import { useState } from 'react';

const initialUser = {
  name: 'John Doe',
  email: 'john@example.com',
  address: '123 Main St, City, Country',
  phone: '+1 234 567 890',
};

export default function AccountPage() {
  const [user, setUser] = useState(initialUser);
  const [editField, setEditField] = useState(null);
  const [editValue, setEditValue] = useState('');

  const startEdit = (field) => {
    setEditField(field);
    setEditValue(user[field]);
  };

  const saveEdit = () => {
    setUser({ ...user, [editField]: editValue });
    setEditField(null);
    setEditValue('');
  };

  const cancelEdit = () => {
    setEditField(null);
    setEditValue('');
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: '2rem auto',
        padding: '2rem',
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      }}
    >
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>
        Account Information
      </h1>
      {['name', 'email', 'address', 'phone'].map((field) => (
        <div key={field} style={{ marginBottom: '1.5rem' }}>
          <label
            style={{
              fontWeight: 600,
              display: 'block',
              marginBottom: 4,
              textTransform: 'capitalize',
            }}
          >
            {field}
          </label>
          {editField === field ? (
            <div>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                style={{
                  padding: '0.5rem',
                  width: '100%',
                  borderRadius: 6,
                  border: '1px solid #ccc',
                  marginBottom: 8,
                }}
              />
              <button
                onClick={saveEdit}
                style={{
                  marginRight: 8,
                  padding: '0.4rem 1.2rem',
                  borderRadius: 6,
                  background: '#222',
                  color: '#fff',
                  border: 'none',
                }}
              >
                Save
              </button>
              <button
                onClick={cancelEdit}
                style={{
                  padding: '0.4rem 1.2rem',
                  borderRadius: 6,
                  background: '#eee',
                  color: '#222',
                  border: 'none',
                }}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>{user[field]}</span>
              <button
                onClick={() => startEdit(field)}
                style={{
                  marginLeft: 16,
                  padding: '0.3rem 1rem',
                  borderRadius: 6,
                  background: '#ffe066',
                  color: '#222',
                  border: 'none',
                  fontWeight: 600,
                }}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
