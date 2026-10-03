import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './app/App.jsx';
import './styles/global.css';

const root = document.getElementById('root');
const application = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
const normalizePath = (path) => path.replace(/\/$/, '') || '/';
const prerenderedPath = document.querySelector('meta[name="prerendered-path"]')?.content;
if (
  root.firstElementChild &&
  prerenderedPath &&
  normalizePath(prerenderedPath) === normalizePath(window.location.pathname)
)
  hydrateRoot(root, application);
else createRoot(root).render(application);
