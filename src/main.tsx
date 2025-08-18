import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.tsx';
import Layout from './components/Layout.tsx';
import './index.css';
import Organization from './pages/Organization.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/organizacao" element={<Organization />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

