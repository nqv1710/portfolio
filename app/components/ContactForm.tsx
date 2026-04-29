'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed');
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    color: '#fff',
    outline: 'none',
    transition: 'border-color 0.3s',
    marginBottom: '1rem'
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}
      className="glass-card"
    >
      <input 
        style={inputStyle} 
        type="text" 
        placeholder="Your Name" 
        required 
        value={formData.name}
        onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
        className="focus:border-purple-500"
      />
      <input 
        style={inputStyle} 
        type="email" 
        placeholder="Your Email" 
        required 
        value={formData.email}
        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
        className="focus:border-purple-500"
      />
      <textarea 
        style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }} 
        placeholder="Your Message..." 
        required 
        value={formData.message}
        onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
        className="focus:border-purple-500"
      />
      
      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="btn btn-primary"
        style={{ width: '100%', justifyContent: 'center', opacity: status === 'loading' ? 0.7 : 1 }}
      >
        {status === 'loading' ? <div className="loading-spinner" style={{ width: '20px', height: '20px', borderWidth: '2px' }}/> : 
         status === 'success' ? <><CheckCircle size={20}/> Sent Successfully!</> :
         status === 'error' ? <><AlertCircle size={20}/> Try Again</> :
         <><Send size={20}/> Send Message</>}
      </button>
    </motion.form>
  );
}
