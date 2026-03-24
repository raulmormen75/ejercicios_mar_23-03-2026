
export const MathBlock = ({ children }: { children: React.ReactNode }) => (
  <div className="math-block">{children}</div>
);

export const MathInline = ({ children }: { children: React.ReactNode }) => (
  <span className="math-inline">{children}</span>
);

export const Frac = ({ n, d }: { n: string | number | React.ReactNode, d: string | number | React.ReactNode }) => (
  <span className="frac">
    <span className="num">{n}</span>
    <span className="den">{d}</span>
  </span>
);

export const Pi = ({ sub }: { sub?: string | number }) => (
  <span style={{ fontFamily: 'times, serif' }}>
    <span style={{ fontSize: '1.2em' }}>π</span>
    {sub && <sub>{sub}</sub>}
  </span>
);
