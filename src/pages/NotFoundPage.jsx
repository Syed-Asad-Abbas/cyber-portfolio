import { Link } from 'react-router';
import Icon from '../components/ui/Icon.jsx';
import styles from './ProjectPage.module.css';
export default function NotFoundPage() {
  return (
    <div className={`container ${styles.notFound}`}>
      <p className="eyebrow">404 / A small detour</p>
      <h1>
        This page isn’t
        <br />
        part of the build.
      </h1>
      <p>The link may have changed. There’s more work to explore back at the portfolio.</p>
      <Link className="button" to="/#projects">
        Explore selected work <Icon name="arrow" />
      </Link>
    </div>
  );
}
