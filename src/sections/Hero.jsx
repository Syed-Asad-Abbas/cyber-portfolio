import { profile } from '../data/profile.js';
import { socials } from '../data/socials.js';
import Icon from '../components/ui/Icon.jsx';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`container ${styles.hero}`} aria-labelledby="hero-title">
      <div className={styles.topline}>
        <p className="eyebrow">
          <span className={styles.dot} /> {profile.role}
        </p>
        <span className={styles.location}>
          {profile.location} <span aria-hidden="true">↗</span>
        </span>
      </div>
      <div className={styles.heroGrid}>
        <div className={styles.copy}>
          <h1 id="hero-title">
            {profile.headline[0]}
            <br />
            <em>{profile.headline[1]}</em>
          </h1>
          <p className={styles.intro}>{profile.intro}</p>
          <div className={styles.actions}>
            <a className="button" href="#projects">
              Explore my work <Icon name="arrow" />
            </a>
            <a className="button button-secondary" href="#contact">
              Let’s talk <Icon name="diagonal" />
            </a>
          </div>
        </div>
        <figure className={styles.portrait}>
          <div className={styles.portraitFrame}>
            <img
              src="/images/portrait.webp"
              width="800"
              height="800"
              alt="Asad Abbas in a navy blazer"
              fetchPriority="high"
            />
            <span className={styles.portraitMark} aria-hidden="true">
              A<span>↗</span>
            </span>
          </div>
          <figcaption>
            <span>
              A little design instinct.
              <br />A lot of engineering curiosity.
            </span>
            <span className={styles.signature}>{profile.name}</span>
          </figcaption>
        </figure>
      </div>
      <div className={styles.bottom}>
        <span className={styles.specialties}>
          SHOPIFY <i>/</i> REACT <i>/</i> FULL-STACK
        </span>
        <div className={styles.socials}>
          {socials.map((social) => (
            <a key={social.id} href={social.href} target="_blank" rel="noreferrer">
              {social.label} <Icon />
            </a>
          ))}
        </div>
        <a className={styles.scroll} href="#projects">
          Scroll to explore <Icon name="down" />
        </a>
      </div>
    </section>
  );
}
