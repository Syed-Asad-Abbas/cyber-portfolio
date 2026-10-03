import styles from './Ui.module.css';
export default function SectionHeading({ number, label, title, children, id }) {
  return (
    <div className={styles.heading}>
      <div>
        <p className="eyebrow">
          <span>{number} /</span> {label}
        </p>
        <h2 id={id}>{title}</h2>
      </div>
      {children && <div className={styles.headingAside}>{children}</div>}
    </div>
  );
}
