import { gql } from "apollo-boost"

export const GET_FIRST_SET = gql`
  query getFirst20Repositories($username: String!, $number: Int) {
    user(login: $username) {
      repositories(first: $number) {
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
  query getMoreRepositories($username: String!, $first: Int, $after: String) {
    user(login: $username) {
      repositories(first: $first, after: $after) {
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
