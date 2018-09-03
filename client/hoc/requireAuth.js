import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import liuQuery from '../queries/LoggedInUser'

const RequireAuthHOC = WrappedComponent => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      const { liu, loading} = nextProps.data
      if (!loading && !liu) {
        this.props.history.push('/login')
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return graphql(liuQuery)(RequireAuth)
}

export default RequireAuthHOC