import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import DebugApp from './DebugApp';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DebugApp />
  </StrictMode>
);
