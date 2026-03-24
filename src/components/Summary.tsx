import { Pi } from './MathUI';

export const Summary = () => {
  return (
    <section style={{ margin: '4rem 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Resumen final de los 4 ejercicios 📌</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {/* Ejercicio 1 */}
        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-card)', borderRadius: '8px', borderTop: '4px solid var(--color-accent-gold)' }}>
          <h3 style={{ color: 'var(--color-accent-gold)', marginTop: 0 }}>1) Ejercicio 1</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'Merriweather', fontSize: '1.1rem' }}>
            <li>q<sub>1</sub>* = 57.875</li>
            <li>q<sub>2</sub>* = 16.75</li>
            <li>Q* = 74.625</li>
            <li>P* ≈ 21.5357</li>
            <li><Pi sub="1"/>* ≈ 957.0045</li>
            <li><Pi sub="2"/>* ≈ 220.4420</li>
          </ul>
        </div>
        {/* Ejercicio 2 */}
        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-card)', borderRadius: '8px', borderTop: '4px solid var(--color-accent-gold)' }}>
          <h3 style={{ color: 'var(--color-accent-gold)', marginTop: 0 }}>2) Ejercicio 2</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'Merriweather', fontSize: '1.1rem' }}>
            <li>q<sub>1</sub>* ≈ 33.6296</li>
            <li>q<sub>2</sub>* ≈ 20.7407</li>
            <li>Q* ≈ 54.3704</li>
            <li>P* ≈ 15.2099</li>
            <li><Pi sub="1"/>* ≈ 376.9840</li>
            <li><Pi sub="2"/>* ≈ 229.4284</li>
          </ul>
        </div>
        {/* Ejercicio 3 */}
        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-card)', borderRadius: '8px', borderTop: '4px solid var(--color-accent-gold)' }}>
          <h3 style={{ color: 'var(--color-accent-gold)', marginTop: 0 }}>3) Ejercicio 3</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'Merriweather', fontSize: '1.1rem' }}>
            <li>q<sub>1</sub>* = 52.075</li>
            <li>q<sub>2</sub>* = 12.35</li>
            <li>Q* = 64.425</li>
            <li>P* = 111.15</li>
            <li><Pi sub="1"/>* = 5423.61125</li>
            <li><Pi sub="2"/>* = 838.87375</li>
          </ul>
        </div>
        {/* Ejercicio 4 */}
        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-card)', borderRadius: '8px', borderTop: '4px solid var(--color-accent-gold)' }}>
          <h3 style={{ color: 'var(--color-accent-gold)', marginTop: 0 }}>4.) Ejercicio 4</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'Merriweather', fontSize: '1.1rem' }}>
            <li>q<sub>1</sub>* ≈ 22.1290</li>
            <li>q<sub>2</sub>* ≈ 1.7419</li>
            <li>Q* ≈ 23.8710</li>
            <li>P* ≈ 13.0645</li>
            <li><Pi sub="1"/>* ≈ 244.8470</li>
            <li><Pi sub="2"/>* ≈ 12.1374</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: 'var(--color-bg-academy)', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
        <h3 style={{ color: 'var(--color-text-main)', marginTop: 0, textAlign: 'center' }}>Idea final para entenderlos rápido 💡</h3>
        <p style={{ margin: 0, textAlign: 'center', fontSize: '1.1rem' }}>
          Si una empresa tiene costo lineal, suele aguantar mejor producir más.<br/>
          Si otra empresa tiene costo cuadrático, llega un punto donde producir más la castiga mucho.<br/>
          Por eso, en estos ejercicios, la empresa 1 casi siempre termina produciendo más que la empresa 2.
        </p>
      </div>
    </section>
  );
};
