import { useState, useEffect } from 'react';
import { ArrowUp, Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'Metodología', href: '#metodologia' },
    { label: 'Ejercicio 1', href: '#ejercicio-1' },
    { label: 'Ejercicio 2', href: '#ejercicio-2' },
    { label: 'Ejercicio 3', href: '#ejercicio-3' },
    { label: 'Ejercicio 4', href: '#ejercicio-4' },
    { label: 'Resumen Final', href: '#resumen' },
  ];

  return (
    <>
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(23, 23, 28, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--color-border)',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 -1rem' // Compensate for container padding 
      }}>
        <div style={{ fontWeight: 'bold', color: 'var(--color-accent-gold)', fontFamily: 'Merriweather', fontSize: '1.2rem' }}>
          Microeconomía Cournot
        </div>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '1.5rem', fontWeight: 500 }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} style={{ color: 'var(--color-text-main)', textDecoration: 'none', transition: 'color 0.2s' }}>
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Mobile Nav Toggle */}
        {isMobile && (
          <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'var(--color-accent-gold)', cursor: 'pointer', display: 'flex' }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}
      </nav>

      {/* Mobile Nav Menu */}
      {isMobile && isOpen && (
        <div style={{
          position: 'fixed',
          top: '65px',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(23, 23, 28, 0.98)',
          borderBottom: '1px solid var(--color-border)',
          zIndex: 99,
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          backdropFilter: 'blur(10px)'
        }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} style={{ color: 'var(--color-text-main)', textDecoration: 'none', padding: '0.8rem 0', borderBottom: '1px solid var(--color-border)', fontSize: '1.1rem', fontWeight: 500 }}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 100,
      opacity: visible ? 1 : 0,
      visibility: visible ? 'visible' : 'hidden',
      transition: 'opacity 0.3s, visibility 0.3s'
    }}>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          backgroundColor: 'var(--color-accent-gold)',
          color: '#000',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(200,165,80,0.3)',
        }}
        aria-label="Volver arriba"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};
