'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-purple)', marginBottom: '1rem' }}>
        {count} Sessions
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <button 
          onClick={() => setCount(c => c - 1)} 
          className="btn" 
          style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem' }}
        >
          Decrease
        </button>
        <button 
          onClick={() => setCount(c => c + 1)} 
          className="btn btn-primary" 
          style={{ padding: '0.5rem 1rem' }}
        >
          Increase
        </button>
      </div>
    </div>
  );
}