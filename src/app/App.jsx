import { Routes, Route } from 'react-router';
import SiteLayout from '../components/layout/SiteLayout.jsx';
import HomePage from '../pages/HomePage.jsx';
import ProjectPage from '../pages/ProjectPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import RouteEffects from './RouteEffects.jsx';

export default function App() {
  return <><RouteEffects /><Routes><Route element={<SiteLayout />}><Route index element={<HomePage />} /><Route path="projects/:slug" element={<ProjectPage />} /><Route path="*" element={<NotFoundPage />} /></Route></Routes></>;
}
