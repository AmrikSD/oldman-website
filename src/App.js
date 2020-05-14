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
									<a class="nav-link active" href="/">Home<span class="sr-only"></span></a>
								</li>
								<li class="nav-item">
									<a class="nav-link active" href="/BannedWords">Banned Words<span class="sr-only"></span></a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="https://github.com/AmrikSD/OldManBot/commits/master">Changelog<span class="sr-only"></span></a>
								</li>
								<li class="nav-item ">
									<a class="nav-link" href="https://github.com/AmrikSD/OldManBot">Github<span class="sr-only"></span></a>
								</li>
							</ul>
							<ul class="navbar-nav ml-auto">
								<li class="nav-item">
									<a href="dashboard.html" class="btn btn-light" type="button">Sign In</a>
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
				  <footer class="footer mt-auto py-3 border-top" style={{left:"0",bottom:"0",position:"fixed", width:"100%"}}>
    <div class="container-fluid text-right">
      <a href="#"><img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsonicrunway.herokuapp.com%2Fimg%2Ficons%2Ftwitter-logo-white-transparent.png&f=1&nofb=1"
          style={{width: "20px", height:"auto"}}/></a>
      <a href="#"><img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bacterialtakeover.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fdiscord-icon-white.png&f=1&nofb=1"
          style={{width: "20px", height:"auto"}}/></a>
      <a href="#"><img src="https://www.iconsdb.com/icons/preview/white/github-11-xxl.png"
          style={{width: "20px", height:"auto"}}/></a>
    </div>
  </footer>
			</Router>
		)
	}
}

export default App;
