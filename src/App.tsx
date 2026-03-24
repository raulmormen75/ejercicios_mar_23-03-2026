import { Hero } from './components/Hero';
import { Methodology } from './components/Methodology';
import { Exercise1 } from './components/Exercise1';
import { Exercise2 } from './components/Exercise2';
import { Exercise3 } from './components/Exercise3';
import { Exercise4 } from './components/Exercise4';
import { Summary } from './components/Summary';
import './index.css';

function App() {
  return (
    <div className="container">
      <Hero />
      <Methodology />
      <section style={{ margin: '4rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Desarrollo de Ejercicios</h2>
        <Exercise1 />
        <Exercise2 />
        <Exercise3 />
        <Exercise4 />
      </section>
      <Summary />
      <footer style={{ textAlign: 'center', padding: '3rem 1rem', marginTop: '4rem', borderTop: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}>
        <p>Aplicación didáctica interactiva elaborada por Raúl Mormen.</p>
        <p>Material exclusivo para apoyo académico en Microeconomía.</p>
      </footer>
    </div>
  );
}

export default App;
