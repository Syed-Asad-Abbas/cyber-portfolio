import { Link, useParams } from 'react-router';
import { findProject, getProjectNeighbors } from '../lib/projects.js';
import ProjectImage from '../components/ui/ProjectImage.jsx';
import ProjectGallery from '../components/projects/ProjectGallery.jsx';
import Icon from '../components/ui/Icon.jsx';
import { profile } from '../data/profile.js';
import NotFoundPage from './NotFoundPage.jsx';
import styles from './ProjectPage.module.css';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = findProject(slug);
  if (!project) return <NotFoundPage />;
  const { previous, next } = getProjectNeighbors(slug);
  const study = project.caseStudy;
  const textSections = [
    { key: 'overview', title: 'The overview' },
    { key: 'problem', title: 'The problem' },
    { key: 'challenges', title: 'Challenges' },
    { key: 'solution', title: 'The solution' },
    { key: 'lessons', title: 'Lessons learned' },
  ];
  return (
    <article className={styles.page}>
      <div className={`container ${styles.intro}`}>
        <Link to="/#projects" className={styles.back}>
          <span aria-hidden="true">←</span> Back to selected work
        </Link>
        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p className={styles.lead}>{project.description}</p>
        <div className={styles.meta}>
          <div>
            <span>MY CONTRIBUTION</span>
            <p>{project.role}</p>
          </div>
          {project.duration && (
            <div>
              <span>TIMELINE</span>
              <p>{project.duration}</p>
            </div>
          )}
          <div>
            <span>BUILT WITH</span>
            <ul className="tags">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
          <div>
            <span>PROJECT TYPE</span>
            <p>{project.status}</p>
          </div>
        </div>
        {(project.githubUrl || project.liveUrl) && (
          <div className={styles.externalLinks}>
            {project.liveUrl && (
              <a className="button" href={project.liveUrl} target="_blank" rel="noreferrer">
                Visit live project <Icon />
              </a>
            )}
            {project.githubUrl && (
              <a
                className="button button-secondary"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                View source <Icon />
              </a>
            )}
          </div>
        )}
      </div>
      <div className={`container ${styles.cover}`}>
        <ProjectImage key={project.id} image={project.thumbnail} eager />
      </div>
      <div className={`container ${styles.story}`}>
        <aside className={styles.storyAside}>
          <p className="eyebrow">Behind the build</p>
          <p>{project.shortDescription}</p>
          {project.images?.length > 0 && (
            <a href="#project-images" className="text-link">
              See the interface <Icon name="down" />
            </a>
          )}
        </aside>
        <div className={styles.storyContent}>
          {textSections
            .filter((section) => study[section.key]?.trim())
            .map((section) => (
              <section key={section.key}>
                <h2>{section.title}</h2>
                <p>{study[section.key]}</p>
              </section>
            ))}
          {study.objectives?.length > 0 && (
            <section>
              <h2>The objectives</h2>
              <ul className={styles.list}>
                {study.objectives.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}
          {study.implementation?.length > 0 && (
            <section>
              <h2>How it comes together</h2>
              <div className={styles.decisions}>
                {study.implementation.map((item, index) => (
                  <div key={item.title}>
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          {study.technicalDecisions?.length > 0 && (
            <section>
              <h2>Technical decisions</h2>
              <ul className={styles.list}>
                {study.technicalDecisions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}
          {study.results?.length > 0 && (
            <section className={styles.results}>
              <p className="eyebrow">The outcome</p>
              <h2>What the work delivers</h2>
              <ul className={styles.list}>
                {study.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
      {project.images?.length > 0 && (
        <section id="project-images" className={`container ${styles.screenshots}`}>
          <p className="eyebrow">A closer look</p>
          <h2>The interface in action.</h2>
          <ProjectGallery key={project.id} images={project.images} />
        </section>
      )}
      <div className={styles.projectContact}>
        <div className="container">
          <p>Have something similar in mind?</p>
          <a href={`mailto:${profile.email}`} className="text-link">
            Let’s build it together <Icon />
          </a>
        </div>
      </div>
      <nav className={`container ${styles.projectNav}`} aria-label="Project navigation">
        <div>
          {previous && (
            <Link to={`/projects/${previous.slug}`}>
              <span>← PREVIOUS PROJECT</span>
              <strong>{previous.title}</strong>
            </Link>
          )}
        </div>
        <Link to="/#projects" className={styles.allWork}>
          All work
        </Link>
        <div>
          {next && (
            <Link to={`/projects/${next.slug}`}>
              <span>NEXT PROJECT →</span>
              <strong>{next.title}</strong>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
