import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Index extends Component {
    
	render() {
		
		return (
  <main role="main" class="flex-shrink-0">
    <div class="jumbotron jumbotron-fluid text-center">
      <h1 class="display-4">Welcome to OldMan Bot <small class="text-muted">v.1.3</small></h1>
      <hr class="my-4"/>
      <div class="btn-group">
        <a href="dashboard.html" type="button" class="btn btn-outline-dark btn-lg">
          Add to Discord!
        </a>
      </div>
    </div>
    <div class="container">
      <p class="text-light text-center">
        A Barebones Discord Bot 🤖
        To get started, go into the "res" folder, then, rename the "configExample.JSON" to "config.JSON" and fill in all
        of the data using your favorite text editor Atom(TM).

        Using your command prompt or terminal navigate to where you saved the .jar and start the program.
        In windows, this will look something like "java -jar OldManBot.jar"

        Commands
        !Help - Gives some usage instructions for the other commands
        !Roll - Rolls one or more dice
        !Weather - Gives some information about the current weather of a given city
        Requirements
        Java 1.8
        Useful Links
        To get the keys for the config,JSON
        https://discordapp.com/developers/applications/ - for the Discord side
        https://apps.twitter.com/ - for the Twitter side (Optional)
        https://www.openweathermap.org - For weather lookup.
      </p>
    </div>
  </main>

			)
	    }
}
