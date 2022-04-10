import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
