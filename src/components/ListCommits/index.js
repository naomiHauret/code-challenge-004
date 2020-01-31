import React from "react"
import Commit from "./Commit"

const ListCommit = (props) => {
  const { data } = props

  return (
    <ul>
      {data.map((commit, i) => (
        <li key={i} className="mb-20">
          <Commit data={commit} />
        </li>
      ))}
    </ul>
  )
}

export default ListCommit
