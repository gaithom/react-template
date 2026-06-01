import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import heroImg from '../assets/hero.png';

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: '100vh',
    width: '100%',
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    background: 'linear-gradient(180deg, rgba(239,219,188,1), rgba(211,84,0,0.08))',
  },
  hero: {
    width: '100%',
    maxWidth: '1440px',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    alignItems: 'center',
    gap: '60px',
    padding: '64px 48px',
    boxSizing: 'border-box',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '24px',
  },
  badge: {
    display: 'inline-flex',
    textTransform: 'uppercase',
    letterSpacing: '0.22em',
    fontSize: '0.75rem',
    fontWeight: 700,
    color: 'var(--accent)',
    marginBottom: '14px',
  },
  heading: {
    margin: 0,
    fontSize: 'clamp(3rem, 6vw, 4.5rem)',
    lineHeight: 1.02,
    maxWidth: '12ch',
    color: 'var(--text-h)',
  },
  paragraph: {
    margin: 0,
    color: 'var(--text)',
    fontSize: '1.05rem',
    lineHeight: 1.8,
    maxWidth: '40rem',
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '14px',
  },
  button: {
    minWidth: '170px',
    padding: '16px 24px',
    borderRadius: '999px',
    fontWeight: 700,
    border: 'none',
    textDecoration: 'none',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  primary: {
    background: 'var(--accent)',
    color: '#fff',
  },
  secondary: {
    background: 'transparent',
    border: '1px solid var(--border)',
    color: 'var(--text-h)',
  },
  imageFrame: {
    width: '100%',
    minHeight: '520px',
    borderRadius: '32px',
    overflow: 'hidden',
    boxShadow: '0 40px 120px rgba(15, 23, 42, 0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(230,211,188,0.96)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    display: 'block',
  },
  mobileHero: {
    display: 'none',
  },
};

export default function Home() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.content}>
          <span style={styles.badge}>Welcome</span>
          <h1 style={styles.heading}>A polished starting page for your React app</h1>
          <p style={styles.paragraph}>
            This home page is styled with a full-screen hero section and an image to make the landing feel complete and modern.
          </p>
          <div style={styles.actions}>
            <Link to="/dashboard" style={{ ...styles.button, ...styles.primary }}>
              Open Dashboard
            </Link>
            <Link to="/login" style={{ ...styles.button, ...styles.secondary }}>
              Go to Login
            </Link>
          </div>
        </div>
        <div style={styles.imageFrame}>
          <img src={heroImg} alt="Hero visual" style={styles.image} />
        </div>
      </section>
    </main>
  );
}
