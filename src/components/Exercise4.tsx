import { Accordion } from './Accordion';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export const Exercise4 = () => {
  return (
    <Accordion title="4.) Q = 50 - 2P | C₁ = 2q₁ | C₂ = 3.5q₂²" defaultOpen={false}>
      <h3 style={{ marginTop: 0, color: 'var(--color-accent-gold)' }}>Paso 1. Cantidad total</h3>
      <BlockMath math={`Q = q_1 + q_2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 2. Demanda inversa</h3>
      <BlockMath math={`Q = 50 - 2P`} />
      <p>Despejamos P:</p>
      <BlockMath math={`2P = 50 - Q\\
        P = (50 - Q)/2`} />
      <p>Separamos:</p>
      <BlockMath math={`P = 25 - Q/2`} />
      <p>Sustituimos Q = q₁ + q₂:</p>
      <BlockMath math={`P = 25 - (q_1 + q_2)/2\\
        P = 25 - q_1/2 - q_2/2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 3. Ganancia de la empresa 1</h3>
      <BlockMath math={`\pi_1 = P\cdot q_1 - 2q_1`} />
      <p>Sustituimos P:</p>
      <BlockMath math={`\pi_1 = (25 - q_1/2 - q_2/2)q_1 - 2q_1`} />
      <p>Multiplicamos:</p>
      <BlockMath math={`\pi_1 = 25q_1 - (\frac{1}{2})q_1^2 - (\frac{1}{2})q_1q_2 - 2q_1`} />
      <p>Juntamos términos lineales:</p>
      <BlockMath math={`25q_1 - 2q_1 = 23q_1`} />
      <p>Entonces:</p>
      <BlockMath math={`\pi_1 = 23q_1 - (\frac{1}{2})q_1^2 - (\frac{1}{2})q_1q_2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 4. Derivar para la empresa 1</h3>
      <BlockMath math={`d\pi_1/dq_1 = 23 - q_1 - q_2/2`} />
      <p>Igualamos a cero:</p>
      <BlockMath math={`23 - q_1 - q_2/2 = 0`} />
      <p>Despejamos q₁:</p>
      <BlockMath math={`q_1 = 23 - q_2/2`} />
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Función de reacción de la empresa 1</h4>
      <BlockMath math={`R1(q_2) = q_1 = 23 - q_2/2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 5. Ganancia de la empresa 2</h3>
      <BlockMath math={`\pi_2 = P\cdot q_2 - 3.5q_2^2`} />
      <p>Sustituimos P:</p>
      <BlockMath math={`\pi_2 = (25 - q_1/2 - q_2/2)q_2 - 3.5q_2^2`} />
      <p>Multiplicamos:</p>
      <BlockMath math={`\pi_2 = 25q_2 - (\frac{1}{2})q_1q_2 - (\frac{1}{2})q_2^2 - 3.5q_2^2`} />
      <p>Juntamos términos con q₂^2:</p>
      <BlockMath math={`-(\frac{1}{2})q_2^2 - 3.5q_2^2`} />
      <p>Como 3.5 = 7/2:</p>
      <BlockMath math={`-(\frac{1}{2})q_2^2 - (\frac{7}{2})q_2^2 = -(\frac{8}{2})q_2^2 = -4q_2^2`} />
      <p>Entonces:</p>
      <BlockMath math={`\pi_2 = 25q_2 - (\frac{1}{2})q_1q_2 - 4q_2^2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 6. Derivar para la empresa 2</h3>
      <BlockMath math={`d\pi_2/dq_2 = 25 - q_1/2 - 8q_2`} />
      <p>Igualamos a cero:</p>
      <BlockMath math={`25 - q_1/2 - 8q_2 = 0`} />
      <p>Multiplicamos todo por 2:</p>
      <BlockMath math={`50 - q_1 - 16q_2 = 0`} />
      <p>Despejamos q₂:</p>
      <BlockMath math={`16q_2 = 50 - q_1\\
        q_2 = (50 - q_1)/16`} />
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Función de reacción de la empresa 2</h4>
      <BlockMath math={`R2(q_1) = q_2 = (50 - q_1)/16`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 7. Resolver el sistema</h3>
      <p>Tenemos:</p>
      <BlockMath math={`q_1 = 23 - q_2/2\\
        q_2 = (50 - q_1)/16`} />
      <p>Sustituimos q₂ en q₁:</p>
      <BlockMath math={`q_1 = 23 - (\frac{1}{2})[(50 - q_1)/16]\\
        q_1 = 23 - (50 - q_1)/32\\
        q_1 = 23 - \frac{50}{32} + q_1/32\\
        q_1 = 23 - \frac{25}{16} + q_1/32`} />
      <p>Pasamos q₁/32 al lado izquierdo:</p>
      <BlockMath math={`q_1 - q_1/32 = 23 - \frac{25}{16}`} />
      <p>Lado izquierdo:</p>
      <BlockMath math={`(\frac{31}{32})q_1`} />
      <p>Lado derecho:</p>
      <BlockMath math={`23 = \frac{368}{16}\\
        \frac{368}{16} - \frac{25}{16} = \frac{343}{16}`} />
      <p>Entonces:</p>
      <BlockMath math={`(\frac{31}{32})q_1 = \frac{343}{16}`} />
      <p>Multiplicamos por 32/31:</p>
      <BlockMath math={`q_1 = (\frac{343}{16})(\frac{32}{31})\\
        q_1 = \frac{686}{31}`} />

      <h4 style={{ color: 'var(--color-accent-gold)' }}>Resultado de la empresa 1</h4>
      <BlockMath math={`q_1* = \frac{686}{31} ≈ 22.1290`} />

      <p>Ahora sustituimos en q₂:</p>
      <BlockMath math={`q_2 = (50 - q_1)/16\\
        q_2 = [50 - (\frac{686}{31})]/16`} />
      <BlockMath math={`50 = \frac{1550}{31}`} />
      <p>Entonces:</p>
      <BlockMath math={`q_2 = [(\frac{1550}{31}) - (\frac{686}{31})]/16\\
        q_2 = (\frac{864}{31})/16\\
        q_2 = \frac{864}{496}\\
        q_2 = \frac{54}{31}`} />

      <h4 style={{ color: 'var(--color-accent-gold)' }}>Resultado de la empresa 2</h4>
      <BlockMath math={`q_2* = \frac{54}{31} ≈ 1.7419`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 8. Cantidad total</h3>
      <BlockMath math={`Q* = q_1* + q_2*\\
        Q* = \frac{686}{31} + \frac{54}{31} = \frac{740}{31}\\
        Q* ≈ 23.8710`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 9. Precio de equilibrio</h3>
      <BlockMath math={`P = (50 - Q)/2\\
        P* = [50 - (\frac{740}{31})]/2`} />
      <BlockMath math={`50 = \frac{1550}{31}`} />
      <p>Entonces:</p>
      <BlockMath math={`P* = [(\frac{1550}{31}) - (\frac{740}{31})]/2\\
        P* = (\frac{810}{31})/2\\
        P* = \frac{405}{31}\\
        P* ≈ 13.0645`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 10. Ganancias</h3>
      <h4 style={{ color: 'var(--color-text-main)' }}>Empresa 1</h4>
      <BlockMath math={`\pi_1* = P*q_1 - 2q_1\\
        \pi_1* = (P - 2)q_1\\
        \pi_1* ≈ 244.8470`} />

      <h4 style={{ color: 'var(--color-text-main)' }}>Empresa 2</h4>
      <BlockMath math={`\pi_2* = P*q_2 - 3.5q_2^2\\
        \pi_2* ≈ 12.1374`} />

      <div style={{ margin: '2rem 0', padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '8px', backgroundColor: 'var(--color-bg-card)' }}>
        <h3 style={{ marginTop: 0, color: 'var(--color-accent-gold)' }}>Resultado final del ejercicio 4 ✅</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', fontFamily: 'Merriweather', margin: 0 }}>
          <li><InlineMath math={`q_1^* \approx 22.1290`} /></li>
          <li><InlineMath math={`q_2^* \approx 1.7419`} /></li>
          <li><InlineMath math={`Q^* \approx 23.8710`} /></li>
          <li><InlineMath math={`P^* \approx 13.0645`} /></li>
          <li><InlineMath math={`\pi_1^* \approx 244.8470`} /></li>
          <li><InlineMath math={`\pi_2^* \approx 12.1374`} /></li>
        </ul>
      </div>

      <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-academy)', borderRadius: '8px', borderLeft: '4px solid var(--color-text-main)' }}>
        <h3 style={{ marginTop: 0, color: 'var(--color-text-main)', fontSize: '1.2rem' }}>Interpretación sencilla 🌺</h3>
        <p style={{ margin: 0 }}>
          Aquí la empresa 2 casi no produce. No es casualidad.
          Tiene un costo cuadrático fuerte, 3.5q_2^2, y además el mercado es más pequeño que en otros ejercicios.
          Entonces, si intentara producir mucho, su costo subiría demasiado.
          Por eso la empresa 1 domina casi todo el mercado.
        </p>
      </div>
    </Accordion>
  );
};
