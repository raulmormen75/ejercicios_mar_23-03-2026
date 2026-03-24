import { useState, useEffect } from 'react';
import { ArrowUp, Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'Metodología', href: '#metodologia' },
    { label: 'Ej. 1', href: '#ejercicio-1' },
    { label: 'Ej. 2', href: '#ejercicio-2' },
    { label: 'Ej. 3', href: '#ejercicio-3' },
    { label: 'Ej. 4', href: '#ejercicio-4' },
    { label: 'Resumen', href: '#resumen' },
  ];

  return (
    <>
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(23, 23, 28, 0.97)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border)',
        padding: '0.75rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        margin: '0 -1rem',
      }}>
        <div style={{
          fontWeight: 'bold',
          color: 'var(--color-accent-gold)',
          fontFamily: 'Merriweather, serif',
          fontSize: '1rem',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>
          Cournot
        </div>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: 'var(--color-text-muted)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s',
                  padding: '0.25rem 0',
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-accent-gold)')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Mobile Nav Toggle */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--color-accent-gold)', cursor: 'pointer', display: 'flex', padding: 0 }}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        )}
      </nav>

      {/* Mobile Nav Menu */}
      {isMobile && isOpen && (
        <div style={{
          position: 'fixed',
          top: '49px',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(23, 23, 28, 0.99)',
          borderBottom: '1px solid var(--color-border)',
          zIndex: 99,
          padding: '0.5rem 1.5rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          backdropFilter: 'blur(12px)',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                color: 'var(--color-text-main)',
                textDecoration: 'none',
                padding: '0.75rem 0',
                borderBottom: '1px solid var(--color-border)',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
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
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.5rem',
      right: '1.5rem',
      zIndex: 100,
      opacity: visible ? 1 : 0,
      visibility: visible ? 'visible' : 'hidden',
      transition: 'opacity 0.3s, visibility 0.3s',
    }}>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Volver arriba"
        aria-label="Volver arriba"
        style={{
          backgroundColor: 'var(--color-accent-gold)',
          color: '#111',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 14px rgba(198,167,94,0.4)',
          fontWeight: 'bold',
        }}
      >
        <ArrowUp size={22} />
      </button>
    </div>
  );
};
