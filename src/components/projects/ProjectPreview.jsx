import { Link } from 'react-router';
import ProjectImage from '../ui/ProjectImage.jsx';
import Icon from '../ui/Icon.jsx';
import styles from './Projects.module.css';

export default function ProjectPreview({ project, index }) {
  const hasCaseStudy = project.caseStudy && Object.values(project.caseStudy).some(value => Array.isArray(value) ? value.length : Boolean(value?.trim?.()));
  return <article className={`${styles.card} ${project.featured ? styles.featured : ''} ${project.theme === 'ink' ? styles.wide : ''}`}>
    <div className={`${styles.visual} ${styles[project.theme] || ''}`}><div className={styles.visualLabel}><span>{String(index + 1).padStart(2, '0')} / SELECTED WORK</span>{project.featured && <span>FEATURED</span>}</div>{hasCaseStudy ? <Link to={`/projects/${project.slug}`} aria-label={`Explore ${project.title}`} tabIndex={-1}><ProjectImage image={project.thumbnail} /></Link> : <ProjectImage image={project.thumbnail} />}</div>
    <div className={styles.cardBody}><p className={styles.category}>{project.category}</p><h3>{hasCaseStudy ? <Link to={`/projects/${project.slug}`}>{project.title}<Icon /></Link> : project.title}</h3><p className={styles.tagline}>{project.shortDescription}</p><p className={styles.engineering}>{project.engineering}</p><ul className="tags">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>{hasCaseStudy && <Link className={styles.caseLink} to={`/projects/${project.slug}`}>View case study <Icon name="arrow" /></Link>}{(project.githubUrl || project.liveUrl) && <div className={styles.externalLinks}>{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <Icon /></a>}{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <Icon /></a>}</div>}</div>
  </article>;
}
