import { Accordion } from './Accordion';
import { MathBlock, Frac, Pi } from './MathUI';

export const Exercise1 = () => {
  return (
    <Accordion title="1) Q = 150 - 3.5P | C₁ = 5q₁ | C₂ = (1/2)q₂²" defaultOpen={true}>
      <h3 style={{ marginTop: 0, color: 'var(--color-accent-gold)' }}>Paso 1. Escribir la cantidad total</h3>
      <MathBlock>Q = q<sub>1</sub> + q<sub>2</sub></MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 2. Obtener la demanda inversa</h3>
      <p>Nos dan:</p>
      <MathBlock>Q = 150 - 3.5P</MathBlock>
      <p>Queremos despejar P.</p>
      <MathBlock>
        3.5P = 150 - Q<br/>
        P = (150 - Q) / 3.5
      </MathBlock>
      <p>Como 3.5 = <Frac n="7" d="2"/>, entonces dividir entre 3.5 es lo mismo que multiplicar por <Frac n="2" d="7"/>:</p>
      <MathBlock>
        P = (150 - Q)(<Frac n="2" d="7"/>)<br/>
        P = <Frac n="300" d="7"/> - <Frac n="2" d="7"/>Q
      </MathBlock>
      <p>Ahora sustituimos Q = q<sub>1</sub> + q<sub>2</sub>:</p>
      <MathBlock>P = <Frac n="300" d="7"/> - <Frac n="2" d="7"/>(q<sub>1</sub> + q<sub>2</sub>)</MathBlock>
      <p>Abrimos paréntesis:</p>
      <MathBlock>P = <Frac n="300" d="7"/> - <Frac n="2" d="7"/>q<sub>1</sub> - <Frac n="2" d="7"/>q<sub>2</sub></MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 3. Ganancia de la empresa 1</h3>
      <MathBlock><Pi sub="1"/> = P·q<sub>1</sub> - C<sub>1</sub></MathBlock>
      <p>Como C<sub>1</sub> = 5q<sub>1</sub>:</p>
      <MathBlock><Pi sub="1"/> = P·q<sub>1</sub> - 5q<sub>1</sub></MathBlock>
      <p>Sustituimos P:</p>
      <MathBlock><Pi sub="1"/> = [<Frac n="300" d="7"/> - <Frac n="2" d="7"/>q<sub>1</sub> - <Frac n="2" d="7"/>q<sub>2</sub>]q<sub>1</sub> - 5q<sub>1</sub></MathBlock>
      <p>Multiplicamos q<sub>1</sub> en cada término:</p>
      <MathBlock><Pi sub="1"/> = <Frac n="300" d="7"/>q<sub>1</sub> - <Frac n="2" d="7"/>q<sub>1</sub>² - <Frac n="2" d="7"/>q<sub>1</sub>q<sub>2</sub> - 5q<sub>1</sub></MathBlock>
      <p>Juntamos los términos que tienen q<sub>1</sub>:</p>
      <MathBlock><Frac n="300" d="7"/>q<sub>1</sub> - 5q<sub>1</sub> = <Frac n="300" d="7"/>q<sub>1</sub> - <Frac n="35" d="7"/>q<sub>1</sub> = <Frac n="265" d="7"/>q<sub>1</sub></MathBlock>
      <p>Entonces:</p>
      <MathBlock><Pi sub="1"/> = <Frac n="265" d="7"/>q<sub>1</sub> - <Frac n="2" d="7"/>q<sub>1</sub>² - <Frac n="2" d="7"/>q<sub>1</sub>q<sub>2</sub></MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 4. Derivar la ganancia de la empresa 1</h3>
      <p>Derivamos respecto a q<sub>1</sub>:</p>
      <MathBlock>d<Pi sub="1"/>/dq<sub>1</sub> = <Frac n="265" d="7"/> - <Frac n="4" d="7"/>q<sub>1</sub> - <Frac n="2" d="7"/>q<sub>2</sub></MathBlock>
      <p>Igualamos a cero:</p>
      <MathBlock><Frac n="265" d="7"/> - <Frac n="4" d="7"/>q<sub>1</sub> - <Frac n="2" d="7"/>q<sub>2</sub> = 0</MathBlock>
      <p>Multiplicamos todo por 7 para quitar denominadores:</p>
      <MathBlock>265 - 4q<sub>1</sub> - 2q<sub>2</sub> = 0</MathBlock>
      <p>Despejamos q<sub>1</sub>:</p>
      <MathBlock>
        4q<sub>1</sub> = 265 - 2q<sub>2</sub><br/>
        q<sub>1</sub> = (265 - 2q<sub>2</sub>)/4<br/>
        q<sub>1</sub> = <Frac n="265" d="4"/> - <Frac n="1" d="2"/>q<sub>2</sub>
      </MathBlock>
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Función de reacción de la empresa 1</h4>
      <MathBlock>R1(q<sub>2</sub>) = q<sub>1</sub> = <Frac n="265" d="4"/> - q<sub>2</sub>/2</MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 5. Ganancia de la empresa 2</h3>
      <MathBlock><Pi sub="2"/> = P·q<sub>2</sub> - C<sub>2</sub></MathBlock>
      <p>Como C<sub>2</sub> = (1/2)q<sub>2</sub>²:</p>
      <MathBlock><Pi sub="2"/> = P·q<sub>2</sub> - <Frac n="1" d="2"/>q<sub>2</sub>²</MathBlock>
      <p>Sustituimos P:</p>
      <MathBlock><Pi sub="2"/> = [<Frac n="300" d="7"/> - <Frac n="2" d="7"/>q<sub>1</sub> - <Frac n="2" d="7"/>q<sub>2</sub>]q<sub>2</sub> - <Frac n="1" d="2"/>q<sub>2</sub>²</MathBlock>
      <p>Multiplicamos q<sub>2</sub>:</p>
      <MathBlock><Pi sub="2"/> = <Frac n="300" d="7"/>q<sub>2</sub> - <Frac n="2" d="7"/>q<sub>1</sub>q<sub>2</sub> - <Frac n="2" d="7"/>q<sub>2</sub>² - <Frac n="1" d="2"/>q<sub>2</sub>²</MathBlock>
      <p>Juntamos los términos con q<sub>2</sub>²:</p>
      <MathBlock>-<Frac n="2" d="7"/>q<sub>2</sub>² - <Frac n="1" d="2"/>q<sub>2</sub>²</MathBlock>
      <p>Buscamos denominador común 14:</p>
      <MathBlock>-<Frac n="4" d="14"/>q<sub>2</sub>² - <Frac n="7" d="14"/>q<sub>2</sub>² = -<Frac n="11" d="14"/>q<sub>2</sub>²</MathBlock>
      <p>Entonces:</p>
      <MathBlock><Pi sub="2"/> = <Frac n="300" d="7"/>q<sub>2</sub> - <Frac n="2" d="7"/>q<sub>1</sub>q<sub>2</sub> - <Frac n="11" d="14"/>q<sub>2</sub>²</MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 6. Derivar la ganancia de la empresa 2</h3>
      <p>Derivamos respecto a q<sub>2</sub>:</p>
      <MathBlock>d<Pi sub="2"/>/dq<sub>2</sub> = <Frac n="300" d="7"/> - <Frac n="2" d="7"/>q<sub>1</sub> - <Frac n="11" d="7"/>q<sub>2</sub></MathBlock>
      <p>Igualamos a cero:</p>
      <MathBlock><Frac n="300" d="7"/> - <Frac n="2" d="7"/>q<sub>1</sub> - <Frac n="11" d="7"/>q<sub>2</sub> = 0</MathBlock>
      <p>Multiplicamos todo por 7:</p>
      <MathBlock>300 - 2q<sub>1</sub> - 11q<sub>2</sub> = 0</MathBlock>
      <p>Despejamos q<sub>2</sub>:</p>
      <MathBlock>
        11q<sub>2</sub> = 300 - 2q<sub>1</sub><br/>
        q<sub>2</sub> = (300 - 2q<sub>1</sub>)/11
      </MathBlock>
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Función de reacción de la empresa 2</h4>
      <MathBlock>R2(q<sub>1</sub>) = q<sub>2</sub> = (300 - 2q<sub>1</sub>)/11</MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 7. Resolver el sistema</h3>
      <p>Tenemos:</p>
      <MathBlock>
        q<sub>1</sub> = <Frac n="265" d="4"/> - q<sub>2</sub>/2<br/>
        q<sub>2</sub> = (300 - 2q<sub>1</sub>)/11
      </MathBlock>
      <p>Sustituimos q<sub>2</sub> en la ecuación de q<sub>1</sub>:</p>
      <MathBlock>
        q<sub>1</sub> = <Frac n="265" d="4"/> - <Frac n="1" d="2"/>[(300 - 2q<sub>1</sub>)/11]<br/>
        q<sub>1</sub> = <Frac n="265" d="4"/> - (300 - 2q<sub>1</sub>)/22
      </MathBlock>
      <p>Separamos:</p>
      <MathBlock>
        q<sub>1</sub> = <Frac n="265" d="4"/> - <Frac n="300" d="22"/> + (2q<sub>1</sub>)/22<br/>
        q<sub>1</sub> = <Frac n="265" d="4"/> - <Frac n="150" d="11"/> + q<sub>1</sub>/11
      </MathBlock>
      <p>Pasamos q<sub>1</sub>/11 al lado izquierdo:</p>
      <MathBlock>q<sub>1</sub> - q<sub>1</sub>/11 = <Frac n="265" d="4"/> - <Frac n="150" d="11"/></MathBlock>
      <p>Sacamos denominador común del lado izquierdo:</p>
      <MathBlock>(<Frac n="11" d="11"/>)q<sub>1</sub> - (<Frac n="1" d="11"/>)q<sub>1</sub> = (<Frac n="10" d="11"/>)q<sub>1</sub></MathBlock>
      <p>Ahora el lado derecho:</p>
      <MathBlock><Frac n="265" d="4"/> - <Frac n="150" d="11"/></MathBlock>
      <p>Denominador común 44:</p>
      <MathBlock>(<Frac n="2915" d="44"/>) - (<Frac n="600" d="44"/>) = <Frac n="2315" d="44"/></MathBlock>
      <p>Entonces:</p>
      <MathBlock>(<Frac n="10" d="11"/>)q<sub>1</sub> = <Frac n="2315" d="44"/></MathBlock>
      <p>Multiplicamos por 11/10:</p>
      <MathBlock>
        q<sub>1</sub> = (<Frac n="2315" d="44"/>)(<Frac n="11" d="10"/>)<br/>
        q<sub>1</sub> = <Frac n="463" d="8"/>
      </MathBlock>
      
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Resultado de la empresa 1</h4>
      <MathBlock>q<sub>1</sub>* = <Frac n="463" d="8"/> = 57.875</MathBlock>

      <p>Ahora sustituimos en la reacción de la empresa 2:</p>
      <MathBlock>
        q<sub>2</sub> = (300 - 2q<sub>1</sub>)/11<br/>
        q<sub>2</sub> = [300 - 2(<Frac n="463" d="8"/>)]/11<br/>
        q<sub>2</sub> = [300 - <Frac n="463" d="4"/>]/11
      </MathBlock>
      <p>Pasamos 300 a cuartos:</p>
      <MathBlock>300 = <Frac n="1200" d="4"/></MathBlock>
      <p>Entonces:</p>
      <MathBlock>
        q<sub>2</sub> = [(<Frac n="1200" d="4"/>) - (<Frac n="463" d="4"/>)]/11<br/>
        q<sub>2</sub> = (<Frac n="737" d="4"/>)/11<br/>
        q<sub>2</sub> = <Frac n="737" d="44"/><br/>
        q<sub>2</sub> = <Frac n="67" d="4"/>
      </MathBlock>
      <h4 style={{ color: 'var(--color-accent-gold)' }}>Resultado de la empresa 2</h4>
      <MathBlock>q<sub>2</sub>* = <Frac n="67" d="4"/> = 16.75</MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 8. Cantidad total de equilibrio</h3>
      <MathBlock>
        Q* = q<sub>1</sub>* + q<sub>2</sub>*<br/>
        Q* = <Frac n="463" d="8"/> + <Frac n="67" d="4"/>
      </MathBlock>
      <p>Pasamos 67/4 a octavos:</p>
      <MathBlock><Frac n="67" d="4"/> = <Frac n="134" d="8"/></MathBlock>
      <p>Entonces:</p>
      <MathBlock>
        Q* = <Frac n="463" d="8"/> + <Frac n="134" d="8"/> = <Frac n="597" d="8"/><br/>
        Q* = 74.625
      </MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 9. Precio de equilibrio</h3>
      <MathBlock>
        P = (150 - Q)/3.5<br/>
        P* = (150 - <Frac n="597" d="8"/>)/3.5
      </MathBlock>
      <p>Primero resolvemos el numerador:</p>
      <MathBlock>
        150 = <Frac n="1200" d="8"/><br/>
        150 - <Frac n="597" d="8"/> = <Frac n="603" d="8"/>
      </MathBlock>
      <p>Entonces:</p>
      <MathBlock>P* = (<Frac n="603" d="8"/>) / (<Frac n="7" d="2"/>)</MathBlock>
      <p>Dividir entre 7/2 es multiplicar por 2/7:</p>
      <MathBlock>
        P* = (<Frac n="603" d="8"/>)(<Frac n="2" d="7"/>)<br/>
        P* = <Frac n="603" d="28"/><br/>
        P* ≈ 21.5357
      </MathBlock>

      <h3 style={{ color: 'var(--color-accent-gold)' }}>Paso 10. Ganancia de equilibrio de cada empresa</h3>
      <h4 style={{ color: 'var(--color-text-main)' }}>Empresa 1</h4>
      <MathBlock>
        <Pi sub="1"/>* = P*q<sub>1</sub> - 5q<sub>1</sub><br/>
        <Pi sub="1"/>* = (<Frac n="603" d="28"/>)(<Frac n="463" d="8"/>) - 5(<Frac n="463" d="8"/>)
      </MathBlock>
      <p>También puede verse como:</p>
      <MathBlock>
        <Pi sub="1"/>* = (P - 5)q<sub>1</sub><br/>
        P - 5 = <Frac n="603" d="28"/> - <Frac n="140" d="28"/> = <Frac n="463" d="28"/>
      </MathBlock>
      <p>Entonces:</p>
      <MathBlock>
        <Pi sub="1"/>* = (<Frac n="463" d="28"/>)(<Frac n="463" d="8"/>)<br/>
        <Pi sub="1"/>* = <Frac n="214369" d="224"/><br/>
        <Pi sub="1"/>* ≈ 957.0045
      </MathBlock>

      <h4 style={{ color: 'var(--color-text-main)' }}>Empresa 2</h4>
      <MathBlock>
        <Pi sub="2"/>* = P*q<sub>2</sub> - (<Frac n="1" d="2"/>)q<sub>2</sub>²<br/>
        <Pi sub="2"/>* = (<Frac n="603" d="28"/>)(<Frac n="67" d="4"/>) - (<Frac n="1" d="2"/>)(<Frac n="67" d="4"/>)²<br/>
        <Pi sub="2"/>* = <Frac n="49379" d="224"/><br/>
        <Pi sub="2"/>* ≈ 220.4420
      </MathBlock>

      <div style={{ margin: '2rem 0', padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '8px', backgroundColor: 'var(--color-bg-card)' }}>
        <h3 style={{ marginTop: 0, color: 'var(--color-accent-gold)' }}>Resultado final del ejercicio 1 ✅</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', fontFamily: 'Merriweather', margin: 0 }}>
          <li>q<sub>1</sub>* = 57.875</li>
          <li>q<sub>2</sub>* = 16.75</li>
          <li>Q* = 74.625</li>
          <li>P* ≈ 21.5357</li>
          <li><Pi sub="1"/>* ≈ 957.0045</li>
          <li><Pi sub="2"/>* ≈ 220.4420</li>
        </ul>
      </div>

      <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-academy)', borderRadius: '8px', borderLeft: '4px solid var(--color-text-main)' }}>
        <h3 style={{ marginTop: 0, color: 'var(--color-text-main)', fontSize: '1.2rem' }}>Interpretación sencilla 🌷</h3>
        <p style={{ margin: 0 }}>
          La empresa 1 produce mucho más que la empresa 2. Eso pasa porque la empresa 1 tiene costo lineal de 5 por unidad, mientras que la empresa 2 tiene costo cuadrático. En palabras simples, a la empresa 2 le sale cada vez más caro producir mucho, por eso se frena antes. Por eso q<sub>1</sub> sale grande y q<sub>2</sub> sale más pequeño.
        </p>
      </div>
    </Accordion>
  );
};
