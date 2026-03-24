
export const Hero = () => {
  return (
    <header style={{
      textAlign: 'center',
      padding: '4rem 1rem',
      backgroundColor: 'var(--color-bg-card)',
      borderBottom: '4px solid var(--color-accent-gold)'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-accent-gold)' }}>
        Método de Cournot
      </h1>
      <h2 style={{ fontSize: '1.2rem', fontWeight: 400, color: 'var(--color-text-main)', marginBottom: '1.5rem' }}>
        Ejercicios de microeconomía paso a paso 📘✨
      </h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
        Autor: Raúl Morales Mendoza
      </p>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '8px', backgroundColor: 'var(--color-bg-base)' }}>
        <p style={{ margin: 0 }}>Este material está pensado para alumnos a quienes todavía les cuesta trabajo la parte matemática. La idea es ir despacio, sin brincos, y explicando qué se hace en cada renglón.</p>
      </div>
    </header>
  );
};
