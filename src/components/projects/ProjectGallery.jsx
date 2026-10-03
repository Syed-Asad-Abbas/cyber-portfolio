import { useEffect, useRef, useState } from 'react';
import ProjectImage from '../ui/ProjectImage.jsx';
import Icon from '../ui/Icon.jsx';
import styles from '../../pages/ProjectPage.module.css';

export default function ProjectGallery({ images = [] }) {
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  useEffect(() => {
    if (selected !== null) dialog.current?.showModal();
  }, [selected]);
  if (!images.length) return null;
  const close = () => dialog.current?.close();
  return <>
    <div className={styles.gallery}>{images.map((image, index) => <figure key={image.src}><button type="button" className={styles.imageButton} onClick={() => setSelected(index)} aria-label={`Enlarge screenshot: ${image.alt}`}><ProjectImage image={image} /><span>View full image <Icon name="diagonal" /></span></button>{image.caption && <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{image.caption}</figcaption>}</figure>)}</div>
    <dialog ref={dialog} className={styles.lightbox} aria-label="Project screenshot" onClose={() => setSelected(null)} onClick={event => { if (event.target === dialog.current) close(); }}>
      <div className={styles.lightboxBar}><span>{selected !== null ? `${selected + 1} / ${images.length}` : ''}</span><button type="button" autoFocus onClick={close}>Close <Icon name="close" /></button></div>
      {selected !== null && <div className={styles.lightboxContent}><ProjectImage key={images[selected].src} image={images[selected]} eager /><p>{images[selected].caption}</p><div className={styles.lightboxNav}><button type="button" disabled={selected === 0} onClick={() => setSelected(index => index - 1)}>Previous image</button><button type="button" disabled={selected === images.length - 1} onClick={() => setSelected(index => index + 1)}>Next image</button></div></div>}
    </dialog>
  </>;
}
