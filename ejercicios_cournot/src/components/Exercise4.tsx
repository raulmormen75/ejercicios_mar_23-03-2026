import { Accordion } from './Accordion';
import { MathBlock, Frac, Pi } from './MathUI';

export const Exercise4 = () => {
  return (
    <Accordion title="4.) Q = 50 - 2P | C₁ = 2q₁ | C₂ = 3.5q₂²" defaultOpen={false}>
      <h3 style={{ marginTop: 0, color: 'var(--color-accent-gold)' }}>Paso 1. Cantidad total</h3>
      <MathBlock>Q = q<sub>1</sub> + q<sub>2</sub></MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 2. Demanda inversa</h3>
      <MathBlock>Q = 50 - 2P</MathBlock>
      <p>Despejamos P:</p>
      <MathBlock>
        2P = 50 - Q<br/>
        P = (50 - Q)/2
      </MathBlock>
      <p>Separamos:</p>
      <MathBlock>P = 25 - Q/2</MathBlock>
      <p>Sustituimos Q = q<sub>1</sub> + q<sub>2</sub>:</p>
      <MathBlock>
        P = 25 - (q<sub>1</sub> + q<sub>2</sub>)/2<br/>
        P = 25 - q<sub>1</sub>/2 - q<sub>2</sub>/2
      </MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 3. Ganancia de la empresa 1</h3>
      <MathBlock><Pi sub="1"/> = P·q<sub>1</sub> - 2q<sub>1</sub></MathBlock>
      <p>Sustituimos P:</p>
      <MathBlock><Pi sub="1"/> = (25 - q<sub>1</sub>/2 - q<sub>2</sub>/2)q<sub>1</sub> - 2q<sub>1</sub></MathBlock>
      <p>Multiplicamos:</p>
      <MathBlock><Pi sub="1"/> = 25q<sub>1</sub> - (<Frac n="1" d="2"/>)q<sub>1</sub>² - (<Frac n="1" d="2"/>)q<sub>1</sub>q<sub>2</sub> - 2q<sub>1</sub></MathBlock>
      <p>Juntamos términos lineales:</p>
      <MathBlock>25q<sub>1</sub> - 2q<sub>1</sub> = 23q<sub>1</sub></MathBlock>
      <p>Entonces:</p>
      <MathBlock><Pi sub="1"/> = 23q<sub>1</sub> - (<Frac n="1" d="2"/>)q<sub>1</sub>² - (<Frac n="1" d="2"/>)q<sub>1</sub>q<sub>2</sub></MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 4. Derivar para la empresa 1</h3>
      <MathBlock>d<Pi sub="1"/>/dq<sub>1</sub> = 23 - q<sub>1</sub> - q<sub>2</sub>/2</MathBlock>
      <p>Igualamos a cero:</p>
      <MathBlock>23 - q<sub>1</sub> - q<sub>2</sub>/2 = 0</MathBlock>
      <p>Despejamos q<sub>1</sub>:</p>
      <MathBlock>q<sub>1</sub> = 23 - q<sub>2</sub>/2</MathBlock>
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Función de reacción de la empresa 1</h4>
      <MathBlock>R1(q<sub>2</sub>) = q<sub>1</sub> = 23 - q<sub>2</sub>/2</MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 5. Ganancia de la empresa 2</h3>
      <MathBlock><Pi sub="2"/> = P·q<sub>2</sub> - 3.5q<sub>2</sub>²</MathBlock>
      <p>Sustituimos P:</p>
      <MathBlock><Pi sub="2"/> = (25 - q<sub>1</sub>/2 - q<sub>2</sub>/2)q<sub>2</sub> - 3.5q<sub>2</sub>²</MathBlock>
      <p>Multiplicamos:</p>
      <MathBlock><Pi sub="2"/> = 25q<sub>2</sub> - (<Frac n="1" d="2"/>)q<sub>1</sub>q<sub>2</sub> - (<Frac n="1" d="2"/>)q<sub>2</sub>² - 3.5q<sub>2</sub>²</MathBlock>
      <p>Juntamos términos con q<sub>2</sub>²:</p>
      <MathBlock>-(<Frac n="1" d="2"/>)q<sub>2</sub>² - 3.5q<sub>2</sub>²</MathBlock>
      <p>Como 3.5 = 7/2:</p>
      <MathBlock>-(<Frac n="1" d="2"/>)q<sub>2</sub>² - (<Frac n="7" d="2"/>)q<sub>2</sub>² = -(<Frac n="8" d="2"/>)q<sub>2</sub>² = -4q<sub>2</sub>²</MathBlock>
      <p>Entonces:</p>
      <MathBlock><Pi sub="2"/> = 25q<sub>2</sub> - (<Frac n="1" d="2"/>)q<sub>1</sub>q<sub>2</sub> - 4q<sub>2</sub>²</MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 6. Derivar para la empresa 2</h3>
      <MathBlock>d<Pi sub="2"/>/dq<sub>2</sub> = 25 - q<sub>1</sub>/2 - 8q<sub>2</sub></MathBlock>
      <p>Igualamos a cero:</p>
      <MathBlock>25 - q<sub>1</sub>/2 - 8q<sub>2</sub> = 0</MathBlock>
      <p>Multiplicamos todo por 2:</p>
      <MathBlock>50 - q<sub>1</sub> - 16q<sub>2</sub> = 0</MathBlock>
      <p>Despejamos q<sub>2</sub>:</p>
      <MathBlock>
        16q<sub>2</sub> = 50 - q<sub>1</sub><br/>
        q<sub>2</sub> = (50 - q<sub>1</sub>)/16
      </MathBlock>
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Función de reacción de la empresa 2</h4>
      <MathBlock>R2(q<sub>1</sub>) = q<sub>2</sub> = (50 - q<sub>1</sub>)/16</MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 7. Resolver el sistema</h3>
      <p>Tenemos:</p>
      <MathBlock>
        q<sub>1</sub> = 23 - q<sub>2</sub>/2<br/>
        q<sub>2</sub> = (50 - q<sub>1</sub>)/16
      </MathBlock>
      <p>Sustituimos q<sub>2</sub> en q<sub>1</sub>:</p>
      <MathBlock>
        q<sub>1</sub> = 23 - (<Frac n="1" d="2"/>)[(50 - q<sub>1</sub>)/16]<br/>
        q<sub>1</sub> = 23 - (50 - q<sub>1</sub>)/32<br/>
        q<sub>1</sub> = 23 - <Frac n="50" d="32"/> + q<sub>1</sub>/32<br/>
        q<sub>1</sub> = 23 - <Frac n="25" d="16"/> + q<sub>1</sub>/32
      </MathBlock>
      <p>Pasamos q<sub>1</sub>/32 al lado izquierdo:</p>
      <MathBlock>q<sub>1</sub> - q<sub>1</sub>/32 = 23 - <Frac n="25" d="16"/></MathBlock>
      <p>Lado izquierdo:</p>
      <MathBlock>(<Frac n="31" d="32"/>)q<sub>1</sub></MathBlock>
      <p>Lado derecho:</p>
      <MathBlock>
        23 = <Frac n="368" d="16"/><br/>
        <Frac n="368" d="16"/> - <Frac n="25" d="16"/> = <Frac n="343" d="16"/>
      </MathBlock>
      <p>Entonces:</p>
      <MathBlock>(<Frac n="31" d="32"/>)q<sub>1</sub> = <Frac n="343" d="16"/></MathBlock>
      <p>Multiplicamos por 32/31:</p>
      <MathBlock>
        q<sub>1</sub> = (<Frac n="343" d="16"/>)(<Frac n="32" d="31"/>)<br/>
        q<sub>1</sub> = <Frac n="686" d="31"/>
      </MathBlock>

      <h4 style={{ color: 'var(--color-accent-gold)' }}>Resultado de la empresa 1</h4>
      <MathBlock>q<sub>1</sub>* = <Frac n="686" d="31"/> ≈ 22.1290</MathBlock>

      <p>Ahora sustituimos en q<sub>2</sub>:</p>
      <MathBlock>
        q<sub>2</sub> = (50 - q<sub>1</sub>)/16<br/>
        q<sub>2</sub> = [50 - (<Frac n="686" d="31"/>)]/16
      </MathBlock>
      <MathBlock>50 = <Frac n="1550" d="31"/></MathBlock>
      <p>Entonces:</p>
      <MathBlock>
        q<sub>2</sub> = [(<Frac n="1550" d="31"/>) - (<Frac n="686" d="31"/>)]/16<br/>
        q<sub>2</sub> = (<Frac n="864" d="31"/>)/16<br/>
        q<sub>2</sub> = <Frac n="864" d="496"/><br/>
        q<sub>2</sub> = <Frac n="54" d="31"/>
      </MathBlock>

      <h4 style={{ color: 'var(--color-accent-gold)' }}>Resultado de la empresa 2</h4>
      <MathBlock>q<sub>2</sub>* = <Frac n="54" d="31"/> ≈ 1.7419</MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 8. Cantidad total</h3>
      <MathBlock>
        Q* = q<sub>1</sub>* + q<sub>2</sub>*<br/>
        Q* = <Frac n="686" d="31"/> + <Frac n="54" d="31"/> = <Frac n="740" d="31"/><br/>
        Q* ≈ 23.8710
      </MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 9. Precio de equilibrio</h3>
      <MathBlock>
        P = (50 - Q)/2<br/>
        P* = [50 - (<Frac n="740" d="31"/>)]/2
      </MathBlock>
      <MathBlock>50 = <Frac n="1550" d="31"/></MathBlock>
      <p>Entonces:</p>
      <MathBlock>
        P* = [(<Frac n="1550" d="31"/>) - (<Frac n="740" d="31"/>)]/2<br/>
        P* = (<Frac n="810" d="31"/>)/2<br/>
        P* = <Frac n="405" d="31"/><br/>
        P* ≈ 13.0645
      </MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 10. Ganancias</h3>
      <h4 style={{ color: 'var(--color-text-main)' }}>Empresa 1</h4>
      <MathBlock>
        <Pi sub="1"/>* = P*q<sub>1</sub> - 2q<sub>1</sub><br/>
        <Pi sub="1"/>* = (P - 2)q<sub>1</sub><br/>
        <Pi sub="1"/>* ≈ 244.8470
      </MathBlock>

      <h4 style={{ color: 'var(--color-text-main)' }}>Empresa 2</h4>
      <MathBlock>
        <Pi sub="2"/>* = P*q<sub>2</sub> - 3.5q<sub>2</sub>²<br/>
        <Pi sub="2"/>* ≈ 12.1374
      </MathBlock>

      <div style={{ margin: '2rem 0', padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '8px', backgroundColor: 'var(--color-bg-card)' }}>
        <h3 style={{ marginTop: 0, color: 'var(--color-accent-gold)' }}>Resultado final del ejercicio 4 ✅</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', fontFamily: 'Merriweather', margin: 0 }}>
          <li>q<sub>1</sub>* ≈ 22.1290</li>
          <li>q<sub>2</sub>* ≈ 1.7419</li>
          <li>Q* ≈ 23.8710</li>
          <li>P* ≈ 13.0645</li>
          <li><Pi sub="1"/>* ≈ 244.8470</li>
          <li><Pi sub="2"/>* ≈ 12.1374</li>
        </ul>
      </div>

      <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-academy)', borderRadius: '8px', borderLeft: '4px solid var(--color-text-main)' }}>
        <h3 style={{ marginTop: 0, color: 'var(--color-text-main)', fontSize: '1.2rem' }}>Interpretación sencilla 🌺</h3>
        <p style={{ margin: 0 }}>
          Aquí la empresa 2 casi no produce. No es casualidad.
          Tiene un costo cuadrático fuerte, 3.5q<sub>2</sub>², y además el mercado es más pequeño que en otros ejercicios.
          Entonces, si intentara producir mucho, su costo subiría demasiado.
          Por eso la empresa 1 domina casi todo el mercado.
        </p>
      </div>
    </Accordion>
  );
};
