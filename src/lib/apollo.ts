import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS,PATH,DELETE,PUT',
    'Access-Control-Allow-Headers':
      'X-Custom-Header, Upgrade-Insecure-Requests',
  },
  cache: new InMemoryCache(),
})
