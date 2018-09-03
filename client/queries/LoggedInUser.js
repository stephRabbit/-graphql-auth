import gql from 'graphql-tag'

const liu = gql`
  query {
    liu {
      id
      email
    }
  }
`

export default liu