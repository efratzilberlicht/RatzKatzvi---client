import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/global/Header/Header";
import HomePage from "./pages/HomePage/HopePage";
import About from "./pages/About/About";
import AdvancedSearch from "./pages/AdvancedSearch/AdvancedSearch";
import Books from "./pages/Books/Books";
import BooksStore from "./pages/BooksStore/BooksStore";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as actions from "./actions";

function App() {

  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.init.request());
  }, [])
// <<<<<<< HEAD=======
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(actions.init.request());
  // }, []);
// >>>>>>> bf458d2926ff7e6796d71fb1240572ee65814f8e

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/About" component={About} />
          <Route path="/AdvancedSearch" component={AdvancedSearch} />
          <Route path="/Books" component={Books} />
          <Route path="/BooksStore" component={BooksStore} />
          {/*<Route path="/" component={} />
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
