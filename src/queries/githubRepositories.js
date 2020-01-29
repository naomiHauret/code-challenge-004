import { gql } from "apollo-boost"

export const GET_FIRST_SET = gql`
  query getFirst20Repositories($username: String!, $number: Int, $sortField: String!, $sortOrder: String!) {
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
  query getMoreRepositories($username: String!, $first: Int, $after: String, $sortField: String!, $sortOrder: String!) {
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
