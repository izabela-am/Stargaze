import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Photo from './components/Photo'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Route component={Photo} path='/'/>
      </div>
    </BrowserRouter>
  );
}

export default App;
