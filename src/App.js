import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import CreateWord from "./components/CreateWord.component";
import EditWord from "./components/EditWord.component";
import BannedList from "./components/BannedWordsList.component";
import Index from "./components/Index.component";

//import logo from "./logo.png";

//<a class="navbar-brand" href="amrik.de" target="_blank">
//	<img src={logo} width="30" height="30"/>
//</a>

class App extends Component {
	render() {
		return (
			<Router>
				<header>
					<nav className="navbar navbar-expand-lg navbar-dark">
						<Link to={"/"} className="navbar-brand">OldMan Bot</Link>
						<button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div id="my-nav" className="collapse navbar-collapse">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item ">
									<Link to={"/"} className="nav-link"><i className="fas fa-home"></i> Home<span className="sr-only"></span></Link>
								</li>
								<li className="nav-item ">
									<Link to={"/BannedWords"} className="nav-link"><i className="fas fa-hammer"></i> Dashboard<span className="sr-only"></span></Link>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="https://github.com/AmrikSD/OldManBot/commits/master"><i className="fas fa-copy"></i> Changelog<span className="sr-only"></span></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="https://github.com/AmrikSD/OldManBot"><i className="fab fa-github"></i> Github<span className="sr-only"></span></a>
								</li>
							</ul>
						</div>
					</nav>
				</header>
				<Switch>
					<Route path="/" exact component={Index} />
					<Route path="/BannedWords" exact component={BannedList} />
					<Route path="/BannedWords/Edit/:id" component={EditWord} />
					<Route path="/BannedWords/Create" component={CreateWord} />
				</Switch>

				<footer class="footer mt-auto py-3">
    				<div class="container-fluid text-right">
						<a href="https://github.com/AmrikSD" className="text-light text-decoration-none"><i style={{ color: "white" }} className="fab fa-github px-1"></i>AmrikSD</a>
					</div>
				</footer>
			</Router>
		)
	}
}

export default App;
