import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { LightboxProvider } from './context/LightboxContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LightboxProvider>
        <App />
      </LightboxProvider>
    </ThemeProvider>
  </StrictMode>
);
