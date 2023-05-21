import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import HomePage from './Components/Home';
import './App.css';

function App() {
  return (
    
      <Router>
        <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<HomePage/>} exact />
        </Routes>
        </div>
      </Router>
    
  );
}

export default App;
