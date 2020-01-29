import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import { GET_FIRST_SET, GET_MORE } from "queries/githubRepositories"

export function useGithubRepositories(username, number, sortField, sortOrder) {
  const { loading, error, data, fetchMore } = useQuery(GET_FIRST_SET, {
    variables: { username, number, sortField, sortOrder },
  })

  return {
    loading,
    error,
    data,
    fetchMore: () =>
      fetchMore({
        query: GET_MORE,
        variables: {
          username,
          first: number,
          after: data.user.repositories.pageInfo.endCursor,
          sortField,
          sortOrder,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newEdges = fetchMoreResult.user.repositories.edges
          const pageInfo = fetchMoreResult.user.repositories.pageInfo

          return newEdges.length
            ? {
                user: {
                  ...previousResult.user,
                  repositories: {
                    ...previousResult.user.repositories,
                    edges: [...previousResult.user.repositories.edges, ...newEdges],
                    pageInfo,
                  },
                },
              }
            : previousResult
        },
      }),
  }
}
