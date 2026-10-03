import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { navigation } from '../../data/navigation.js';
import { profile } from '../../data/profile.js';
import { socials } from '../../data/socials.js';
import Icon from '../ui/Icon.jsx';
import styles from './SiteLayout.module.css';

export default function SiteLayout() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const header = useRef(null);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location]);
  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event) => {
      if (!header.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', outside);
    return () => {
      document.removeEventListener('keydown', close);
      document.removeEventListener('pointerdown', outside);
    };
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={styles.header} ref={header}>
        <div className={`container ${styles.headerInner}`}>
          <Link to="/" className={styles.identity} aria-label={`${profile.name}, home`}>
            <span className={styles.monogram}>
              {profile.initials}
              <span>.</span>
            </span>
            <span>{profile.name}</span>
          </Link>
          <button
            className={styles.menuToggle}
            ref={toggle}
            type="button"
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Close' : 'Menu'}
            <span aria-hidden="true">{open ? '−' : '+'}</span>
          </button>
          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={`${styles.nav} ${open ? styles.open : ''}`}
          >
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={`/#${item.id}`}
                onClick={() => setOpen(false)}
                className={location.hash === `#${item.id}` ? styles.current : ''}
              >
                {item.label}
              </Link>
            ))}
            <a
              className={styles.resume}
              href={profile.resumes[0].href}
              target="_blank"
              rel="noreferrer"
            >
              Résumé <Icon />
            </a>
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <div>
            <Link to="/" className={styles.footerName}>
              {profile.name}
              <span>.</span>
            </Link>
            <p>{profile.footerSummary}</p>
          </div>
          <div className={styles.footerLinks}>
            {socials.map((social) => (
              <a key={social.id} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
                <Icon />
              </a>
            ))}
            <a href="/#projects">
              Back to work <Icon name="arrow" />
            </a>
          </div>
        </div>
        <div className={`container ${styles.bottom}`}>
          <span>
            © {new Date().getFullYear()} {profile.fullName}
          </span>
          <span>Designed with intent. Built with React.</span>
        </div>
      </footer>
    </>
  );
}
