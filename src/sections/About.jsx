import { profile } from '../data/profile.js';
import Icon from '../components/ui/Icon.jsx';
import styles from './ProfileSections.module.css';

export default function About() {
  return <section id="about" tabIndex={-1} className={styles.aboutSection} aria-labelledby="about-title"><div className={`container section ${styles.aboutGrid}`}><div><p className="eyebrow"><span>02 /</span> The person behind the code</p><h2 id="about-title">{profile.about.title}</h2><div className={styles.aboutNote}><span className={styles.smallMonogram}>{profile.initials}.</span><div>{profile.fullName}<span>{profile.location}</span></div></div></div><div className={styles.aboutCopy}>{profile.about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<a className="text-link" href={profile.resumes[0].href} target="_blank" rel="noreferrer">A little more about me <Icon /></a></div></div></section>;
}
