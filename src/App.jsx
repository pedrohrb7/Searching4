import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Routes from "./Routes";
//import Header from "./components/Header";
//import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
