import { Hero } from './components/Hero';
import { Methodology } from './components/Methodology';
import { Exercise1 } from './components/Exercise1';
import { Exercise2 } from './components/Exercise2';
import { Exercise3 } from './components/Exercise3';
import { Exercise4 } from './components/Exercise4';
import { Summary } from './components/Summary';
import { Navigation, BackToTop } from './components/Navigation';
import './index.css';

function App() {
  return (
    <div className="container">
      <Navigation />
      <Hero />
      <div id="metodologia">
        <Methodology />
      </div>
      <section style={{ margin: '4rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Desarrollo de Ejercicios</h2>
        <div id="ejercicio-1" style={{ scrollMarginTop: '80px', marginBottom: '1rem' }}>
          <Exercise1 />
        </div>
        <div id="ejercicio-2" style={{ scrollMarginTop: '80px', marginBottom: '1rem' }}>
          <Exercise2 />
        </div>
        <div id="ejercicio-3" style={{ scrollMarginTop: '80px', marginBottom: '1rem' }}>
          <Exercise3 />
        </div>
        <div id="ejercicio-4" style={{ scrollMarginTop: '80px', marginBottom: '1rem' }}>
          <Exercise4 />
        </div>
      </section>
      <div id="resumen" style={{ scrollMarginTop: '80px' }}>
        <Summary />
      </div>
      <footer style={{ textAlign: 'center', padding: '3rem 1rem', marginTop: '4rem', borderTop: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}>
        <p>Aplicación didáctica interactiva elaborada por Raúl Mormen.</p>
        <p>Material exclusivo para apoyo académico en Microeconomía.</p>
      </footer>
      <BackToTop />
    </div>
  );
}

export default App;
