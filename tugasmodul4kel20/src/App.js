import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

import Produk from "./tugas1/Produk";


function App() {


  return (
    <Router>
    <div className="App-header">
      <nav className="NavBar">
        <ul className="ul">
          <li className="li">
            <Link to="/">Tugas Modul 4 Kel 20 </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Produk} />
      </Switch>


    </div>

  </Router>
  );
}

export default App;