import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';
import Cal from "./pages/home/components/calendar"
import { Route, Routes, HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Calendar/" element={<Cal/>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

