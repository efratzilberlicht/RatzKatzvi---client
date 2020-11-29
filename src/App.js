import React from 'react';
import { Switch, Route ,BrowserRouter as Router} from 'react-router-dom';
import Header from './components/global/Header/Header';
import HomePage from './pages/HomePage/HopePage';
import About from './pages/About/About';
import AdvancedSearch from './pages/AdvancedSearch/AdvancedSearch';
import Books from './pages/Books/Books';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header />
      <Router>
      <Switch>
        
        <Route path="/About" component={About} />
        <Route path="/AdvancedSearch" component={AdvancedSearch} />
        <Route path="/Books" component={Books} />
        {/*<Route path="/" component={} />
        <Route path="/" component={} />
        <Route path="/" component={} />
        <Route path="/" component={} />
        <Route path="/" component={} /> */}
        <Route path="/" component={HomePage} />
     </Switch>
     </Router>
    </div>
  );
}

export default App;
