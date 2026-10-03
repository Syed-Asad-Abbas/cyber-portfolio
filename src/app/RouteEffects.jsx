import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router';
import { updateMetadata } from '../lib/metadata.js';

export default function RouteEffects() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const previous = useRef(null);
  useEffect(() => {
    updateMetadata(location.pathname);
    const frame = requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (target) { target.scrollIntoView({ behavior: 'instant' }); target.focus({ preventScroll: true }); }
      } else if (previous.current !== null) {
        document.getElementById('main')?.focus({ preventScroll: true });
        if (navigationType !== 'POP') window.scrollTo({ top: 0, behavior: 'instant' });
      }
      previous.current = location.pathname;
    });
    return () => cancelAnimationFrame(frame);
  }, [location, navigationType]);
  return null;
}
