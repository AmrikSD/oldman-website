import React, { Component } from 'react'
import axios from 'axios'

export default class CreateWord extends Component {

  constructor(props) {

    super(props)

    this.onChangeWord = this.onChangeWord.bind(this)
    this.onChangePunishment = this.onChangePunishment.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {

      word: '',
      punishment: ''

    }

  }

  onChangeWord(e) {
    this.setState({
      word: e.target.value
    })
  }

  onChangePunishment(e) {
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
                  <h1 className="text-dark text-center font-weight-light">Auto-Mod New Word</h1>
                  <div className="col-auto mx-auto">
                    <form onSubmit={this.onSubmit}>
                      <table className="table bg-light table-light table-striped">
                        <thead>
                          <tr>
                            <th style={{ width: "33%" }}>Word</th>
                            <th style={{ width: "33%" }}>Punishment</th>
                            <th style={{ width: "33%" }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input className="form-control form-control-sm" id="inputWordText" type="text"
                                value={this.state.word} onChange={this.onChangeWord} />
                            </td>

                            <td>
                              <div className="btn-group btn-group-toggle" data-toggle="button">
                                <label className="btn btn-outline-dark btn-sm" >
                                  <input className="form-check-input" type="radio" name="punishmentOptions" id="punishWarn"
                                    value="Warn" checked={this.state.punishment === 'Warn'}
                                    onChange={this.onChangePunishment} /> Warn
                            </label>
                                <label className="btn btn-outline-dark btn-sm" >
                                  <input className="form-check-input" type="radio" name="punishmentOptions" id="punishKick"
                                    value="Kick" checked={this.state.punishment === 'Kick'}
                                    onChange={this.onChangePunishment} /> Kick
                            </label>
                                <label className="btn btn-outline-dark btn-sm" >
                                  <input className="form-check-input" type="radio" name="punishmentOptions" id="punishBan"
                                    value="Ban" checked={this.state.punishment === 'Ban'}
                                    onChange={this.onChangePunishment} /> Ban
                            </label>
                              </div>
                            </td>

                            <td>
                              <div className="form-group">
                                <input type="submit" value="Create Banned Word" className="btn btn-outline-dark btn-sm" />
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
    );
  }

}
