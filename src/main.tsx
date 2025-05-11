import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.tsx';
import { DrawerContextProvider } from './context/Drawer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DrawerContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/:genre?" element={<App />} />
        </Routes>
      </BrowserRouter>
    </DrawerContextProvider>
  </StrictMode>
);
