import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

import liuQuery from '../queries/LoggedInUser'
import logoutMutation from '../mutations/Logout'

class Header extends Component {
  handleLogout = () => {
    this.props.mutate({
      refetchQueries: [{ query: liuQuery }]
    })
    //.then(() => this.props.history.push('/'))
  }

  renderButtons = () => {
    const { liu, loading } = this.props.data
    // Loading...
    if (loading) return <div />

    if (liu) {
      return (
        <ul className="right">
          <li>
            <a onClick={this.handleLogout}>Logout</a>
          </li>
        </ul>
      )
    }
    else {
      return (
        <ul className="right">
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )
    }
  }

  render() {
    console.log(this.props.data)
    return (
      <nav>
        <div className="nav-wrapper">
          <ul className="left">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
          </ul>

          {this.renderButtons()}
        </div>
      </nav>
    )
  }
}

export default graphql(logoutMutation)(
  graphql(liuQuery)(Header)
)