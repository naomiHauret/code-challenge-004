import { gql } from "apollo-boost"

export const GET_FIRST_SET = gql`
  query getFirst20Repositories(
    $username: String!
    $number: Int
    $sortField: RepositoryOrderField!
    $sortOrder: OrderDirection!
  ) {
    user(login: $username) {
      repositories(first: $number, orderBy: { field: $sortField, direction: $sortOrder }) {
        edges {
          node {
            name
            languages(first: 3) {
              nodes {
                name
              }
            }
            isFork
            description
            url
            forkCount
            pushedAt
            stargazers {
              totalCount
            }
          }
        }
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`
export const GET_MORE = gql`
  query getMoreRepositories(
    $username: String!
    $first: Int
    $after: String
    $sortField: RepositoryOrderField!
    $sortOrder: OrderDirection!
  ) {
    user(login: $username) {
      repositories(first: $first, after: $after, orderBy: { field: $sortField, direction: $sortOrder }) {
        edges {
          node {
            name
            languages(first: 3) {
              nodes {
                name
              }
            }
            isFork
            description
            url
            forkCount
            pushedAt
            stargazers {
              totalCount
            }
          }
        }
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`

export const GET_LAST_COMMITS_FROM_REPOSITORY = gql`
  query getLastCommitFromRepository(
    $username: String!
    $repository: String!
    $direction: OrderDirection!
    $limit: Int!
  ) {
    repository(owner: $username, name: $repository) {
      refs(refPrefix: "refs/heads/", orderBy: { direction: $direction, field: TAG_COMMIT_DATE }, first: $limit) {
        edges {
          node {
            ... on Ref {
              target {
                ... on Commit {
                  history(first: $limit) {
                    edges {
                      node {
                        ... on Commit {
                          committedDate
                          messageHeadline
                          author {
                            name
                            avatarUrl
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
