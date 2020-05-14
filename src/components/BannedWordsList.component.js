import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Word = props => (
	<tr>
		<td>{props.word.word}</td>
		<td>{props.word.punishment}</td>
		<td>
            		<Link to={"BannedWords/edit/"+props.word._id} class="text-dark text-decoration-none">Edit</Link>
        	</td>
	</tr>
)

export default class BannedWordList extends Component {
    
	constructor(props) {
		super(props)
		this.state = {words: []}
	}
	
	componentDidMount() {
		
		axios.get('http://localhost:4000/words/')
			.then(response => {
				this.setState({ words: response.data })
			})
			.catch(function (error){
				console.log(error)
			})
	}
	
	bannedWordsList() {
		return this.state.words.map(function(currentWord, i){
			return <Word word={currentWord} key={i} />
		})
	}
	
	render() {
		
		return (
			
			<main style={{minHeight:"500hv"}} role="main" class="flex-shrink-0">
				<div class="jumbotron jumbotron-fluid text-center">
				<h1 class="display-4">OldMan Bot Dashboard</h1>
				</div>
				<br />
				<h1 class="text-light text-center">Auto-Mod Words</h1>
				
				<div class="col-auto mx-auto text-center" style={{width: "70%"}}>
					<table className="table table-light table-striped" style={{ marginTop: 20 }} >
						<thead>
							<tr>
								<th style={{width:"33%"}}>Word</th>
								<th style={{width:"33%"}}>Punishment</th>
								<th style={{width:"33%"}}>Action</th>
							</tr>
						</thead>
						<tbody>
							{ this.bannedWordsList() }
						</tbody>
					</table>
	
				<Link to="/BannedWords/Create/">
					<button type="button" class="btn btn-light btn-lg btn-block">
						Add Words
					</button>
				</Link>
				</div>
			</main>
		)
	    }
}
