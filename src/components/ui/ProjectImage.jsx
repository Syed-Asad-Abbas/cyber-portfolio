import { useState } from 'react';
import styles from './Ui.module.css';
export default function ProjectImage({ image, eager = false, className = '' }) {
  const [failed, setFailed] = useState(false);
  if (!image?.src || failed)
    return (
      <div className={`${styles.imageFallback} ${className}`}>
        <span>Behind the build</span>
        <p>An engineering case study</p>
      </div>
    );
  return (
    <img
      className={className}
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
