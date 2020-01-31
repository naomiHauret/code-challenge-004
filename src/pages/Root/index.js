import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { GithubRepositoriesProvider } from "contexts/GithubRepositories"
import Layout from "components/Layout"
import routes from "routes"

const bearer = `bearer ${process.env.GITHUB_API_TOKEN}`
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: bearer,
  },
})

const Root = () => (
  <ApolloProvider client={client}>
    <GithubRepositoriesProvider>
      <Router>
        <Layout>
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} exact>
                {route.component}
              </Route>
            ))}
          </Switch>
        </Layout>
      </Router>
    </GithubRepositoriesProvider>
  </ApolloProvider>
)

export default Root
