import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import liuQuery from '../queries/LoggedInUser'
import LoginMutation from '../mutations/Login'
import AuthForm from './AuthForm'

class LoginForm extends Component {
  state = {
    errors: []
  }

  onSubmit = ({ email, password }) => {
    this.props.mutate({
      variables: {
        email,
        password
      },
      refetchQueries: [{ query: liuQuery }]
    })
    .catch(res => {
      const errors = res.graphQLErrors.map(error => error.message)
      this.setState(() => ({ errors }))
    })
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export default graphql(LoginMutation)(LoginForm)