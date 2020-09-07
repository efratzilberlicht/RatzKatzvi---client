import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shiur from './components/Shiur/Shiur';
import Manager from './components/Manager/Manager';
import Book from './components/Book/Book';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage/HopePage';

function App() {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
