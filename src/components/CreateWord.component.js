import React, { Component } from 'react'
import axios from 'axios'

export default class CreateWord extends Component{

	constructor(props){

		super(props)
		
		this.onChangeWord = this.onChangeWord.bind(this)
		this.onChangePunishment = this.onChangePunishment.bind(this)
		this.onSubmit = this.onSubmit.bind(this)

		this.state = {

			word: '',
			punishment: ''

		}

	}

	onChangeWord(e){
		this.setState({
			word: e.target.value
		})
	}

	onChangePunishment(e){
		this.setState({
			punishment: e.target.value
		})
	}

	onSubmit(e) {

		e.preventDefault()

		console.log(`Form submitted:`)
		console.log(`Word: ${this.state.word}`)
		console.log(`Punishment: ${this.state.punishment}`)

		const newWord = {
			word: this.state.word,
			punishment: this.state.punishment
		};

		axios.post('http://localhost:4000/words/add', newWord).then(res => console.log(res.data))
		
		this.setState({
			word: '',
			punishment: ''
		})



	}

	render(){
		return(
			<div style={{marginTop: 10}}>
				<h3>Add Banned Word</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Word:  </label>
						<input 
							type="text"
							className="form-control"
							value={this.state.word}
							onChange={this.onChangeWord}
						/>
					</div>
					<div className="form-group">
						<div className="form-check form-check-inline">
							<input className="form-check-input"
								type="radio"
								name="punishmentOptions"
								id="punishWarn"
								value="Warn"
								checked={this.state.punishment==='Warn'}
								onChange={this.onChangePunishment}
							/>
							<label className="form-check-label">Warn</label>
						</div>
						<div className="form-check form-check-inline">
							<input className="form-check-input"
								type="radio"
								name="punishmentOptions"
								id="punishKick"
								value="Kick"
								checked={this.state.punishment==='Kick'}
								onChange={this.onChangePunishment}
							/>
							<label className="form-check-label">Kick</label>
						</div>
						<div className="form-check form-check-inline">
							<input className="form-check-input"
								type="radio"
								name="punishmentOptions"
								id="punishBan"
								value="Ban"
								checked={this.state.punishment==='Ban'}
								onChange={this.onChangePunishment}
							/>
							<label className="form-check-label">Ban</label>
						</div>
					</div>
				<div className="form-group">
					<input type="submit" value="Create Banned Word" className="btn btn-primary"/>
				</div>
			</form>
			</div>
		);
	}

}
