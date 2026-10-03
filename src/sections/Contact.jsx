import { profile } from '../data/profile.js';
import { socials } from '../data/socials.js';
import Icon from '../components/ui/Icon.jsx';
import styles from './ProfileSections.module.css';

export default function Contact() {
  return <section id="contact" tabIndex={-1} className={styles.contact} aria-labelledby="contact-title"><div className={`container ${styles.contactInner}`}><div><p className="eyebrow"><span>05 /</span> Let’s connect</p><h2 id="contact-title">Good things start<br />with <em>a conversation.</em></h2><p className={styles.contactIntro}>{profile.contactIntro}</p><a className={styles.email} href={`mailto:${profile.email}`}>{profile.email}<Icon name="diagonal" /></a></div><div className={styles.contactAside}><span className={styles.contactMark} aria-hidden="true">↗</span><p>FIND ME ELSEWHERE</p><div>{socials.map(social => <a href={social.href} key={social.id} target="_blank" rel="noreferrer">{social.label}<Icon /></a>)}</div><p>TAKE MY RÉSUMÉ WITH YOU</p><div>{profile.resumes.map(resume => <a key={resume.href} href={resume.href} target="_blank" rel="noreferrer">{resume.label}<Icon name="down" /></a>)}</div></div></div></section>;
}
