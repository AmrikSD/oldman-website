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

  <main role="main" class="flex-shrink-0">
    <div class="bg-light p-5">
      <div class="container text-center text-dark">
        <div>
          <h1 class="display-4">OldMan Bot Dashboard</h1>
          <hr class="my-4" />
          <div class="">
            <div class="container text-center text-dark">
              <h1 class="text-dark text-center font-weight-light">Auto-Mod Words</h1>
              <div class="col-auto mx-auto">
                <form onSubmit={this.onSubmit}>
                  <table class="table bg-light table-light table-striped">
                    <thead>
                      <tr>
                        <th style={{width: "33%"}}>Word</th>
                        <th style={{width: "33%"}}>Punishment</th>
                        <th style={{width: "33%"}}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">
                          <input class="form-control form-control-sm" id="inputWordText" type="text"
                            value={this.state.word} onChange={this.onChangeWord} />
                        </td>

                        <td>
                          <div class="btn-group btn-group-toggle" data-toggle="button">
                            <label class="btn btn-outline-dark btn-sm" >
                              <input className="form-check-input" type="radio" name="punishmentOptions" id="punishWarn"
                                value="Warn" checked={this.state.punishment==='Warn' }
                                onChange={this.onChangePunishment} /> Warn
                            </label>
                            <label class="btn btn-outline-dark btn-sm" >
                              <input className="form-check-input" type="radio" name="punishmentOptions" id="punishKick"
                                value="Kick" checked={this.state.punishment==='Kick' }
                                onChange={this.onChangePunishment} /> Kick
                            </label>
                            <label class="btn btn-outline-dark btn-sm" >
                              <input className="form-check-input" type="radio" name="punishmentOptions" id="punishBan"
                                value="Ban" checked={this.state.punishment==='Ban' }
                                onChange={this.onChangePunishment} /> Ban
                            </label>
                          </div>
                        </td>

                        <td>
                            <div class="btn-group">
                              <input type="submit" value="Update Word" class="btn btn-outline-dark btn-sm" />
                              <input type="button" value="Remove Word" class="btn btn-outline-danger btn-sm"
                                onClick={this.onDelete} />
                            </div>
                          </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
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
   





