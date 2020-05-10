import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import CreateWord from "./components/CreateWord.component";
import EditWord from "./components/EditWord.component";
import BannedList from "./components/BannedWordsList.component";



//import logo from "./logo.png";

//<a class="navbar-brand" href="amrik.de" target="_blank">
//	<img src={logo} width="30" height="30"/>
//</a>


class App extends Component {

	render() {

		
		return (
			<Router>
				<div className="container">
				
					<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
					
										
					<Link to="/" className="navbar-brand">OldMan Bot</Link>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					
					

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="navbar-item">
								<Link to="/BannedWords" className="nav-link">View Words</Link>
							</li>
							<li className="navbar-item">
								<Link to="/BannedWords/Create" className="nav-link">Ban Word</Link>
							</li>
						</ul>
					</div>
					</nav>
					<br/>
					<Route path="/BannedWords" exact component={BannedList} />
					<Route path="/BannedWords/Edit/:id" component={EditWord} />
					<Route path="/BannedWords/Create" component={CreateWord} />
				</div>
			</Router>
		)
	}
}

export default App;
