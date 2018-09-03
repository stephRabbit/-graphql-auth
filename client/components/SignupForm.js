import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import liuQuery from '../queries/LoggedInUser'
import SignupMutation from '../mutations/Signup'
import AuthForm from './AuthForm'

class SignupForm extends Component {
  state = {
    errors: []
  }

  /**
   * @param {*} nextProps - props after rendering
   * this.props - current props
   */
  componentWillUpdate(nextProps) {
    if (nextProps.data.liu && !this.props.data.liu) {
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
        <h3>Signup</h3>
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
  graphql(SignupMutation),
)(SignupForm)