import React from 'react';
import './App.css';
import Header from './pages/header/Header';
import About from './pages/about/About';
import Footer from './pages/footer/Footer';
import Home from './pages/home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
