import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Index extends Component {
    
	render() {
		
		return (
		<main role="main" class="flex-shrink-0">

    <div class="bg-light p-5">
      <div class="container text-center text-dark p-5">
        <div class="p-5">
      <h1 class="display-4">Welcome to OldMan Bot <small class=" text-muted">v.1.3</small></h1>
      <hr class="my-4" />
      <div class="btn-group">
        <a href="dashboard.html" type="button" class="btn btn-outline-dark btn-lg">
          <i class="fab fa-discord"></i>     Add to Discord!</a>
      </div>
    </div>
    </div>
    </div>

    <div class="p-5">
      <div class="container text-center text-light">
        <div>
          <h1 class="display-4">Custom Auto-Mod Feature</h1>
          <p>Set up OldMan bot’s Automated Actions to moderate your Discord Server! No need for any more manual warnings or punishments, just let OldMan Bot handle it for you!</p>
        </div>
        <div class="p-2">
          <img class="img-fluid rounded-lg" style={{width:"33em"}} src="https://i.imgur.com/UnR7xsa.png"></img>
        </div>
        <br />
      </div>
    </div>

    <div class="bg-light p-5">
      <div class="container text-center text-dark">
        <div>
          <h1 class="display-4">Weather Updates</h1>
          <p>Want to check the weather? With the !we/weather command OldMan bot can provide various information on the weather of any desired location!</p>
        </div>
        <div class="p-2">
          <img class="img-fluid rounded-lg" src="https://i.imgur.com/J0MxZbY.png"></img>
        </div>
        <br />
      </div>
    </div>


  </main>
		)
	    }
}
