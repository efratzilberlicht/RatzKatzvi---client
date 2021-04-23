import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/global/Header/Header";
import HomePage from "./pages/HomePage/HopePage";
import About from "./pages/About/About";
import AdvancedSearch from "./pages/AdvancedSearch/AdvancedSearch";
import Books from "./pages/Books/Books";
import MachshavaArticals from "./pages/Shiurim/MachshavaArticals";
import HalachShiurim from "./pages/Shiurim/HalachShiurim";
import LiveBroadcast from "./pages/LiveBroadcast/LiveBroadcast";
import VideoLibrary from "./pages/VideoLibrary/VideoLibrary";
import BooksStore from "./pages/BooksStore/BooksStore";
import Contact from "./pages/Contact/Contact";
import Subjects from "./pages/Subjects/Subjects";
import ShiurimBySubject from "./pages/Shiurim/ShiurimBySubject";
import Manager from "./components/Manager/Manager"
import SignUp from "./components/SignIn/SignUp"
import LogIn from "./components/SignIn/LogIn"
import Loginy from "./components/SignIn/Loginy"
import Signupy from "./components/SignIn/Signupy"
import upload from "./components/global/upload"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as actions from "./actions";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.init.request());
  }, [])
    
  return (
    <div>
      
      <Router>
        <Header />
        <Switch>
          <Route path="/About" component={About} />
          <Route path="/AdvancedSearch" component={AdvancedSearch} />
          <Route path="/Books" component={Books} />
          <Route path="/HalachShiurim" component={HalachShiurim} />
          <Route path="/LiveBroadcast" component={LiveBroadcast} />
          <Route path="/VideoLibrary" component={VideoLibrary} />
          <Route path="/BooksStore" component={BooksStore} />
          <Route path="/MachshavaArticals" component={MachshavaArticals} /> 
          <Route path="/Contact" component={Contact} />
          <Route path="/Subjects/:SubjectId/:Subject" component={Subjects} />
          <Route path="/ShiurimBySubject" component={ShiurimBySubject} />
          <Route path="/Manager" component={Manager} />
          <Route path="/uplod" component={upload} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/LogIny" component={Loginy} />
          <Route path="/Signupy" component={Signupy} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/" component={HomePage} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
