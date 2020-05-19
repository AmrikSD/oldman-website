import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Word = props => (
	<tr>
		<td>{props.word.word}</td>
		<td>{props.word.punishment}</td>
		<td>
			<Link to={"BannedWords/edit/" + props.word._id} className="text-dark text-decoration-none">Edit</Link>
		</td>
	</tr>
)

export default class BannedWordList extends Component {

	constructor(props) {
		super(props)
		this.state = { words: [] }
	}

	componentDidMount() {

		axios.get('http://localhost:4000/words/')
			.then(response => {
				this.setState({ words: response.data })
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	bannedWordsList() {
		return this.state.words.map(function (currentWord, i) {
			return <Word word={currentWord} key={i} />
		})
	}

	render() {
		return (
			<main role="main" className="flex-shrink-0">
				<div className="bg-light p-5">
					<div className="container text-center text-dark">
						<div>
							<h1 className="display-4">OldMan Bot Dashboard</h1>
							<hr className="my-4" />
							<div className="">
								<div className="container text-center text-dark">
									<h1 className="text-dark text-center font-weight-light">Auto-Mod Words</h1>
									<div className="col-auto mx-auto">

										<table className="table bg-light table-light table-striped">
											<thead>
												<tr>
													<th style={{ width: "33%" }}>Word</th>
													<th style={{ width: "33%" }}>Punishment</th>
													<th style={{ width: "33%" }}>Action</th>
												</tr>
											</thead>
											<tbody>
												{this.bannedWordsList()}
											</tbody>
										</table>
										<Link to="/BannedWords/Create/" className="btn btn-outline-dark btn-lg btn-block" type="button">Add Words</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		)
	}
}
