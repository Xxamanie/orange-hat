import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// FIX: The code block that was here was removed because it used `require` and the `fs` module,
// which are part of Node.js and not available in the browser. This caused the application to crash.
// The `index.css` file should be present in the project's source directory.
