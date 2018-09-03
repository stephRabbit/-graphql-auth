import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'

import liuQuery from '../queries/LoggedInUser'
import LoginMutation from '../mutations/Login'
import AuthForm from './AuthForm'

class LoginForm extends Component {
  state = {
    errors: []
  }

  /**
   * @param {*} nextProps - props after rendering
   * this.props - current props
   */
  componentWillUpdate(nextProps) {
    if (!this.props.data.liu && nextProps.data.liu) {
      // Redirect to dashboard
      this.props.history.push('/dashboard')
    }
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

export default compose(
  graphql(liuQuery),
  graphql(LoginMutation),
)(LoginForm)