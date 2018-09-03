import React, { Component } from 'react'

class AuthForm extends Component {
  state = {
    email: '',
    password: '',
  }

  handleInputChange = name => e => {
    const targetInput = e.target
    this.setState(() => ({ [name]: targetInput.value }))
  }

  handleErrorDisplay = () => this.props.errors.map(error => <div key={error}>{error}</div>)

  onSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.onSubmit({ email, password })
  }

  render() {
    return (
      <div className="row">
        <form
          className="col s6"
          onSubmit={this.onSubmit}
        >
          <div className="input-field">
            <input
              onChange={this.handleInputChange('email')}
              placeholder="Email"
              value={this.state.email}
            />
          </div>
          <div className="input-field">
            <input
              onChange={this.handleInputChange('password')}
              placeholder="Password"
              type="password"
              value={this.state.password}
            />
          </div>
          <div className="errors">
            {this.handleErrorDisplay()}
          </div>
          <button className="btn">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default AuthForm