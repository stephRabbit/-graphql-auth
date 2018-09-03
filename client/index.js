import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import AppRoutes from './routes/AppRoutes'
import './style/style.css'

const link = new HttpLink({
  uri: '/graphql',
  credentials: 'same-origin',
})

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id || null,
})

const client = new ApolloClient({
  link,
  cache,
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <AppRoutes />
    </ApolloProvider>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('app')
)
