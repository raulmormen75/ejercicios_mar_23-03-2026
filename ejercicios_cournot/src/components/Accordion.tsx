import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Accordion = ({ 
  title, 
  defaultOpen = false, 
  children 
}: { 
  title: React.ReactNode; 
  defaultOpen?: boolean; 
  children: React.ReactNode 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      border: '1px solid var(--color-border)',
      borderRadius: '8px',
      marginBottom: '1rem',
      backgroundColor: 'var(--color-bg-base)',
      overflow: 'hidden'
    }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 1.5rem',
          background: 'var(--color-bg-card)',
          border: 'none',
          color: 'var(--color-text-main)',
          fontSize: '1.2rem',
          fontWeight: '600',
          fontFamily: 'Merriweather, serif',
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={24} color="var(--color-accent-gold)" /> : <ChevronDown size={24} color="var(--color-accent-gold)" />}
      </button>
      {isOpen && (
        <div style={{ padding: '1.5rem' }}>
          {children}
        </div>
      )}
    </div>
  );
};
