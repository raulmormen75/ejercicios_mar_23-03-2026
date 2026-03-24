import { Accordion } from './Accordion';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export const Exercise2 = () => {
  return (
    <Accordion title="2) Q = 100 - 3P | C₁ = 4q₁ | C₂ = (1/5)q₂^2" defaultOpen={false}>
      <h3 style={{ marginTop: 0, color: 'var(--color-accent-gold)' }}>Paso 1. Cantidad total</h3>
      <BlockMath math={`Q = q_1 + q_2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 2. Demanda inversa</h3>
      <BlockMath math={`Q = 100 - 3P`} />
      <p>Despejamos P:</p>
      <BlockMath math={`3P = 100 - Q\\
        P = (100 - Q)/3`} />
      <p>Sustituimos Q = q_1 + q_2:</p>
      <BlockMath math={`P = (100 - q_1 - q_2)/3`} />
      <p>Separamos:</p>
      <BlockMath math={`P = \frac{100}{3} - (\frac{1}{3})q_1 - (\frac{1}{3})q_2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 3. Ganancia de la empresa 1</h3>
      <BlockMath math={`\pi_1 = P\cdot q_1 - 4q_1`} />
      <p>Sustituimos P:</p>
      <BlockMath math={`\pi_1 = [\frac{100}{3} - (\frac{1}{3})q_1 - (\frac{1}{3})q_2]q_1 - 4q_1`} />
      <p>Multiplicamos:</p>
      <BlockMath math={`\pi_1 = (\frac{100}{3})q_1 - (\frac{1}{3})q_1^2 - (\frac{1}{3})q_1q_2 - 4q_1`} />
      <p>Juntamos términos lineales en q_1:</p>
      <BlockMath math={`(\frac{100}{3})q_1 - 4q_1 = (\frac{100}{3})q_1 - (\frac{12}{3})q_1 = (\frac{88}{3})q_1`} />
      <p>Entonces:</p>
      <BlockMath math={`\pi_1 = (\frac{88}{3})q_1 - (\frac{1}{3})q_1^2 - (\frac{1}{3})q_1q_2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 4. Derivar para la empresa 1</h3>
      <BlockMath math={`d\pi_1/dq_1 = \frac{88}{3} - (\frac{2}{3})q_1 - (\frac{1}{3})q_2`} />
      <p>Igualamos a cero:</p>
      <BlockMath math={`\frac{88}{3} - (\frac{2}{3})q_1 - (\frac{1}{3})q_2 = 0`} />
      <p>Multiplicamos todo por 3:</p>
      <BlockMath math={`88 - 2q_1 - q_2 = 0`} />
      <p>Despejamos q_1:</p>
      <BlockMath math={`2q_1 = 88 - q_2\\
        q_1 = 44 - q_2/2`} />
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Función de reacción de la empresa 1</h4>
      <BlockMath math={`R1(q_2) = q_1 = 44 - q_2/2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 5. Ganancia de la empresa 2</h3>
      <BlockMath math={`\pi_2 = P\cdot q_2 - (\frac{1}{5})q_2^2`} />
      <p>Sustituimos P:</p>
      <BlockMath math={`\pi_2 = [\frac{100}{3} - (\frac{1}{3})q_1 - (\frac{1}{3})q_2]q_2 - (\frac{1}{5})q_2^2`} />
      <p>Multiplicamos:</p>
      <BlockMath math={`\pi_2 = (\frac{100}{3})q_2 - (\frac{1}{3})q_1q_2 - (\frac{1}{3})q_2^2 - (\frac{1}{5})q_2^2`} />
      <p>Juntamos los términos con q_2^2:</p>
      <BlockMath math={`-(\frac{1}{3})q_2^2 - (\frac{1}{5})q_2^2`} />
      <p>Denominador común 15:</p>
      <BlockMath math={`-(\frac{5}{15})q_2^2 - (\frac{3}{15})q_2^2 = -(\frac{8}{15})q_2^2`} />
      <p>Entonces:</p>
      <BlockMath math={`\pi_2 = (\frac{100}{3})q_2 - (\frac{1}{3})q_1q_2 - (\frac{8}{15})q_2^2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 6. Derivar para la empresa 2</h3>
      <BlockMath math={`d\pi_2/dq_2 = \frac{100}{3} - (\frac{1}{3})q_1 - (\frac{16}{15})q_2`} />
      <p>Igualamos a cero:</p>
      <BlockMath math={`\frac{100}{3} - (\frac{1}{3})q_1 - (\frac{16}{15})q_2 = 0`} />
      <p>Multiplicamos todo por 15:</p>
      <BlockMath math={`500 - 5q_1 - 16q_2 = 0`} />
      <p>Despejamos q_2:</p>
      <BlockMath math={`16q_2 = 500 - 5q_1\\
        q_2 = (500 - 5q_1)/16`} />
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Función de reacción de la empresa 2</h4>
      <BlockMath math={`R2(q_1) = q_2 = (500 - 5q_1)/16`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 7. Resolver el sistema</h3>
      <p>Tenemos:</p>
      <BlockMath math={`q_1 = 44 - q_2/2\\
        q_2 = (500 - 5q_1)/16`} />
      <p>Sustituimos q_2 en la ecuación de q_1:</p>
      <BlockMath math={`q_1 = 44 - (\frac{1}{2})[(500 - 5q_1)/16]\\
        q_1 = 44 - (500 - 5q_1)/32`} />
      <p>Separamos:</p>
      <BlockMath math={`q_1 = 44 - \frac{500}{32} + (5q_1)/32\\
        q_1 = 44 - \frac{125}{8} + (5q_1)/32`} />
      <p>Pasamos (5q_1)/32 al lado izquierdo:</p>
      <BlockMath math={`q_1 - (5q_1)/32 = 44 - \frac{125}{8}`} />
      <p>Lado izquierdo:</p>
      <BlockMath math={`(\frac{32}{32})q_1 - (\frac{5}{32})q_1 = (\frac{27}{32})q_1`} />
      <p>Lado derecho:</p>
      <BlockMath math={`44 = \frac{352}{8}\\
        \frac{352}{8} - \frac{125}{8} = \frac{227}{8}`} />
      <p>Entonces:</p>
      <BlockMath math={`(\frac{27}{32})q_1 = \frac{227}{8}`} />
      <p>Multiplicamos por 32/27:</p>
      <BlockMath math={`q_1 = (\frac{227}{8})(\frac{32}{27})\\
        q_1 = \frac{908}{27}`} />
      
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Resultado de la empresa 1</h4>
      <BlockMath math={`q_1* = \frac{908}{27} ≈ 33.6296`} />

      <p>Ahora sustituimos en la reacción de q_2:</p>
      <BlockMath math={`q_2 = (500 - 5q_1)/16\\
        q_2 = [500 - 5(\frac{908}{27})]/16\\
        q_2 = [500 - \frac{4540}{27}]/16`} />
      <p>Pasamos 500 a veintisietavos:</p>
      <BlockMath math={`500 = \frac{13500}{27}`} />
      <p>Entonces:</p>
      <BlockMath math={`q_2 = [(\frac{13500}{27}) - (\frac{4540}{27})]/16\\
        q_2 = (\frac{8960}{27})/16\\
        q_2 = \frac{8960}{432}\\
        q_2 = \frac{560}{27}`} />
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Resultado de la empresa 2</h4>
      <BlockMath math={`q_2* = \frac{560}{27} ≈ 20.7407`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 8. Cantidad total</h3>
      <BlockMath math={`Q* = q_1* + q_2*\\
        Q* = \frac{908}{27} + \frac{560}{27} = \frac{1468}{27}\\
        Q* ≈ 54.3704`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 9. Precio de equilibrio</h3>
      <BlockMath math={`P = (100 - Q)/3\\
        P* = [100 - (\frac{1468}{27})]/3`} />
      <BlockMath math={`100 = \frac{2700}{27}`} />
      <p>Entonces:</p>
      <BlockMath math={`P* = [(\frac{2700}{27}) - (\frac{1468}{27})]/3\\
        P* = (\frac{1232}{27})/3\\
        P* = \frac{1232}{81}\\
        P* ≈ 15.2099`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 10. Ganancias</h3>
      <h4 style={{ color: 'var(--color-text-main)' }}>Empresa 1</h4>
      <BlockMath math={`\pi_1* = P*q_1 - 4q_1\\
        \pi_1* = (P - 4)q_1\\
        P - 4 = \frac{1232}{81} - \frac{324}{81} = \frac{908}{81}`} />
      <p>Entonces:</p>
      <BlockMath math={`\pi_1* = (\frac{908}{81})(\frac{908}{27})\\
        \pi_1* = \frac{824464}{2187}\\
        \pi_1* ≈ 376.9840`} />

      <h4 style={{ color: 'var(--color-text-main)' }}>Empresa 2</h4>
      <BlockMath math={`\pi_2* = P*q_2 - (\frac{1}{5})q_2^2\\
        \pi_2* = \frac{501760}{2187}\\
        \pi_2* ≈ 229.4284`} />

      <div style={{ margin: '2rem 0', padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '8px', backgroundColor: 'var(--color-bg-card)' }}>
        <h3 style={{ marginTop: 0, color: 'var(--color-accent-gold)' }}>Resultado final del ejercicio 2 ✅</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', fontFamily: 'Merriweather', margin: 0 }}>
          <li><InlineMath math={`q_1^* \approx 33.6296`} /></li>
          <li><InlineMath math={`q_2^* \approx 20.7407`} /></li>
          <li><InlineMath math={`Q^* \approx 54.3704`} /></li>
          <li><InlineMath math={`P^* \approx 15.2099`} /></li>
          <li><InlineMath math={`\pi_1^* \approx 376.9840`} /></li>
          <li><InlineMath math={`\pi_2^* \approx 229.4284`} /></li>
        </ul>
      </div>

      <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-academy)', borderRadius: '8px', borderLeft: '4px solid var(--color-text-main)' }}>
        <h3 style={{ marginTop: 0, color: 'var(--color-text-main)', fontSize: '1.2rem' }}>Interpretación sencilla 🌼</h3>
        <p style={{ margin: 0 }}>
          Aquí la empresa 1 también produce más, pero la diferencia ya no es tan enorme como en el ejercicio 1. La empresa 2 tiene costo cuadrático, sí, pero es más suave porque el coeficiente es 1/5. Eso le permite producir más que en el ejercicio anterior.
        </p>
      </div>
    </Accordion>
  );
};
