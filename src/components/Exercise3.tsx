import { Accordion } from './Accordion';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export const Exercise3 = () => {
  return (
    <Accordion title="3) Q = 120 - (1/2)P | C₁ = 7q₁ | C₂ = 3.5q₂^2" defaultOpen={false}>
      <h3 style={{ marginTop: 0, color: 'var(--color-accent-gold)' }}>Paso 1. Cantidad total</h3>
      <BlockMath math={`Q = q_1 + q_2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 2. Demanda inversa</h3>
      <BlockMath math={`Q = 120 - (\frac{1}{2})P`} />
      <p>Despejamos P.</p>
      <BlockMath math={`(\frac{1}{2})P = 120 - Q`} />
      <p>Multiplicamos todo por 2:</p>
      <BlockMath math={`P = 240 - 2Q`} />
      <p>Sustituimos Q = q_1 + q_2:</p>
      <BlockMath math={`P = 240 - 2(q_1 + q_2)`} />
      <p>Abrimos paréntesis:</p>
      <BlockMath math={`P = 240 - 2q_1 - 2q_2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 3. Ganancia de la empresa 1</h3>
      <BlockMath math={`\pi_1 = P\cdot q_1 - 7q_1`} />
      <p>Sustituimos P:</p>
      <BlockMath math={`\pi_1 = (240 - 2q_1 - 2q_2)q_1 - 7q_1`} />
      <p>Multiplicamos:</p>
      <BlockMath math={`\pi_1 = 240q_1 - 2q_1^2 - 2q_1q_2 - 7q_1`} />
      <p>Juntamos términos lineales:</p>
      <BlockMath math={`240q_1 - 7q_1 = 233q_1`} />
      <p>Entonces:</p>
      <BlockMath math={`\pi_1 = 233q_1 - 2q_1^2 - 2q_1q_2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 4. Derivar para la empresa 1</h3>
      <BlockMath math={`d\pi_1/dq_1 = 233 - 4q_1 - 2q_2`} />
      <p>Igualamos a cero:</p>
      <BlockMath math={`233 - 4q_1 - 2q_2 = 0`} />
      <p>Despejamos q_1:</p>
      <BlockMath math={`4q_1 = 233 - 2q_2\\
        q_1 = \frac{233}{4} - q_2/2`} />
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Función de reacción de la empresa 1</h4>
      <BlockMath math={`R1(q_2) = q_1 = \frac{233}{4} - q_2/2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 5. Ganancia de la empresa 2</h3>
      <BlockMath math={`C_2 = 3.5q_2^2 = (\frac{7}{2})q_2^2`} />
      <p>Entonces:</p>
      <BlockMath math={`\pi_2 = P\cdot q_2 - (\frac{7}{2})q_2^2`} />
      <p>Sustituimos P:</p>
      <BlockMath math={`\pi_2 = (240 - 2q_1 - 2q_2)q_2 - (\frac{7}{2})q_2^2`} />
      <p>Multiplicamos:</p>
      <BlockMath math={`\pi_2 = 240q_2 - 2q_1q_2 - 2q_2^2 - (\frac{7}{2})q_2^2`} />
      <p>Juntamos los términos con q_2^2:</p>
      <BlockMath math={`-2q_2^2 - (\frac{7}{2})q_2^2`} />
      <BlockMath math={`-2q_2^2 = -(\frac{4}{2})q_2^2`} />
      <p>Entonces:</p>
      <BlockMath math={`-(\frac{4}{2})q_2^2 - (\frac{7}{2})q_2^2 = -(\frac{11}{2})q_2^2`} />
      <p>Así queda:</p>
      <BlockMath math={`\pi_2 = 240q_2 - 2q_1q_2 - (\frac{11}{2})q_2^2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 6. Derivar para la empresa 2</h3>
      <BlockMath math={`d\pi_2/dq_2 = 240 - 2q_1 - 11q_2`} />
      <p>Igualamos a cero:</p>
      <BlockMath math={`240 - 2q_1 - 11q_2 = 0`} />
      <p>Despejamos q_2:</p>
      <BlockMath math={`11q_2 = 240 - 2q_1\\
        q_2 = (240 - 2q_1)/11`} />
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Función de reacción de la empresa 2</h4>
      <BlockMath math={`R2(q_1) = q_2 = (240 - 2q_1)/11`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 7. Resolver el sistema</h3>
      <p>Tenemos:</p>
      <BlockMath math={`q_1 = \frac{233}{4} - q_2/2\\
        q_2 = (240 - 2q_1)/11`} />
      <p>Sustituimos q_2 en la ecuación de q_1:</p>
      <BlockMath math={`q_1 = \frac{233}{4} - (\frac{1}{2})[(240 - 2q_1)/11]\\
        q_1 = \frac{233}{4} - (240 - 2q_1)/22\\
        q_1 = \frac{233}{4} - \frac{120}{11} + q_1/11`} />
      <p>Pasamos q_1/11 al lado izquierdo:</p>
      <BlockMath math={`q_1 - q_1/11 = \frac{233}{4} - \frac{120}{11}`} />
      <p>Lado izquierdo:</p>
      <BlockMath math={`(\frac{10}{11})q_1`} />
      <p>Lado derecho, con denominador común 44:</p>
      <BlockMath math={`\frac{233}{4} = \frac{2563}{44}\\
        \frac{120}{11} = \frac{480}{44}`} />
      <p>Entonces:</p>
      <BlockMath math={`\frac{233}{4} - \frac{120}{11} = \frac{2083}{44}`} />
      <p>Así:</p>
      <BlockMath math={`(\frac{10}{11})q_1 = \frac{2083}{44}`} />
      <p>Multiplicamos por 11/10:</p>
      <BlockMath math={`q_1 = (\frac{2083}{44})(\frac{11}{10})\\
        q_1 = \frac{2083}{40}`} />

      <h4 style={{ color: 'var(--color-accent-gold)' }}>Resultado de la empresa 1</h4>
      <BlockMath math={`q_1* = \frac{2083}{40} = 52.075`} />

      <p>Ahora sustituimos en q_2:</p>
      <BlockMath math={`q_2 = (240 - 2q_1)/11\\
        q_2 = [240 - 2(\frac{2083}{40})]/11\\
        q_2 = [240 - \frac{2083}{20}]/11`} />
      <BlockMath math={`240 = \frac{4800}{20}`} />
      <p>Entonces:</p>
      <BlockMath math={`q_2 = [(\frac{4800}{20}) - (\frac{2083}{20})]/11\\
        q_2 = (\frac{2717}{20})/11\\
        q_2 = \frac{2717}{220}\\
        q_2 = \frac{247}{20}`} />

      <h4 style={{ color: 'var(--color-accent-gold)' }}>Resultado de la empresa 2</h4>
      <BlockMath math={`q_2* = \frac{247}{20} = 12.35`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 8. Cantidad total</h3>
      <BlockMath math={`Q* = q_1* + q_2*\\
        Q* = \frac{2083}{40} + \frac{247}{20}`} />
      <BlockMath math={`\frac{247}{20} = \frac{494}{40}`} />
      <p>Entonces:</p>
      <BlockMath math={`Q* = \frac{2083}{40} + \frac{494}{40} = \frac{2577}{40}\\
        Q* = 64.425`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 9. Precio de equilibrio</h3>
      <BlockMath math={`P = 240 - 2Q\\
        P* = 240 - 2(\frac{2577}{40})\\
        P* = 240 - \frac{2577}{20}`} />
      <BlockMath math={`240 = \frac{4800}{20}`} />
      <p>Entonces:</p>
      <BlockMath math={`P* = (\frac{4800}{20}) - (\frac{2577}{20})\\
        P* = \frac{2223}{20}\\
        P* = 111.15`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 10. Ganancias</h3>
      <h4 style={{ color: 'var(--color-text-main)' }}>Empresa 1</h4>
      <BlockMath math={`\pi_1* = P*q_1 - 7q_1\\
        \pi_1* = (P - 7)q_1\\
        P - 7 = 111.15 - 7 = 104.15`} />
      <p>Entonces:</p>
      <BlockMath math={`\pi_1* = 5423.61125`} />

      <h4 style={{ color: 'var(--color-text-main)' }}>Empresa 2</h4>
      <BlockMath math={`\pi_2* = P*q_2 - 3.5q_2^2\\
        \pi_2* = 838.87375`} />

      <div style={{ margin: '2rem 0', padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '8px', backgroundColor: 'var(--color-bg-card)' }}>
        <h3 style={{ marginTop: 0, color: 'var(--color-accent-gold)' }}>Resultado final del ejercicio 3 ✅</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', fontFamily: 'Merriweather', margin: 0 }}>
          <li><InlineMath math={`q_1^* = 52.075`} /></li>
          <li><InlineMath math={`q_2^* = 12.35`} /></li>
          <li><InlineMath math={`Q^* = 64.425`} /></li>
          <li><InlineMath math={`P^* = 111.15`} /></li>
          <li><InlineMath math={`\pi_1^* = 5423.61125`} /></li>
          <li><InlineMath math={`\pi_2^* = 838.87375`} /></li>
        </ul>
      </div>

      <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-academy)', borderRadius: '8px', borderLeft: '4px solid var(--color-text-main)' }}>
        <h3 style={{ marginTop: 0, color: 'var(--color-text-main)', fontSize: '1.2rem' }}>Interpretación sencilla 🌸</h3>
        <p style={{ margin: 0 }}>
          Este ejercicio da un precio mucho más alto. ¿Por qué? Porque la demanda inversa queda:
        </p>
        <BlockMath math={`P = 240 - 2Q`} />
        <p style={{ margin: 0 }}>
          Eso hace que el precio baje muy rápido cuando cambia Q, y al mismo tiempo parte desde un nivel muy alto.
          La empresa 2 vuelve a producir menos porque su costo cuadrático de 3.5q_2^2 la castiga bastante cuando intenta aumentar producción.
        </p>
      </div>
    </Accordion>
  );
};
