import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App