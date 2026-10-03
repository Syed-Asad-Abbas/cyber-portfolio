import { useState } from 'react';
import { getPublishedProjects } from '../lib/projects.js';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import ProjectPreview from '../components/projects/ProjectPreview.jsx';
import styles from '../components/projects/Projects.module.css';

const filters = [{ id: 'all', label: 'All work' }, { id: 'shopify', label: 'Shopify' }, { id: 'full-stack', label: 'Full-stack' }];
export default function SelectedProjects() {
  const [filter, setFilter] = useState('all');
  const projects = getPublishedProjects();
  const shown = projects.filter(p => filter === 'all' || (filter === 'shopify' ? p.category.toLowerCase().includes('shopify') : p.category.toLowerCase().includes('full-stack')));
  return <section id="projects" tabIndex={-1} className="container section" aria-labelledby="projects-title"><SectionHeading number="01" label="Selected work" title="Less talk. More built." id="projects-title"><p>A closer look at the storefronts, interactions, and systems I’ve brought to life.</p></SectionHeading><div className={styles.filterBar}><div className={styles.filters} role="group" aria-label="Filter projects">{filters.map(item => <button key={item.id} type="button" aria-pressed={filter === item.id} onClick={() => setFilter(item.id)} className={filter === item.id ? styles.active : ''}>{item.label}{item.id === 'all' && <span>{projects.length.toString().padStart(2, '0')}</span>}</button>)}</div><span className={styles.projectCount} role="status">{shown.length} projects</span></div><div className={styles.grid}>{shown.map(project => <ProjectPreview key={project.id} project={project} index={projects.indexOf(project)} />)}</div></section>;
}
