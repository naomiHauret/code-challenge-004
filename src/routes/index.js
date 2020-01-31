import React from "react"
import Repositories from "pages/Repositories"
import Repository from "pages/Repository"

export default [
  {
    path: "/",
    name: "Repositories",
    component: <Repositories />,
  },
  {
    path: "/:username/:repository",
    name: "Repository",
    component: <Repository />,
  },
]
