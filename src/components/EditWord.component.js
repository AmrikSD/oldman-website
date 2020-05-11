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
				<h3 align="center">Update Banned Word</h3>		
					<form onSubmit={this.onSubmit}>
                    			<div className="form-group">
						<div class="form-group row">
                        			<label for="inputWordText" class="col-sm-2 col-form-label">Word: </label>
                        			<input  class="form-control" id="inputWordText" type="text"
                                			className="form-control"
                                			value={this.state.word}
                                			onChange={this.onChangeWord}
                               			/>
						</div>
					</div>
                   			<div className="form-group">
						<div class="row">
						<legend class="col-form-label col-sm-2 pt-0">Punishment: </legend>
						<div class="col-sm-10">
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
						</div>
					</div>
					<br />
					<div className="form-group">
                        			<input type="submit" value="Update Word" className="btn btn-primary" />
						<input type="submit" value="Remove Word" className="btn btn-danger" onClick={this.onDelete}/>
					</div>
                		</form>
			</div>
		)
	}

}
   





