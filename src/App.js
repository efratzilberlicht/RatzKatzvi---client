import React from 'react';
//import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HopePage';
import About from './components/About/About';
import Shiur from './components/Shiur/Shiur';
import Manager from './components/Manager/Manager';
import Book from './components/Book/Book';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header />
      <HomePage />
      {/* <About /> */}
      {/* <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/About" component={About} /> */}
        {/* <Route exact path="/AdvancedSearch" component={AdvancedSearch} />
        <Route path="/AdvancedSearch" component={AdvancedSearch} />
        <Route path="/" component={} />
        <Route path="/" component={} />
        <Route path="/" component={} />
        <Route path="/" component={} />
        <Route path="/" component={} />
        <Route path="/" component={} /> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
