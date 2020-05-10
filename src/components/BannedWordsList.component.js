import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Word = props => (
	<tr>
		<td>{props.word.word}</td>
		<td>{props.word.punishment}</td>
		<td>
            		<Link to={"/edit/"+props.word._id}>Edit</Link>
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
			<div>
				<h3>Banned Words</h3>
				<table className="table table-striped" style={{ marginTop: 20 }} >
					<thead>
						<tr>
							<th>Word</th>
							<th>Punishment</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{ this.bannedWordsList() }
					</tbody>
				</table>
			</div>
		)
	    }
}
