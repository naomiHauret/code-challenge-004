import React, { Fragment } from "react"

const BarSearch = (props) => {
  const { repositories, user, setUser, totalRepositories } = props
  return (
    <Fragment>
      <label className="mb-30 mt-20 ">
        <span className="font-bold text-20 text-gray_200">Repositories of</span>
        <input
          className="font-bold opacity-75 focus:opacity-100 hover:opacity-100 text-20 mt-10 sm:mt-0 sm:ml-10 py-10 pl-10 pr-15 rounded-full bg-gray_300 border-4 border-solid border-gray_200 text-green_000"
          type="text"
          value={user}
          onChange={(e) => setUser(e.currentTarget.value)}
        />
      </label>
      {totalRepositories > 0 && (
        <div>
          <span className={`py-5 px-20 rounded-full text-gray_200 font-12 bg-gray_300`}>
            {repositories.length}/{totalRepositories} displayed
          </span>
        </div>
      )}
    </Fragment>
  )
}

export default BarSearch
