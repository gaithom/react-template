import { Link } from 'react-router-dom';

const styles = {
  page: {
    minHeight: '100vh',
    width: '100%',
    padding: '60px 24px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    background: 'linear-gradient(180deg, rgba(170,59,255,0.08), rgba(255,255,255,1) 45%)',
  },
  card: {
    width: '100%',
    maxWidth: '900px',
    background: 'rgba(255, 255, 255, 0.96)',
    border: '1px solid var(--border)',
    borderRadius: '28px',
    boxShadow: '0 24px 70px rgba(15, 23, 42, 0.08)',
    padding: '36px',
  },
  header: {
    margin: 0,
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    lineHeight: 1.05,
  },
  intro: {
    margin: '18px 0 30px',
    color: 'var(--text)',
    fontSize: '1.05rem',
    lineHeight: 1.8,
  },
  statsGrid: {
    display: 'grid',
    gap: '18px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  },
  statCard: {
    borderRadius: '20px',
    padding: '24px',
    background: 'rgba(170, 59, 255, 0.07)',
    border: '1px solid rgba(170, 59, 255, 0.18)',
  },
  statTitle: {
    margin: 0,
    color: 'var(--text-h)',
    fontSize: '0.95rem',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  statValue: {
    margin: '14px 0 0',
    fontSize: '2rem',
    fontWeight: 700,
    color: 'var(--accent)',
  },
  actions: {
    marginTop: '32px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap' as const,
    gap: '12px',
  },
  linkButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '170px',
    padding: '14px 22px',
    borderRadius: '999px',
    fontWeight: 700,
    textDecoration: 'none',
    color: '#fff',
    background: 'var(--accent)',
    border: '1px solid transparent',
    transition: 'transform 0.2s ease',
  },
};

const statItems = [
  { label: 'Active users', value: '1.4K' },
  { label: 'Tasks completed', value: '86%' },
  { label: 'New signups', value: '310' },
  { label: 'Server uptime', value: '99.97%' },
];

export default function Dashboard() {
  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <h1 style={styles.header}>Dashboard overview</h1>
        <p style={styles.intro}>
          A clean dashboard layout to help you visualize progress and stay on top of tasks. Use this page as a simple launchpad for your app.
        </p>

        <div style={styles.statsGrid}>
          {statItems.map((item) => (
            <article key={item.label} style={styles.statCard}>
              <p style={styles.statTitle}>{item.label}</p>
              <p style={styles.statValue}>{item.value}</p>
            </article>
          ))}
        </div>

        <div style={styles.actions}>
          <Link to="/" style={styles.linkButton}>
            Back to home
          </Link>
          <Link to="/login" style={styles.linkButton}>
            Go to login
          </Link>
        </div>
      </section>
    </main>
  );
}
