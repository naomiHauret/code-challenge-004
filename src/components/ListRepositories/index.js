import React, { useState } from "react"
import { useGithubRepositories } from "hooks/useGithubRepositories"
import Repository from "components/Repository"
import styles from "./index.module.css"

const ListRepositories = (props) => {
  const { data } = props

  return (
    <ul className={`grid col-gap-15 row-gap-30 ${styles.listGrid}`}>
      {data.map((repo) => (
        <li>
          <Repository repo={repo} />
        </li>
      ))}
    </ul>
  )
}

export default ListRepositories
