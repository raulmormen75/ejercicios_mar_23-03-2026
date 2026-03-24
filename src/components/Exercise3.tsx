import { Accordion } from './Accordion';
import { MathBlock, Frac, Pi } from './MathUI';

export const Exercise3 = () => {
  return (
    <Accordion title="3) Q = 120 - (1/2)P | C₁ = 7q₁ | C₂ = 3.5q₂²" defaultOpen={false}>
      <h3 style={{ marginTop: 0, color: 'var(--color-accent-gold)' }}>Paso 1. Cantidad total</h3>
      <MathBlock>Q = q<sub>1</sub> + q<sub>2</sub></MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 2. Demanda inversa</h3>
      <MathBlock>Q = 120 - (<Frac n="1" d="2"/>)P</MathBlock>
      <p>Despejamos P.</p>
      <MathBlock>(<Frac n="1" d="2"/>)P = 120 - Q</MathBlock>
      <p>Multiplicamos todo por 2:</p>
      <MathBlock>P = 240 - 2Q</MathBlock>
      <p>Sustituimos Q = q<sub>1</sub> + q<sub>2</sub>:</p>
      <MathBlock>P = 240 - 2(q<sub>1</sub> + q<sub>2</sub>)</MathBlock>
      <p>Abrimos paréntesis:</p>
      <MathBlock>P = 240 - 2q<sub>1</sub> - 2q<sub>2</sub></MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 3. Ganancia de la empresa 1</h3>
      <MathBlock><Pi sub="1"/> = P·q<sub>1</sub> - 7q<sub>1</sub></MathBlock>
      <p>Sustituimos P:</p>
      <MathBlock><Pi sub="1"/> = (240 - 2q<sub>1</sub> - 2q<sub>2</sub>)q<sub>1</sub> - 7q<sub>1</sub></MathBlock>
      <p>Multiplicamos:</p>
      <MathBlock><Pi sub="1"/> = 240q<sub>1</sub> - 2q<sub>1</sub>² - 2q<sub>1</sub>q<sub>2</sub> - 7q<sub>1</sub></MathBlock>
      <p>Juntamos términos lineales:</p>
      <MathBlock>240q<sub>1</sub> - 7q<sub>1</sub> = 233q<sub>1</sub></MathBlock>
      <p>Entonces:</p>
      <MathBlock><Pi sub="1"/> = 233q<sub>1</sub> - 2q<sub>1</sub>² - 2q<sub>1</sub>q<sub>2</sub></MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 4. Derivar para la empresa 1</h3>
      <MathBlock>d<Pi sub="1"/>/dq<sub>1</sub> = 233 - 4q<sub>1</sub> - 2q<sub>2</sub></MathBlock>
      <p>Igualamos a cero:</p>
      <MathBlock>233 - 4q<sub>1</sub> - 2q<sub>2</sub> = 0</MathBlock>
      <p>Despejamos q<sub>1</sub>:</p>
      <MathBlock>
        4q<sub>1</sub> = 233 - 2q<sub>2</sub><br/>
        q<sub>1</sub> = <Frac n="233" d="4"/> - q<sub>2</sub>/2
      </MathBlock>
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Función de reacción de la empresa 1</h4>
      <MathBlock>R1(q<sub>2</sub>) = q<sub>1</sub> = <Frac n="233" d="4"/> - q<sub>2</sub>/2</MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 5. Ganancia de la empresa 2</h3>
      <MathBlock>C<sub>2</sub> = 3.5q<sub>2</sub>² = (<Frac n="7" d="2"/>)q<sub>2</sub>²</MathBlock>
      <p>Entonces:</p>
      <MathBlock><Pi sub="2"/> = P·q<sub>2</sub> - (<Frac n="7" d="2"/>)q<sub>2</sub>²</MathBlock>
      <p>Sustituimos P:</p>
      <MathBlock><Pi sub="2"/> = (240 - 2q<sub>1</sub> - 2q<sub>2</sub>)q<sub>2</sub> - (<Frac n="7" d="2"/>)q<sub>2</sub>²</MathBlock>
      <p>Multiplicamos:</p>
      <MathBlock><Pi sub="2"/> = 240q<sub>2</sub> - 2q<sub>1</sub>q<sub>2</sub> - 2q<sub>2</sub>² - (<Frac n="7" d="2"/>)q<sub>2</sub>²</MathBlock>
      <p>Juntamos los términos con q<sub>2</sub>²:</p>
      <MathBlock>-2q<sub>2</sub>² - (<Frac n="7" d="2"/>)q<sub>2</sub>²</MathBlock>
      <MathBlock>-2q<sub>2</sub>² = -(<Frac n="4" d="2"/>)q<sub>2</sub>²</MathBlock>
      <p>Entonces:</p>
      <MathBlock>-(<Frac n="4" d="2"/>)q<sub>2</sub>² - (<Frac n="7" d="2"/>)q<sub>2</sub>² = -(<Frac n="11" d="2"/>)q<sub>2</sub>²</MathBlock>
      <p>Así queda:</p>
      <MathBlock><Pi sub="2"/> = 240q<sub>2</sub> - 2q<sub>1</sub>q<sub>2</sub> - (<Frac n="11" d="2"/>)q<sub>2</sub>²</MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 6. Derivar para la empresa 2</h3>
      <MathBlock>d<Pi sub="2"/>/dq<sub>2</sub> = 240 - 2q<sub>1</sub> - 11q<sub>2</sub></MathBlock>
      <p>Igualamos a cero:</p>
      <MathBlock>240 - 2q<sub>1</sub> - 11q<sub>2</sub> = 0</MathBlock>
      <p>Despejamos q<sub>2</sub>:</p>
      <MathBlock>
        11q<sub>2</sub> = 240 - 2q<sub>1</sub><br/>
        q<sub>2</sub> = (240 - 2q<sub>1</sub>)/11
      </MathBlock>
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Función de reacción de la empresa 2</h4>
      <MathBlock>R2(q<sub>1</sub>) = q<sub>2</sub> = (240 - 2q<sub>1</sub>)/11</MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 7. Resolver el sistema</h3>
      <p>Tenemos:</p>
      <MathBlock>
        q<sub>1</sub> = <Frac n="233" d="4"/> - q<sub>2</sub>/2<br/>
        q<sub>2</sub> = (240 - 2q<sub>1</sub>)/11
      </MathBlock>
      <p>Sustituimos q<sub>2</sub> en la ecuación de q<sub>1</sub>:</p>
      <MathBlock>
        q<sub>1</sub> = <Frac n="233" d="4"/> - (<Frac n="1" d="2"/>)[(240 - 2q<sub>1</sub>)/11]<br/>
        q<sub>1</sub> = <Frac n="233" d="4"/> - (240 - 2q<sub>1</sub>)/22<br/>
        q<sub>1</sub> = <Frac n="233" d="4"/> - <Frac n="120" d="11"/> + q<sub>1</sub>/11
      </MathBlock>
      <p>Pasamos q<sub>1</sub>/11 al lado izquierdo:</p>
      <MathBlock>q<sub>1</sub> - q<sub>1</sub>/11 = <Frac n="233" d="4"/> - <Frac n="120" d="11"/></MathBlock>
      <p>Lado izquierdo:</p>
      <MathBlock>(<Frac n="10" d="11"/>)q<sub>1</sub></MathBlock>
      <p>Lado derecho, con denominador común 44:</p>
      <MathBlock>
        <Frac n="233" d="4"/> = <Frac n="2563" d="44"/><br/>
        <Frac n="120" d="11"/> = <Frac n="480" d="44"/>
      </MathBlock>
      <p>Entonces:</p>
      <MathBlock><Frac n="233" d="4"/> - <Frac n="120" d="11"/> = <Frac n="2083" d="44"/></MathBlock>
      <p>Así:</p>
      <MathBlock>(<Frac n="10" d="11"/>)q<sub>1</sub> = <Frac n="2083" d="44"/></MathBlock>
      <p>Multiplicamos por 11/10:</p>
      <MathBlock>
        q<sub>1</sub> = (<Frac n="2083" d="44"/>)(<Frac n="11" d="10"/>)<br/>
        q<sub>1</sub> = <Frac n="2083" d="40"/>
      </MathBlock>

      <h4 style={{ color: 'var(--color-accent-gold)' }}>Resultado de la empresa 1</h4>
      <MathBlock>q<sub>1</sub>* = <Frac n="2083" d="40"/> = 52.075</MathBlock>

      <p>Ahora sustituimos en q<sub>2</sub>:</p>
      <MathBlock>
        q<sub>2</sub> = (240 - 2q<sub>1</sub>)/11<br/>
        q<sub>2</sub> = [240 - 2(<Frac n="2083" d="40"/>)]/11<br/>
        q<sub>2</sub> = [240 - <Frac n="2083" d="20"/>]/11
      </MathBlock>
      <MathBlock>240 = <Frac n="4800" d="20"/></MathBlock>
      <p>Entonces:</p>
      <MathBlock>
        q<sub>2</sub> = [(<Frac n="4800" d="20"/>) - (<Frac n="2083" d="20"/>)]/11<br/>
        q<sub>2</sub> = (<Frac n="2717" d="20"/>)/11<br/>
        q<sub>2</sub> = <Frac n="2717" d="220"/><br/>
        q<sub>2</sub> = <Frac n="247" d="20"/>
      </MathBlock>

      <h4 style={{ color: 'var(--color-accent-gold)' }}>Resultado de la empresa 2</h4>
      <MathBlock>q<sub>2</sub>* = <Frac n="247" d="20"/> = 12.35</MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 8. Cantidad total</h3>
      <MathBlock>
        Q* = q<sub>1</sub>* + q<sub>2</sub>*<br/>
        Q* = <Frac n="2083" d="40"/> + <Frac n="247" d="20"/>
      </MathBlock>
      <MathBlock><Frac n="247" d="20"/> = <Frac n="494" d="40"/></MathBlock>
      <p>Entonces:</p>
      <MathBlock>
        Q* = <Frac n="2083" d="40"/> + <Frac n="494" d="40"/> = <Frac n="2577" d="40"/><br/>
        Q* = 64.425
      </MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 9. Precio de equilibrio</h3>
      <MathBlock>
        P = 240 - 2Q<br/>
        P* = 240 - 2(<Frac n="2577" d="40"/>)<br/>
        P* = 240 - <Frac n="2577" d="20"/>
      </MathBlock>
      <MathBlock>240 = <Frac n="4800" d="20"/></MathBlock>
      <p>Entonces:</p>
      <MathBlock>
        P* = (<Frac n="4800" d="20"/>) - (<Frac n="2577" d="20"/>)<br/>
        P* = <Frac n="2223" d="20"/><br/>
        P* = 111.15
      </MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 10. Ganancias</h3>
      <h4 style={{ color: 'var(--color-text-main)' }}>Empresa 1</h4>
      <MathBlock>
        <Pi sub="1"/>* = P*q<sub>1</sub> - 7q<sub>1</sub><br/>
        <Pi sub="1"/>* = (P - 7)q<sub>1</sub><br/>
        P - 7 = 111.15 - 7 = 104.15
      </MathBlock>
      <p>Entonces:</p>
      <MathBlock><Pi sub="1"/>* = 5423.61125</MathBlock>

      <h4 style={{ color: 'var(--color-text-main)' }}>Empresa 2</h4>
      <MathBlock>
        <Pi sub="2"/>* = P*q<sub>2</sub> - 3.5q<sub>2</sub>²<br/>
        <Pi sub="2"/>* = 838.87375
      </MathBlock>

      <div style={{ margin: '2rem 0', padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '8px', backgroundColor: 'var(--color-bg-card)' }}>
        <h3 style={{ marginTop: 0, color: 'var(--color-accent-gold)' }}>Resultado final del ejercicio 3 ✅</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', fontFamily: 'Merriweather', margin: 0 }}>
          <li>q<sub>1</sub>* = 52.075</li>
          <li>q<sub>2</sub>* = 12.35</li>
          <li>Q* = 64.425</li>
          <li>P* = 111.15</li>
          <li><Pi sub="1"/>* = 5423.61125</li>
          <li><Pi sub="2"/>* = 838.87375</li>
        </ul>
      </div>

      <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-academy)', borderRadius: '8px', borderLeft: '4px solid var(--color-text-main)' }}>
        <h3 style={{ marginTop: 0, color: 'var(--color-text-main)', fontSize: '1.2rem' }}>Interpretación sencilla 🌸</h3>
        <p style={{ margin: 0 }}>
          Este ejercicio da un precio mucho más alto. ¿Por qué? Porque la demanda inversa queda:
        </p>
        <MathBlock>P = 240 - 2Q</MathBlock>
        <p style={{ margin: 0 }}>
          Eso hace que el precio baje muy rápido cuando cambia Q, y al mismo tiempo parte desde un nivel muy alto.
          La empresa 2 vuelve a producir menos porque su costo cuadrático de 3.5q<sub>2</sub>² la castiga bastante cuando intenta aumentar producción.
        </p>
      </div>
    </Accordion>
  );
};
