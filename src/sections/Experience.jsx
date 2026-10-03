import { experience } from '../data/experience.js';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import styles from './ProfileSections.module.css';

export default function Experience() {
  if (!experience.length) return null;
  return <section className={`container section ${styles.experience}`} aria-labelledby="experience-title"><SectionHeading number="04" label="Along the way" title="Learning. Building. Growing." id="experience-title" /><div>{experience.map(item => <article key={item.id} className={styles.experienceRow}><p className={styles.period}>{item.period}</p><div><h3>{item.title}</h3><p className={styles.organization}>{item.organization}<span>{item.location}</span></p></div><p className={styles.experienceDescription}>{item.description}</p></article>)}</div></section>;
}
