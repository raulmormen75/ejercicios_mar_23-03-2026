import { MathBlock, Pi } from './MathUI';

export const Methodology = () => {
  return (
    <section style={{ margin: '3rem 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>¿Qué se hace en todos los ejercicios? 🤓</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', textAlign: 'center' }}>
        En Cournot, cada empresa decide cuánto producir. Usaremos siempre estas ideas:
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-card)', borderRadius: '8px', borderLeft: '4px solid var(--color-accent-gold)' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>1. La cantidad total del mercado es:</h3>
          <MathBlock>Q = q<sub>1</sub> + q<sub>2</sub></MathBlock>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-card)', borderRadius: '8px', borderLeft: '4px solid var(--color-accent-gold)' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>2. La demanda casi siempre viene así:</h3>
          <MathBlock>Q = a - bP</MathBlock>
          <p>Pero para trabajar Cournot conviene despejar el precio:</p>
          <MathBlock>P = demanda inversa</MathBlock>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-card)', borderRadius: '8px', borderLeft: '4px solid var(--color-accent-gold)' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>3. La ganancia de cada empresa es:</h3>
          <MathBlock>
            <Pi sub="1"/> = P(q<sub>1</sub>) - C<sub>1</sub><br/>
            <Pi sub="2"/> = P(q<sub>2</sub>) - C<sub>2</sub>
          </MathBlock>
          <p>Mejor escrita:</p>
          <MathBlock>
            <Pi sub="1"/> = P·q<sub>1</sub> - C<sub>1</sub>(q<sub>1</sub>)<br/>
            <Pi sub="2"/> = P·q<sub>2</sub> - C<sub>2</sub>(q<sub>2</sub>)
          </MathBlock>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-card)', borderRadius: '8px', borderLeft: '4px solid var(--color-accent-gold)' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>4. Luego derivamos cada ganancia respecto a su propia producción:</h3>
          <MathBlock>
            d<Pi sub="1"/>/dq<sub>1</sub> = 0<br/>
            d<Pi sub="2"/>/dq<sub>2</sub> = 0
          </MathBlock>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-card)', borderRadius: '8px', borderLeft: '4px solid var(--color-accent-gold)' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>5. De ahí salen las funciones de reacción.</h3>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-card)', borderRadius: '8px', borderLeft: '4px solid var(--color-accent-gold)' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>6. Después resolvemos el sistema para hallar:</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1rem', textAlign: 'center' }}>
            <span style={{ fontSize: '1.2rem', fontFamily: 'Merriweather' }}>q<sub>1</sub>*</span>
            <span style={{ fontSize: '1.2rem', fontFamily: 'Merriweather' }}>q<sub>2</sub>*</span>
            <span style={{ fontSize: '1.2rem', fontFamily: 'Merriweather' }}>Q*</span>
            <span style={{ fontSize: '1.2rem', fontFamily: 'Merriweather' }}>P*</span>
            <span style={{ fontSize: '1.2rem', fontFamily: 'Merriweather' }}><Pi sub="1"/>*</span>
            <span style={{ fontSize: '1.2rem', fontFamily: 'Merriweather' }}><Pi sub="2"/>*</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'var(--color-bg-academy)', borderRadius: '8px', borderLeft: '4px solid var(--color-text-main)' }}>
        <h4 style={{ color: 'var(--color-text-main)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Nota sencilla:</h4>
        <p style={{ margin: 0 }}>
          Cuando derivamos respecto a q<sub>1</sub>, todo lo que tenga q<sub>2</sub> se toma como constante.<br/>
          Cuando derivamos respecto a q<sub>2</sub>, todo lo que tenga q<sub>1</sub> se toma como constante. 🧠
        </p>
      </div>
    </section>
  );
};
