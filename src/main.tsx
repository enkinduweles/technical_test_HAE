import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.tsx';
import { CustomProviders } from './provider/CustomProviders.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/:genre?" element={<App />} />
        </Routes>
      </BrowserRouter>
    </CustomProviders>
  </StrictMode>
);
