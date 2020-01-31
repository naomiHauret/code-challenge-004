import { useQuery } from "@apollo/react-hooks"
import { GET_LAST_COMMITS_FROM_REPOSITORY } from "queries/githubRepositories"

export function useGithubRepositoryCommits(username, repository, direction, limit) {
  const { loading, error, data } = useQuery(GET_LAST_COMMITS_FROM_REPOSITORY, {
    variables: {
      username,
      repository,
      direction,
      limit,
    },
  })

  return {
    loading,
    error,
    data,
  }
}
