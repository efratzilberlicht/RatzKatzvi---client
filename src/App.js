import React from 'react';
import { Switch, Route ,BrowserRouter as Router} from 'react-router-dom';
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
      
      <Router>
      <Switch>
        <Route path="/About" component={About} />
        <Route path="/" component={HomePage} />
         {/* <Route exact path="/AdvancedSearch" component={AdvancedSearch} />
        <Route path="/AdvancedSearch" component={AdvancedSearch} />
        <Route path="/" component={} />
        <Route path="/" component={} />
        <Route path="/" component={} />
        <Route path="/" component={} />
        <Route path="/" component={} />
        <Route path="/" component={} /> */}
     </Switch>
     </Router>
    </div>
  );
}

export default App;
