import React from "react"
import { useParams, Link } from "react-router-dom"
import { useGithubRepositoryCommits } from "hooks/useGithubRepositoryCommits"
import Container from "components/Container"
import ListCommits from "components/ListCommits"

const Repository = (props) => {
  const { username, repository } = useParams()
  const { data, loading, error } = useGithubRepositoryCommits(username, repository, "DESC", 20)
  let commits = []

  if (!loading) commits = data.repository.refs.edges[0].node.target.history.edges.map((edge) => edge.node)
  return (
    <Container staticStyles="pt-40" contained={true}>
      <div className="flex flex-wrap items-baseline justify-between">
        <h1 className="mb-30">{repository} repository latest commits</h1>
        <Link to="/" className="text-gray_200 mb-30 text-15">
          Back to repository list
        </Link>
      </div>
      {loading ? <div className="text-gray_200">Loading commits...</div> : <ListCommits data={commits} />}
    </Container>
  )
}

export default Repository
