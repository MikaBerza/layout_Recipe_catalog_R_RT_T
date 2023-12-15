import React from 'react';

import Header  from './components/commons/Header/Header';
import { HomePage } from './components/pages/index';
import Footer from './components/commons/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
