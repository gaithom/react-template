import { Link } from 'react-router-dom';

const styles = {
  page: {
    minHeight: '100vh',
    width: '100%',
    padding: '64px 20px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(170, 59, 255, 0.08))',
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    padding: '36px',
    borderRadius: '28px',
    border: '1px solid var(--border)',
    boxShadow: '0 28px 70px rgba(15, 23, 42, 0.08)',
    background: 'rgba(255, 255, 255, 0.97)',
  },
  logo: {
    display: 'inline-block',
    marginBottom: '24px',
    color: 'var(--accent)',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    fontSize: '0.8rem',
    fontWeight: 700,
  },
  title: {
    margin: '0 0 12px',
    fontSize: '2rem',
    lineHeight: 1.05,
  },
  description: {
    margin: '0 0 24px',
    color: 'var(--text)',
    lineHeight: 1.7,
  },
  form: {
    display: 'grid',
    gap: '18px',
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '14px',
    border: '1px solid var(--border)',
    fontSize: '1rem',
    color: 'var(--text-h)',
    background: 'transparent',
  },
  button: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '14px',
    border: 'none',
    background: 'var(--accent)',
    color: '#fff',
    fontWeight: 700,
    cursor: 'pointer',
  },
  footer: {
    marginTop: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap' as const,
  },
  link: {
    color: 'var(--accent)',
    textDecoration: 'none',
    fontWeight: 700,
  },
};

export default function Login() {
  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <span style={styles.logo}>Signin</span>
        <h1 style={styles.title}>Welcome back</h1>
        <p style={styles.description}>
          Enter your credentials to continue. This login page is a lightweight example for prototype flows.
        </p>

        <form style={styles.form} onSubmit={(event) => event.preventDefault()}>
          <label>
            <input style={styles.input} type="email" placeholder="Email address" aria-label="Email address" />
          </label>
          <label>
            <input style={styles.input} type="password" placeholder="Password" aria-label="Password" />
          </label>
          <button type="submit" style={styles.button}>
            Sign in
          </button>
        </form>

        <div style={styles.footer}>
          <Link to="/" style={styles.link}>
            Back to home
          </Link>
          <Link to="/dashboard" style={styles.link}>
            View dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
