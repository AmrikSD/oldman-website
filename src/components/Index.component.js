import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Index extends Component {
    
	render() {
		
		return (
		<main role="main" className="flex-shrink-0">

    <div className="bg-light p-5">
      <div className="container text-center text-dark p-5">
        <div className="p-5">
      <h1 className="display-4">Welcome to OldMan Bot <small className=" text-muted">v.1.3</small></h1>
      <hr className="my-4" />
      <div className="btn-group">
        <Link to = {"/BannedWords"} type="button" className="btn btn-outline-dark btn-lg">
          <i className="fas fa-hammer"></i> Go to Dashboard!</Link>
      </div>
    </div>
    </div>
    </div>

    <div className="p-5">
      <div className="container text-center text-light">
        <div>
          <h1 className="display-4">Custom Auto-Mod Feature</h1>
          <p>Set up OldMan bot’s Automated Actions to moderate your Discord Server! No need for any more manual warnings or punishments, just let OldMan Bot handle it for you!</p>
        </div>
        <div className="p-2">
          <img className="img-fluid rounded-lg" style={{width:"37em"}} draggable="false" src="https://i.imgur.com/UnR7xsa.png"/>
        </div>
        <br />
      </div>
    </div>

    <div className="bg-light p-5">
      <div className="container text-center text-dark">
        <div>
          <h1 className="display-4">Weather Updates</h1>
          <p>Want to check the weather? With the !we/weather command OldMan bot can provide various information on the weather of any desired location!</p>
        </div>
        <div className="p-2">
          <img className="img-fluid rounded-lg" draggable="false" src="https://i.imgur.com/J0MxZbY.png"/>
        </div>
        <br />
      </div>
    </div>


  </main>
		)
	    }
}