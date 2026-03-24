import { Accordion } from './Accordion';
import { MathBlock, Frac, Pi } from './MathUI';

export const Exercise2 = () => {
  return (
    <Accordion title="2) Q = 100 - 3P | C₁ = 4q₁ | C₂ = (1/5)q₂²" defaultOpen={false}>
      <h3 style={{ marginTop: 0, color: 'var(--color-accent-gold)' }}>Paso 1. Cantidad total</h3>
      <MathBlock>Q = q<sub>1</sub> + q<sub>2</sub></MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 2. Demanda inversa</h3>
      <MathBlock>Q = 100 - 3P</MathBlock>
      <p>Despejamos P:</p>
      <MathBlock>
        3P = 100 - Q<br/>
        P = (100 - Q)/3
      </MathBlock>
      <p>Sustituimos Q = q<sub>1</sub> + q<sub>2</sub>:</p>
      <MathBlock>P = (100 - q<sub>1</sub> - q<sub>2</sub>)/3</MathBlock>
      <p>Separamos:</p>
      <MathBlock>P = <Frac n="100" d="3"/> - (<Frac n="1" d="3"/>)q<sub>1</sub> - (<Frac n="1" d="3"/>)q<sub>2</sub></MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 3. Ganancia de la empresa 1</h3>
      <MathBlock><Pi sub="1"/> = P·q<sub>1</sub> - 4q<sub>1</sub></MathBlock>
      <p>Sustituimos P:</p>
      <MathBlock><Pi sub="1"/> = [<Frac n="100" d="3"/> - (<Frac n="1" d="3"/>)q<sub>1</sub> - (<Frac n="1" d="3"/>)q<sub>2</sub>]q<sub>1</sub> - 4q<sub>1</sub></MathBlock>
      <p>Multiplicamos:</p>
      <MathBlock><Pi sub="1"/> = (<Frac n="100" d="3"/>)q<sub>1</sub> - (<Frac n="1" d="3"/>)q<sub>1</sub>² - (<Frac n="1" d="3"/>)q<sub>1</sub>q<sub>2</sub> - 4q<sub>1</sub></MathBlock>
      <p>Juntamos términos lineales en q<sub>1</sub>:</p>
      <MathBlock>(<Frac n="100" d="3"/>)q<sub>1</sub> - 4q<sub>1</sub> = (<Frac n="100" d="3"/>)q<sub>1</sub> - (<Frac n="12" d="3"/>)q<sub>1</sub> = (<Frac n="88" d="3"/>)q<sub>1</sub></MathBlock>
      <p>Entonces:</p>
      <MathBlock><Pi sub="1"/> = (<Frac n="88" d="3"/>)q<sub>1</sub> - (<Frac n="1" d="3"/>)q<sub>1</sub>² - (<Frac n="1" d="3"/>)q<sub>1</sub>q<sub>2</sub></MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 4. Derivar para la empresa 1</h3>
      <MathBlock>d<Pi sub="1"/>/dq<sub>1</sub> = <Frac n="88" d="3"/> - (<Frac n="2" d="3"/>)q<sub>1</sub> - (<Frac n="1" d="3"/>)q<sub>2</sub></MathBlock>
      <p>Igualamos a cero:</p>
      <MathBlock><Frac n="88" d="3"/> - (<Frac n="2" d="3"/>)q<sub>1</sub> - (<Frac n="1" d="3"/>)q<sub>2</sub> = 0</MathBlock>
      <p>Multiplicamos todo por 3:</p>
      <MathBlock>88 - 2q<sub>1</sub> - q<sub>2</sub> = 0</MathBlock>
      <p>Despejamos q<sub>1</sub>:</p>
      <MathBlock>
        2q<sub>1</sub> = 88 - q<sub>2</sub><br/>
        q<sub>1</sub> = 44 - q<sub>2</sub>/2
      </MathBlock>
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Función de reacción de la empresa 1</h4>
      <MathBlock>R1(q<sub>2</sub>) = q<sub>1</sub> = 44 - q<sub>2</sub>/2</MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 5. Ganancia de la empresa 2</h3>
      <MathBlock><Pi sub="2"/> = P·q<sub>2</sub> - (<Frac n="1" d="5"/>)q<sub>2</sub>²</MathBlock>
      <p>Sustituimos P:</p>
      <MathBlock><Pi sub="2"/> = [<Frac n="100" d="3"/> - (<Frac n="1" d="3"/>)q<sub>1</sub> - (<Frac n="1" d="3"/>)q<sub>2</sub>]q<sub>2</sub> - (<Frac n="1" d="5"/>)q<sub>2</sub>²</MathBlock>
      <p>Multiplicamos:</p>
      <MathBlock><Pi sub="2"/> = (<Frac n="100" d="3"/>)q<sub>2</sub> - (<Frac n="1" d="3"/>)q<sub>1</sub>q<sub>2</sub> - (<Frac n="1" d="3"/>)q<sub>2</sub>² - (<Frac n="1" d="5"/>)q<sub>2</sub>²</MathBlock>
      <p>Juntamos los términos con q<sub>2</sub>²:</p>
      <MathBlock>-(<Frac n="1" d="3"/>)q<sub>2</sub>² - (<Frac n="1" d="5"/>)q<sub>2</sub>²</MathBlock>
      <p>Denominador común 15:</p>
      <MathBlock>-(<Frac n="5" d="15"/>)q<sub>2</sub>² - (<Frac n="3" d="15"/>)q<sub>2</sub>² = -(<Frac n="8" d="15"/>)q<sub>2</sub>²</MathBlock>
      <p>Entonces:</p>
      <MathBlock><Pi sub="2"/> = (<Frac n="100" d="3"/>)q<sub>2</sub> - (<Frac n="1" d="3"/>)q<sub>1</sub>q<sub>2</sub> - (<Frac n="8" d="15"/>)q<sub>2</sub>²</MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 6. Derivar para la empresa 2</h3>
      <MathBlock>d<Pi sub="2"/>/dq<sub>2</sub> = <Frac n="100" d="3"/> - (<Frac n="1" d="3"/>)q<sub>1</sub> - (<Frac n="16" d="15"/>)q<sub>2</sub></MathBlock>
      <p>Igualamos a cero:</p>
      <MathBlock><Frac n="100" d="3"/> - (<Frac n="1" d="3"/>)q<sub>1</sub> - (<Frac n="16" d="15"/>)q<sub>2</sub> = 0</MathBlock>
      <p>Multiplicamos todo por 15:</p>
      <MathBlock>500 - 5q<sub>1</sub> - 16q<sub>2</sub> = 0</MathBlock>
      <p>Despejamos q<sub>2</sub>:</p>
      <MathBlock>
        16q<sub>2</sub> = 500 - 5q<sub>1</sub><br/>
        q<sub>2</sub> = (500 - 5q<sub>1</sub>)/16
      </MathBlock>
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Función de reacción de la empresa 2</h4>
      <MathBlock>R2(q<sub>1</sub>) = q<sub>2</sub> = (500 - 5q<sub>1</sub>)/16</MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 7. Resolver el sistema</h3>
      <p>Tenemos:</p>
      <MathBlock>
        q<sub>1</sub> = 44 - q<sub>2</sub>/2<br/>
        q<sub>2</sub> = (500 - 5q<sub>1</sub>)/16
      </MathBlock>
      <p>Sustituimos q<sub>2</sub> en la ecuación de q<sub>1</sub>:</p>
      <MathBlock>
        q<sub>1</sub> = 44 - (<Frac n="1" d="2"/>)[(500 - 5q<sub>1</sub>)/16]<br/>
        q<sub>1</sub> = 44 - (500 - 5q<sub>1</sub>)/32
      </MathBlock>
      <p>Separamos:</p>
      <MathBlock>
        q<sub>1</sub> = 44 - <Frac n="500" d="32"/> + (5q<sub>1</sub>)/32<br/>
        q<sub>1</sub> = 44 - <Frac n="125" d="8"/> + (5q<sub>1</sub>)/32
      </MathBlock>
      <p>Pasamos (5q<sub>1</sub>)/32 al lado izquierdo:</p>
      <MathBlock>q<sub>1</sub> - (5q<sub>1</sub>)/32 = 44 - <Frac n="125" d="8"/></MathBlock>
      <p>Lado izquierdo:</p>
      <MathBlock>(<Frac n="32" d="32"/>)q<sub>1</sub> - (<Frac n="5" d="32"/>)q<sub>1</sub> = (<Frac n="27" d="32"/>)q<sub>1</sub></MathBlock>
      <p>Lado derecho:</p>
      <MathBlock>
        44 = <Frac n="352" d="8"/><br/>
        <Frac n="352" d="8"/> - <Frac n="125" d="8"/> = <Frac n="227" d="8"/>
      </MathBlock>
      <p>Entonces:</p>
      <MathBlock>(<Frac n="27" d="32"/>)q<sub>1</sub> = <Frac n="227" d="8"/></MathBlock>
      <p>Multiplicamos por 32/27:</p>
      <MathBlock>
        q<sub>1</sub> = (<Frac n="227" d="8"/>)(<Frac n="32" d="27"/>)<br/>
        q<sub>1</sub> = <Frac n="908" d="27"/>
      </MathBlock>
      
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Resultado de la empresa 1</h4>
      <MathBlock>q<sub>1</sub>* = <Frac n="908" d="27"/> ≈ 33.6296</MathBlock>

      <p>Ahora sustituimos en la reacción de q<sub>2</sub>:</p>
      <MathBlock>
        q<sub>2</sub> = (500 - 5q<sub>1</sub>)/16<br/>
        q<sub>2</sub> = [500 - 5(<Frac n="908" d="27"/>)]/16<br/>
        q<sub>2</sub> = [500 - <Frac n="4540" d="27"/>]/16
      </MathBlock>
      <p>Pasamos 500 a veintisietavos:</p>
      <MathBlock>500 = <Frac n="13500" d="27"/></MathBlock>
      <p>Entonces:</p>
      <MathBlock>
        q<sub>2</sub> = [(<Frac n="13500" d="27"/>) - (<Frac n="4540" d="27"/>)]/16<br/>
        q<sub>2</sub> = (<Frac n="8960" d="27"/>)/16<br/>
        q<sub>2</sub> = <Frac n="8960" d="432"/><br/>
        q<sub>2</sub> = <Frac n="560" d="27"/>
      </MathBlock>
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Resultado de la empresa 2</h4>
      <MathBlock>q<sub>2</sub>* = <Frac n="560" d="27"/> ≈ 20.7407</MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 8. Cantidad total</h3>
      <MathBlock>
        Q* = q<sub>1</sub>* + q<sub>2</sub>*<br/>
        Q* = <Frac n="908" d="27"/> + <Frac n="560" d="27"/> = <Frac n="1468" d="27"/><br/>
        Q* ≈ 54.3704
      </MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 9. Precio de equilibrio</h3>
      <MathBlock>
        P = (100 - Q)/3<br/>
        P* = [100 - (<Frac n="1468" d="27"/>)]/3
      </MathBlock>
      <MathBlock>100 = <Frac n="2700" d="27"/></MathBlock>
      <p>Entonces:</p>
      <MathBlock>
        P* = [(<Frac n="2700" d="27"/>) - (<Frac n="1468" d="27"/>)]/3<br/>
        P* = (<Frac n="1232" d="27"/>)/3<br/>
        P* = <Frac n="1232" d="81"/><br/>
        P* ≈ 15.2099
      </MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 10. Ganancias</h3>
      <h4 style={{ color: 'var(--color-text-main)' }}>Empresa 1</h4>
      <MathBlock>
        <Pi sub="1"/>* = P*q<sub>1</sub> - 4q<sub>1</sub><br/>
        <Pi sub="1"/>* = (P - 4)q<sub>1</sub><br/>
        P - 4 = <Frac n="1232" d="81"/> - <Frac n="324" d="81"/> = <Frac n="908" d="81"/>
      </MathBlock>
      <p>Entonces:</p>
      <MathBlock>
        <Pi sub="1"/>* = (<Frac n="908" d="81"/>)(<Frac n="908" d="27"/>)<br/>
        <Pi sub="1"/>* = <Frac n="824464" d="2187"/><br/>
        <Pi sub="1"/>* ≈ 376.9840
      </MathBlock>

      <h4 style={{ color: 'var(--color-text-main)' }}>Empresa 2</h4>
      <MathBlock>
        <Pi sub="2"/>* = P*q<sub>2</sub> - (<Frac n="1" d="5"/>)q<sub>2</sub>²<br/>
        <Pi sub="2"/>* = <Frac n="501760" d="2187"/><br/>
        <Pi sub="2"/>* ≈ 229.4284
      </MathBlock>

      <div style={{ margin: '2rem 0', padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '8px', backgroundColor: 'var(--color-bg-card)' }}>
        <h3 style={{ marginTop: 0, color: 'var(--color-accent-gold)' }}>Resultado final del ejercicio 2 ✅</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', fontFamily: 'Merriweather', margin: 0 }}>
          <li>q<sub>1</sub>* ≈ 33.6296</li>
          <li>q<sub>2</sub>* ≈ 20.7407</li>
          <li>Q* ≈ 54.3704</li>
          <li>P* ≈ 15.2099</li>
          <li><Pi sub="1"/>* ≈ 376.9840</li>
          <li><Pi sub="2"/>* ≈ 229.4284</li>
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
