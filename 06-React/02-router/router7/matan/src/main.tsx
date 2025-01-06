import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import  Home  from './view/components/Home';
import  Dashboard  from './view/components/Dashboard';
import  CatList  from './view/components/CatList';
import  DogList  from './view/components/DogList';
import  CatDetails  from './view/components/CatDetails';
import  DogDetails  from './view/components/DogDetails';







ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="cats" element={<CatList />} />
          <Route path="dogs" element={<DogList />} />
          <Route path="cat/:id" element={<CatDetails />} />
          <Route path="dog/:id" element={<DogDetails />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);