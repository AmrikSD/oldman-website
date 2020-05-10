import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateWord from "./components/CreateWord.component";
import EditWord from "./components/EditWord.component";
import BannedList from "./components/BannedWordsList.component";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="amrik.de" target="_blank">
              <img src={logo} width="30" height="30" alt="Amrik.de" />
            </a>
            <Link to="/" className="navbar-brand">OldMan Website</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">View Moderated words</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Add Moderated Word</Link>

                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={BannedList} />
          <Route path="/edit/:id" component={EditWord} />
          <Route path="/create" component={CreateWord} />
        </div>
      </Router>
    );
  }
}

export default App;
