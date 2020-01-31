import React from "react"
import { Link } from "react-router-dom"
import Repository from "./Repository"
import styles from "./index.module.css"

const ListRepositories = (props) => {
  const { data, username } = props

  return (
    <ul className={`grid col-gap-15 row-gap-30 ${styles.listGrid}`}>
      {data.map((repo, i) => (
        <li key={i} className="relative">
          <Link
            title={`Go to ${repo.name} commits list`}
            className="absolute top-0 left-0 z-10 w-full h-full opacity-0 block"
            to={`/${username}/${repo.name}`}
          >
            Go to {repo.name} commits list
          </Link>
          <Repository data={repo} />
        </li>
      ))}
    </ul>
  )
}

export default ListRepositories
