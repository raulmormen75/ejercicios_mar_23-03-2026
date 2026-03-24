import { Accordion } from './Accordion';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export const Exercise1 = () => {
  return (
    <Accordion title="1) Q = 150 - 3.5P | C₁ = 5q₁ | C₂ = (1/2)q₂²" defaultOpen={true}>
      <h3 style={{ marginTop: 0, color: 'var(--color-accent-gold)' }}>Paso 1. Escribir la cantidad total</h3>
      <BlockMath math={`Q = q_1 + q_2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 2. Obtener la demanda inversa</h3>
      <p>Nos dan:</p>
      <BlockMath math={`Q = 150 - 3.5P`} />
      <p>Queremos despejar P.</p>
      <BlockMath math={`3.5P = 150 - Q\\
        P = (150 - Q) / 3.5`} />
      <p>Como 3.5 = \frac{7}{2}, entonces dividir entre 3.5 es lo mismo que multiplicar por \frac{2}{7}:</p>
      <BlockMath math={`P = (150 - Q)(\frac{2}{7})\\
        P = \frac{300}{7} - \frac{2}{7}Q`} />
      <p>Ahora sustituimos Q = q₁ + q₂:</p>
      <BlockMath math={`P = \frac{300}{7} - \frac{2}{7}(q_1 + q_2)`} />
      <p>Abrimos paréntesis:</p>
      <BlockMath math={`P = \frac{300}{7} - \frac{2}{7}q_1 - \frac{2}{7}q_2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 3. Ganancia de la empresa 1</h3>
      <BlockMath math={`\pi_1 = P\cdot q_1 - C_1`} />
      <p>Como C₁ = 5q_1:</p>
      <BlockMath math={`\pi_1 = P\cdot q_1 - 5q_1`} />
      <p>Sustituimos P:</p>
      <BlockMath math={`\pi_1 = [\frac{300}{7} - \frac{2}{7}q_1 - \frac{2}{7}q_2]q_1 - 5q_1`} />
      <p>Multiplicamos q₁ en cada término:</p>
      <BlockMath math={`\pi_1 = \frac{300}{7}q_1 - \frac{2}{7}q_1^2 - \frac{2}{7}q_1q_2 - 5q_1`} />
      <p>Juntamos los términos que tienen q₁:</p>
      <BlockMath math={`\frac{300}{7}q_1 - 5q_1 = \frac{300}{7}q_1 - \frac{35}{7}q_1 = \frac{265}{7}q_1`} />
      <p>Entonces:</p>
      <BlockMath math={`\pi_1 = \frac{265}{7}q_1 - \frac{2}{7}q_1^2 - \frac{2}{7}q_1q_2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 4. Derivar la ganancia de la empresa 1</h3>
      <p>Derivamos respecto a q₁:</p>
      <BlockMath math={`d\pi_1/dq_1 = \frac{265}{7} - \frac{4}{7}q_1 - \frac{2}{7}q_2`} />
      <p>Igualamos a cero:</p>
      <BlockMath math={`\frac{265}{7} - \frac{4}{7}q_1 - \frac{2}{7}q_2 = 0`} />
      <p>Multiplicamos todo por 7 para quitar denominadores:</p>
      <BlockMath math={`265 - 4q_1 - 2q_2 = 0`} />
      <p>Despejamos q₁:</p>
      <BlockMath math={`4q_1 = 265 - 2q_2\\
        q_1 = (265 - 2q_2)/4\\
        q_1 = \frac{265}{4} - \frac{1}{2}q_2`} />
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Función de reacción de la empresa 1</h4>
      <BlockMath math={`R1(q_2) = q_1 = \frac{265}{4} - q_2/2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 5. Ganancia de la empresa 2</h3>
      <BlockMath math={`\pi_2 = P\cdot q_2 - C_2`} />
      <p>Como C₂ = (1/2)q₂^2:</p>
      <BlockMath math={`\pi_2 = P\cdot q_2 - \frac{1}{2}q_2^2`} />
      <p>Sustituimos P:</p>
      <BlockMath math={`\pi_2 = [\frac{300}{7} - \frac{2}{7}q_1 - \frac{2}{7}q_2]q_2 - \frac{1}{2}q_2^2`} />
      <p>Multiplicamos q₂:</p>
      <BlockMath math={`\pi_2 = \frac{300}{7}q_2 - \frac{2}{7}q_1q_2 - \frac{2}{7}q_2^2 - \frac{1}{2}q_2^2`} />
      <p>Juntamos los términos con q₂^2:</p>
      <BlockMath math={`-\frac{2}{7}q_2^2 - \frac{1}{2}q_2^2`} />
      <p>Buscamos denominador común 14:</p>
      <BlockMath math={`-\frac{4}{14}q_2^2 - \frac{7}{14}q_2^2 = -\frac{11}{14}q_2^2`} />
      <p>Entonces:</p>
      <BlockMath math={`\pi_2 = \frac{300}{7}q_2 - \frac{2}{7}q_1q_2 - \frac{11}{14}q_2^2`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 6. Derivar la ganancia de la empresa 2</h3>
      <p>Derivamos respecto a q₂:</p>
      <BlockMath math={`d\pi_2/dq_2 = \frac{300}{7} - \frac{2}{7}q_1 - \frac{11}{7}q_2`} />
      <p>Igualamos a cero:</p>
      <BlockMath math={`\frac{300}{7} - \frac{2}{7}q_1 - \frac{11}{7}q_2 = 0`} />
      <p>Multiplicamos todo por 7:</p>
      <BlockMath math={`300 - 2q_1 - 11q_2 = 0`} />
      <p>Despejamos q₂:</p>
      <BlockMath math={`11q_2 = 300 - 2q_1\\
        q_2 = (300 - 2q_1)/11`} />
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Función de reacción de la empresa 2</h4>
      <BlockMath math={`R2(q_1) = q_2 = (300 - 2q_1)/11`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 7. Resolver el sistema</h3>
      <p>Tenemos:</p>
      <BlockMath math={`q_1 = \frac{265}{4} - q_2/2\\
        q_2 = (300 - 2q_1)/11`} />
      <p>Sustituimos q₂ en la ecuación de q₁:</p>
      <BlockMath math={`q_1 = \frac{265}{4} - \frac{1}{2}[(300 - 2q_1)/11]\\
        q_1 = \frac{265}{4} - (300 - 2q_1)/22`} />
      <p>Separamos:</p>
      <BlockMath math={`q_1 = \frac{265}{4} - \frac{300}{22} + (2q_1)/22\\
        q_1 = \frac{265}{4} - \frac{150}{11} + q_1/11`} />
      <p>Pasamos q₁/11 al lado izquierdo:</p>
      <BlockMath math={`q_1 - q_1/11 = \frac{265}{4} - \frac{150}{11}`} />
      <p>Sacamos denominador común del lado izquierdo:</p>
      <BlockMath math={`(\frac{11}{11})q_1 - (\frac{1}{11})q_1 = (\frac{10}{11})q_1`} />
      <p>Ahora el lado derecho:</p>
      <BlockMath math={`\frac{265}{4} - \frac{150}{11}`} />
      <p>Denominador común 44:</p>
      <BlockMath math={`(\frac{2915}{44}) - (\frac{600}{44}) = \frac{2315}{44}`} />
      <p>Entonces:</p>
      <BlockMath math={`(\frac{10}{11})q_1 = \frac{2315}{44}`} />
      <p>Multiplicamos por 11/10:</p>
      <BlockMath math={`q_1 = (\frac{2315}{44})(\frac{11}{10})\\
        q_1 = \frac{463}{8}`} />
      
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Resultado de la empresa 1</h4>
      <BlockMath math={`q_1* = \frac{463}{8} = 57.875`} />

      <p>Ahora sustituimos en la reacción de la empresa 2:</p>
      <BlockMath math={`q_2 = (300 - 2q_1)/11\\
        q_2 = [300 - 2(\frac{463}{8})]/11\\
        q_2 = [300 - \frac{463}{4}]/11`} />
      <p>Pasamos 300 a cuartos:</p>
      <BlockMath math={`300 = \frac{1200}{4}`} />
      <p>Entonces:</p>
      <BlockMath math={`q_2 = [(\frac{1200}{4}) - (\frac{463}{4})]/11\\
        q_2 = (\frac{737}{4})/11\\
        q_2 = \frac{737}{44}\\
        q_2 = \frac{67}{4}`} />
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Resultado de la empresa 2</h4>
      <BlockMath math={`q_2* = \frac{67}{4} = 16.75`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 8. Cantidad total de equilibrio</h3>
      <BlockMath math={`Q* = q_1* + q_2*\\
        Q* = \frac{463}{8} + \frac{67}{4}`} />
      <p>Pasamos 67/4 a octavos:</p>
      <BlockMath math={`\frac{67}{4} = \frac{134}{8}`} />
      <p>Entonces:</p>
      <BlockMath math={`Q* = \frac{463}{8} + \frac{134}{8} = \frac{597}{8}\\
        Q* = 74.625`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 9. Precio de equilibrio</h3>
      <BlockMath math={`P = (150 - Q)/3.5\\
        P* = (150 - \frac{597}{8})/3.5`} />
      <p>Primero resolvemos el numerador:</p>
      <BlockMath math={`150 = \frac{1200}{8}\\
        150 - \frac{597}{8} = \frac{603}{8}`} />
      <p>Entonces:</p>
      <BlockMath math={`P* = (\frac{603}{8}) / (\frac{7}{2})`} />
      <p>Dividir entre 7/2 es multiplicar por 2/7:</p>
      <BlockMath math={`P* = (\frac{603}{8})(\frac{2}{7})\\
        P* = \frac{603}{28}\\
        P* ≈ 21.5357`} />

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 10. Ganancia de equilibrio de cada empresa</h3>
      <h4 style={{ color: 'var(--color-text-main)' }}>Empresa 1</h4>
      <BlockMath math={`\pi_1* = P*q_1 - 5q_1\\
        \pi_1* = (\frac{603}{28})(\frac{463}{8}) - 5(\frac{463}{8})`} />
      <p>También puede verse como:</p>
      <BlockMath math={`\pi_1* = (P - 5)q_1\\
        P - 5 = \frac{603}{28} - \frac{140}{28} = \frac{463}{28}`} />
      <p>Entonces:</p>
      <BlockMath math={`\pi_1* = (\frac{463}{28})(\frac{463}{8})\\
        \pi_1* = \frac{214369}{224}\\
        \pi_1* ≈ 957.0045`} />

      <h4 style={{ color: 'var(--color-text-main)' }}>Empresa 2</h4>
      <BlockMath math={`\pi_2* = P*q_2 - (\frac{1}{2})q_2^2\\
        \pi_2* = (\frac{603}{28})(\frac{67}{4}) - (\frac{1}{2})(\frac{67}{4})^2\\
        \pi_2* = \frac{49379}{224}\\
        \pi_2* ≈ 220.4420`} />

      <div style={{ margin: '2rem 0', padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '8px', backgroundColor: 'var(--color-bg-card)' }}>
        <h3 style={{ marginTop: 0, color: 'var(--color-accent-gold)' }}>Resultado final del ejercicio 1 ✅</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', fontFamily: 'Merriweather', margin: 0 }}>
          <li><InlineMath math={`q_1^* = 57.875`} /></li>
          <li><InlineMath math={`q_2^* = 16.75`} /></li>
          <li><InlineMath math={`Q^* = 74.625`} /></li>
          <li><InlineMath math={`P^* \approx 21.5357`} /></li>
          <li><InlineMath math={`\pi_1^* \approx 957.0045`} /></li>
          <li><InlineMath math={`\pi_2^* \approx 220.4420`} /></li>
        </ul>
      </div>

      <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-academy)', borderRadius: '8px', borderLeft: '4px solid var(--color-text-main)' }}>
        <h3 style={{ marginTop: 0, color: 'var(--color-text-main)', fontSize: '1.2rem' }}>Interpretación sencilla 🌷</h3>
        <p style={{ margin: 0 }}>
          La empresa 1 produce mucho más que la empresa 2. Eso pasa porque la empresa 1 tiene costo lineal de 5 por unidad, mientras que la empresa 2 tiene costo cuadrático. En palabras simples, a la empresa 2 le sale cada vez más caro producir mucho, por eso se frena antes. Por eso q₁ sale grande y q₂ sale más pequeño.
        </p>
      </div>
    </Accordion>
  );
};
