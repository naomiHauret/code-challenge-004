import React, { createContext, useState } from "react"
import { useGithubRepositories } from "hooks/useGithubRepositories"

export const GithubRepositoriesContext = createContext({})
export const MAX_TO_SHOW = 20

export const GithubRepositoriesProvider = ({ children }) => {
  const [user, setUser] = useState("naomihauret")
  const { loading, error, data, fetchMore } = useGithubRepositories(user, MAX_TO_SHOW)
  let repositories = []
  let totalRepositories = 0
  let canShowMore = false

  if (data) {
    repositories = data.user.repositories.edges.map((edge) => ({
      name: edge.node.name,
      languages: edge.node.languages.nodes.map((node) => node.name),
      isFork: edge.node.isFork,
      description: edge.node.description,
      url: edge.node.url,
      forkCount: edge.node.forkCount,
      lastUpdate: edge.node.pushedAt,
      stars: edge.node.stargazers.totalCount,
    }))
    totalRepositories = data.user.repositories.totalCount
    canShowMore = data.user.repositories.pageInfo.hasNextPage
  }
  return (
    <GithubRepositoriesContext.Provider
      value={{ user, setUser, loading, error, repositories, totalRepositories, fetchMore, canShowMore }}
    >
      {children}
    </GithubRepositoriesContext.Provider>
  )
}
