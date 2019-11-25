import React from 'react';
import './App.css';
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import TypingSentence from './components/TypingSentence';


function App() {
  return (
    <div className="App">
      <Header />
      <TypingSentence />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
