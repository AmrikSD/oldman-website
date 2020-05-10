import React, { Component } from 'react'
import axios from 'axios'

export default class EditBannedWordst extends Component {
	
	constructor(props) {
		
		super(props)
		
		this.onChangeWord = this.onChangeWord.bind(this)
		this.onChangePunishment = this.onChangePunishment.bind(this)
		
		this.onSubmit = this.onSubmit.bind(this)
		this.onDelete = this.onDelete.bind(this)

		this.state = {
			word: '',
			punishment: ''
		}
	}

	componentDidMount(){
		axios.get('http://localhost:4000/words/'+this.props.match.params.id)
			.then(response => {

				this.setState({
					word: response.data.word,
					punishment: response.data.punishment
				})

			}).catch(function (error){
				console.log(error)
			})
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

	onSubmit(e){
		e.preventDefault()

		const obj = {
			word: this.state.word,
			punishment: this.state.punishment
		}

		console.log(obj)

		axios.post('http://localhost:4000/words/update/'+this.props.match.params.id, obj)
			.then(res => console.log(res.data))

		this.props.history.push('/')
	}

	onDelete(e){
		e.preventDefault()

		const obj = {
			word: this.state.word,
			punishment: this.state.punishment
		}
		
		console.log(this.props.match.params.id)

		axios.delete('http://localhost:4000/words/update/'+this.props.match.params.id, obj)
			.then(res => console.log(res.data))



		this.props.history.push('/')

	}

	render() {
		
		

		return (
			<div>
				<h3 align="center">Update Banned Word: {this.state.word}</h3>
				<form onSubmit={this.onSubmit}>
                    			<div className="form-group"> 
                        			<label>Word: </label>
                        			<input  type="text"
                                			className="form-control"
                                			value={this.state.word}
                                			onChange={this.onChangeWord}
                               			/>
					</div>
                   			<div className="form-group">
                        			<div className="form-check form-check-inline">
                           	 			<input  className="form-check-input" 
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
                            				<input  className="form-check-input" 
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
                            				<input  className="form-check-input" 
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
					<br />
					<div className="form-group">
                        			<input type="submit" value="Update Word" className="btn btn-primary" />
					</div>
                		</form>
				<form onSubmit={this.onDelete}>
					<input type="submit" value="Remove Word" className="btn btn-danger"/>
				</form>
			</div>
		)
	}

}
   





