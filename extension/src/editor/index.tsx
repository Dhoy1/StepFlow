import React from 'react';
import ReactDOM from 'react-dom/client';
import { Editor } from './Editor';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Editor />
    </React.StrictMode>
  );
}

