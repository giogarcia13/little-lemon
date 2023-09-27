import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Nav/>
      <Main />
      <Menu/>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App