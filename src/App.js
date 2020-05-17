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
				<div class="d-flex flex-column h-100 bg-dark">
					<header>
						<nav class="navbar navbar-expand-lg navbar-dark">
						<a class="navbar-brand" href="#">OldMan Bot</a>
						<button class="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div id="my-nav" class="collapse navbar-collapse">
							<ul class="navbar-nav mr-auto">
								<li class="nav-item ">
									<a class="nav-link active" href="/"><i class="fas fa-home"></i>  Home<span class="sr-only"></span></a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="https://github.com/AmrikSD/OldManBot/commits/master"><i class="fas fa-copy"></i>  Changelog<span class="sr-only"></span></a>
								</li>
								<li class="nav-item ">
									<a class="nav-link" href="https://github.com/AmrikSD/OldManBot"><i class="fab fa-github"></i>  Github<span class="sr-only"></span></a>
								</li>
							</ul>
							<ul class="navbar-nav ml-auto">
								<li class="nav-item">
									<a class="btn btn-light" type="button"><i class="fas fa-arrow-circle-right"></i>  Sign In</a>
								</li>
							</ul>
						</div>
						</nav>
					</header>

					<br/>
					<Switch>
					<Route path="/" exact component={Index} />
					<Route path="/BannedWords" exact component={BannedList} />
					<Route path="/BannedWords/Edit/:id" component={EditWord} />
					<Route path="/BannedWords/Create" component={CreateWord} />
					</Switch>
			</div>
			
			  <footer class="footer mt-auto py-3">
    <div class="container-fluid text-right align-middle">
      <a href="#"><i style={{color: "white"}} class="fab fa-twitter px-1"></i></a>
      <a href="#"><i style={{color: "white"}} class="fab fa-discord px-1"></i></a>
      <a href="#"><i style={{color: "white"}} class="fab fa-github px-1"></i></a>
    </div>
  </footer>


			</Router>
		)
	}
}

export default App;
