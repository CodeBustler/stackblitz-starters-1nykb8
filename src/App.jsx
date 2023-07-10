import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

import './style.css';

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}
