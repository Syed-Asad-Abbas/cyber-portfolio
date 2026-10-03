import { skillCategories } from '../data/skills.js';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Icon from '../components/ui/Icon.jsx';
import styles from './ProfileSections.module.css';

export default function Skills() {
  return <section id="skills" tabIndex={-1} className="container section" aria-labelledby="skills-title"><SectionHeading number="03" label="What I work with" title="The right tools. Used well." id="skills-title"><p>A toolkit shaped by storefronts, web applications, and the problems behind them.</p></SectionHeading><div className={styles.skillGrid}>{skillCategories.map((category, index) => <article key={category.id} className={styles.skill}><div className={styles.skillTop}><Icon name={category.icon} /><span>0{index + 1}</span></div><h3>{category.label}</h3><p>{category.description}</p><ul className="tags">{category.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div></section>;
}
