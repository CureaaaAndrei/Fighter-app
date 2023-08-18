import React from 'react';
import BasicTable from './components/table/Table'
import Login from './components/login/Login';
import MuiCard from './components/card/Card';
import Card from './components/card/Card';
import About from './components/about-page/About';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicTable />} />
      <Route path="/table" element={<BasicTable />} />
      <Route path="/login" element={<Login />} />
      <Route path="/card" element={<MuiCard />} />
      <Route path="/card-second" element={<Card />} />
      <Route path="/about" element={<About />} />
  </Routes>
  );
}

export default App;
